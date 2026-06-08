import { LoginLink } from "./LoginLink";
import { cookies } from "next/headers";
import { LogoutButton } from "./LogoutButton";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Suspense } from "react";
import { CreatePostLink } from "./CreatePostLink";
import { AuthenticationButton } from "./AuthenticationButton";

const poppins = Poppins({
  weight: "500"
})

export async function Header() {
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
            <div className="flex gap-4">
                <Suspense>
                    <CreatePostLink/>
                </Suspense>
                <Suspense>
                    <AuthenticationButton/>
                </Suspense>
            </div>
        </header>
    )
}