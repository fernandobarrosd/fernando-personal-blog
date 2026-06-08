import { cookies } from "next/headers";
import { LoginLink } from "./LoginLink";
import { LogoutButton } from "./LogoutButton";

export async function AuthenticationButton() {
    const cookiesStore = await cookies();
    const isAuthenticatedCookie = cookiesStore.get("isAuthenticated");
    
    return (
        <>
            { isAuthenticatedCookie ? <LogoutButton/> : <LoginLink/> }
        </>
    )
}