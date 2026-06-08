import Link from "next/link";
import { DeleteIcon } from "../icons/DeleteIcon";
import { Post } from "@/generated/prisma/client";
import { prismaClient } from "@/lib/prismaClient";
import { DeletePostButton } from "./DeletePostButton";
import { updateTag } from "next/cache";
import Image from "next/image";

type PostCardProps = {
    post: Post
}

const dateFormatter = new Intl.DateTimeFormat("pt-BR");

export function PostCard({ post } : PostCardProps) {
    
    async function deletePost() {
        "use server";
        await prismaClient.post.delete({
            where: {
                id: post.id
            }
        })

        updateTag("posts")
    }
    return (
        <li>
                <Link
                href={`/posts/${post.slug}`}
                className="bg-blue-900 p-4
                flex flex-col gap-2 text-sm rounded-md
                max-w-[900] w-full">
                    <div className="flex items-center gap-4">
                        <Image
                        src="/github-profile.jpg"
                        width={25}
                        height={25}
                        className="rounded-full"
                        alt="Profile image"/>
                        <span className="text-white
                        text-xl">
                            {post.title}
                        </span>
                    </div>
                    <span className="text-white text-sm">
                        {dateFormatter.format(post.createdAt)}
                    </span>
                    <div className="h-24">
                        <span className="text-ellipsis
                      text-white mt-4 line-clamp-4">
                            {post.content}
                        </span>
                    </div>
                </Link>
        </li>
    )
}