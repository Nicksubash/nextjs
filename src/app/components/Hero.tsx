// "use client";
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