"use server";

import { redirect } from "next/navigation";
import { LoginSchema } from "./components/LoginForm";
import { cookies } from "next/headers";


export async function executeLoginAction(loginSchema: LoginSchema) {
    const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
            email: loginSchema.email,
            password: loginSchema.password
        })
    });

    if (response.status == 400) {
        return "Email ou senha invalidos";
    }

    const cookiesStore = await cookies();
    cookiesStore.set("isAuthenticated", "true", {
        httpOnly: true
    })

    redirect("/");
}