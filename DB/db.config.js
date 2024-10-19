import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"],
});

// Fonction principale pour établir la connexion
async function main() {
  try {
    await prisma.$connect();
    console.log('Connexion à la base de données réussie !');
  } catch (e) {
    console.error('Erreur de connexion à la base de données:', );
    await prisma.$disconnect();
    process.exit(1);
  }
}

// Appel de la fonction principale
main();

// Exporter l'instance Prisma pour l'utiliser ailleurs
export default prisma;


