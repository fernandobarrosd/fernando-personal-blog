import { prismaClient } from "@/lib/prismaClient";
import { cacheLife, cacheTag } from "next/cache";
import { PostCard } from "./PostCard";
import { setTimeout } from "node:timers/promises";

export async function getPosts() {
  "use cache";

  cacheLife({
    revalidate: 5 * 60,
    expire: 5 * 60
  });
  cacheTag("posts");

  await setTimeout(8000, null);

  console.log("posts");


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