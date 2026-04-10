import WashingMachineServices from '../Components/WashingMachineServices'

import HowWeCanHelp from '../Components/HowWeCanHelp'

import Testimonials from '../Components/HomeTestimonials'

import HomeServicesCard from '../Components/HomeServicesCard'

import Homefaq from '../Components/Homefaq'

export const metadata = {
  title: "Refrigerator Repair Service in Coimbatore | Covai Home Tech",
  description: "Professional refrigerator repair services in Coimbatore for all major brands. Quick fixes for cooling issues, gas leakage, compressor problems, and maintenance support.",
};

export default function FridgeServicePage(){

    return(
        <>

        <WashingMachineServices/>

         <HowWeCanHelp/>

         <Testimonials/>

         <HomeServicesCard/>

         <Homefaq/>



        
        
        
        </>
    )
}