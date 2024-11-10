import { defineAction } from "astro:actions";
import { z } from "astro:content";

export const server = {
    review: defineAction({
        accept: "form",
        input: z.object({
            name: z.string()
                .min(3, { 
                    message: "Name must be at least 3 characters long" 
                })
                .max(50, {
                    message: "Name must be at most 50 characters long"
                }),
            lastname: z.string().
                min(3, { 
                    message: "Lastname must be at least 3 characters long" 
                })
                .max(50, {
                    message: "Lastname must be at most 50 characters long"
                }),
            birthdate: z.date(),
            email: z.string().email(),
            password: z.string().
                min(8, { 
                    message: "Password must be at least 8 characters long" 
                }),
        }),
        handler: async (newUser) => {
            try {
                
                console.log(newUser);

            }
            catch (error) {
                console.error(error);
                // return {
                //     status: 500,
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify({
                //         message: "Internal Server Error",
                //     }),
                // };
            }
        }
    }),
}
 