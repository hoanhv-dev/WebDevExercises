'use client'

import React from 'react';
import Navbar from '@/app/shared/components/Navbar';
import Footer from '@/app/shared/components/Footer';
import { CartProvider } from '@/app/shared/context/CartContext';
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow mb-20">
          {children}
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}