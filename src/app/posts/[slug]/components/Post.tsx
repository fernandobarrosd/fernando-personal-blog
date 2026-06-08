import { prismaClient } from "@/lib/prismaClient";
import { cacheLife, cacheTag } from "next/cache";
import { PostPageProps } from "../page";

async function getPostBySlug(slug: string) {
    "use cache";

    cacheLife({
        revalidate: 120
    });

    
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

export async function Post({ params } : PostPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    console.log(post);

    return <></>
}