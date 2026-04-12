import TVRepairServices from '../Components/TVRepairServices'

import HowWeCanHelp from '../Components/HowWeCanHelp'

import Testimonials from '../Components/HomeTestimonials'

import HomeServicesCard from '../Components/HomeServicesCard'

import Homefaq from '../Components/Homefaq'

export const metadata = {
  title: "TV Repair Service in Coimbatore | LED, LCD & Smart TV Repair",
  description: "Reliable TV repair services in Coimbatore for LED, LCD, and Smart TVs. Screen issues, sound problems, motherboard repair, and doorstep service available.",
};

export default function TVServicePage(){

    return(
        <>

        <TVRepairServices/>

         <HowWeCanHelp/>

         <Testimonials/>

         <HomeServicesCard/>

         <Homefaq/>



        
        
        
        </>
    )
}