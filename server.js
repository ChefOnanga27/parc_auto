import express from 'express';


const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API de gestion de parc automobile');
});


// Exporter l'application Express comme export par défaut
export default app;
