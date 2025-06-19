import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFadeInList } from "../hooks/useFadeInAnimation";
import type { WeddingItems, Venue, Registry } from "../storage/types";
import { useRef } from "react";
import { useFadeIn } from "../hooks/useFadeInAnimation";

type HomeBodyProps = {
  backgroundImage: string;
  subtitle: string;
  date: string;
  venue: Venue;
  registry: Registry;
  weddingItems: WeddingItems;
  gridItems: Array<{
    to: string;
    imgKey: keyof WeddingItems;
    itemKey: keyof WeddingItems;
    alt: string;
  }>;
}

// Type guard to check if items has the correct shape
const isWeddingItems = (items: unknown): items is WeddingItems => {
  return (
    typeof items === "object" &&
    items !== null &&
    "item1" in items &&
    "img1" in items
  );
};

export default function HomeBody({
  backgroundImage,
  subtitle,
  date,
  venue,
  registry,
  weddingItems,
  gridItems,
  }: HomeBodyProps) {
  const [showText, setShowText] = useState(false);
  const { getRef, getClassName } = useFadeInList(4); // 4 items in the grid
  const hasValidItems = isWeddingItems(weddingItems);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 30);
    return () => clearTimeout(timer);
  }, []);

  const registryRef = useRef<HTMLDivElement>(null!); // Using non-null assertion as we know it will be assigned
  const { className: registryAnimationClass } = useFadeIn(registryRef);

  return (
    <>
      <div className="w-full bg-white mb-8 sm:mb-6">
        <div className="mx-auto max-w-full md:max-w-[1200px] h-[50vh] sm:h-[60vh] md:h-[70vh] relative overflow-hidden">
          <div className="w-full h-full">
            <img
              src={backgroundImage}
              alt="body-home"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div
              className={`text-white font-playfair max-w-lg transition-opacity duration-1000 ease-out transform -translate-y-4 sm:-translate-y-8 ${
                showText ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4 leading-relaxed px-2 sm:px-0">
                {subtitle}
              </p>
              <br className="hidden sm:block" />
              <div className="text-base sm:text-xl md:text-2xl space-y-1 sm:space-y-2">
                <p>{date}</p>
                <p>{venue.name}</p>
                <p>{venue.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-24 w-full sm:w-[90%] md:w-[800px] h-auto px-4 sm:px-6 py-8 sm:py-12">
        {gridItems.map(({ to, imgKey, itemKey, alt }, index) => (
          <Link
            key={to}
            to={to}
            className={`block relative group aspect-[4/5] sm:aspect-square md:aspect-[4/5] ${getClassName(
              index
            )}`}
            ref={getRef(index)}
          >
            {hasValidItems && weddingItems[imgKey] && (
              <>
                <img
                  src={weddingItems[imgKey]}
                  alt={alt}
                  className="w-full h-full object-cover rounded-2xl border-none transition-all duration-300 group-hover:brightness-120"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:brightness-120">
                  <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-playfair px-4 text-center">
                    {weddingItems[itemKey] || alt}
                  </p>
                </div>
              </>
            )}
          </Link>
        ))}
      </div>

      <div className="relative w-full max-w-[1280px] mt-12 mx-auto">
        {/* Image Wrapper */}
        <div className="relative w-full">
          <img
            src={registry.img}
            alt="body-2-home"
            className="w-full h-[500px] md:h-[747px] object-cover"
          />

          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-6 md:px-8 z-10">
            <div
              ref={registryRef}
              className={`text-white max-w-[600px] ${registryAnimationClass}`}
            >
              <p className="text-3xl md:text-5xl font-playfair mb-4 md:mb-6">
                {registry.title}
              </p>
              <p className="text-base sm:text-lg md:text-2xl font-playfair mb-6 md:mb-8">
                {registry.subtitle}
              </p>
              <Link
                to={registry.link}
                className="inline-block bg-[rgb(125,118,98)] hover:bg-[rgb(73,70,62)] text-white text-lg md:text-xl px-6 md:px-8 py-3 rounded-full transition-colors duration-300"
              >
                GO TO REGISTRY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

