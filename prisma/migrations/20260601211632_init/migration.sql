-- CreateTable
CREATE TABLE "posts" (
    "post_id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "likes" INTEGER NOT NULL,
    "created_at" TIMESTAMP NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "post_links" (
    "post_link_id" TEXT NOT NULL,
    "link" VARCHAR(50) NOT NULL,
    "post_id" TEXT NOT NULL,

    CONSTRAINT "post_links_pkey" PRIMARY KEY ("post_link_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "post_links_link_key" ON "post_links"("link");

-- CreateIndex
CREATE UNIQUE INDEX "post_links_post_id_key" ON "post_links"("post_id");

-- AddForeignKey
ALTER TABLE "post_links" ADD CONSTRAINT "post_links_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("post_id") ON DELETE RESTRICT ON UPDATE CASCADE;
