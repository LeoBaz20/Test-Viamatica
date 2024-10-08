-- AlterTable
ALTER TABLE "Pelicula" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "SalaCine" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false;
