"use client";

import { Button } from "@/components/Button";
import { DeleteIcon } from "@/components/icons/DeleteIcon";
import * as Dialog from "@radix-ui/react-dialog";
import { useState, useTransition } from "react";

type Post = {
    title: string;
}

type DeletePostDialogProps = {
    post: Post;
    onDeletePost: () => Promise<void>

}

export function DeletePostDialog({ post, onDeletePost } : DeletePostDialogProps) {
    const [ isLoading, startTransition ] = useTransition();
    const [ isOpen, setIsOpen ] = useState(false);

    function handleDeletePost() {
        startTransition(async () => {
            await onDeletePost();
            setIsOpen(false);
        });
    }

    return (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger asChild>
                <Button className="bg-red-500 p-1">
                    <DeleteIcon/>
                </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="
                fixed inset-0 bg-black/50"/>
                <Dialog.Content
                className="fixed top-1/2
                left-1/2 -translate-1/2
                bg-blue-950 text-white
                w-100 p-5 rounded-md"
                onInteractOutside={(event) => event.preventDefault()}>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <Dialog.Title>
                                Deseja deletar o post?
                            </Dialog.Title>
                            <Dialog.Description className="text-gray-300">
                                {post.title}
                            </Dialog.Description>
                        </div>
                        <div className="flex gap-8 justify-center">
                            <Button className="w-40
                                bg-green-700
                                disabled:bg-green-700/50
                                disabled:cursor-default"
                                disabled={isLoading}
                                onClick={handleDeletePost}>
                                    Sim
                            </Button>
                            <Dialog.Close asChild>
                                <Button className="w-40
                                bg-red-700">
                                    Cancelar
                                </Button>
                            </Dialog.Close>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}