import React from 'react';
import Image from 'next/image';
import backgroundImage from "../resources/bg1.jpg"

const ImageText = () => {
  return (

    <main className='flex flex-col items-center justify-between'>
    <div className="relative w-full">
        <div className='absolute -z-10 w-full'>
        <Image src={backgroundImage} alt="image" className="w-full" width={200} height={100}/>
        </div>
         <h1 className="text-white text-base md:text-3xl bg-green-600 sm:p-3 font-bold text-center">Who are we?</h1>
        <p id="animatedHeading" className="text-xs lg:text-xl text-white mt-1 font-title text-wrap text-center px-2 py-2">At Roshan Drilling and Construction Pvt. Ltd., we're committed to offering the best drilling solutions for our customers' needs.<br /> We specialize in water well drilling and core drilling projects, using the latest equipment and knowledge to get excellent results.<br /> Our services are fast and efficient, from setting up equipment to finishing the project. Discover how we can help you reach your goals.</p>
    </div>
    </main>
    
    
  );
};

export default ImageText;
