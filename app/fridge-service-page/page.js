import RefrigeratorRepairServices from '../Components/RefrigeratorRepairServices'

import HowWeCanHelp from '../Components/HowWeCanHelp'

import Testimonials from '../Components/HomeTestimonials'

import HomeServicesCard from '../Components/HomeServicesCard'

import Fridgefaq from '../Components/Fridgefaq'

export const metadata = {
  title: "Refrigerator Repair Service in Coimbatore | Covai Home Tech",
  description: "Professional refrigerator repair services in Coimbatore for all major brands. Quick fixes for cooling issues, gas leakage, compressor problems, and maintenance support.",
};

export default function FridgeServicePage(){

    return(
        <>

        <RefrigeratorRepairServices/>

         <HowWeCanHelp/>

         <Testimonials/>

         <HomeServicesCard/>

         <Fridgefaq/>



        
        
        
        </>
    )
}