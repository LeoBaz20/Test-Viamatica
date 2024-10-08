import prisma from '../entities/prismaClient';

export const getAllPeliculas = async () => {
  return await prisma.pelicula.findMany();
};

export const getAllPeliculasCount = async () => {
  const peliculas = await prisma.pelicula.findMany();
  return peliculas.length;
};

export const getPeliculaById = async (id: number) => {
  return await prisma.pelicula.findUnique({
    where: { id_pelicula:id },
  });
};

export const createPelicula = async (nombre: string, duracion: number) => {
  return await prisma.pelicula.create({
    data: {
      nombre,
      duracion,
    },
  });
};

export const updatePelicula = async (id: number, nombre: string, duracion: number) => {
  return await prisma.pelicula.update({
    where: { id_pelicula:id },
    data: { nombre, duracion },
  });
};

export const deletePelicula = async (id: number) => {
  return await prisma.pelicula.update({
    where: {id_pelicula:id },
    data:{deleted:true},
  });
};
