import { Metadata } from "next";
import { CreatePostForm } from "./components/CreatePostForm";

export const metadata : Metadata = {
  title: "Fernando Personal Blog - Criar post",
  openGraph: {
    title: "Fernando Personal Blog - Criar post",
    url: `${process.env.NEXT_PUBLIC_URL}/create-post`
  }
}

export default function CreatePostPage() {
    return (
        <main>
            <CreatePostForm/>
        </main>
    )
}