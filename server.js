import express from 'express';
import vehiculeRouter from './routes/vehiculeRoutes.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API de gestion de parc automobile');
});

app.use('/vehicules',vehiculeRouter)

// Exporter l'application Express comme export par défaut
export default app;
