import { prismaClient } from "@/lib/prismaClient";
import { cacheLife, cacheTag } from "next/cache";
import { PostCard } from "./PostCard";

export async function getPosts() {
  "use cache"

  cacheLife("days");
  cacheTag("posts");


  return await prismaClient.post.findMany({
    orderBy: [
        { createdAt: "asc" },
        { id: "asc" }
    ]
  });
}


export async function PostList() {
    const posts = await getPosts();

    return (
            <ul className="flex flex-col mx-20 gap-10 
            items-center w-full">
                { posts.map(post => (
                    <PostCard post={post} key={post.id}/>
                )) }
            </ul>
        )
}