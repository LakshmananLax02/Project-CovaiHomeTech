import ACRepairServices from '../Components/ACRepairServices'

import ACHowWeCanHelp from '../Components/ACHowCanHelp'

import ACTestimonials from '../Components/ACTestimonials'

import HomeServicesCard from '../Components/HomeServicesCard'

import ACfaq from '../Components/ACfaq'

import  DisclaimerSection from '../Components/DisclaimerSection'

export const metadata = {
  title: "AC Repair & Service in Coimbatore | Covai Home Tech",
  description: "Expert AC repair and maintenance services in Coimbatore for all brands. Fast cooling issue fixes, gas refill, installation, and servicing by skilled technicians.",
};

export default function ACServicePage(){

    return(
        <>

        <ACRepairServices/>

         <ACHowWeCanHelp/>

         <ACTestimonials/>

         <HomeServicesCard/>

         <ACfaq/>

         <DisclaimerSection/>



        
        
        
        </>
    )
}