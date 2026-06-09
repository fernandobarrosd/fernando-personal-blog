import { prismaClient } from "@/lib/prismaClient";

async function deleteSeed() {
    console.log("Deletando dados...")
    await prismaClient.post.deleteMany();
}


deleteSeed();