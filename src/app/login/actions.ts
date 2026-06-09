"use server";

import { redirect } from "next/navigation";
import { LoginSchema } from "./components/LoginForm";
import { cookies } from "next/headers";
import z from "zod";
import { env } from "@/env";
import { IS_AUTHENTICATED_COOKIE } from "@/constants";

const loginActionSchema = z.object({
    email: z.string().refine(email => email == env.NEXT_PUBLIC_ADMIN_EMAIL, { error: "Email is not admin" }),
    password: z.string().refine(password => password == env.NEXT_PUBLIC_ADMIN_PASSWORD, { error: "Password is not admin" }),
});


export async function executeLoginAction(loginSchema: LoginSchema) {
    const result = loginActionSchema.safeParse(loginSchema);

    if (result.error != null) {
        return "Email ou senha invalidos";
    }

    const cookiesStore = await cookies();

    cookiesStore.set(IS_AUTHENTICATED_COOKIE, "true", {
        httpOnly: true
    })

    redirect("/", "replace");
}