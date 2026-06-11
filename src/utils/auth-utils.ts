import { IS_AUTHENTICATED_COOKIE } from "@/constants";
import { cookies } from "next/headers";

export async function getAuthCookie() {
    const cookiesStore = await cookies();
    return cookiesStore.get(IS_AUTHENTICATED_COOKIE);
}