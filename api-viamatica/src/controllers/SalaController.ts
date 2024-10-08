import { Request, Response } from 'express';
import { getAllSalas, getSalaById, createSala, updateSala, deleteSala, getAllSalasCount } from '../services/salaServices';

// Obtener todas las salas
export const getSalasController = async (req: Request, res: Response) => {
  try {
    const salas = await getAllSalas();
    res.status(200).json(salas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las salas', error });
  }
};
// Obtener todas las salas count
export const getSalasCountController = async (req: Request, res: Response) => {
    try {
      const count = await getAllSalasCount();
      res.status(200).json(count);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la cantidad de salas', error });
    }
  };

// Obtener una sala por ID
export const getSalaByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const sala = await getSalaById(Number(id));
    res.status(200).json(sala);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la sala', error });
  }
};

// Crear una nueva sala
export const createSalaController = async (req: Request, res: Response) => {
  try {
    const { nombre } = req.body;
    const nuevaSala = await createSala(nombre);
    res.status(201).json(nuevaSala);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la sala', error });
  }
};

// Actualizar una sala
export const updateSalaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, estado } = req.body;
    const salaActualizada = await updateSala(Number(id), nombre, estado);
    res.status(200).json(salaActualizada);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la sala', error });
  }
};

// Eliminar una película
export const deleteSalaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteSala(Number(id));
    res.status(204).send("Eliminación realizada");
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la sala', error });
  }
};
