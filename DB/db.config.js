import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"],
});

// Fonction pour créer un nouvel utilisateur
async function createUser(email, motDePasse) {
  // Vérifiez si l'utilisateur existe déjà
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error('Un utilisateur avec cet e-mail existe déjà.');
  }

  return await prisma.user.create({
    data: {
      email,
      motDePasse,
    },
  });
}

// Fonction pour créer un nouveau véhicule
async function createVehicule(data) {
  return await prisma.vehicule.create({
    data,
  });
}

// Fonction pour récupérer tous les utilisateurs avec leurs véhicules
async function getAllUsersWithVehicules() {
  return await prisma.user.findMany({
    include: {
      vehicules: true, // Inclure les véhicules pour chaque utilisateur
    },
  });
}

// Fonction principale pour gérer la logique d'application
async function main() {
  try {
    // Créons un nouvel utilisateur
    const user = await createUser("pmmallet1@gmail.com", "mallet");
    console.log('Nouvel utilisateur créé : ', user);

    // Créons un nouveau véhicule
    const nouvelVehicule = await createVehicule({
      marque: 'Mustang',
      modele: 'Jeep',
      annee: 1995,
      couleur: 'Jaune',
      numeroDeSerie: '243977962085j',
      image: '6irhfno93udfiek',
      proprietaire: {
        connect: { id: user.id }, // Lier le véhicule à l'utilisateur créé
      },
    });
    console.log('Nouveau véhicule créé : ', nouvelVehicule);

    // Récupérons tous les utilisateurs avec leurs véhicules
    const tousLesUtilisateurs = await getAllUsersWithVehicules();
    console.log('Tous les utilisateurs avec leurs véhicules : ');
    console.dir(tousLesUtilisateurs, { depth: null });
  } catch (e) {
    console.error('Erreur : ', e.message);
  } finally {
    await prisma.$disconnect(); // On ferme la connexion à la base de données
  }
}

main();

export default prisma;

