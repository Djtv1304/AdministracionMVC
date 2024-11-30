import { defineAction } from "astro:actions";
import { z } from "astro:content";

export const userRoutine = defineAction({
  accept: "form",
  input: z.object({
    diaSemana: z.enum(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]),
    actividad: z.string().min(3, {
      message: "Activity must be at least 3 characters long",
    }),
    kilometrajeRecorrido: z.string().regex(/^\d+(\.\d+)?$/, {
      message: "Kilometraje must be a valid number",
    }),
  }),
  handler: async (routineData, { cookies }) => {
    try {
      const token = cookies.get("jwtToken");

      if (!token) {
        return {
          success: false,
          error: { fields: { general: "You must be logged in" } },
        };
      }

      // Realizar la petición POST a Spring Boot
      const response = await fetch("http://localhost:8080/rutinaUsuario/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token?.value.trim()}`,
        },
        body: JSON.stringify(routineData),
      });

      // Si la petición no fue exitosa, se retorna un objeto con el error
      if (!response.ok) {
        return {
          success: false,
          error: { fields: { general: "Failed to register routine" } },
        };
      }

      const data = await response.text();
      console.log(data);

      // Puedes manejar la respuesta aquí, por ejemplo, redirigir al usuario o mostrar un mensaje de éxito
      return { success: true, data };
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
        return {
          success: false,
          error: { fields: { general: error.message } },
        };
      } else {
        console.error("Unknown error", error);
        return {
          success: false,
          error: { fields: { general: "Unknown error" } },
        };
      }
    }
  },
});