import express from 'express';
import { PrismaClient } from '@prisma/client';
import app from './server.js'; // Importez app depuis server.js

const port = 3000;

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

app.get('/api', (req, res) => {
  res.send('bienvenu à moi');
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Le serveur démarre bien sur le port ${port}`);
});
