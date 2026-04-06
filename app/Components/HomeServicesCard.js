import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  { 
    title: "Ac repair & Service", 
    img: "/ac-service.jpg", 
    href: "/WashingMachineServices", // Updated to follow standard slug patterns
    points: ["Installation & uninstallation", "Gas refilling", "Cooling issues"] 
  },
  { 
    title: "Washing machine repair", 
    img: "/washing-service.jpg", 
    href: "/WashingMachineServices", // Linking to your specific page
    points: ["Drum issues", "Noise problems", "Motor & PCB repairs"]
  },
  { 
    title: "Tv repair", 
    img: "/tv-service.jpg", 
    href: "/services/tv-repair",
    points: ["Display repair", "Sound issues", "Motherboard fixes"]
  },
  { 
    title: "Refrigerator repair", 
    img: "/fridge-service.jpg", 
    href: "/services/refrigerator",
    points: ["Cooling solutions", "Compressor repair", "Gas charging"]
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="bg-[#FF6600] text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
            Services
          </span>
          <h2 className="text-4xl font-bold mt-4 text-[#003366]">Our services</h2>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group shadow-2xl"
            >
              {/* Background Technician Image */}
              <img 
                src={service.img} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Floating Orange Arrow Button with Navigation */}
              <div className="absolute top-6 right-6 z-20">
                <Link href={service.href}>
                  <button className="bg-[#FF6600] p-3 rounded-full text-white shadow-lg hover:bg-[#e65c00] transition-all hover:scale-110 active:scale-95">
                    <ArrowRight size={24} strokeWidth={3} />
                  </button>
                </Link>
              </div>

              {/* The Floating Gradient Content Box */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-gradient-to-r from-[#8B5E3C] to-[#1E4D7B] rounded-[1.8rem] p-6 text-center min-h-[145px] flex flex-col justify-center items-center shadow-inner">
                  <h3 className="text-white font-bold text-xl mb-2 leading-tight">
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
      </div>
    </section>
  );
}