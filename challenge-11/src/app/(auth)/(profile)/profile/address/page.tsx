"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import AddressFormModal from "./components/AddressFormModal";

type AddressType = {
  id: string;
  fullName: string;
  phone: string;
  street: string;
  city: string;
  ward: string;
  isDefault: boolean;
  userId: string;
  createdAt?: string;
  updatedAt?: string;
};

type SessionWithAddresses = {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    phone?: string | null;
    addresses?: AddressType[];
  };
};

export default function Address() {
  const { data: session } = useSession() as { data: SessionWithAddresses | null };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<AddressType | null>(null);
  const [addresses, setAddresses] = useState<AddressType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await fetch('/api/address');
        if (response.ok) {
          const data = await response.json();
          setAddresses(data);
        }
      } catch (error) {
        console.error('Error fetching addresses:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (session?.user) {
      fetchAddresses();
    }
  }, [session]);

  const handleSaveAddress = async (addressData: Omit<AddressType, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) => {
    if (editingAddress) {
      await handleUpdateAddress(editingAddress.id, addressData);
    } else {
      await handleAddAddress(addressData);
    }
  };

  const handleAddAddress = async (addressData: Omit<AddressType, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) => {
    try {
      if (!session?.user?.id) {
        throw new Error('User not authenticated');
      }

      console.log('Sending address data:', {
        ...addressData,
        userId: session.user.id,
      });

      const response = await fetch('/api/address', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: addressData.fullName,
          phone: addressData.phone,
          street: addressData.street,
          ward: addressData.ward,
          city: addressData.city,
          isDefault: addressData.isDefault || false,
          userId: session.user.id,
        }),
      });

      let responseData;
      try {
        responseData = await response.json();
      } catch (jsonError) {
        console.error('Failed to parse response as JSON:', jsonError);
        throw new Error('Invalid response from server');
      }
      
      console.log('API Response:', {
        status: response.status,
        statusText: response.statusText,
        data: responseData
      });
      
      if (!response.ok) {
        throw new Error(responseData.error || responseData.message || `Failed to add address: ${response.status} ${response.statusText}`);
      }

      // Refresh the addresses
      setAddresses(responseData);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error in handleAddAddress:', {
        error,
        name: error instanceof Error ? error.name : 'Unknown error type',
        message: error instanceof Error ? error.message : 'No error message',
        stack: error instanceof Error ? error.stack : 'No stack trace'
      });
      alert(error instanceof Error ? error.message : 'Failed to add address');
    }
  };

  const handleUpdateAddress = async (addressId: string, addressData: Omit<AddressType, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) => {
    try {
      if (!session?.user?.id) {
        throw new Error('User not authenticated');
      }

      const response = await fetch(`/api/address`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: addressData.fullName,
          phone: addressData.phone,
          street: addressData.street,
          ward: addressData.ward,
          city: addressData.city,
          isDefault: addressData.isDefault || false,
        }),
      });

      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to update address');
      }

      // Refresh the addresses
      setAddresses(prevAddresses => 
        prevAddresses.map(addr => addr.id === addressId ? { ...addr, ...addressData } : addr)
      );
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating address:', error);
      // You might want to show an error message to the user
      alert(error instanceof Error ? error.message : 'Failed to update address');
    }
  };

  const handleSetDefault = async (addressId: string) => {
    try {
      if (!session?.user?.id) {
        throw new Error('User not authenticated');
      }

      const response = await fetch('/api/address', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          addressId,
          userId: session.user.id 
        }),
      });

      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to set default address');
      }

      // Update the addresses list with the new default and sort to put default first
      setAddresses(prevAddresses => {
        const updated = prevAddresses.map(addr => ({
          ...addr,
          isDefault: addr.id === addressId
        }));
        
        // Sort to put the default address first
        return updated.sort((a, b) => 
          (a.isDefault === b.isDefault) ? 0 : a.isDefault ? -1 : 1
        );
      });
      
    } catch (error) {
      console.error('Error setting default address:', error);
      alert(error instanceof Error ? error.message : 'Failed to set default address');
    }
  };

  if (isLoading) {
    return (
      <div className="w-full px-10 py-10 text-center">
        <p>Loading addresses...</p>
      </div>
    );
  }

  return (
    <div className="w-full px-10 relative">
      <div className="font-semibold text-xl mt-10 mb-6">
        <p>YOUR ADDRESSES</p>
      </div>
      
      <div className="mb-6">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Add New Address
        </button>
      </div>
      
      <hr className="mb-6 w-full border-gray-300 -mx-10" />
      
      <div className="space-y-6">
        {addresses.length > 0 ? (
          addresses.map((address) => (
            <div 
              key={address.id} 
              className={`p-6 border rounded-lg ${address.isDefault ? 'border-black' : 'border-gray-200'}`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">
                      {address.fullName}
                    </h3>
                    {address.isDefault && (
                      <span className="bg-black text-white text-xs px-2 py-1 rounded">
                        Default
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-1 text-gray-700">
                    <p className="flex items-start gap-2">
                      <span className="font-medium w-20">Điện thoại:</span>
                      <span>{address.phone}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-medium w-20">Địa chỉ:</span>
                      <span>{address.street}, {address.ward}, {address.city}</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button 
                    className="px-3 py-1 text-sm border border-black rounded hover:bg-gray-100"
                    onClick={() => {
                      setEditingAddress(address);
                      setIsModalOpen(true);
                    }}
                  >
                    Edit
                  </button>
                  {!address.isDefault && (
                    <button 
                      className="px-3 py-1 text-sm text-white bg-black rounded hover:bg-gray-800"
                      onClick={() => handleSetDefault(address.id)}
                    >
                      Set as Default
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 border rounded-lg">
            <p className="text-gray-500 mb-4">You don't have any saved addresses yet.</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Add Your First Address
            </button>
          </div>
        )}
      </div>

      <AddressFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingAddress(null);
        }}
        onSubmit={handleSaveAddress}
        initialData={editingAddress}
      />
    </div>
  );
}
