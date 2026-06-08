"use client";

import { DeleteIcon } from "../icons/DeleteIcon";

type DeletePostButtonProps = {
    onDeletePost: () => Promise<void>
}

export function DeletePostButton({ onDeletePost } : DeletePostButtonProps) {
    return (
        <button className="bg-red-500
        p-1 rounded-md cursor-pointer"
        onClick={onDeletePost}>
            <DeleteIcon/>
        </button>
    )
}