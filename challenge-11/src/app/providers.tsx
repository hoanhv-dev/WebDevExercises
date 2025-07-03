// src/app/providers.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "./shared/providers/AuthProvider";

export function ProvidersRegister({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </SessionProvider>
  );
}