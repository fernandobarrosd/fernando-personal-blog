import { Poppins } from "next/font/google";
import { Suspense } from "react";
import { AuthenticationHeaderArea } from "./AuthenticationHeaderArea";
import { Logo } from "./Logo";
import { AuthenticationHeaderAreaSkeleton } from "./AuthenticationHeaderAreaSkeleton";

const poppins = Poppins({
  weight: "500"
})

export async function Header() {
    return (
        <header className={`${poppins.className} 
        flex p-4 justify-between items-center`}>
           <Logo/>
            <div className="flex gap-4">
                <Suspense fallback={<AuthenticationHeaderAreaSkeleton/>}>
                    <AuthenticationHeaderArea/>
                </Suspense>
            </div>
        </header>
    )
}