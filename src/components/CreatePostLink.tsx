import { cookies } from "next/headers";
import Link from "next/link";

export async function CreatePostLink() {
    const cookiesStore = await cookies();
    const isAuthenticatedCookie = cookiesStore.get("isAuthenticated");

    return (
        <>
            { isAuthenticatedCookie && (
                <Link
                href="/create-post" 
                className="text-white
                p-2 bg-blue-900 rounded-md cursor-pointer
                text-sm text-center px-4">
                        Criar post
                </Link>
            ) }
        </>
    )
}