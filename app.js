import express from 'express';
import { PrismaClient } from '@prisma/client';
import app from './server.js'; // Here, `app` is already imported

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const prisma = new PrismaClient();

async function connect() {
  try {
    await prisma.$connect();
    console.log('Connexion à la base de données réussie !');
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
  }
}

connect();

app.listen(port, () => {
  console.log(`Le serveur démarre bien sur le port localhost:${port}`);
});
