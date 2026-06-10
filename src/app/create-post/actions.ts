"use server";

import { prismaClient } from "@/lib/prismaClient";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import { randomUUID } from "node:crypto";
import { setTimeout } from "node:timers/promises";

type CreatePost = {
    title: string;
    content: string;
    slug: string;
}

export async function createPostAction({
    title, content, slug
} : CreatePost) {
    const post = await prismaClient.post.findUnique({
        where: {
            title
        }
    });

    if (post) {
        return "Já existe um post com esse titulo";
    }

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