import ACRepairServices from '../Components/ACRepairServices'

import HowWeCanHelp from '../Components/HowWeCanHelp'

import Testimonials from '../Components/HomeTestimonials'

import HomeServicesCard from '../Components/HomeServicesCard'

import ACfaq from '../Components/ACfaq'

export const metadata = {
  title: "AC Repair & Service in Coimbatore | Covai Home Tech",
  description: "Expert AC repair and maintenance services in Coimbatore for all brands. Fast cooling issue fixes, gas refill, installation, and servicing by skilled technicians.",
};

export default function ACServicePage(){

    return(
        <>

        <ACRepairServices/>

         <HowWeCanHelp/>

         <Testimonials/>

         <HomeServicesCard/>

         <TVfaq/>



        
        
        
        </>
    )
}