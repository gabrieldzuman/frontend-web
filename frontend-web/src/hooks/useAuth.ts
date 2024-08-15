import { useState } from 'react';
import create from 'zustand';
import api from '../services/api';

type AuthState = {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const useAuth = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    const { token } = response.data;
    localStorage.setItem('token', token);
    set({ token });
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ token: null });
  },
}));
