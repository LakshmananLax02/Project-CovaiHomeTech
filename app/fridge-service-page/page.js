import RefrigeratorRepairServices from '../Components/RefrigeratorRepairServices'

import FridgeHowWeCanHelp from '../Components/FridgeHowCanHelp'

import FridgeTestimonials from '../Components/FridgeTestimonials'

import HomeServicesCard from '../Components/HomeServicesCard'

import Fridgefaq from '../Components/Fridgefaq'

import  DisclaimerSection from '../Components/DisclaimerSection'


export const metadata = {
  title: "Refrigerator Repair Service in Coimbatore | Covai Home Tech",
  description: "Professional refrigerator repair services in Coimbatore for all major brands. Quick fixes for cooling issues, gas leakage, compressor problems, and maintenance support.",
};

export default function FridgeServicePage(){

    return(
        <>

        <RefrigeratorRepairServices/>

         <FridgeHowWeCanHelp/>

         <FridgeTestimonials/>

         <HomeServicesCard/>

         <Fridgefaq/>

          <DisclaimerSection/>



        
        
        
        </>
    )
}