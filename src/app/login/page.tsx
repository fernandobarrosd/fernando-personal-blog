import { Metadata } from "next";
import { LoginForm } from "./components/LoginForm";

export const metadata : Metadata = {
  title: "Fernando Personal Blog - Login",
  openGraph: {
    title: "Fernando Personal Blog - Criar post",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_PRODUCTION_URL}/login` || "http://localhost:3000/login"
  }
}

export default function LoginPage() {
  return (
    <main>
        <LoginForm/>
    </main>
  )
}