import { cacheLife, revalidatePath, updateTag } from "next/cache";
import { prismaClient } from "@/lib/prismaClient";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import { DeletePostDialog } from "./components/DeletePostDialog";
import { dateFormatter } from "@/utils/date-utils";
import { getAuthCookie } from "@/utils/auth-utils";


type PostPageProps = {
    params: Promise<{ slug: string }>
}

export async function getPostBySlug(slug: string) {
    "use cache";

    cacheLife("days");
    
    const post = await prismaClient.post.findUnique({
        where: {
            slug
        },
        select: {
            id: true,
            title: true,
            content: true,
            createdAt: true
        }
    });

    return post;
}

export default async function PostPage({ params } : PostPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    const isAuthenticatedCookie = await getAuthCookie();
    

    if (!post) {
        notFound();
    }

    async function deletePost() {
        "use server";

        await prismaClient.post.delete({
            where: {
                slug
            }
        });

        updateTag("posts");
        revalidatePath(`/${slug}`);
        redirect("/");
    }
    
    return (
        <main>
            <div className="flex flex-col p-12">
                <div className="flex items-center
                justify-between">
                    <div className="flex items-center gap-4">
                        <Image
                        src="/github-profile.jpg"
                        width={30}
                        height={30}
                        className="rounded-full"
                        alt="Profile image"/>
                        <span className="text-white text-xl">
                            {post.title}
                        </span>
                    </div>
                    { isAuthenticatedCookie && (
                        <DeletePostDialog
                        post={{ ...post }}
                        onDeletePost={deletePost}
                        />
                    ) }
                </div>
                
                <span className="text-white text-sm mt-2
                font-bold">
                    {dateFormatter.format(post.createdAt)}
                </span>
                <span className="text-white mt-4
                leading-8">
                    {post.content}
                </span>
            </div>
        </main>
    )
}