"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from 'next/navigation';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (pathname === '/') return false;
    
    if (path === '/profile') {
      return pathname === '/profile';
    }
    
    return pathname === path;
  };

  return (
    <div className="screen-max-width flex flex-rows">
        <div className="mt-10 ml-16 w-1/4 flex flex-col gap-6 border border-gray-200 p-6 mr-6 rounded-xl bg-gray-50">
          <div className="font-semibold text-xl italic border-b border-gray-400 pb-4">
            <p>Welcome, </p>
            <p>{session?.user?.name}!</p>
          </div>
          <div className="text-xl mb-6 flex flex-col gap-6">
            <Link 
              href="/profile" 
              className={`hover:text-gray-600 ${isActive('/profile') ? 'text-gray-900 font-bold' : 'text-gray-600'}`}
            >
              Profile
            </Link>
            <Link 
              href="/orders" 
              className={`hover:text-gray-600 ${isActive('/orders') ? 'text-gray-900 font-bold' : 'text-gray-600'}`}
            >
              Your orders
            </Link>
            <Link
              href="/profile/change-password"
              className={`hover:text-gray-600 ${isActive('/profile/change-password') ? 'text-gray-900 font-bold' : 'text-gray-600'}`}
            >
              Change password
            </Link>
            <Link 
              href="/profile/address" 
              className={`hover:text-gray-600 ${isActive('/profile/address') ? 'text-gray-900 font-bold' : 'text-gray-600'}`}
            >
              Address
            </Link>
          </div>
        </div>
      <div className="w-3/4">
        {children}
      </div>  
    </div>
  );
}
