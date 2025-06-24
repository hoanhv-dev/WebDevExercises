'use client'

import React from 'react';
import Navbar from '@/app/shared/components/Navbar';
import Footer from '@/app/shared/components/Footer';
import { CartProvider } from '@/context/CartContext';
import Review from '@/app/(auth)/(home)/components/Review';

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
        <Review />
        <Footer />
      </div>
    </CartProvider>
  );
}