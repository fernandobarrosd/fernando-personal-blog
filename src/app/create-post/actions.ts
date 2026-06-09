"use server";

import { prismaClient } from "@/lib/prismaClient";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { randomUUID } from "node:crypto";

type CreatePost = {
    title: string;
    content: string;
    slug: string;
}

export async function createPostAction({
    title, content, slug
} : CreatePost) {
    await prismaClient.post.create({
        data: {
            id: randomUUID(),
            title,
            content,
            slug,
            createdAt: new Date()
        }
    });

    updateTag("posts");
    redirect("/");
}