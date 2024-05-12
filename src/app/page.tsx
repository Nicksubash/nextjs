import Bar from "./Pages/Contact/page";
import HeroSection from "./components/Hero";
import ContactInfo from "./components/contactInfo";
import Credit from "./components/credit";
import Navbar from "./components/navbar";
import OurWork from "./components/our_work";
import Slider from "./components/ui/swiper";


export default function Home() {
  return (
    <>
    <Navbar/>    
  <HeroSection />
  <OurWork/>
  <ContactInfo/>
  <Credit/>
  

    </>
   
    
  );
}
