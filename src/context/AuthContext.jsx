import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { authApi } from '../lib/api';

const AuthContext = createContext(null);

// Fallback demo credentials when API is unavailable
const DEMO_USERS = [
  { email: 'admin@pillars.io', password: 'Admin2024!', role: 'admin', name: 'Admin User' },
  { email: 'demo@pillars.io', password: 'Demo2024!', role: 'user', name: 'Demo User' },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('pillars_user');
    const token = localStorage.getItem('pillars_token');
    if (stored && token) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem('pillars_user');
        localStorage.removeItem('pillars_token');
      }
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (email, password) => {
    try {
      // Try API first
      const data = await authApi.login(email, password);
      localStorage.setItem('pillars_token', data.accessToken);
      localStorage.setItem('pillars_user', JSON.stringify(data.user));
      setUser(data.user);
      return data;
    } catch {
      // Fallback to demo users
      const demoUser = DEMO_USERS.find(u => u.email === email && u.password === password);
      if (demoUser) {
        const userObj = { id: demoUser.email, email: demoUser.email, name: demoUser.name, role: demoUser.role };
        const token = btoa(JSON.stringify(userObj));
        localStorage.setItem('pillars_token', token);
        localStorage.setItem('pillars_user', JSON.stringify(userObj));
        setUser(userObj);
        return { accessToken: token, user: userObj };
      }
      throw new Error('Invalid email or password. Use admin@pillars.io / Admin2024! or demo@pillars.io / Demo2024!');
    }
  }, []);

  const register = useCallback(async (data) => {
    try {
      const result = await authApi.register(data);
      localStorage.setItem('pillars_token', result.accessToken);
      localStorage.setItem('pillars_user', JSON.stringify(result.user));
      setUser(result.user);
      return result;
    } catch {
      throw new Error('Registration is currently handled through the API. Please contact support.');
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } catch {
      // ignore
    }
    localStorage.removeItem('pillars_token');
    localStorage.removeItem('pillars_user');
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
