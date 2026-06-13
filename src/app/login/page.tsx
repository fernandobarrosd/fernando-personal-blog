import { Metadata } from "next";
import { LoginForm } from "./components/LoginForm";

export const metadata : Metadata = {
  title: "Fernando Personal Blog - Login"
}

export default function LoginPage() {
  return (
    <main>
        <LoginForm/>
    </main>
  )
}