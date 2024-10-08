import { Request, Response } from 'express';
import { createPeliculaSala,getPeliculaByNombreID, getPeliculasByFecha, getSalaStatus, getSalasDisponibles } from '../services/peliculaSalaService';

export const getPeliculaByNombreSalaIDController = async (req: Request, res: Response) => {
    try {
      const { nombrePelicula, salaID } = req.params;
      const pelicula = await getPeliculaByNombreID(nombrePelicula, Number(salaID));
      if (pelicula) {
        res.status(200).json(pelicula);
      } else {
        res.status(404).json({ message: 'Película no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la película', error });
    }
  };

  export const getPeliculaByFechaController = async (req: Request, res: Response) => {
    try {
      const { fecha_publicacion } = req.params;
      const count = await getPeliculasByFecha(fecha_publicacion);
      res.status(200).json({ count });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la cantidad de películas', error });
    }
  };

  export const getStatusSalaController = async (req: Request, res: Response) => {
    try {
      const { nombreSala } = req.query;
      const result = await getSalaStatus(nombreSala as string);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la información de la sala', error });
    }
  };

  export const getSalasDisponiblesController = async (req: Request, res: Response) => {
    try {
      const { countOnly } = req.query;
      const returnCountOnly = countOnly === 'true';
      const result = await getSalasDisponibles(returnCountOnly);
      res.status(200).json(returnCountOnly ? { count: result } : result);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las salas disponibles', error });
    }
  };

  export const createPeliculaSalaController = async (req: Request, res: Response) => {
    try {
      const { id_pelicula, id_sala_cine, fecha_publicacion, fecha_fin } = req.body;
      const nuevaPeliculaSala = await createPeliculaSala(id_pelicula, id_sala_cine, fecha_publicacion, fecha_fin);
      res.status(201).json(nuevaPeliculaSala);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la entrada de PeliculaSala', error });
    }
  };

