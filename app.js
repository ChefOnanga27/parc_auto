import express from 'express';
import { PrismaClient } from '@prisma/client';
import vehiculeRouter from './routes/vehiculeRoutes.js'; // Routes pour les véhicules

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/vehicules', vehiculeRouter);

app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API de gestion de parc automobile');
});



// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur démarre bien sur le port ${port}`);
});
