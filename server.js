import express from 'express';
import vehiculeRouter from './routes/vehiculeRoutes.js';


const app = express();

// Middleware
app.use(express.json());


// Utiliser le routeur pour gérer les routes liées aux véhicules
app.use('/api', vehiculeRouter);
// Routes
app.get('/api', (req, res) => {
  res.send('Bienvenue sur l’API de gestion de parc automobile');
});

// Exporter l'application Express comme export par défaut
export default app;
