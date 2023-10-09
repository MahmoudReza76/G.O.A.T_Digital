/*
  Warnings:

  - You are about to drop the column `hashedPassword` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateUt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "hashedPassword",
DROP COLUMN "updatedAt",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "updateUt" TIMESTAMP(3) NOT NULL;
