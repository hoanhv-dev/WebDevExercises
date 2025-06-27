"use client";

import ProductCard from "../ProductCard";
import { useState, useEffect } from "react";
import Banner from "./Banner";
import { ProductCardProps } from "../ProductCard";

export default function Body() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products...');
        const response = await fetch('/api/products');
        const contentType = response.headers.get('content-type');
        
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();
          console.error('Expected JSON but got:', text);
          throw new Error('Invalid response format');
        }
        
        const data = await response.json();
        console.log('Products data:', data);
        setProducts(data);
      } catch (error) {
        console.error('Error in fetchProducts:', error);
      }
    };
  
    fetchProducts();
  }, []);
  const newArrivalsProducts = products.filter((product) => product.category === 'new_arrival');
  const topSellingProducts = products.filter((product) => product.category === 'top_selling');

  return (
    <div className="w-full">
      {/* New Arrivals */}
      <div className="bg-white mt-10 mb-10">
        <div className="screen-max-width">
          <p className="text-4xl md:text-5xl font-bold text-center mb-12">
            NEW ARRIVALS
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivalsProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="border-2 border-black text-black font-medium px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors hover:cursor-pointer">
              View All
            </button>
          </div>
        </div>
      </div>
      <hr className="bg-gray-200" />

      {/* Top Selling Section */}
      <div className="bg-white mt-10 mb-10">
        <div className="screen-max-width">
          <p className="text-4xl md:text-5xl font-bold text-center mb-12">
            TOP SELLING
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {topSellingProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="border-2 border-black text-black font-medium px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors hover:cursor-pointer">
              View All
            </button>
          </div>
        </div>
      </div>
      <hr />
      <Banner />
    </div>
  );
}
