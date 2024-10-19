import express from 'express';
import { register, login } from '../controllers/authControllers.js';
//import { authenticateToken } from '../middlewares.js'; // Importer le middleware d'authentification

const router = express.Router();

router.post('/register', register,); // Route pour l'inscription
router.post('/login', login); // Route pour la connexion

export default router;
