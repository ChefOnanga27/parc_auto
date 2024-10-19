import prisma from '../DB/db.config.js';

export const getAllVehicles = async () => {
  try {
    return await prisma.getAllVehicles.findMany();
  } catch (error) {
    console.error('Erreur lors de la récupération des véhicules:', error);
    throw new Error('Erreur de récupération des véhicules');
  }
};

export const createVehicle = async (data) => {
  try {
    // Validation des données ici, par exemple:
    // if (!data.marque || !data.modele) throw new Error('Marque et modèle sont requis.');

    return await prisma.createVehicle({ data });
  } catch (error) {
    console.error('Erreur lors de la création du véhicule:', error);
    throw new Error('Erreur de création du véhicule');
  }
};

export const updateVehicle = async (id, data) => {
  try {
    if (isNaN(id)) throw new Error('ID doit être un nombre.');
    return await prisma.updateVehicle({
      where: { id: parseInt(id) },
      data,
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du véhicule:', error);
    throw new Error('Erreur de mise à jour du véhicule');
  }
};

export const deleteVehicle = async (id) => {
  try {
    if (isNaN(id)) throw new Error('ID doit être un nombre.');
    return await prisma. deleteVehicle({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    console.error('Erreur lors de la suppression du véhicule:', error);
    throw new Error('Erreur de suppression du véhicule');
  }
};
