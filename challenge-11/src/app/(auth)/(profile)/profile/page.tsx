"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session, update } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Add handleInputChange function
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchProfile = async () => {
    if (!session?.user?.email) return;

    try {
      const response = await fetch("/api/profile", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        setFormData({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          address: data.address || "",
        });
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to fetch profile");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError("Failed to fetch profile");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (session?.user?.email) {
      fetchProfile();
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session?.user?.email) return;

    setError("");

    try {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (response.ok) {
        await update({
          ...session,
          user: {
            ...session.user,
            name: formData.name,
            phone: formData.phone,
            address: formData.address,
          },
        });
        setIsEditing(false);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("Failed to update profile");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Please sign in to view your profile
      </div>
    );
  }
  return (
    <div>
      <div className="mt-10">
        <div className="font-semibold text-3xl mb-10">
          <p>ACCOUNT PROFILE</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-xl mb-6 flex flex-col gap-4">
            <div>
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <span>Name:</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-black"
                  />
                </div>
              ) : (
                <p>Name: {formData.name}</p>
              )}
            </div>
            <div>
              <p>Email: {formData.email}</p>
            </div>
            <div>
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <span>Phone:</span>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-b border-gray-300 px-2 py-1 focus:outline-none focus:border-black"
                  />
                </div>
              ) : (
                <p>Phone: {formData.phone}</p>
              )}
            </div>
            <div>
              <p>Address: {formData.address}</p>
            </div>
          </div>
          <div>
            {isEditing ? (
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors hover:cursor-pointer"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-300 text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-400 transition-colors hover:cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors hover:cursor-pointer"
              >
                Edit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
