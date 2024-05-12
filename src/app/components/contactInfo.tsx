import React from 'react';

const ContactInfo = () => {
  return (
    <div className="cta-container bg-blue-500 text-white py-4 px-6 rounded-lg shadow-md mb-1 mt-5 sm:flex md:flex-col lg:flex-row lg:items-center lg:justify-between">
      <div className="mb-4 lg:mb-0">
        <h2 className="text-xl md:text-xl font-bold mb-2">Ready to Get Started?</h2>
        <p className="text-xs md:text-xl mb-4">Contact us today for inquiries or to request a quote.</p>
        <a href="contact.html" className="bg-white text-blue-500 hover:bg-green-400 hover:text-white py-2 px-2 rounded-sm md:rounded-full inline-block transition duration-300">Contact Us</a>
      </div>
  
      <div className="social text-lg text-white lg:text-right">
        <span className="text-xl md:text-2xl font-bold mb-2 tracking-wide text-white">Social</span>
        <p className="text-xs md:text-xl mb-4">Kalanki-14, Kathmandu <br />Phone: +1234567890</p>  
        <a href="#" className="mr-4 hover:text-lg hover:bg-green-400 hover:text-white hover:text-lg hover:rounded-lg hover:px-2 hover:py-1"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="mr-4 hover:text-lg hover:bg-green-400 hover:text-white hover:text-lg hover:rounded-lg hover:px-2 hover:py-1"><i className="fab fa-twitter"></i></a>
        <a href="#" className="mr-4 hover:text-lg hover:bg-green-400 hover:text-white hover:text-lg hover:rounded-lg hover:px-2 hover:py-1"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  );
};

export default ContactInfo;
