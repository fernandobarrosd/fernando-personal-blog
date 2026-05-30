import { LoginLink } from "./LoginLink";
import { cookies } from "next/headers";
import { LogoutButton } from "./LogoutButton";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "500"
})

export async function Header() {
    const cookiesStore = await cookies();
    const isAuthenticatedCookie = cookiesStore.get("isAuthenticated");

    return (
        <header className="flex p-4 justify-between items-center">
            <div className="flex items-center gap-4">
                <Image
                src="/github-profile.jpg"
                width={40}
                height={40}
                className="rounded-full"
                alt="Profile image"/>
                <h1 className={`${poppins.className} 
                    text-white`}>
                    Fernando Personal Blog
                </h1>
            </div>
            { isAuthenticatedCookie ? <LogoutButton/> : <LoginLink/> }
        </header>
    )
}