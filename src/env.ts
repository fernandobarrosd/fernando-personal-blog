import z from "zod";


const envSchema = z.object({
    ADMIN_EMAIL: z.email(),
    ADMIN_PASSWORD: z.string().min(1)
});

export const env = envSchema.parse(process.env);