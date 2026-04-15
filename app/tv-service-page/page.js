import TVRepairServices from '../Components/TVRepairServices'

import TVHowCanHelp from '../Components/TVHowCanHelp'

import TVTestimonials from '../Components/TVTestimonials'

import HomeServicesCard from '../Components/HomeServicesCard'

import TVfaq from '../Components/TVfaq'

import  DisclaimerSection from '../Components/DisclaimerSection'


export const metadata = {
  title: "TV Repair Service in Coimbatore | LED, LCD & Smart TV Repair",
  description: "Reliable TV repair services in Coimbatore for LED, LCD, and Smart TVs. Screen issues, sound problems, motherboard repair, and doorstep service available.",
};

export default function TVServicePage(){

    return(
        <>

        <TVRepairServices/>

         <TVHowCanHelp/>

         <TVTestimonials/>

         <HomeServicesCard/>

         <TVfaq/>

          <DisclaimerSection/>



        
        
        
        </>
    )
}