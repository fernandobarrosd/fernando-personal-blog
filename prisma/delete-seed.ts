import { prismaClient } from "@/lib/prismaClient";

async function deleteSeed() {
    await prismaClient.postLink.deleteMany();
    await prismaClient.post.deleteMany();
}


deleteSeed();