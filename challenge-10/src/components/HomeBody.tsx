import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useFadeIn, useFadeInList } from "../hooks/useFadeInAnimation";

const HomeBody = () => {
  const [showText, setShowText] = useState(false);
  const registryRef = useRef<HTMLDivElement>(null);
  const { className: registryAnimationClass } = useFadeIn(registryRef);
  const { getRef, getClassName } = useFadeInList(4); // 4 items in the grid

  // Initialize text animation
  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 30);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="w-full bg-white mb-8 sm:mb-12">
        <div className="mx-auto max-w-full md:max-w-[1200px] h-[50vh] sm:h-[60vh] md:h-[70vh] relative overflow-hidden">
          <div className="w-full h-full">
            <img
              src="/Home/body-home.avif"
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
                With love and gratitude, we invite you to share in the joy of our
                wedding day.
              </p>
              <br className="hidden sm:block" />
              <div className="text-base sm:text-xl md:text-2xl space-y-1 sm:space-y-2">
                <p>Saturday, September 20, 2025</p>
                <p>The Golden Elm Manor,</p>
                <p>St. Augustine, New York</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-24 w-full sm:w-[90%] md:w-[800px] h-auto px-4 sm:px-6 py-8 sm:py-12">
        <Link
          to="/our-story"
          className={`block relative group aspect-[4/5] sm:aspect-square md:aspect-[4/5] ${getClassName(0)}`}
          ref={getRef(0)}
        >
          <img
            src="/Home/story-img.webp"
            alt="Our Story"
            className="w-full h-full object-cover rounded-2xl border-none transition-all duration-300 group-hover:brightness-120"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:brightness-120">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-playfair px-4 text-center">
              Our Story
            </h3>
          </div>
        </Link>

        <Link
          to="/details"
          className={`block relative group aspect-[4/5] sm:aspect-square md:aspect-[4/5] ${getClassName(1)}`}
          ref={getRef(1)}
        >
          <img
            src="/Home/details-img.avif"
            alt="Wedding Details"
            className="w-full h-full object-cover rounded-2xl border-none transition-all duration-300 group-hover:brightness-120"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:brightness-120">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-playfair px-4 text-center">
              Wedding Details
            </h3>
          </div>
        </Link>

        <Link
          to="/gallery"
          className={`relative group aspect-[4/5] sm:aspect-square md:aspect-[4/5] ${getClassName(2)}`}
          ref={getRef(2)}
        >
          <img
            src="/Home/RSVP-img.webp"
            alt="RSVP"
            className="w-full h-full object-cover rounded-2xl border-none transition-all duration-300 group-hover:brightness-120"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:brightness-120">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-playfair px-4 text-center">
              RSVP
            </h3>
          </div>
        </Link>

        <Link
          to="/rsvp"
          className={`relative group aspect-[4/5] sm:aspect-square md:aspect-[4/5] ${getClassName(3)}`}
          ref={getRef(3)}
        >
          <img
            src="/Home/register-img.webp"
            alt="Registry"
            className="w-full h-full object-cover rounded-2xl border-none transition-all duration-300 group-hover:brightness-120"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:brightness-120">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-playfair px-4 text-center">
              Registry
            </h3>
          </div>
        </Link>
      </div>

      <div className="relative w-full mt-8 sm:mt-12 overflow-hidden" style={{ minHeight: '400px' }}>
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/Home/body-2-home.avif"
            alt="body-2-home"
            className="w-full h-full object-cover"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8" style={{ minHeight: 'inherit' }}>
          <div
            className={`text-white ${registryAnimationClass} w-full max-w-[90%] sm:max-w-[80%] md:max-w-[600px]`}
            ref={registryRef}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair mb-4 sm:mb-6">REGISTRY</h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-playfair mb-6 sm:mb-8">
              Your presence is the most cherished gift. Should you wish to
              contribute, we've created a honeymoon registry to help us embark
              on a memorable adventure to the Amalfi Coast.
            </p>
            <Link 
              to="/registry" 
              className="inline-block bg-[rgb(125,118,98)] hover:bg-[rgb(73,70,62)] text-white text-base sm:text-lg md:text-xl px-6 py-2 sm:px-8 sm:py-3 rounded-full transition-colors duration-300"
            >
              GO TO REGISTRY
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBody;
