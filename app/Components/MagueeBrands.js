"use client"

import React from 'react';

const BrandsService = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* 1. Header Section */}
      <div className="text-center mb-16 flex flex-col items-center">
        <span className="bg-[#FF5C00] text-white text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-orange-500/20">
          Brands
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-6 text-slate-900 tracking-tight">
          Brands We Service
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {/* 2. Top Row: Right Marquee */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee-right flex whitespace-nowrap min-w-full items-center">
            {/* Repeat the image twice for the infinite loop effect */}
            <img src="/images/marqueetopimg.png" alt="Brands Row 1" className="h-16 md:h-24 object-contain mx-4" />
            <img src="/images/marqueetop2.png" alt="Brands Row 1 copy" className="h-16 md:h-24 object-contain mx-4" />
          </div>
        </div>

        {/* 3. Bottom Row: Left Marquee */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee-left flex whitespace-nowrap min-w-full items-center">
            {/* Repeat the image twice for the infinite loop effect */}
            <img src="/images/marqueebottomimg1.png" alt="Brands Row 2" className="h-16 md:h-24 object-contain mx-4" />
            <img src="/images/marqueebottomimg.png" alt="Brands Row 2 copy" className="h-16 md:h-24 object-contain mx-4" />
          </div>
        </div>
      </div>

      {/* 4. Global Styles for the Animations */}
      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marquee-left 15s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BrandsService;