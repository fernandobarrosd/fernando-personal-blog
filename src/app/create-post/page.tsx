import { Metadata } from "next";
import { CreatePostForm } from "./components/CreatePostForm";

export const metadata : Metadata = {
  title: "Fernando Personal Blog - Criar post"
}

export default function CreatePostPage() {
    return (
        <main>
            <CreatePostForm/>
        </main>
    )
}