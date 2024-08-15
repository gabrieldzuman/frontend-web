import { useState, useEffect } from 'react';
import create from 'zustand';
import api from '../services/api';

type User = {
  id: number;
  name: string;
  email: string;
};

type UsersState = {
  users: User[];
  fetchUsers: () => void;
};

export const useUsers = create<UsersState>((set) => ({
  users: [],
  fetchUsers: async () => {
    const response = await api.get('/users');
    set({ users: response.data });
  },
}));

export const useUser = (id: number) => {
  const { users } = useUsers();
  return users.find((user) => user.id === id);
};
