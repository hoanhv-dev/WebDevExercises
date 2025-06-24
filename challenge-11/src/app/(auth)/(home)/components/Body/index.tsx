import ProductCard from "../ProductCard";
import { ProductCardProps } from "../ProductCard";
import Banner from "./Banner";

export default function Body() {
  const newArrivalsProducts = [
    {
      name: "T-SHIRT WITH TAPE DETAILS",
      price: "$120",
      image: "/image 1.png",
      rating: 4.5,
      reviewCount: 45
    },
    {
      name: "SKINNY FIT JEANS",
      price: "$240",
      originalPrice: "$260",
      image: "/image 2.png",
      rating: 3.5,
      reviewCount: 32,
      discount: 20
    },
    {
      name: "CHECKERED SHIRT",
      price: "$180",
      image: "/image 3.png",
      rating: 4.5,
      reviewCount: 28,
    },
    {
      name: "SLEEVE STRIPED T-SHIRT",
      price: "$130",
      originalPrice: "$160",
      image: "/image 4.png",
      rating: 4.5,
      reviewCount: 51,
      discount: 30
    },
  ] as ProductCardProps[];

  const topSellingProducts = [
    {
      name: "VERTICAL STRIPED SHIRT",
      price: "$212",
      originalPrice: "$232",
      image: "/image 7.png",
      rating: 4.0,
      reviewCount: 45,
      discount: 20
    },
    {
      name: "COURAGE GRAPHIC T-SHIRT",
      price: "$145",
      image: "/image 8.png",
      rating: 4.0,
      reviewCount: 32,
    },
    {
      name: "LOOSE FIT BERMUDA SHORTS",
      price: "$80",
      image: "/image 9.png",
      rating: 3.0,
      reviewCount: 28,
    },
    {
      name: "FADED SKINNY JEANS",
      price: "$210",
      image: "/image 10.png",
      rating: 4.5,
      reviewCount: 51,
    },    
  ] as ProductCardProps[];

  return (
    <div className="w-full">
      {/* New Arrivals */}
      <div className="bg-white py-16 px-4">
        <div className="screen-max-width">
          <p className="text-4xl md:text-5xl font-bold text-center mb-12">
            NEW ARRIVALS
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <div className="bg-white py-16 px-4">
        <div className="screen-max-width">
          <p className="text-4xl md:text-5xl font-bold text-center mb-12">
            TOP SELLING
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
