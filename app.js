import app from './server.js';
import router from './routes/authRoutes.js'; // La même clé utilisée pour signer les tokens

app.use("router",router)


// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
