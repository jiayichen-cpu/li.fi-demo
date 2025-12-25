-- CreateTable
CREATE TABLE "LifiLeaderboardSnapshot" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "totalVolume" DOUBLE PRECISION NOT NULL,
    "entries" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LifiLeaderboardSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LifiLeaderboardSnapshot_date_key" ON "LifiLeaderboardSnapshot"("date");

