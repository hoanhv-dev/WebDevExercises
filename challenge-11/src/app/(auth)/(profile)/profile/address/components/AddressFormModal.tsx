"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

type AddressFormData = {
  fullName: string;
  phone: string;
  street: string;
  ward: string;
  city: string;
  isDefault: boolean;
};

type AddressFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<AddressFormData, "id" | "userId">) => void;
  initialData?: Omit<AddressFormData, "id" | "userId"> | null;
};

export default function AddressFormModal({
  isOpen,
  onClose,
  onSubmit,
  initialData = null,
}: AddressFormModalProps) {
  const [formData, setFormData] = useState<
    Omit<AddressFormData, "id" | "userId">
  >({
    fullName: "",
    phone: "",
    street: "",
    ward: "",
    city: "",
    isDefault: false,
  });

  // Initialize or reset form when modal is opened/closed or initialData changes
  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setFormData({
          fullName: initialData.fullName || "",
          phone: initialData.phone || "",
          street: initialData.street || "",
          ward: initialData.ward || "",
          city: initialData.city || "",
          isDefault: initialData.isDefault || false,
        });
      } else {
        setFormData({
          fullName: "",
          phone: "",
          street: "",
          ward: "",
          city: "",
          isDefault: false,
        });
      }
    }
  }, [isOpen, initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl relative">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              {initialData ? 'Edit Address' : 'Add new Address'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-rows gap-4">
              <div className="flex-1">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name *
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone *
                </label>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="0123456789"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="street"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Street Address *
              </label>
              <input
                id="street"
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="123 Main St, Building A"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="ward"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Ward *
                </label>
                <input
                  id="ward"
                  type="text"
                  name="ward"
                  value={formData.ward}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="e.g. Ward 1"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  City *
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="e.g. Ho Chi Minh City"
                  required
                />
              </div>
            </div>

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="isDefault"
                name="isDefault"
                checked={formData.isDefault}
                onChange={handleChange}
                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              />
              <label
                htmlFor="isDefault"
                className="ml-2 block text-sm text-gray-700"
              >
                Set as default address
              </label>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                {initialData ? 'Update' : 'Add Address'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
