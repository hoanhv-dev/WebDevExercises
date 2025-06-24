"use client";

import React from 'react';
import { useCart } from '@/context/CartContext';

export type ProductCardProps = {
  name: string;
  price: string;
  originalPrice?: string;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  discount?: number;
};

// Star icon component
const StarIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ProductCard = ({
  name,
  price,
  originalPrice,
  category,
  image,
  rating,
  discount,
}: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: name.toLowerCase().replace(/\\s+/g, '-'),
      name,
      price: parseFloat(price.replace(/[^0-9.]/g, '')),
      image,
    });
  };
  // Render star ratings
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<StarIcon key={i} className="w-4 h-4 text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<StarIcon key={i} className="w-4 h-4 text-yellow-400" />);
      } else {
        stars.push(<StarIcon key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="relative group">
      <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
        {/* Product image */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder-product.jpg";
          }}
        />

        {/* Quick actions */}
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button 
            onClick={handleAddToCart}
            className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-opacity-90 transition-colors hover:bg-gray-100 hover:cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="text-left">
        <p className="text-gray-500 text-sm mb-1">{category}</p>
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">{name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-1">
          <div className="flex">{renderStars()}</div>
          <span className="text-gray-500 text-xs ml-1">({rating}/5.0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-start gap-5">
          <div className="flex items-center">
            <span className="font-bold text-gray-900">{price}</span>
            {originalPrice && (
              <span className="text-gray-400 line-through text-sm ml-2">
                {originalPrice}
              </span>
            )}
          </div>
          {discount && (
            <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-xl">
              -{discount}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
