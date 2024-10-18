-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "motDePasse" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicul" (
    "id" SERIAL NOT NULL,
    "marque" TEXT NOT NULL,
    "modele" TEXT NOT NULL,
    "annee" INTEGER NOT NULL,
    "couleur" TEXT NOT NULL,
    "numeroDeSerie" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Vehicul_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicul_numeroDeSerie_key" ON "Vehicul"("numeroDeSerie");
