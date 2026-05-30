import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export default async function HomePage() {
  const cookiesStore = await cookies();
  const isAuthenticatedCookie = cookiesStore.get("isAuthenticated");

  if (!isAuthenticatedCookie) {
    redirect("/login");
  }

  return <></>
}