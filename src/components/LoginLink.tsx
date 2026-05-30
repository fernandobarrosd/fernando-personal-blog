import Link from "next/link";

export function LoginLink() {
    return (
        <Link
        href="/login" 
        className="text-white
        p-2 bg-blue-900 w-20 rounded-md cursor-pointer
        text-sm text-center">
            Login
        </Link>
    )
}