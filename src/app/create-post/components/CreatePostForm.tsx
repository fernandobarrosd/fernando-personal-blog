"use client";

import { Button } from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import slug from "slug";
import { createPostAction } from "../actions";
import { useState, useTransition } from "react";

const createPostSchema = z.object({
    title: z.string(),
    content: z.string()
});

type CreatePostSchema = z.infer<typeof createPostSchema>;

export function CreatePostForm() {
    const { 
        register,
        handleSubmit,
        watch,
     } = useForm<CreatePostSchema>({
        resolver: zodResolver(createPostSchema),
        defaultValues: {
            title: "",
            content: "",
        }
    });

    const content = watch("content");
    const title = watch("title");
    const [ errorMessage, setErrorMessage ] = useState<string | null>(null);
    const [ isLoading, startTransition ] = useTransition();

    async function onSubmit(_: CreatePostSchema) {
        startTransition(async () => {
            const result = await createPostAction({ 
                title,
                content,
                slug: slug(title)
            });

            setErrorMessage(result);
        })
    }
    
    return (
        <form className="flex flex-col p-8"
        onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex
            flex-col gap-4">
                <div>
                    <input
                    {...register("title")}

                    type="text"
                    placeholder="Titulo..."
                    className="text-3xl
                    text-white focus:outline-none
                    w-full"
                    autoFocus/>

                    { errorMessage && (
                        <span className="text-red-400
                        text-sm">
                            { errorMessage }
                        </span>
                    ) }
                </div>
                

                <textarea
                {...register("content")}
                className="text-white focus:outline-none
                w-full bg-transparent rounded-md resize-none scrollbar-none
                px-3 pt-3 pb-6"
                rows={10}
                placeholder="Post ..."/>

                { content.length >= 1400 && (

                    <span className="self-start ml-4
                    text-red-400 text-sm">
                        {content.length}/1400
                    </span>
                ) }

                
            </fieldset>
            <Button className="w-40 self-center mt-10
            disabled:bg-blue-900/40 
            disabled:text-white/40
            disabled:cursor-default"
            type="submit" 
            disabled={
                !(title.length > 0 && content.length > 0) ||
                isLoading
            }>
                Publicar
            </Button>
        </form>
    )
}