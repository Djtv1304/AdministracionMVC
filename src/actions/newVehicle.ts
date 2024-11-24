import { defineAction } from "astro:actions";
import { z } from "astro:content";

// Definir la acción newVehicle
export const newVehicle = defineAction({
    // Definir el tipo de datos que acepta la acción, en este caso, formularios
    accept: "form",
    // Definir el esquema de validación de los datos
    input: z.object({
        make: z.string()
        .min(3, {
            message: "Brand must be at least 3 characters long"
        }),
        model: z.string()
        .min(1, {
            message: "Model must be at least 1 characters long"
        }),
        year: z.number().int()
        .min(1900, {
            message: "Year must be at least 1900"
        })
        .max(2023, {
            message: "Year must be at most 2023"
        }),
        batteryCapacity: z.number().int()
        .min(1,{
            message: "Battery capacity must be at least 1"
        }),
        energyConsumption: z.number().int(),
        classification: z.enum(["SUV", "Sedan", "Truck", "Coupe", "Convertible"]),
        color: z.string().min(3, {
            message: "Color must be at least 3 characters long"
        }),
        autonomy: z.number().int().min(50, {
            message: "Autonomy must be at least 50 km"
        }),
        chargeTime: z.string().regex(/^\d{2}:\d{2}$/, {
            message: "Charge time must be in the format HH:MM"
        }),
        maintenanceCost: z.number().min(1, {
            message: "Maintenance cost must be at least 1"
        }),
        imageURL: z.string().url(),
    }),
    // Definir el manejador de la acción
    handler: async (newVehicle) => {

        // TODO: Enviar el id del usuario autenticado junto con los datos del vehículo

    }
})