import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  { title: "Ac repair &Service", img: "/ac-service.jpg" },
  { title: "Washing machine repair", img: "/washing-service.jpg" },
  { title: "Tv repair", img: "/tv-service.jpg" },
  { title: "Refrigerator repair", img: "/fridge-service.jpg" },
];

export default function ServiceGrid() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="bg-orange-500 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
            Services
          </span>
          <h2 className="text-4xl font-bold mt-4">Our services</h2>
        </div>

        {/* The Grid */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

              {/* Floating Orange Arrow Button */}
              <div className="absolute top-6 right-6 z-20">
                <button className="bg-orange-500 p-3 rounded-full text-white shadow-lg hover:bg-orange-600 transition-colors">
                  <ArrowRight size={24} strokeWidth={3} />
                </button>
              </div>

              {/* The Floating Gradient Content Box */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-gradient-to-r from-[#5d3a27] to-[#002d62] rounded-[1.8rem] p-6 text-center min-h-[145px] flex flex-col justify-center items-center shadow-inner">
                  <h3 className="text-white font-bold text-xl mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-xs font-medium leading-relaxed">
                    Quick and reliable service <br /> for all AC brands.
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