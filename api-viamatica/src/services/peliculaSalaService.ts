import prisma from '../entities/prismaClient';


export const getPeliculaByNombreID = async (nombrePelicula: string, salaID: number) => {
    try {
      const pelicula = await prisma.pelicula.findFirst({
        where: {
          nombre: nombrePelicula,
          pelicula_sala: {
            some: {
              id_sala_cine: salaID,
            },
          },
        },
        include: {
          pelicula_sala: true,
        },
      });
      return pelicula;
    } catch (error) {
      console.error("Error obteniendo pelicula:", error);
    }
  };

  export const getPeliculasByFecha = async (fecha_publicacion: string) => {
    try {
      const count = await prisma.peliculaSala.count({
        where: {
          fecha_publicacion: new Date(fecha_publicacion),
        },
      });
      return count;
    } catch (error) {
      console.error("Error obteniendo número de peliculas:", error);
    }
  };

  export const getSalaStatus = async (nombreSala: string) => {
    try {
      const sala = await prisma.salaCine.findFirst({
        where: {
          nombre: nombreSala,
        },
        include: {
          pelicula_sala: true,
        },
      });
  
      if (!sala) {
        throw new Error('Sala no encontrada');
      }
  
      const peliculaCount = sala.pelicula_sala.length;
  
      if (peliculaCount < 3) {
        return { message: 'Sala disponible' };
      } else if (peliculaCount >= 3 && peliculaCount <= 5) {
        return { message: `Sala con ${peliculaCount} películas asignadas` };
      } else {
        return { message: 'Sala no disponible' };
      }
    } catch (error) {
      console.error("Error al obtener salas:", error);
      throw error;
    }

    
  };

  export const getSalasDisponibles = async (returnCountOnly = false) => {
    try {
      const salas = await prisma.salaCine.findMany({
        include: {
          pelicula_sala: true,
        },
      });
  
      const availableSalas = salas.filter(sala => sala.pelicula_sala.length < 3);
  
      if (returnCountOnly) {
        return availableSalas.length;
      }
  
      return availableSalas;
    } catch (error) {
      console.error('Error al obtener salas disponibles:', error);
      throw error;
    }
  };

  export const createPeliculaSala = async (id_pelicula: number, id_sala_cine: number, fecha_publicacion: string, fecha_fin: string) => {
    try {
      // Validar que la sala de cine tiene menos de 5 películas asignadas
      const sala = await prisma.salaCine.findFirst({
        where: {
          id_sala: id_sala_cine,
        },
        include: {
          pelicula_sala: true,
        },
      });
  
      if (!sala) {
        throw new Error('Sala no encontrada');
      }
  
      if (sala.pelicula_sala.length >= 5) {
        throw new Error('La sala ya tiene el máximo de 5 películas asignadas');
      }
  
      // Crear la nueva entrada en PeliculaSala
      const peliculaSala = await prisma.peliculaSala.create({
        data: {
          id_pelicula,
          id_sala_cine,
          fecha_publicacion: new Date(fecha_publicacion),
          fecha_fin: new Date(fecha_fin),
        },
      });
  
      return peliculaSala;
    } catch (error) {
      console.error('Error al crear la entrada de PeliculaSala:', error);
      throw error;
    }
  };