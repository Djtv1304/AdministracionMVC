import { defineAction } from "astro:actions";
import { z } from "astro:content";

export const server = {
  newUser: defineAction({
    accept: "form",
    input: z.object({
      name: z.string()
        .min(3, { 
          message: "Name must be at least 3 characters long" 
        })
        .max(50, {
          message: "Name must be at most 50 characters long"
        }),
      lastname: z.string()
        .min(3, { 
          message: "Lastname must be at least 3 characters long" 
        })
        .max(50, {
          message: "Lastname must be at most 50 characters long"
        }),
      birthdate: z.string().date(),
      email: z.string().email(),
      password: z.string()
        .min(8, { 
          message: "Password must be at least 8 characters long" 
        }),
      confirmPassword: z.string()
    }).refine(data => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }),
    handler: async (newUser) => {
      try {
        // Convertir el objeto newUser al formato esperado por el backend
        const userPayload = {
          email: newUser.email,
          primerNombre: newUser.name,
          apellido: newUser.lastname,
          contrasenia: newUser.password,
          fechaNacimiento: new Date(newUser.birthdate).toISOString().split('T')[0], // Formato YYYY-MM-DD
        };

        // Realizar la petición POST a Spring Boot
        const response = await fetch('http://localhost:8080/usuario/registrar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userPayload),
        });

        // Si la petición no fue exitosa, se retorna un objeto con el error
        if (!response.ok) {
          const errorData = await response.json();
          return { success: false, error: { fields: errorData.errors || 'An error occurred' } };
        }

        const data = await response.text();
        console.log(data);

        // Puedes manejar la respuesta aquí, por ejemplo, redirigir al usuario o mostrar un mensaje de éxito
        return { success: true, data };
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
          // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
          return { success: false, error: { fields: { general: error.message } } };
        } else {
          console.error("Unknown error", error);
          return { success: false, error: { fields: { general: "Unknown error" } } };
        }
      }
    }
  }),
};