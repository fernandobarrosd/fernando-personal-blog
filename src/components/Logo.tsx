import Image from "next/image";
import Link from "next/link";

export function Logo() {
    return (
        <Link href="/"
        className="flex items-center gap-4">
            <Image
            src="/github-profile.jpg"
            width={40}
            height={40}
            className="rounded-full"
            alt="Profile image"
            loading="eager"/>
            <h1 className="text-white">
                Fernando Personal Blog
            </h1>
        </Link>
    )
}