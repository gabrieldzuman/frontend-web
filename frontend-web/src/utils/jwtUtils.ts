import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

export const signToken = (id: number) => {
  return jwt.sign({ id }, SECRET_KEY, {
    expiresIn: '1h',
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET_KEY) as { id: number };
};
