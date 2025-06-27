'use client'

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getCurrentUser } from "@/app/shared/serverActions/auth.actions";

type User = {
    id: string;
    name: string;
    email: string;
} | null;

interface AuthContextType {
    user: User | null;
    loading: boolean;
    setUser: (user: User | null) => void;
    loadUser: () => Promise<User | null>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    setUser: () => {},
    loadUser: async () => null
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState<{ user: User | null; loading: boolean }>({
        user: null,
        loading: true,
    });

    const loadUser = useCallback(async () => {
        try {
            const currentUser = await getCurrentUser();
            setState(prev => ({ ...prev, user: currentUser, loading: false }));
            return currentUser;
        } catch (error) {
            setState(prev => ({ ...prev, user: null, loading: false }));
            return null;
        }
    }, []);

    const setUser = useCallback((user: User | null) => {
        setState(prev => ({ ...prev, user }));
    }, []);

    useEffect(() => {
        console.log("Initial load user");
        loadUser();
    }, [loadUser]);

    return (
        <AuthContext.Provider value={{ 
            user: state.user, 
            loading: state.loading, 
            setUser, 
            loadUser 
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext)
}
