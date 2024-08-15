import { Request, Response } from 'express';
import { registerUser, authenticateUser } from '../services/authService';

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const token = await authenticateUser(req.body);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
