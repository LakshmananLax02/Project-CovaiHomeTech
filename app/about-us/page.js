import Image from "next/image";

import WhatWeDo from "../Components/AboutWhatWeDo";

import FeatureCards from "../Components/AboutCards";

import Testimonials from '../Components/HomeTestimonials'

import Aboutfaq from '../Components/Aboutfaq'
import { Home } from "lucide-react";

export const metadata = {
  title: " About Covai Home Tech | Trusted Appliance Repair Experts in Coimbatore",
  description: " Learn about Covai Home Tech, your trusted home appliance repair service provider in Coimbatore. Experienced technicians, quality service, and customer satisfaction guaranteed.",
};

export default function AboutUs(){

    return(
<>

<section className="relative w-full h-[300px] md:h-[400px] flex items-center overflow-hidden">
      {/* 1. Background Image with Dark Overlay (Using image_7.png background) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-banner-bg.jpg" // Replace with your background image path
          alt="Technician servicing a washing machine"
          fill
          className="object-cover object-left"
          priority
        />
        {/* The deep gradient overlay to make text readable */}
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* 2. Content Grid (Splits text left, agent right on desktop) */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-white text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            About us
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-xl leading-relaxed mx-auto md:mx-0">
            Doorstep service for AC, Washing Machine, TV, and Refrigerator.
          </p>

          <button className="bg-[#003366] hover:bg-[#FF6600] text-white px-10 py-4 rounded-2xl text-lg font-bold transition-all duration-300 shadow-lg active:scale-95">
            Enquire Now
          </button>
        </div>

        {/* RIGHT COLUMN: The Agent Image Container */}
        <div className="relative h-full w-full hidden md:flex justify-center md:justify-end items-end">
          {/* We use aspect-square to keep him proportional within the grid cell */}
          <div className="relative w-full h-[110%] aspect-[3/4] -mb-10 lg:-mb-16">
            <Image 
              src="/images/carouselmecimg.png" // Replace with image_8.png path
              alt="Smiling Covai Technician holding a wrench"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>

    <WhatWeDo/>

    <FeatureCards/>

    <Testimonials/>

    <Aboutfaq/>




</>



    )
}