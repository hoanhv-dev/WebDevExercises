'use client'

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import client-side only components
const Navbar = dynamic(() => import('@/app/shared/components/Navbar'), { ssr: false });
const Footer = dynamic(() => import('@/app/shared/components/Footer'), { ssr: false });
const CartProvider = dynamic(() => import('@/app/shared/context/CartContext').then(mod => mod.CartProvider), { 
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>; // Or a skeleton loader
  }

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