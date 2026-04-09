"use client";

import React, { useState, useRef } from 'react';

// 1. DATA OBJECT: Swapped before and after paths to show correct progression
const SERVICE_ASSETS = {
  ac: {
    id: "ac",
    label: "Air Conditioner",
    title: "AC Deep Cleaning & Coil Repair",
    before: "/images/ACrepairimg.png", 
    after: "/images/WashMachineimg.png"
  },
  wm: {
    id: "wm",
    label: "Washing Machine",
    title: "Washing Machine Drum Descaling",
    before: "/images/WashMachineimg.png", 
    after: "/images/WMrepairimg.png"
  },
  fridge: {
    id: "fridge",
    label: "Refrigerator",
    title: "Fridge Compressor & Coil Maintenance",
    before: "/images/WMrepairimg.png", 
    after: "/images/WashMachineimg.png"
  },
  tv: {
    id: "tv",
    label: "Television",
    title: "LED TV Backlight Replacement",
    before: "/images/WMrepairimg.png", 
    after: "/images/WashMachineimg.png"
  }
};

const ComparisonGallery = () => {
  const [activeKey, setActiveKey] = useState('wm');
  const activeService = SERVICE_ASSETS[activeKey];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Our Quality Transformations
          </h2>
          <p className="text-slate-500">Professional service transformations in Coimbatore.</p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.values(SERVICE_ASSETS).map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveKey(s.id)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                activeKey === s.id 
                ? 'bg-[#FF5C00] text-white' 
                : 'bg-white text-slate-600 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* The Slider */}
        <BeforeAfterSlider 
          beforeImage={activeService.before}
          afterImage={activeService.after}
          title={activeService.title}
        />
      </div>
    </section>
  );
};

const BeforeAfterSlider = ({ beforeImage, afterImage, title }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 0), 100));
  };

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mb-6 text-center text-slate-800">{title}</h3>
      <div 
        ref={containerRef}
        className="relative aspect-video rounded-3xl overflow-hidden cursor-col-resize select-none shadow-2xl border-4 border-white group"
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* Bottom Image (Before) */}
        <img 
          src={beforeImage} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        />
        
        {/* Top Image (After - Clipped to reveal bottom) */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img 
            src={afterImage} 
            alt="After" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase z-20">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-[#FF5C00] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase z-20 shadow-lg">
          After
        </div>

        {/* Handle Bar */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white z-30 pointer-events-none" 
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#FF5C00]">
            <span className="text-[#FF5C00] font-black">↔</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonGallery;