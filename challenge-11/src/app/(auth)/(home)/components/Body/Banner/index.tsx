"use client";

import React from 'react';

export default function Banner() {
  return (
    <div className="bg-[#F0F0F0] pt-10 md:pt-20 mt-10 md:mt-20 rounded-3xl md:rounded-[40px] px-4 sm:px-8 md:px-0">
      <div className="px-4">
        <p className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
          BROWSE BY DRESS STYLE
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mx-4 sm:mx-8 md:ml-16 md:mr-16">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
          {/* Casual */}
          <div className="relative w-full sm:w-1/3 h-40 sm:h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">
            <img 
              src="/image 11.png" 
              alt="Casual" 
              className='w-full h-full object-cover'
            />
            <div className="absolute inset-0 top-3 sm:top-4 left-4 sm:left-6 md:left-10">
              <span className="text-black text-xl sm:text-2xl md:text-3xl font-bold">Casual</span>
            </div>
          </div>
          
          {/* Party */}
          <div className="relative w-full sm:w-2/3 h-40 sm:h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">
            <img 
              src="/image 13.png" 
              alt="Party" 
              className='w-full h-full object-cover'
            />
            <div className="absolute inset-0 top-3 sm:top-4 left-4 sm:left-6 md:left-10">
              <span className="text-black text-xl sm:text-2xl md:text-3xl font-bold">Party</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {/* Formal */}
          <div className="relative w-full sm:w-2/3 h-40 sm:h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">
            <img 
              src="/image 12.png" 
              alt="Formal" 
              className='w-full h-full object-cover'
            />
            <div className="absolute inset-0 top-3 sm:top-4 left-4 sm:left-6 md:left-10">
              <span className="text-black text-xl sm:text-2xl md:text-3xl font-bold">Formal</span>
            </div>
          </div>
          
          {/* Gym */}
          <div className="relative w-full sm:w-1/3 h-40 sm:h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">
            <img 
              src="/image 14.png" 
              alt="Gym" 
              className='w-full h-full object-cover'
            />
            <div className="absolute inset-0 top-3 sm:top-4 left-4 sm:left-6 md:left-10">
              <span className="text-black text-xl sm:text-2xl md:text-3xl font-bold">Gym</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}