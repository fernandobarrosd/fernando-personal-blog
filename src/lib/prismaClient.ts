import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";
const connectionString = `${process.env.NEXT_PUBLIC_DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
export const prismaClient = new PrismaClient({ 
    adapter
});