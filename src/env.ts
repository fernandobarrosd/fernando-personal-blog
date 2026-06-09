import z from "zod";


const envSchema = z.object({
    NEXT_PUBLIC_ADMIN_EMAIL: z.email(),
    NEXT_PUBLIC_ADMIN_PASSWORD: z.string().min(1)
});

export const env = envSchema.parse(process.env);