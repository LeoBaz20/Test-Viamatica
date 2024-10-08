import prisma from '../entities/prismaClient';

export const getAllSalas = async () => {
  return await prisma.salaCine.findMany();
};

export const getAllSalasCount = async () => {
    const salas = await prisma.salaCine.findMany();
    return salas.length;
  };

export const getSalaById = async (id: number) => {
  return await prisma.salaCine.findUnique({
    where: { id_sala:id },
  });
};

export const createSala = async (nombre: string) => {
  return await prisma.salaCine.create({
    data: {
      nombre
    },
  });
};

export const updateSala = async (id: number, nombre: string, estado: string) => {
  return await prisma.salaCine.update({
    where: { id_sala:id },
    data: { nombre, estado },
  });
};

export const deleteSala = async (id: number) => {
  return await prisma.salaCine.update({
    where: {id_sala:id },
    data:{deleted:true},
  });
};
