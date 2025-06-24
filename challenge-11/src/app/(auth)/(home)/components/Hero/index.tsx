import React from "react";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-[#F0F0F0] overflow-hidden p-16"
        style={{
          height: "90vh",
          minHeight: "600px",
          maxHeight: "1000px",
        }}
      >
        <div className="absolute inset-0 w-full h-auto">
          <img
            src="/Hero.png"
            alt="Hero background"
            className="w-full h-full object-cover object-center"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative z-10 screen-max-width mx-auto h-full flex flex-col lg:flex-row items-center py-16">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-8">
            <div className="relative">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black ${inter.className}">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </p>
            </div>
            <p className="text-base text-gray-600 mb-8 max-w-lg">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors hover:cursor-pointer">
              Shop Now
            </button>

            {/* Stats */}
            <div className="grid grid-cols-3 mt-16 gap-8">
              <div className="flex flex-col items-start border-r border-gray-400">
                <p className="text-2xl font-bold text-black">200+</p>
                <p className="text-sm text-gray-600">International Brands</p>
              </div>
              <div className="flex flex-col items-start border-r border-gray-400">
                <p className="text-2xl font-bold text-black">2,000+</p>
                <p className="text-sm text-gray-600">High-Quality Products</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-2xl font-bold text-black">30,000+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Brand Logos Section */}
      <div className="bg-black py-6">
        <div className="screen-max-width flex flex-wrap justify-center items-center gap-8 md:gap-16 px-4">
          {[
            "/Group.png",
            "/zara-logo-1 1.png",
            "/gucci-logo-1 1.png",
            "/prada-logo-1 1.png",
            "/Group (1).png",
          ].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Brand"
              className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
