import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-blue-300 flex justify-between items-center py-4 px-6">
      <h5 className="text-green-600 font-bold text-sm md:text-2xl">Roshan <span className="text-white font-family:ui-monospace">Drilling</span></h5>
      <div className="flex ml-auto">
        {showArrow && (
          <button onClick={scrollToTop} className="text-white focus:outline-none block sm:hidden">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>
        )}
        <div id="navbarLinks" className="hidden sm:flex ml-auto">
          <a href="index.html" className="nav-link font-bold hover:text-lg hover:bg-green-400 hover:text-white hover:text-base hover:rounded-lg hover:px-2 hover:py-1 sm:px-2 sm:py-1">Home</a>
          <a href="/src/Pages/aboutUs.html" className="nav-link font-bold hover:text-lg hover:bg-green-400 hover:text-white hover:text-base hover:rounded-lg hover:px-2 hover:py-1 ml-2 sm:ml-5 sm:px-2 sm:py-1">About Us</a>
          <a href="/src/Pages/services.html" className="nav-link font-bold hover:text-lg hover:bg-green-400 hover:text-white hover:text-base hover:rounded-lg hover:px-4 hover:py-1 ml-2 sm:ml-5 sm:px-4 sm:py-1">Services</a>
          <a href="/src/Pages/contact.html" className="nav-link font-bold hover:text-lg hover:bg-green-400 hover:text-white hover:text-base hover:rounded-lg hover:px-4 hover:py-1 ml-2 sm:ml-5 sm:px-4 sm:py-1 mr-5 sm:mr-20">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
