import Carousel from './Components/Carousel'

import HomeServicesCard from './Components/HomeServicesCard'

import HomeVideo from './Components/HomeVideo'

import MarqueeBrands from './Components/MagueeBrands'

import HomeWhyChooseUs from './Components/HomeWhyChooseUs'

import HowWeCanHelp from './Components/HowWeCanHelp'

import HomeTestimonials from './Components/HomeTestimonials'

import HomeFAQ from './Components/Homefaq'

import HomeCallUs from './Components/HomeCallUs'



export const metadata = {
  title: "Covai Home Tech | Fast & Reliable Home Appliance Repair in Coimbatore",
  description:
    "Get fast and reliable home appliance repair services in Coimbatore. Expert technicians for AC, washing machine, refrigerator, TV, and home appliance repairs. Book now.",
  
  keywords: [
    "home appliance repair Coimbatore",
    "AC repair Coimbatore",
    "washing machine repair Coimbatore",
    "refrigerator repair Coimbatore",
    "TV repair Coimbatore",
    "appliance service near me",
  ],

  authors: [{ name: "Covai Home Tech" }],

  openGraph: {
    title: "Covai Home Tech | Fast & Reliable Home Appliance Repair in Coimbatore",
    description:
      "Get fast and reliable home appliance repair services in Coimbatore. Expert technicians for AC, washing machine, refrigerator, TV, and home appliance repairs. Book now.",
    type: "website",
    locale: "en_IN",
  },
};

export default function Home() {
  return (
    <>
    <Carousel/>
    <HomeServicesCard/>
    <HomeVideo/>
    <MarqueeBrands/>
    <HomeWhyChooseUs/>
    <HowWeCanHelp/>
    <HomeTestimonials/>
    <HomeFAQ/>
    <HomeCallUs/>
    </>
  );
}
