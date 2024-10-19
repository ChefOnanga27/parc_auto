import express from 'express';
import { PrismaClient } from '@prisma/client';
import vehiculeRouter from './routes/vehiculeRoutes.js'; // Chemin mis à jour

const app = express();
const port = 3000;

const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API de gestion de parc automobile');
});

app.use('/api', vehiculeRouter);

async function connect() {
  try {
    await prisma.$connect();
    console.log('Connexion à la base de données réussie !');
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
    process.exit(1);
  }
}

connect();

app.listen(port, () => {
  console.log(`Le serveur démarre bien sur le port ${port}`);
});
