-- CreateTable
CREATE TABLE "main" (
    "date" DATE NOT NULL,
    "drinks" INTEGER,
    "journal" BOOLEAN,
    "meditate" BOOLEAN,
    "sleep" INTEGER,
    "notes" TEXT,

    CONSTRAINT "main_pk" PRIMARY KEY ("date")
);

-- CreateIndex
CREATE UNIQUE INDEX "main_date_uindex" ON "main"("date");

