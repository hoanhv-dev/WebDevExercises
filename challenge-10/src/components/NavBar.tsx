import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFading, setIsFading] = useState(false);
  
  // Check if current path matches the nav item
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Toggle menu with fade effect
  const toggleMenu = () => {
    if (isMobile) {
      setIsFading(true);
      setTimeout(() => {
        setIsFading(false);
        setIsMenuOpen(!isMenuOpen);
      }, 150); // Match this with the CSS transition duration
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  // Navigation items
  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/our-story', label: 'OUR STORY' },
    { path: '/details', label: 'DETAILS' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex flex-row justify-between items-center px-6 py-4 md:px-12 transition-colors duration-500 ${
        isMobile ? 'bg-[rgb(238,238,235)]' : 'bg-[rgba(68,66,62,0.8)]'
      }`}>
        <div className={`transition-opacity duration-500 ${isFading ? 'opacity-30' : 'opacity-100'}`}>
          <Link to="/" className="flex flex-row items-center gap-3">
            <img 
              src={isMobile ? "/logo.svg" : "/white-logo.svg"} 
              alt="logo" 
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <p className={`text-sm font-medium tracking-wide ${
              isMobile ? 'text-black' : 'text-white'
            }`}>
              JUNE 23, 2025
            </p>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-row items-center gap-10 text-white text-sm font-medium tracking-wider">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={`hover:text-gray-300 transition-colors ${isActive(item.path) ? 'font-bold' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none uppercase tracking-wider text-lg py-2"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div 
          className={`fixed top-16 left-0 right-0 bg-[rgb(238,238,235)] z-40 shadow-md transition-all duration-500 ease-in-out transform ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col items-stretch py-2 underline">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-center py-4 text-black text-sm font-medium tracking-wider hover:bg-black/10 transition-colors ${
                    isActive(item.path) ? 'font-bold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
