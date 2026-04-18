"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { PhoneCall, Calendar, User, CheckSquare } from 'lucide-react';

export default function HowWeCanHelp() {
  const [activeIndex, setActiveIndex] = useState(0);

 const steps = [
  {
    icon: <PhoneCall size={24} />,
    title: "Book Online",
    description: "Choose your preferred time slot and book service easily."
  },
  {
    icon: <Calendar size={24} />,
    title: "Customize Plan",
    description: "Select issue type, AC model, and service requirement."
  },
  {
    icon: <User size={24} />,
    title: "Meet Your Technician",
    description: "Certified AC technicians arrive on time with tools."
  },
  {
    icon: <CheckSquare size={24} />,
    title: "Get Cooling Results",
    description: "Fast repair, cooling test, and service warranty."
  }
];

  return (
    <section className="py-12 md:py-20 px-8 bg-white overflow-hidden">
      {/* 1. Header Section */}
      <div className="text-center mb-12 md:mb-16 flex flex-col items-center">
        <span className="bg-[#FF5C00] text-white text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-orange-500/20">
          How It Works
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-6 text-slate-900 tracking-tight px-2">
          How We Can Help
        </h2>
        <p className="text-slate-500 mt-4 text-sm md:text-base font-medium max-w-xl px-4">
          Simple, seamless, and stress-free cleaning in 4 easy steps.
        </p>
      </div>

      {/* 2. Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Featured Image */}
        <div className="relative pt-2 order-first lg:order-last">
          <div className="relative rounded-[30px] md:rounded-[50px] overflow-hidden border-[8px] md:border-[12px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-square md:aspect-[4/5] lg:h-[550px]">
            <Image 
              src="/images/ACrepairimg.png" 
              alt="Technician repairing washing machine"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -z-10 -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-orange-50 rounded-full blur-3xl opacity-60" />
        </div>

        {/* Interactive Steps */}
        <div className="space-y-8 md:space-y-10">
          {steps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index}
                className="relative flex gap-4 md:gap-8 group cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className={`absolute -left-4 top-0 bottom-0 w-1 md:w-1.5 bg-[#FF5C00] rounded-full transition-all duration-300 transform ${isActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`} />
                
                <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl md:rounded-2xl transition-all duration-300 ${isActive ? 'bg-orange-50 text-[#FF5C00]' : 'bg-gray-50 text-slate-400'}`}>
                  {React.cloneElement(step.icon, { size: typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 24 })}
                </div>
                
                <div className="pr-2">
                  <h3 className={`text-lg md:text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-[#FF5C00]' : 'text-slate-900'}`}>
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed mt-1 md:mt-2 max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}