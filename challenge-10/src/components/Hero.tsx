import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    // Get the height of the hero section
    if (heroRef.current) {
      setHeroHeight(heroRef.current.offsetHeight);
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTextStyle = (): React.CSSProperties => {
    const scrollProgress = Math.min(scrollY / (heroHeight * 0.8), 1);
    
    return {
      transform: `translateY(${scrollY * 0.7}px)`,
      opacity: 1,
      visibility: scrollProgress >= 1 ? 'hidden' : 'visible' as const
    };
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden"
    >
      <div className="absolute inset-0 bg-white bg-center"></div>
      
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={getTextStyle()}
      >
        <div className="text-center text-black px-4 w-full max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-playfair px-4">
            Jessica & James
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;