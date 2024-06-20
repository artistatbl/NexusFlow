-- CreateEnum
CREATE TYPE "Plans" AS ENUM ('STANDARD', 'PRO', 'ULTIMATE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'assistant');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT,
    "email" TEXT NOT NULL,
    "profileImage" TEXT,
    "clerkId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "stripeId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Domain" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "description" TEXT,
    "icon" TEXT NOT NULL,
    "subdomain" TEXT NOT NULL,
    "custom_domain" TEXT,
    "userId" UUID,

    CONSTRAINT "Domain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Billings" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "plan" "Plans" NOT NULL DEFAULT 'STANDARD',
    "credits" INTEGER NOT NULL DEFAULT 10,
    "userId" UUID,

    CONSTRAINT "Billings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "Domain_subdomain_key" ON "Domain"("subdomain");

-- CreateIndex
CREATE UNIQUE INDEX "Billings_userId_key" ON "Billings"("userId");

-- AddForeignKey
ALTER TABLE "Domain" ADD CONSTRAINT "Domain_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Billings" ADD CONSTRAINT "Billings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
