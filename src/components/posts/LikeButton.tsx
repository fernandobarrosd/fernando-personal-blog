"use client";

import { LikeIcon } from "../icons/LikeIcon";

type LikeButtonProps = {
    likes: number;
    onLikePost: () => Promise<void>;
}

export function LikeButton({ likes, onLikePost } : LikeButtonProps) {
    async function handleLikePost() {
        await onLikePost()
    }
    return (
        <div className="flex items-center gap-1 p-2">
            <button className="cursor-pointer"
            onClick={handleLikePost}>
                <LikeIcon/>
            </button>
            <span className="text-white">
                {likes}
            </span>
        </div>
    )
}