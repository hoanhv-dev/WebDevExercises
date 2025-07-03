'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiUsers, FiTruck, FiShoppingBag, FiLogOut } from 'react-icons/fi';
import { signOut } from 'next-auth/react';

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const navigation: NavItem[] = [
  { name: 'Dashboard', href: '/admin', icon: <FiHome className="w-5 h-5" /> },
  { name: 'Users', href: '/admin/manage/Users', icon: <FiUsers className="w-5 h-5" /> },
  { name: 'Products', href: '/admin/manage/Products', icon: <FiShoppingBag className="w-5 h-5" /> },
  { name: 'Orders', href: '/admin/manage/Orders', icon: <FiTruck className="w-5 h-5" /> },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const pathname = usePathname();

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-6 max-w-sm w-full bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Unauthorized</h2>
          <p className="text-gray-600">Please sign in to access the admin panel.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-[#f0f0f0] text-black">
          <div className="flex items-center h-15 px-4 border-b border-gray-400">
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center  px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? 'text-black hover:bg-gray-300'
                    : 'text-black hover:bg-gray-300'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            ))}
            <button
              className="flex items-center w-full px-4 py-3 text-sm font-medium text-left text-black rounded-md hover:bg-gray-300 transition-colors mt-4"
              onClick={() => {signOut()}}
            >
              <span className="mr-3">
                <FiLogOut className="w-5 h-5" />
              </span>
              Sign out
            </button>
          </nav>
          <div className="p-4 border-t border-indigo-600">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                  {session.user?.name?.[0]?.toUpperCase() || 'U'}
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-black">{session.user?.name || 'User'}</p>
                <p className="text-xs font-medium text-black">
                  {session.user?.email || 'admin@example.com'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-semibold text-gray-900">
              {navigation.find((item) => item.href === pathname)?.name || 'Dashboard'}
            </h1>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}