import React from 'react';
import Image from 'next/image';

const machineTypes = [
  "Front Load Machines",
  "Top Load Machines",
  "Semi-Automatic Models",
  "Fully-Automatic Models",
  "Inverter & Smart Washing Machines"
];

const commonProblems = [
  "Machine not starting or spinning",
  "Drum not rotating or over-vibrating",
  "Water leakage or not draining properly",
  "Display or PCB (circuit board) issues",
  "Door lock / lid sensor not working",
  "Unusual noise during wash cycle",
  "Complete cleaning and preventive maintenance"
];

export default function ACRepairServices() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto font-sans text-black">
      
      {/* Header Tag */}
      <div className="text-center mb-6">
        <span className="bg-[#FF6600] text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase">
          Services
        </span>
        <h1 className="text-3xl font-bold mt-4">Washing Machine Repair Services</h1>
      </div>

      {/* Main Hero Image */}
      <div className="relative w-full h-[400px] rounded-[2rem] overflow-hidden mb-12 shadow-lg">
        <Image 
          src="/images/WashMachineimg.png" 
          alt="Technician repairing washing machine" 
          fill 
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              When your washing machine stops working, laundry piles up fast. That's why 
              Covaihome Tech offers quick and professional washing machine repair services in 
              Coimbatore, right at your doorstep. Our trained technicians handle every issue — from 
              noisy spin cycles to water-drain problems — ensuring your appliance runs smoothly 
              again in no time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">We repair all types of washing machines</h2>
            <ul className="space-y-3">
              {machineTypes.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#FF6600] flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Common Problems We Fix</h2>
            <ul className="space-y-4">
              {commonProblems.map((problem, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#FF6600] flex-shrink-0" />
                  <span className="text-sm font-medium">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-6">
          <div className="border border-slate-100 rounded-3xl p-8 shadow-sm bg-white overflow-hidden">
            <h3 className="text-lg font-bold mb-4">Service area available</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              We serve customers across all major Coimbatore areas — 
              Peelamedu, RS Puram, Singanallur, Saibaba Colony, 
              Saravanampatti, Vadavalli, Ganapathy, and more.
            </p>
            
            <div className="border-t border-slate-100 pt-6">
              <h3 className="text-lg font-bold mb-6">Brands we service</h3>
              
              {/* Infinite Marquee Section */}
              <div className="relative flex flex-col gap-6 mb-8 overflow-hidden">
                
                {/* Row 1: Top Logos */}
                <div className="flex w-[200%] animate-marquee">
                  <div className="flex shrink-0 w-1/2">
                    <img src="/images/marqueetopimg.png" alt="Brands Group 1" className="h-10 w-full object-contain px-4" />
                  </div>
                  <div className="flex shrink-0 w-1/2">
                    <img src="/images/marqueetopimg.png" alt="Brands Group 1" className="h-10 w-full object-contain px-4" />
                  </div>
                </div>

                {/* Row 2: Bottom Logos */}
                <div className="flex w-[200%] animate-marquee">
                  <div className="flex shrink-0 w-1/2">
                    <img src="/images/marqueetop2.png" alt="Brands Group 2" className="h-10 w-full object-contain px-4" />
                  </div>
                  <div className="flex shrink-0 w-1/2">
                    <img src="/images/marqueetop2.png" alt="Brands Group 2" className="h-10 w-full object-contain px-4" />
                  </div>
                </div>

                {/* Edge Fades for a cleaner look */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
              </div>
              
              <button className="w-full bg-[#003366] text-white font-bold py-4 rounded-xl hover:bg-[#FF6600] transition-colors shadow-md">
                Book Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}