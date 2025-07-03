"use client";
import { Switch, Tag, Spin, message } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  basePrice: number;
  discountedPrice: number;
  isActive: boolean;
  isFeatured: boolean;
  tags: string[];
  inventory: {
    sku: string;
    stock: number;
    sold: number;
    available: number;
  };
  images: Array<{
    id: number;
    url: string;
    isPrimary: boolean;
  }>;
}

export default function PageDetails() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/admin/products/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        message.error('Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="p-4 text-red-500">
        {error || 'Product not found'}
      </div>
    );
  }
  return (
    <div className="flex flex-row gap-5">
      <div className="flex flex-col w-2/3 gap-5 ">
        {/* Basic Information */}
        <div className="bg-white gap-10 p-4 rounded-2xl border border-gray-300">
          <div className="p-4 space-y-2">
            <p className="text-2xl font-bold mb-4">Product Details</p>
            <p className="text-lg font-normal">Product Name</p>
            <p className="text-sm font-normal text-gray-700 border border-gray-300 rounded-md p-2 w-full">{product.name}</p>
            <p className="text-lg font-normal">Description</p>
            <p className="text-sm font-normal text-gray-700 border border-gray-300 rounded-md p-2 w-full min-h-[100px]">
              {product.description}
            </p>
            <div className="flex flex-row gap-2">
              <div className="flex-1 space-y-2">
                <p className="text-lg font-normal">Category</p>
                <p className="text-sm font-normal text-gray-700 border border-gray-300 rounded-md p-2 w-full">
                  {product.category}
                </p>
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-lg font-normal">Brand</p>
                <p className="text-sm font-normal text-gray-700 border border-gray-300 rounded-md p-2 w-full">
                  {product.brand}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Product Images */}
        <div className="bg-white gap-10 p-4 rounded-2xl border border-gray-300">
          <div className="p-4 space-y-2">
            <p className="text-2xl font-bold mb-4">Product Images</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <button className="w-36 h-36 object-cover border border-gray-300 rounded-2xl border-dashed flex flex-col items-center justify-center cursor-pointer hover:border-gray-500 hover:bg-gray-50">
                  <p className="text-2xl font-bold">+</p>
                  <p className="text-sm text-gray-500 font-semibold">
                    Upload Image
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Variants */}
        <div className="bg-white gap-10 p-4 rounded-2xl border border-gray-300">
          <div className="p-4 space-y-2">
            <p className="text-2xl font-bold mb-4">Product Variants</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-1/3 gap-5">
        {/* Status */}
        <div className="bg-white gap-10 p-4 rounded-2xl border border-gray-300">
          <div className="p-4 space-y-2">
            <p className="text-2xl font-bold mb-4">Status</p>
            <div className="justify-between flex">
              <p>Active</p>
              <Switch checked={product.isActive} />
            </div>
            <div className="justify-between flex">
              <p>Featured</p>
              <Switch checked={product.isFeatured} />
            </div>
          </div>
        </div>
        {/* Pricing */}
        <div className="bg-white gap-10 p-4 rounded-2xl border border-gray-300">
          <div className="p-4 space-y-2">
            <p className="text-2xl font-bold mb-4">Pricing</p>
          </div>
          <div>
            <p>Base Price</p>
            <p className="text-sm font-normal text-gray-700 border border-gray-300 rounded-md p-2 w-full">
              ${product?.basePrice?.toFixed(2) || '0.00'}
            </p>
          </div>
          <div>
            <p>Discounted Price</p>
            <p className="text-sm font-normal text-gray-700 border border-gray-300 rounded-md p-2 w-full">
              ${product?.discountedPrice?.toFixed(2) || '0.00'}
            </p>
          </div>
        </div>
        {/* Tags */}
        <div className="bg-white gap-10 p-4 rounded-2xl border border-gray-300">
          <div className="p-4 space-y-2">
            <p className="text-2xl font-bold">Tags</p>
          </div>
          <div className="flex flex-row flex-wrap gap-2 p-4">
            {product?.tags?.map((tag, index) => (
              <Tag 
                key={index} 
                color={
                  index % 3 === 0 ? 'blue' : 
                  index % 3 === 1 ? 'green' : 'red'
                }
              >
                {tag}
              </Tag>
            ))}
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-sm font-normal text-gray-700 border border-gray-300 rounded-md p-2 w-full">Add new tag</p>
            <button className="bg-black text-white px-4 py-2 rounded-md w-1/5">
              Add
            </button>
          </div>
        </div>
        {/* Inventory Summary */}
        <div className="bg-white gap-10 p-4 rounded-2xl border border-gray-300">
          <div className="p-4 space-y-4">
            <p className="text-2xl font-bold">Inventory Summary</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">SKU</p>
                <p className="font-medium">{product?.inventory?.sku || 'N/A'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">In Stock</p>
                <p className="font-medium">{product?.inventory?.stock || 'N/A'} units</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Available</p>
                <p className="font-medium">{product?.inventory?.available || 'N/A'} units</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Sold</p>
                <p className="font-medium">{product?.inventory?.sold || 'N/A'} units</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
