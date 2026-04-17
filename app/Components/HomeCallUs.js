import React from 'react';

const CallToAction = () => {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-12">
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-[#5d3a27] via-[#2d2d44] to-[#002d62] p-8 md:p-16 flex flex-col md:flex-row items-center min-h-[350px]">
        
        {/* Text Content */}
        <div className="relative z-10 w-full md:w-3/5 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Need Home Appliances <br className="hidden md:block" /> 
            For Repair?
          </h2>
          <p className="text-white/70 text-sm md:text-base mb-8 max-w-lg">
            Old Ac Sale Purchase & AC Rentals, Emergency Rent & Purchase
          </p>
          
          <button className="bg-[#002d62] hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 shadow-xl active:scale-95">
            Call us now
          </button>
        </div>

    {/* Reason: Separating the image from the overflow-hidden container allows the 'pop-out' effect while keeping the background rounded. */}
<div className="relative w-full md:w-2/5 h-[300px] mt-8 md:mt-0">
  
  {/* 1. The Background Box (Handles the rounded corners and gradient) */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#5d3a27] to-[#002d62] rounded-[40px] overflow-hidden">
     {/* Orange Background Circle inside the box */}
     <div className="absolute top-1/2 left-1/2 md:left-2/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF5C00] rounded-full opacity-90" />
  </div>

  {/* 2. The Technician (Sits OUTSIDE the overflow-hidden box to pop out) */}
  <img 
    src="/images/HomeCallUsimg.png" 
    alt="Technician pointing" 
    className="absolute bottom-0 right-0 md:right-[-20px] w-auto h-[115%] object-contain z-20 pointer-events-none"
  />
</div>
</div>
    </section>
  );
};

export default CallToAction;