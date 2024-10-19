import express from 'express';
import { PrismaClient } from '@prisma/client';
import prisma from './DB/db.config.js';

const app = express();
const port = 3000;

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
