import { cookies } from "next/headers";
import { LoginForm } from "./components/LoginForm";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const cookiesStore = await cookies();
    const isAuthenticatedCookie = cookiesStore.get("isAuthenticated");

    if (isAuthenticatedCookie) {
      redirect("/");
    }

  return (
    <main>
        <LoginForm/>
    </main>
  )
}