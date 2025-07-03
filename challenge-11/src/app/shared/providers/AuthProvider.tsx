"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { Address } from "@prisma/client";

export type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  phone?: string | null;
  address?: Address[] | null;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{
    user: User | null;
    loading: boolean;
  }>({
    user: null,
    loading: true,
  });

  const loadUser = useCallback(async () => {
    try {
      const response = await fetch("/api/auth/session");
      const data = await response.json();
      setState(prev => ({ ...prev, user: data.user || null, loading: false }));
      return data.user;
    } catch (error) {
      setState(prev => ({ ...prev, user: null, loading: false }));
      return null;
    }
  }, []);

  const setUser = useCallback((user: User | null) => {
    setState(prev => ({ ...prev, user }));
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <AuthContext.Provider value={{ 
      user: state.user, 
      loading: state.loading, 
      setUser 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};