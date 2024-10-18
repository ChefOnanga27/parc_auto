import express from 'express';
import {
  getVehicles,
  addVehicle,
  editVehicle,
  removeVehicle,
} from '../controllers/vehiculeController.js';

const vehiculeRouter = express.Router(); // 

// Middleware d'authentification (si nécessaire)
// vehiculeRouter.use(authMiddleware);

vehiculeRouter.get('/vehicules', getVehicles);
vehiculeRouter.post('/vehicule', addVehicle); // Vous pouvez ajouter une validation ici
vehiculeRouter.put('vehicule/:id', editVehicle); // Validation de l'ID pourrait être utile ici
vehiculeRouter.delete('/vehicule:id', removeVehicle); // Validation de l'ID

export default vehiculeRouter; // Exporter le routeur sous le nouveau nom
