import Image from "next/image"

import ServicesSection from "../Components/OurServicesCards"

import WhyChooseUs from '../Components/HomeWhyChooseUs'

import Marqueebrands from '../Components/MagueeBrands'

import Testimonials from "../Components/HomeTestimonials"

import OurServicesfaq from '../Components/OurServicesfaq'

import HowWeCanHelp from '../Components/HowWeCanHelp'


export const metadata = {
  title: "Our Services | AC, Washing Machine, TV & Refrigerator Repair in Coimbatore",
  description: "Explore our expert appliance repair services including AC repair, washing machine repair, TV repair, and refrigerator service in Coimbatore. Affordable and quick support.",
};

export default function OurServices(){

    return(

        <>
        
     <section className="relative w-full min-h-[500px] md:h-[500px] flex items-center overflow-hidden bg-black">
  {/* 1. Background Image Layer (The subtle background) */}
  <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#5d3a27] via-[#2d2d44] to-[#002d62]">
    {/* <Image
      src="/images/carouselmecimg.png" 
      alt="Background"
      fill
      className="object-cover object-center opacity-80 md:opacity-100"
      priority
    /> */}
    {/* Deep gradient to ensure text is always readable */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40 md:bg-gradient-to-r md:from-black md:via-black/50 md:to-transparent" />
  </div>

  {/* 2. Content Container */}
  <div className="relative z-10 px-6 md:px-16 lg:px-24 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-center">
    
    {/* LEFT COLUMN: Text Content */}
    <div className="text-center md:text-left pt-12 md:pt-0">
      <h1 className="text-white text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight uppercase">
        Our Services
      </h1>
      
      <p className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-xl leading-relaxed mx-auto md:mx-0">
        Doorstep service for AC, Washing Machine, TV, and Refrigerator.
      </p>

      <a href="tel:+917418183318">
        <button className="px-10 py-4 bg-[#002D62] text-white rounded-3xl text-lg font-bold hover:bg-orange-600 transition-all transform hover:scale-[1.05] shadow-2xl">
          Enquire Now
        </button>
      </a>
    </div>

    {/* RIGHT COLUMN: The Technician (Now Visible on Mobile) */}
    <div className="relative flex justify-center items-end h-[350px] md:h-[550px] mt-8 md:mt-0">
      <div className="relative w-full h-full">
        <Image 
          src="/images/carouselmecimg.png" 
          alt="Smiling Covai Technician"
          fill
          priority
          className="object-contain object-bottom"
          sizes="(max-w-768px) 100vw, 50vw"
        />
      </div>
    </div>
  </div>
</section>


            <ServicesSection/>

            <WhyChooseUs/>

            <Marqueebrands/>

            <Testimonials/>

            <OurServicesfaq/>

            <HowWeCanHelp/>
        
        </>
    )
}