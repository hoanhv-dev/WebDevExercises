import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function Shop() {
  return (
    <div className='screen-max-width mx-auto'>
        <div className='flex flex-rows'>
            {/* Category Sidebar */}
            <div className='w-1/5 border border-gray-200 rounded-2xl p-10'>
                <div>
                    <p className='font-semibold text-xl mb-6'>Filters</p>
                </div>
                <hr className='mb-6 w-full h-[1px] bg-gray-200'/>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-row items-center justify-between'>
                        <p className='font-normal text-sm text-gray-400 cursor-pointer hover:text-black'>T-shirts</p>
                        <FaArrowRight className='text-gray-400 cursor-pointer hover:text-black hover:rotate-90 transition-all'/>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <p className='font-normal text-sm text-gray-400 cursor-pointer hover:text-black'>Shorts</p>
                        <FaArrowRight className='text-gray-400 cursor-pointer hover:text-black hover:rotate-90 transition-all'/>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <p className='font-normal text-sm text-gray-400 cursor-pointer hover:text-black'>Jeans</p>
                        <FaArrowRight className='text-gray-400 cursor-pointer hover:text-black hover:rotate-90 transition-all'/>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <p className='font-normal text-sm text-gray-400 cursor-pointer hover:text-black'>Hoodies</p>
                        <FaArrowRight className='text-gray-400 cursor-pointer hover:text-black hover:rotate-90 transition-all'/>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <p className='font-normal text-sm text-gray-400 cursor-pointer hover:text-black'>Shirts</p>
                        <FaArrowRight className='text-gray-400 cursor-pointer hover:text-black hover:rotate-90 transition-all'/>
                    </div>
                </div>
            </div>
            {/* Product Content */}
            <div className='w-4/5'>
                
            </div>
        </div>
    </div>
  )
}
