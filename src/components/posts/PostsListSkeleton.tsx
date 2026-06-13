import { PostSkeleton } from "./PostSkeleton";

export function PostsListSkeleton() {
    return (
        <ul className="flex flex-col mx-20 gap-10 w-full">
            <PostSkeleton key={1}/>
            <PostSkeleton key={2}/>
            <PostSkeleton key={3}/>
        </ul>
    )
}