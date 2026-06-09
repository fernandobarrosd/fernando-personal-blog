import { PostSkeleton } from "@/components/posts/PostSkeleton";

export default function PostsLoading() {
    return (
        <main className="flex justify-center mt-10 mb-10 w-screen">
            <ul className="flex flex-col mx-20 gap-10 w-full">
                <PostSkeleton key={1}/>
                <PostSkeleton key={2}/>
                <PostSkeleton key={3}/>
            </ul>
        </main>
    )
}