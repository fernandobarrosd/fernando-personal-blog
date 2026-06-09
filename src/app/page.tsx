import { PostCard } from "@/components/posts/PostCard";
import { prismaClient } from "@/lib/prismaClient";
import { cacheLife, cacheTag } from "next/cache";

export async function getPosts() {
  "use cache";

  cacheLife("days");
  cacheTag("posts");


  return await prismaClient.post.findMany({
    orderBy: [
        { createdAt: "asc" },
        { id: "asc" }
    ]
  });
}


export default async function HomePage() {
    const posts = await getPosts();

    return (
        <main className="flex justify-center mt-10 mb-10 w-screen">
            <ul className="flex flex-col mx-20 gap-10 
        items-center w-full">
                { posts.map(post => (
                    <PostCard post={post} key={post.id}/>
                )) }
            </ul>
        </main>
    )
}