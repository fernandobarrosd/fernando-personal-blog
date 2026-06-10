import { prismaClient } from "@/lib/prismaClient"
import { randomUUID } from "node:crypto";

const loremIpsumText = `Lorem ipsum dolor sit amet consectetur adipiscing
elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit 
semper vel class aptent taciti sociosqu. Ad litora torquent per conubia 
nostra inceptos himenaeos.
Lorem ipsum dolor sit amet consectetur adipiscing
elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id
cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit 
semper vel class aptent taciti sociosqu. Ad litora torquent per conubia 
nostra inceptos himenaeos.
Lorem ipsum dolor sit amet consectetur adipiscing
`;

async function main() {
    console.log("Deletando posts...");
    await prismaClient.post.deleteMany();
    console.log("Cadastrando posts...");

    await prismaClient.post.createMany({
        data: [
            {
                id: randomUUID(),
                title: "Post teste 1",
                content: loremIpsumText,
                createdAt: new Date(),
                slug: "post-teste-1"
            },
            {
                id: randomUUID(),
                title: "Post teste 2",
                content: loremIpsumText,
                createdAt: new Date(),
                slug: "post-teste-2"
            },
            {
                id: randomUUID(),
                title: "Post teste 3",
                content: loremIpsumText,
                createdAt: new Date(),
                slug: "post-teste-3"
            },
            {
                id: randomUUID(),
                title: "Post teste 4",
                content: loremIpsumText,
                createdAt: new Date(),
                slug: "post-teste-4"
            },
            {
                id: randomUUID(),
                title: "Post teste 5",
                content: loremIpsumText,
                createdAt: new Date(),
                slug: "post-teste-5"
            },
            {
                id: randomUUID(),
                title: "Post teste 6",
                content: loremIpsumText,
                createdAt: new Date(),
                slug: "post-teste-6"
            }
        ]
    })

    
    console.log("Posts cadastrados")
}

main()
    .then(async () => {
        await prismaClient.$disconnect();
    })
    .catch(async e => {
        await prismaClient.$disconnect();
        console.log(e);
        process.exit(1);
    })