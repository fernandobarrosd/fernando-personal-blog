import { cookies } from "next/headers";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";
import { LoginLink } from "./LoginLink";
import { redirect } from "next/navigation";
import { IS_AUTHENTICATED_COOKIE } from "@/constants";
import { getAuthCookie } from "@/utils/auth-utils";


export async function AuthenticationHeaderArea() {
    const isAuthenticatedCookie = await getAuthCookie();

    async function logout() {
        "use server";
    
        const cookiesStore = await cookies();
        cookiesStore.delete(IS_AUTHENTICATED_COOKIE);
    
        redirect("/login");
    }

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
            { isAuthenticatedCookie ? 
            <LogoutButton onLogout={logout}/> : 
            <LoginLink/> }
        </>
    )
}