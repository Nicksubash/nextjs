import ContactInfo from "@/app/components/contactInfo";
import Credit from "@/app/components/credit";
import DrillService from "@/app/components/drillService";
import Navbar from "@/app/components/navbar";
import React from "react";
export default function Service(){

    return(<>
      <Navbar/>
      <DrillService/>
      <ContactInfo/>
      <Credit/>
    </>
      
    )

}