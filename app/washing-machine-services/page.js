import WashingMachineServices from '../Components/WashingMachineServices'

import HowWeCanHelp from '../Components/HowWeCanHelp'

import Testimonials from '../Components/HomeTestimonials'

import HomeServicesCard from '../Components/HomeServicesCard'

import WashingMachinefaq from '../Components/WashingMachinefaq'

export const metadata = {
  title: "Washing Machine Repair Service in Coimbatore | Covai Home Tech",
  description: "Professional washing machine repair services in Coimbatore for all brands and models. Quick diagnosis, expert technicians, and affordable pricing. Book your service today.",
};

export default function WashingMachineService(){

    return(
        <>

        <WashingMachineServices/>

         <HowWeCanHelp/>

         <Testimonials/>

         <HomeServicesCard/>

         <WashingMachinefaq/>



        
        
        
        </>
    )
}