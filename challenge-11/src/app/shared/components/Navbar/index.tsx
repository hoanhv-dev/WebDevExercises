"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Search, User, ChevronDown, Menu, X } from "lucide-react";
import CartDropdown from "../CartDropdown";

interface ShopCategory {
  title: string;
  description: string;
  href: string;
}

export default function Navbar() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const shopCategories: ShopCategory[] = [
    {
      title: "Men",
      description: "Clothing and accessories for men",
      href: "/shop/men",
    },
    {
      title: "Women",
      description: "Clothing and accessories for women",
      href: "/shop/women",
    },
    {
      title: "Kids",
      description: "Clothing and accessories for children",
      href: "/shop/kids",
    },
    {
      title: "Accessories",
      description: "Bags, jewelry, and more",
      href: "/shop/accessories",
    },
  ];

  const navLinks = [
    { name: "On Sale", href: "/sale" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Brands", href: "/brands" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white w-full border-b border-gray-100 px-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-gray-900">
              SHOP.CO
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setIsShopOpen(true)}
                onMouseLeave={() => setIsShopOpen(false)}
              >
                <Link
                  href="/shop"
                  className="text-gray-600 hover:text-gray-900 text-base font-medium flex items-center"
                >
                  Shop
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isShopOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>
                {isShopOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 p-4 z-50">
                    <div className="grid grid-cols-2 gap-4">
                      {shopCategories.map((category) => (
                        <Link
                          key={category.title}
                          href={category.href}
                          className="p-3 rounded-md hover:bg-gray-50 transition-colors"
                          onClick={() => setIsShopOpen(false)}
                        >
                          <p className="font-medium text-gray-900">
                            {category.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {category.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 text-base font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block relative w-[80vh] ">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-[#F0F0F0] block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
            />
          </div>
          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            {/* Search */}

            {/* Cart */}
            <div className="relative">
              <CartDropdown />
            </div>

            {/* User */}
            <button className="text-gray-600 hover:text-gray-900 hover:cursor-pointer">
              <User className="h-6 w-6" />
              <span className="sr-only">User</span>
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6 hover:cursor-pointer" />
                ) : (
                  <Menu className="block h-6 w-6 hover:cursor-pointer" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search - Only shown when toggled */}
        <div
          className={`md:hidden px-4 pb-4 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 text-sm text-[rgba(0,0,0,0.40)] bg-[#F0F0F0] border border-[#F0F0F0] rounded-2xl focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[rgba(0,0,0,0.40)]" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100 ">
            <div className="px-3 py-2">
              <button 
                className="w-full flex items-center justify-between text-gray-700 hover:text-gray-900 hover:cursor-pointer"
                onClick={() => setIsMobileShopOpen(!isMobileShopOpen)}
              >
                <span>Shop</span>
                <ChevronDown 
                  className={`h-4 w-4 transition-transform ${isMobileShopOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              <div className={`mt-2 pl-4 space-y-2 overflow-hidden transition-all duration-200 ${isMobileShopOpen ? 'max-h-60' : 'max-h-0'}`}>
                {shopCategories.map((category) => (
                  <Link
                    key={category.title}
                    href={category.href}
                    className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileShopOpen(false);
                    }}
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
