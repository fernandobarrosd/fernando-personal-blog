import { prismaClient } from "@/lib/prismaClient";
import { cacheLife, cacheTag } from "next/cache";
import { PostCard } from "./PostCard";
import { setTimeout } from "node:timers/promises";

export async function getPosts() {
  "use cache";

  cacheLife({
    revalidate: 120
  })
  cacheTag("posts");

  await setTimeout(5000);


  const posts = await prismaClient.post.findMany({
    orderBy: [
        { createdAt: "asc" },
        { id: "asc" }
    ]
  });
  

  return posts;

}

export async function Posts() {
    const posts = await getPosts();

    return (
        <ul className="grid grid-cols-1 place-items-center
        mx-10 gap-y-10">
            { posts.map(post => (
                <PostCard post={post} key={post.id}/>
            )) }
        </ul>   
    )
}