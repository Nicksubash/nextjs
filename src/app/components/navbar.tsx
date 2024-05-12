import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-300 flex justify-between items-center py-4 px-6">
      <h5 className="text-green-600 font-bold text-sm md:text-4xl">Roshan <span className="text-white font-family:ui-monospace">Drilling</span></h5>
      <div className="flex ml-auto">
        <button id="menuBtn" className="text-white focus:outline-none block sm:hidden">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div id="navbarLinks" className="hidden sm:flex ml-auto  md:text-2xl">
          <a href="" className="nav-link font-bold hover:text-lg hover:bg-green-400 hover:text-white hover:text-base hover:rounded-lg hover:px-2 hover:py-1 sm:px-2 sm:py-1">Home</a>
          <a href="/Pages/aboutUs" className="nav-link font-bold hover:text-lg hover:bg-green-400 hover:text-white hover:text-base hover:rounded-lg hover:px-2 hover:py-1 ml-2 sm:ml-5 sm:px-2 sm:py-1">About Us</a>
          <a href="/Pages/Services" className="nav-link font-bold hover:text-lg hover:bg-green-400 hover:text-white hover:text-base hover:rounded-lg hover:px-4 hover:py-1 ml-2 sm:ml-5 sm:px-4 sm:py-1">Services</a>
          <a href="/Pages/Contact" className="nav-link font-bold hover:text-lg hover:bg-green-400 hover:text-white hover:text-base hover:rounded-lg hover:px-4 hover:py-1 ml-2 sm:ml-5 sm:px-4 sm:py-1 mr-5 sm:mr-20">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
