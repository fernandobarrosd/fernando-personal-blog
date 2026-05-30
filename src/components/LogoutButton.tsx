import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function LogoutButton() {
    async function logoutAction() {
        "use server";

        const cookiesStore = await cookies();
        cookiesStore.delete("isAuthenticated");

        redirect("/login");

    }
    return (
        <form action={logoutAction}>
            <button className="text-white
            p-2 bg-blue-900 w-20 rounded-md cursor-pointer
            text-sm text-center">
            Logout
            </button>
        </form>
    )
}