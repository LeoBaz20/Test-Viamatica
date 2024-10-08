import { Request, Response } from 'express';
import { getAllPeliculas,getAllPeliculasCount, getPeliculaById, createPelicula, updatePelicula, deletePelicula } from '../services/peliculaService';

// Obtener todas las películas
export const getPeliculasController = async (req: Request, res: Response) => {
  try {
    const peliculas = await getAllPeliculas();
    res.status(200).json(peliculas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las películas', error });
  }
};

// Obtener todas las peliculas count
export const getPeliculasCountController = async (req: Request, res: Response) => {
  try {
    const count = await getAllPeliculasCount();
    res.status(200).json(count);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la cantidad de peliculas', error });
  }
};

// Obtener una película por ID
export const getPeliculaByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const pelicula = await getPeliculaById(Number(id));
    res.status(200).json(pelicula);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la película', error });
  }
};

// Crear una nueva película
export const createPeliculaController = async (req: Request, res: Response) => {
  try {
    const { nombre, duracion } = req.body;
    const nuevaPelicula = await createPelicula(nombre, duracion);
    res.status(201).json(nuevaPelicula);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la película', error });
  }
};

// Actualizar una película
export const updatePeliculaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nombre, duracion } = req.body;
    const peliculaActualizada = await updatePelicula(Number(id), nombre, duracion);
    res.status(200).json(peliculaActualizada);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la película', error });
  }
};

// Eliminar una película
export const deletePeliculaController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deletePelicula(Number(id));
    res.status(204).send("Eliminación realizada");
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la película', error });
  }
};
