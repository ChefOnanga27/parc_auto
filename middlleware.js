import jwt from 'jsonwebtoken';

const JWT_SECRET = 'votre_clé_secrète'; // La même clé utilisée pour signer les tokens

export const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Récupère le token dans le header Authorization

  if (!token) return res.status(403).json({ error: 'Token requis' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token invalide' });

    req.user = user; // Stocke l'utilisateur décodé pour le reste de la requête
    next(); // Passe au prochain middleware ou à la route
  });
};
