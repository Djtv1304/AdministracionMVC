
import { defineAction } from "astro:actions";
import { z } from "astro:content";

export const loginUser = defineAction({
  accept: "form",
  input: z.object({
    email: z.string().email(),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
  }),
  handler: async (loginData, { cookies }) => {
    try {
      // Convertir el objeto loginData al formato esperado por el backend
      const loginPayload = {
        email: loginData.email,
        contrasenia: loginData.password,
      };

      // Realizar la petición POST a Spring Boot
      const response = await fetch(
        "https://coreweb-springboot-backend.onrender.com/usuario/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginPayload),
        }
      );

      // Si la petición no fue exitosa, se retorna un objeto con el error
      if (!response.ok) {
        console.log('ERROR: ', response);
        return {
          success: false,
          error: { fields: { general: "Incorrect email or password" } },
        };
      }

      // Leer la respuesta como texto y convertirla a booleano
      const token = await response.text();

      cookies.set("jwtToken", token, {
        httpOnly: false,
        secure: false, // Ajustado para pruebas en ambiente de desarrollo
        maxAge: 60 * 60 * 10, // 10 horas
        path: "/",
        sameSite: 'lax',
        encode: String, // Serializa el valor como una cadena de texto
        domain: undefined, // Referencia al dominio actual sin especificar una cadena de texto
        expires: new Date(Date.now() + 60 * 60 * 10 * 1000), // 10 horas
      });
    
      return { success: true };
      
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
