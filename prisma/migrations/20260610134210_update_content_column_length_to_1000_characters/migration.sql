/*
  Warnings:

  - You are about to alter the column `content` on the `posts` table. The data in that column could be lost. The data in that column will be cast from `VarChar(1400)` to `VarChar(1000)`.

*/
-- AlterTable
ALTER TABLE "posts" ALTER COLUMN "content" SET DATA TYPE VARCHAR(1000);
