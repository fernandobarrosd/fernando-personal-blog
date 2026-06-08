import { cacheLife, cacheTag } from "next/cache";
import { prismaClient } from "@/lib/prismaClient";
import { setTimeout } from "timers/promises";
import { notFound } from "next/navigation";
import Image from "next/image";

type PostPageProps = {
    params: Promise<{ slug: string }>
}

const dateFormatter = new Intl.DateTimeFormat("pt-BR");

async function getPostBySlug(slug: string) {
    "use cache";

    cacheLife({
        revalidate: 120
    });

    await setTimeout(5000);

    
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

    if (post) {
        cacheTag(`post-${post.id}`);
    }

    return post;
}

export default async function PostPage({ params } : PostPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }
    
    return (
        <main>
            <div className="flex flex-col p-12">
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