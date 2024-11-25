import { defineAction } from "astro:actions";
import { z } from "astro:content";

export const newCombustionVehicle = defineAction({
  accept: "form",
  input: z.object({
    marca: z.string().min(3, {
      message: "Brand must be at least 3 characters long",
    }),
    modelo: z.string().min(1, {
      message: "Model must be at least 1 character long",
    }),
    anio: z.string().regex(/^\d{4}$/, {
      message: "Year must be a 4-digit number",
    }),
    clasificacion: z.enum(["SUV", "Sedan", "Truck", "Coupe", "Convertible"]),
    color: z.string().min(3, {
      message: "Color must be at least 3 characters long",
    }),
    consumoCombustible: z.number().min(0, {
      message: "Fuel consumption must be a positive number",
    }),
    emisionesCO2: z.number().min(0, {
      message: "CO2 emissions must be a positive number",
    }),
    costoCombustible: z.number().min(0, {
      message: "Fuel cost must be a positive number",
    }),
    capacidadTanque: z.number().min(0, {
      message: "Tank capacity must be a positive number",
    }),
    imageURL: z.string().url({ message: "Image URL must be a valid URL" }),
  }),
  handler: async (newVehicle, { cookies }) => {
    try {
      // Obtener el token de autenticación del usuario
      const jwtToken = cookies.get("jwtToken");
      if (!jwtToken) {
        return {
          success: false,
          error: { fields: { general: "Authentication token is missing" } },
        };
      }

      // Realizar la petición POST a Spring Boot
      const response = await fetch(
        "http://localhost:8080/vehiculoCombustion/registrar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwtToken.value.trim()}`,
          },
          body: JSON.stringify(newVehicle),
        }
      );

      if (!response.ok) {
        const errorData = await response.text();
        return {
          success: false,
          error: { fields: errorData || "An error occurred" },
        };
      }

      const data = await response.text();

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
