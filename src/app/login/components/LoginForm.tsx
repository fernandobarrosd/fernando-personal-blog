"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { FormField } from "./FormField";
import { executeLoginAction } from "../actions";
import { useActionState, useState, useTransition } from "react";
import { Button } from "@/components/Button";

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
    const [ isLoading, startTransition ] = useTransition();

    async function onSubmit(loginSchema: LoginSchema) {
        startTransition(async () => {
            const result = await executeLoginAction(loginSchema);
            setErrorMessage(result);
        });
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
            <Button 
            className="w-50 mt-10 disabled:bg-blue-900/50
            disabled:cursor-default" 
            type="submit"
            disabled={isLoading}>
                Entrar
            </Button>
        </form>
    )
}