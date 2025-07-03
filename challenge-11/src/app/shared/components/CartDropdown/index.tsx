"use client";

import React from "react";
import { useCart } from "@/app/shared/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartDropdown() {
  const [mounted, setMounted] = React.useState(false);
  const { items, removeFromCart, updateQuantity, cartCount } = useCart();

  // This ensures the component is mounted before rendering cart count
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  // Don't render anything during SSR or before component mounts
  if (!mounted) {
    return (
      <div className="relative">
        <Link href="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </Link>
      </div>
    );
  }

  return (
    <div className="group relative">
      <div className="relative p-2 m-2">
        <Link href="/orders">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-white text-[10px] font-medium">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-medium text-gray-900">
              Shopping Cart
            </h3>
            <span className="text-sm text-gray-500">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </div>

          {items.length === 0 ? (
            <div className="py-6 text-center">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="max-h-80 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start py-3 border-b border-gray-100 last:border-0"
                  >
                    {item.image && (
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-1 pr-2">
                          {item.name}
                        </h4>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            removeFromCart(item.id);
                          }}
                          className="text-gray-400 hover:text-gray-500 hover:cursor-pointer"
                        >
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="mt-2 flex items-center">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleQuantityChange(item.id, item.quantity - 1);
                          }}
                          className="text-gray-400 hover:text-gray-500 hover:cursor-pointer"
                        >
                          <span className="sr-only">Decrease quantity</span>
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <span className="mx-2 text-sm text-gray-700">
                          {item.quantity}
                        </span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleQuantityChange(item.id, item.quantity + 1);
                          }}
                          className="text-gray-400 hover:text-gray-500 hover:cursor-pointer"
                        >
                          <span className="sr-only">Increase quantity</span>
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>
                    $
                    {items
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </p>
                </div>
                <div className="space-y-2">
                  <Link
                    href="/orders"
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 w-full"
                  >
                    View Orders
                  </Link>
                  <Link
                    href="/checkout"
                    className="flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-black hover:bg-gray-800 w-full"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
