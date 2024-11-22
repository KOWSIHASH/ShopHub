import { create } from 'zustand';
import { User } from '../types';

interface AuthState {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (email, password) => {
    // Simulate authentication
    const isAdmin = email === 'admin@example.com' && password === 'admin123';
    const user: User = {
      id: '1',
      email,
      role: isAdmin ? 'admin' : 'user',
    };
    set({ user });
  },
  logout: () => set({ user: null }),
}))

export default useAuthStore;