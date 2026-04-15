import WashingMachineServices from '../Components/WashingMachineServices'

import WashingMachineHowCanHelp from '../Components/WashingMachineHowCanHelp'

import WashingMachineTestimonials from '../Components/WashingMachineTestimonials'

import HomeServicesCard from '../Components/HomeServicesCard'

import WashingMachinefaq from '../Components/WashingMachinefaq'

import  DisclaimerSection from '../Components/DisclaimerSection'


export const metadata = {
  title: "Washing Machine Repair Service in Coimbatore | Covai Home Tech",
  description: "Professional washing machine repair services in Coimbatore for all brands and models. Quick diagnosis, expert technicians, and affordable pricing. Book your service today.",
};

export default function WashingMachineService(){

    return(
        <>

        <WashingMachineServices/>

         <WashingMachineHowCanHelp/>

         <WashingMachineTestimonials/>

         <HomeServicesCard/>

         <WashingMachinefaq/>

          <DisclaimerSection/>



        
        
        
        </>
    )
}