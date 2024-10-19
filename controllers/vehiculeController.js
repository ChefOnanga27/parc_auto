import * as vehicleModel from '../models/vehiculeModel.js';

export const getVehicles = async (req, res) => {
  try {
    const vehicles = await vehicleModel.getAllVehicles();
    res.json(vehicles);
  } catch (error) {
    console.error('Erreur lors de la récupération des véhicules:', error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des véhicules' });
  }
};

export const addVehicle = async (req, res) => {
  try {
    // Validation des données ici
    const vehicle = await vehicleModel.createVehicle(req.body);
    res.status(201).json(vehicle);
  } catch (error) {
    console.error('Erreur de  lors de l\'ajout du véhicule:', error);
    res.status(500).json({ error: 'Erreur de l\'ajout du véhicule.' });
  }
};

export const editVehicle = async (req, res) => {
  try {
    // Validation des données ici
    const updatedVehicle = await vehicleModel.updateVehicle(req.params.id, req.body);
    res.json(updatedVehicle);
  } catch (error) {
    console.error('Erreur de modification du véhicule:', error);
    res.status(500).json({ error: 'Erreur de modification du véhicule.' });
  }
};

export const removeVehicle = async (req, res) => {
  try {
    await vehicleModel.deleteVehicle(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    console.error('Erreur de suppression du véhicule:', error);
    res.status(500).json({ error: 'Erreur de suppression du véhicule.' });
  }
};
