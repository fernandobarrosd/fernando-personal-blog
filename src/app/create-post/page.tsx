import { Metadata } from "next";
import { CreatePostForm } from "./components/CreatePostForm";

export const metadata : Metadata = {
  title: "Fernando Personal Blog - Criar post",
  openGraph: {
    title: "Fernando Personal Blog - Criar post",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_PRODUCTION_URL}/create-post` || "http://localhost:3000/create-post"
  }
}

export default function CreatePostPage() {
    return (
        <main>
            <CreatePostForm/>
        </main>
    )
}