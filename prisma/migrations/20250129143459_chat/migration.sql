-- CreateTable
CREATE TABLE "chat" (
    "id" SERIAL NOT NULL,
    "senderId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "chat_pkey" PRIMARY KEY ("id")
);
