"use client";

import React, { useState, useRef } from 'react';

// 1. DATA OBJECT: The "Central Path System"
const SERVICE_ASSETS = {
  ac: {
    id: "ac",
    label: "Air Conditioner",
    title: "AC Deep Cleaning & Coil Repair",
    path: "/assets/services/ac"
  },
  wm: {
    id: "wm",
    label: "Washing Machine",
    title: "Washing Machine Drum Descaling",
    path: "/assets/services/washing-machine"
  },
  fridge: {
    id: "fridge",
    label: "Refrigerator",
    title: "Fridge Compressor & Coil Maintenance",
    path: "/assets/services/refrigerator"
  },
  tv: {
    id: "tv",
    label: "Television",
    title: "LED TV Backlight Replacement",
    path: "/assets/services/tv"
  }
};

const ComparisonGallery = () => {
  const [activeKey, setActiveKey] = useState('ac');
  const activeService = SERVICE_ASSETS[activeKey];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Our Quality Transformations
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            See the difference our professional technicians in Coimbatore make for your home appliances.
          </p>
        </div>

        {/* 2. CATEGORY SELECTOR */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.values(SERVICE_ASSETS).map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveKey(s.id)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all shadow-sm ${
                activeKey === s.id 
                ? 'bg-[#FF5C00] text-white shadow-orange-500/20 scale-105' 
                : 'bg-white text-slate-600 hover:bg-gray-100'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* 3. THE SLIDER COMPONENT */}
        <BeforeAfterSlider 
          beforeImage={`${activeService.path}/before.jpg`}
          afterImage={`${activeService.path}/after.jpg`}
          title={activeService.title}
        />
      </div>
    </section>
  );
};

// --- INTERNAL SLIDER COMPONENT ---
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
        <img 
          src={beforeImage} 
          alt="Before service" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img 
            src={afterImage} 
            alt="After service" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Labels - Styling matches branding */}
        <div className="absolute top-6 left-6 bg-black/60 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md z-20">
          Before
        </div>
        <div className="absolute top-6 right-6 bg-orange-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg z-20">
          After
        </div>

        {/* Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-30 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-orange-500 transition-transform group-hover:scale-110">
            <span className="text-orange-500 font-black text-xl">↔</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonGallery;