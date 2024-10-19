import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = 3000;

const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

async function connect() {
  try {
    await prisma.$connect();
    console.log('Connexion à la base de données réussie !');
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
    process.exit(1); // Arrêter le serveur si la connexion échoue
  }
}

// Connexion à la base de données
connect();

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur démarre bien sur le port ${port}`);
});

// Fonction principale pour gérer les erreurs
async function main() {
  try {
    await prisma.$connect(); // Connexion à la base de données
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();
