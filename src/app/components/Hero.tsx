// "use client";
import React,{useState} from "react";
import Image from "next/image";
import bg from '/public/img/bg.jpg'
import Slider from "./ui/swiper";



const HeroSection = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-between">
        <div className="relative w-full h-screen">
            <div className=" absolute -z-10 text-center" >
                 <Image src={bg} alt="bg" />
                 <div className="absolute inset-0 bg-black opacity-60"></div>
                 </div>
             <div className="w-full h-full text-center  bg-green-600">             
             <h1 className="text-white text-base md:text-6xl sm:p-3 font-bold ">Who are we?</h1>
            <p id="animatedHeading" className="text-xs lg:text-2xl text-white mt-1 font-title text-wrap text-center px-2 py-5">At Roshan Drilling and Construction Pvt. Ltd.,<br></br> we're committed to offering the best drilling solutions for our customers' needs.<br />We specialize in water well drilling and core drilling projects, using the latest equipment and knowledge to get excellent results.<br />Our services are fast and efficient, from setting up equipment to finishing the project. Discover how we can help you reach your goals.</p>
            <Slider/>

             </div>
             </div>            
           
    </div>
    
         

    </>
    
  );
};

export default HeroSection;

