"use client";
import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaTruck,
  FaLock,
  FaMinus,
  FaPlus,
  FaTrash,
  FaShoppingBag,
} from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { useAuth } from "@/app/shared/providers/AuthProvider";
import { useCart } from "@/app/shared/context/CartContext";
import Link from "next/link";
import { Address, FormData } from "@/types/address";

// Extend the Prisma Address type with our custom fields
export default function Checkout() {
  const { user } = useAuth();
  const {
    items: cartItems,
    updateQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await fetch("/api/address");
        if (response.ok) {
          const data = await response.json();
          setAddresses(data);
          // Set the default address if exists
          const defaultAddress =
            data.find((addr: Address) => addr.isDefault) || data[0];
          if (defaultAddress) {
            setSelectedAddress(defaultAddress);
            updateFormData(defaultAddress);
          }
        }
      } catch (error) {
        console.error("Error fetching addresses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (user) {
      fetchAddresses();
    }
  }, [user]);

  const updateFormData = (address: Address) => {
    setFormData((prev) => ({
      ...prev,
      fullName: address.fullName || user?.name || "",
      phone: address.phone || user?.phone || "",
      address: [address],
      city: address.city,
      district: address.ward,
    }));
  };

  const [formData, setFormData] = useState<FormData>(() => ({
    fullName: user?.name || "",
    phone: user?.phone || "",
    address: [],
    city: "",
    district: "",
    note: "",
    paymentMethod: "cod",
  }));
  const [subtotal, setSubtotal] = useState(0);
  const shippingFee = 0; // Free shipping

  // Calculate subtotal when cart items change
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  }, [cartItems]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = async () => {
    try {
      if (!selectedAddress) {
        alert("Please select a shipping address");
        return;
      }

      const orderData = {
        shippingAddressId: selectedAddress.id,
        billingAddressId: selectedAddress.id,
        items: cartItems.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
        totalValue: cartTotal,
      };

      console.log("orderData", orderData);

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (!response.ok) {
        throw new Error(responseData.error || "Failed to create order");
      }
      
      console.log("Order created successfully:", responseData);
      
      // Clear cart from localStorage and reload the page
      localStorage.removeItem("cart");
      alert("Order created successfully");
      setTimeout(() => {
        window.location.href = `/checkout`;
      }, 1000);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlePlaceOrder();
  };
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <p className="text-2xl font-bold mb-8">Checkout</p>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
        {/* Left column - Customer Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Customer Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Customer Information</h2>

            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-1">Email</div>
              <input
                type="email"
                value={user?.email || ""}
                className="w-full p-2 border border-gray-200 rounded-md mb-4"
                disabled
              />

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="text-sm text-gray-600 mb-1 block"
                  >
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-200 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm text-gray-600 mb-1 block"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-200 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm text-gray-600 mb-1 block">
                  Delivery Address *
                </label>
                {isLoading ? (
                  <div className="p-4 bg-gray-50 rounded-md">
                    Loading addresses...
                  </div>
                ) : addresses.length > 0 ? (
                  <div className="space-y-2">
                    <select
                      value={selectedAddress?.id || ""}
                      onChange={(e) => {
                        const address = addresses.find(
                          (a) => a.id === e.target.value
                        );
                        if (address) {
                          setSelectedAddress(address);
                          updateFormData(address);
                        }
                      }}
                      className="w-full p-2 border border-gray-200 rounded-md mb-2"
                      required
                    >
                      <option value="">Select an address</option>
                      {addresses.map((address) => (
                        <option key={address.id} value={address.id}>
                          {address.street}, {address.ward}, {address.city}
                          {address.isDefault ? " (Default)" : ""}
                        </option>
                      ))}
                    </select>

                    {selectedAddress && (
                      <div className="p-3 bg-gray-50 rounded-md">
                        <p className="text-sm">{selectedAddress.street}</p>
                        <p className="text-sm">
                          ward {selectedAddress.ward}, city{" "}
                          {selectedAddress.city}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-4 bg-gray-50 rounded-md text-center">
                    <p>
                      No addresses found. Please add an address in your profile.
                    </p>
                    <Link
                      href="/profile/address"
                      className="mt-2 inline-block text-sm text-blue-600 hover:underline"
                    >
                      Add Address
                    </Link>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="note"
                  className="text-sm text-gray-600 mb-1 block"
                >
                  Note (optional)
                </label>
                <textarea
                  id="note"
                  name="note"
                  rows={3}
                  value={formData.note}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-200 rounded-md"
                  placeholder="Any special instructions for delivery"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>

            <div className="space-y-4">
              <label
                className={`flex items-center p-3 border ${
                  formData.paymentMethod === "zalopay"
                    ? "border-black"
                    : "border-gray-200"
                } rounded-md hover:border-black cursor-pointer`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="zalopay"
                  checked={formData.paymentMethod === "zalopay"}
                  onChange={handleInputChange}
                  className="mr-3"
                />
                <div className="flex-1">
                  <div className="font-medium">Pay with ZaloPay</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Pay with ZaloPay app
                  </div>
                </div>
                <img src="/zalopay-logo.png" alt="ZaloPay" className="h-15" />
              </label>

              <label
                className={`flex items-center p-3 border ${
                  formData.paymentMethod === "vnpay"
                    ? "border-black"
                    : "border-gray-200"
                } rounded-md hover:border-black cursor-pointer`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="vnpay"
                  checked={formData.paymentMethod === "vnpay"}
                  onChange={handleInputChange}
                  className="mr-3"
                />
                <div className="flex-1">
                  <div className="font-medium">Pay with VNPAY-QR</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Scan QR code with your bank app
                  </div>
                </div>
                <img src="/VNPAY-logo.webp" alt="VNPAY" className="h-2" />
              </label>

              <label
                className={`flex items-center p-3 border ${
                  formData.paymentMethod === "bank"
                    ? "border-black"
                    : "border-gray-200"
                } rounded-md hover:border-black cursor-pointer`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={formData.paymentMethod === "bank"}
                  onChange={handleInputChange}
                  className="mr-3"
                />
                <div className="flex-1">
                  <div className="font-medium">Bank Transfer</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Transfer directly to the bank account
                  </div>
                </div>
                <FaCreditCard className="text-gray-400" />
              </label>

              <label
                className={`flex items-center p-3 border ${
                  formData.paymentMethod === "cod"
                    ? "border-black"
                    : "border-gray-200"
                } rounded-md hover:border-black cursor-pointer`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleInputChange}
                  className="mr-3"
                />
                <div className="flex-1">
                  <div className="font-medium">Cash on Delivery (COD)</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Pay when you receive the item
                  </div>
                </div>
                <FaTruck className="text-gray-400" />
              </label>

              <label
                className={`flex items-center p-3 border ${
                  formData.paymentMethod === "momo"
                    ? "border-black"
                    : "border-gray-200"
                } rounded-md hover:border-black cursor-pointer`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="momo"
                  checked={formData.paymentMethod === "momo"}
                  onChange={handleInputChange}
                  className="mr-3"
                />
                <div className="flex-1">
                  <div className="font-medium">Pay with MoMo</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Pay with MoMo app
                  </div>
                </div>
                <img src="/momo-logo.webp" alt="MoMo" className="h-6" />
              </label>
            </div>
          </div>
        </div>

        {/* Right column - Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
            <h2 className="text-lg font-semibold mb-4">
              Order Summary ({cartItems.length}{" "}
              {cartItems.length === 1 ? "item" : "items"})
            </h2>

            <div className="border-b pb-4 mb-4 max-h-96 overflow-y-auto">
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  Your cart is empty
                </p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start mb-4 last:mb-0"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 border border-gray-200">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover object-center"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                            <FaShoppingBag className="text-xl" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="flex items-center mt-1 space-x-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded"
                          >
                            <FaMinus size={10} />
                          </button>
                          <span className="text-sm">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded"
                          >
                            <FaPlus size={10} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">
                        $
                        {Number(item.price * item.quantity).toLocaleString(
                          "vi-VN"
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-sm mt-1 flex items-center ml-auto"
                      >
                        <FaTrash size={12} className="mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mb-4">
              <div className="relative flex mb-4">
                <input
                  type="text"
                  placeholder="Enter discount code"
                  className="flex-1 p-2 border border-gray-200 rounded-l-md focus:outline-none focus:border-black"
                />
                <button
                  type="button"
                  className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="space-y-2 text-sm mb-6">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toLocaleString("vi-VN")}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className={shippingFee === 0 ? "text-green-600" : ""}>
                  {shippingFee === 0 ? "Free" : `${shippingFee}`}
                </span>
              </div>
              <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                <span>Total:</span>
                <span>${(subtotal + shippingFee).toLocaleString("vi-VN")}</span>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500 mb-4">
              <div className="flex items-center justify-center mb-2">
                <FaLock className="mr-1" />
                <span>Payment is safe and secure</span>
              </div>
              <p className="text-xs">
                Your information is protected and encrypted
              </p>
            </div>

            <button
              type="submit"
              disabled={cartItems.length === 0}
              className={`w-full py-3 rounded-md font-medium ${
                cartItems.length === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {cartItems.length === 0 ? "Your cart is empty" : "Place Order"}
            </button>

            <div className="mt-4 text-center text-sm">
              <Link
                href="/orders"
                className="text-gray-600 hover:underline flex items-center justify-center"
              >
                <FaArrowLeft className="mr-1" /> See your order
              </Link>
            </div>
            <div className="mt-4 text-center text-sm">
              <Link
                href="/shop"
                className="text-gray-600 hover:underline flex items-center justify-center"
              >
                <FaShoppingBag className="mr-1" /> Continue Shopping
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500 space-y-2">
            <div className="flex justify-center space-x-6">
              <Link href="/return-policy" className="hover:underline">
                Return Policy
              </Link>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms of Use
              </Link>
            </div>
            <div>© 2025 Shop.co. All rights reserved.</div>
          </div>
        </div>
      </form>
    </div>
  );
}
