// "use client";
<<<<<<< HEAD
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


// import { motion } from "framer-motion";
// import { LampContainer } from "./ui/LampDemo";

// function Hero() {
//     const [revealText,setRevealText]=useState(false);

//     const handleSwipe=()=>{
//         setRevealText(true);
//     }
//   return (
//     <LampContainer>
//       <motion.h1
//         initial={{ opacity: 0.5, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.6,
//           duration: 0.6,
//           ease: "easeInOut",
//         }}
//         className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
//       >
//         <span className="text-green-600">Roshan</span> Construction
//         {/* Reveal effect */}
//         <div className="relative overflow-hidden">
//           <p className="text-2xl z-10 relative text-slate-500">we create dream</p>
//           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-green-400 animate-reveal"></div>
//         </div>
//         {/* End of reveal effect */}
//       </motion.h1>
//     </LampContainer>
//   );
// }

// export default H
=======
// import React,{useState} from "react";
// import { motion } from "framer-motion";
// import { LampContainer } from "./ui/LampDemo";

// function Hero() {
//     const [revealText,setRevealText]=useState(false);

//     const handleSwipe=()=>{
//         setRevealText(true);
//     }
//   return (
//     <LampContainer>
//       <motion.h1
//         initial={{ opacity: 0.5, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.6,
//           duration: 0.6,
//           ease: "easeInOut",
//         }}
//         className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
//       >
//         <span className="text-green-600">Roshan</span> Construction
//         {/* Reveal effect */}
//         <div className="relative overflow-hidden">
//           <p className="text-2xl z-10 relative text-slate-500">we create dream</p>
//           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-green-400 animate-reveal"></div>
//         </div>
//         {/* End of reveal effect */}
//       </motion.h1>
//     </LampContainer>
//   );
// }

// export default Hero;


// function Hero(){

// }
>>>>>>> 4e09173e4cd888a6782037cffb37a14675c61e28
