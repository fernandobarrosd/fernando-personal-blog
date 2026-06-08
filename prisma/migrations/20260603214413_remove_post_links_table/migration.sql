/*
  Warnings:

  - You are about to drop the `post_links` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "post_links" DROP CONSTRAINT "post_links_post_id_fkey";

-- DropTable
DROP TABLE "post_links";
