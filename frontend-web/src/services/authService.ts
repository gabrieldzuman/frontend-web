import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { signToken } from '../utils/jwtUtils';

const prisma = new PrismaClient();

export const registerUser = async (data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return prisma.user.create({
    data: { ...data, password: hashedPassword },
  });
};

export const authenticateUser = async (data: { email: string; password: string }) => {
  const user = await prisma.user.findUnique({
    where: { email: data.email },
  });
  if (!user || !(await bcrypt.compare(data.password, user.password))) {
    throw new Error('Invalid credentials');
  }
  return signToken(user.id);
};
