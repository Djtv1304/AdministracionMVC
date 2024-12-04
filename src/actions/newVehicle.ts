import { defineAction } from "astro:actions";
import { z } from "astro:content";

// Definir la acción newVehicle
export const newVehicle = defineAction({
  // Definir el tipo de datos que acepta la acción, en este caso, formularios
  accept: "form",
  // Definir el esquema de validación de los datos
  input: z.object({
    make: z.string().min(3, {
      message: "Brand must be at least 3 characters long",
    }),
    model: z.string().min(1, {
      message: "Model must be at least 1 characters long",
    }),
    year: z
      .number()
      .int()
      .min(1900, {
        message: "Year must be at least 1900",
      })
      .max(2030, {
        message: "Year must be at most 2030",
      }),
    batteryCapacity: z.number().min(1, {
      message: "Battery capacity must be at least 1",
    }),
    energyConsumption: z.number(),
    classification: z.enum(["SUV", "Sedan", "Truck", "Coupe", "Convertible"]),
    color: z.string().min(3, {
      message: "Color must be at least 3 characters long",
    }),
    autonomy: z.number().int().min(50, {
      message: "Autonomy must be at least 50 km",
    }),
    chargeTime: z.string().regex(/^\d{1,2}:\d{2}$/, {
      message: "Charge time must be in the format H:MM or HH:MM",
    }),
    maintenanceCost: z.number().min(1, {
      message: "Maintenance cost must be at least 1",
    }),
    imageURL: z.string().url(),
    precio: z.number().int().min(1, {
      message: "Price must be at least 1",
    }),
  }),
  // Definir el manejador de la acción
  handler: async (newVehicle, { cookies }) => {
    try {
      // Convertir el objeto newVehicle al formato esperado por el backend
      const newVehiclePayload = {
        marca: newVehicle.make,
        modelo: newVehicle.model,
        anio: newVehicle.year.toString(),
        capacidadBateria: newVehicle.batteryCapacity,
        idUsuario: null,
        clasificacion: newVehicle.classification,
        color: newVehicle.color,
        autonomia: newVehicle.autonomy.toString(),
        consumoEnergetico: newVehicle.energyConsumption,
        tiempoCarga: newVehicle.chargeTime,
        costoMantenimiento: newVehicle.maintenanceCost,
        imageURL: newVehicle.imageURL,
        promedioRendimiento: 0,
        precio: newVehicle.precio,
      };

      // Obtener el token de autenticación del usuario
      const jwtToken = cookies.get("jwtToken");
      if (!jwtToken) {
        return {
          success: false,
          error: { fields: { general: "Authentication token is missing" } },
        };
      }

      // Realizar la petición POST a Spring Boot
      const response = await fetch("https://coreweb-springboot-backend.onrender.com/vehiculo/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${jwtToken.value.trim()}`,
        },
        body: JSON.stringify(newVehiclePayload),
      });

      // Si la petición no fue exitosa, se retorna un objeto con el error
      if (!response.ok) {
        return {
          success: false,
          error: { fields: { general: "Error registering the vehicle" } },
        };
      }

      const data = await response.text();

      // Retornar el resultado exitoso
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
