"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { FormField } from "./FormField";
import { executeLoginAction } from "../loginAction";
import { useState } from "react";

const loginSchema = z.object({
    email: z.email({ error: "Email invalido" }),
    password: z.string().min(1, { error: "A senha é obrigatória" }),
});

export type LoginSchema = z.infer<typeof loginSchema>

export function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    });

    const [ errorMessage, setErrorMessage ] = useState<string | null>(null);

    async function onSubmit(loginSchema: LoginSchema) {
        const errorMessage = await executeLoginAction(loginSchema);

        setErrorMessage(errorMessage);
        
    }

    return (
        <form className="flex flex-col items-center mt-20"
        onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex flex-col gap-8
            w-100">
                <FormField
                {...register("email")}
                label="Email"
                error={errors.email?.message}
                placeholder="Email"
                type="email"/>

                <FormField
                {...register("password")}
                label="Senha"
                error={errors.password?.message}
                placeholder="Senha"
                type="password"/>
            </fieldset>
            { errorMessage && (
                <span className="text-red-400 text-sm mt-4">
                    {errorMessage}
                </span>
            ) }
            <button className="p-2 bg-blue-900
            text-white w-50 rounded-md mt-10 cursor-pointer"
            type="submit">
                Entrar
            </button>
        </form>
    )
}