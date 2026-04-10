import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  { 
    title: "Ac repair & Service", 
    img: "/images/ACrepairimg.png", 
    href: "/ACServicePage",
    points: ["Installation & uninstallation", "Gas refilling", "Cooling issues"] 
  },
  { 
    title: "Washing machine repair", 
    img: "/images/WMrepairimg.png", 
    href: "/WashingMachineServices",
    points: ["Drum issues", "Noise problems", "Motor & PCB repairs"]
  },
  { 
    title: "Tv repair", 
    img: "/images/TVrepairimg.png", 
    href: "/TVServicePage",
    points: ["Display repair", "Sound issues", "Motherboard fixes"]
  },
  { 
    title: "Refrigerator repair", 
    img: "/images/Refridgerepairimg.png", 
    href: "/FridgeServicePage",
    points: ["Cooling solutions", "Compressor repair", "Gas charging"]
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-4 bg-white">
      {/* Section Header */}
      <div className="text-center mb-6 px-4">
        <span className="bg-[#FF6600] text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
          Services
        </span>
        <h2 className="text-4xl font-bold mt-3 text-[#003366]">Our services</h2>
      </div>

      {/* The Grid - full width, no container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden group shadow-2xl"
          >
            {/* Background Technician Image */}
            <img 
              src={service.img} 
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Floating Orange Arrow Button with Navigation */}
            <div className="absolute top-4 right-4 z-20">
              <Link href={service.href}>
                <button className="bg-[#FF6600] p-3 rounded-full text-white shadow-lg hover:bg-[#e65c00] transition-all hover:scale-110 active:scale-95">
                  <ArrowRight size={24} strokeWidth={3} />
                </button>
              </Link>
            </div>

            {/* The Floating Gradient Content Box */}
            <div className="absolute bottom-3 left-3 right-3 z-10">
              <div className="bg-gradient-to-r from-[#8B5E3C] to-[#1E4D7B] rounded-[1.8rem] p-3 text-center min-h-[45px] flex flex-col justify-center items-center shadow-inner">
                <h3 className="text-white font-bold text-l mb-1 leading-tight">
                  {service.title}
                </h3>
                <p className="text-white/80 text-xs font-medium leading-relaxed">
                  Quick and reliable service <br /> for all {service.title} needs.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}