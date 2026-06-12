import { PostList } from "@/components/posts/PostsList";
import { PostsListSkeleton } from "@/components/posts/PostsListSkeleton";
import { Suspense } from "react";

export default async function HomePage() {
    return (
        <main className="flex justify-center mt-10 mb-10 w-screen">
            <Suspense fallback={<PostsListSkeleton/>}>
                <PostList/>
            </Suspense>
        </main>
    )
}