import { Metadata } from "next";
import { LoginForm } from "./components/LoginForm";

export const metadata : Metadata = {
  title: "Fernando Personal Blog - Login",
  openGraph: {
    title: "Fernando Personal Blog - Criar post",
    url: `${process.env.NEXT_PUBLIC_URL}/login`
  }
}

export default function LoginPage() {
  return (
    <main>
        <LoginForm/>
    </main>
  )
}