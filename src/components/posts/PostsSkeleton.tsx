import { PostSkeleton } from "./PostSkeleton";

export function PostsSkeleton() {
    return (
        <ul className="grid grid-cols-3 place-items-center">
            <PostSkeleton key={1}/>
            <PostSkeleton key={2}/>
            <PostSkeleton key={3}/>
        </ul>
    )
}