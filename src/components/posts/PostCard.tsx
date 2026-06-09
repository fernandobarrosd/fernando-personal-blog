import Link from "next/link";
import { Post } from "@/generated/prisma/client";
import Image from "next/image";
import { dateFormatter } from "@/utils/date-utils";

type PostCardProps = {
    post: Post
}

export function PostCard({ post } : PostCardProps) {
    return (
        <li className="w-full">
                <Link
                href={`/${post.slug}`}
                className="bg-blue-900 p-4
                flex flex-col gap-2 text-sm rounded-md">
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
                    <div className="h-24 w-full">
                        <span className="text-ellipsis
                      text-white mt-4 line-clamp-4">
                            {post.content}
                        </span>
                    </div>
                </Link>
        </li>
    )
}