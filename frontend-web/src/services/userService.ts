import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = async () => {
  return prisma.user.findMany();
};

export const getUser = async (id: number) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

export const updateUserById = async (id: number, data: Partial<User>) => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

export const deleteUserById = async (id: number) => {
  return prisma.user.delete({
    where: { id },
  });
};
