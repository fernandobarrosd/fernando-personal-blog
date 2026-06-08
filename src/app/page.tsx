import { Posts } from "@/components/posts/Posts";
import { PostsSkeleton } from "@/components/posts/PostsSkeleton";
import { Suspense } from "react";


export default function HomePage() {
    return (
        <main className="flex justify-center
        mt-10">
            <Suspense fallback={<PostsSkeleton/>}>
                <Posts/>
            </Suspense>
        </main>
    )
}