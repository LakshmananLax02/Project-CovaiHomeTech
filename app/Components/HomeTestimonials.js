"use client";
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

const reviews = [
  {
    name: "Priya S. – Coimbatore",
    image: "/images/TVrepairimg.png",
    stars: 5,
    text: "Excellent washing machine repair service. The technician arrived on time and fixed the issue within an hour. Very professional and affordable."
  },
  {
    name: "Arun Kumar – Pollachi",
    image: "/images/TVrepairimg.png",
    stars: 5,
    text: "My AC was not cooling properly, and Covai Home Tech solved it on the same day. Great service and friendly support team."
  },
  {
    name: "Meena R. – RS Puram",
    image: "/images/TVrepairimg.png",
    stars: 5,
    text: "Best refrigerator repair service I have used. Quick response, genuine spare parts, and reasonable pricing."
  },
  {
    name: "Karthik V. – Peelamedu",
    image: "/images/TVrepairimg.png",
    stars: 5,
    text: "Smart TV display issue was repaired perfectly. The technician explained the issue clearly and completed the work neatly."
  },
  {
    name: "Lakshmi Devi – Saibaba Colony",
    image: "/images/TVrepairimg.png",
    stars: 5,
    text: "Very satisfied with the doorstep service. The staff were polite, professional, and completed the repair quickly."
  },
  {
    name: "Sanjay M. – Pollachi",
    image: "/images/TVrepairimg.png",
    stars: 5,
    text: "Reliable service for all home appliances. I have used them for AC and washing machine repair. Highly recommended."
  }
];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-10 px-4 md:px-6 lg:px-8 bg-white">
      {/* 1. Main Container with Gradient Background */}
      <div className="relative rounded-[16px] bg-gradient-to-r from-[#5d3a27] via-[#2d2d44] to-[#002d62] p-8 md:p-16 overflow-hidden">
        
        {/* 2. Header Section */}
        <div className="text-center mb-12 flex flex-col items-center relative z-10">
          <span className="bg-[#FF5C00] text-white text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
            Testimonial
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-6 text-white tracking-tight">
            What Our Clients Are Saying
          </h2>
          <p className="text-white/70 mt-4 text-base font-medium">
            Real words from real happy homes.
          </p>
        </div>

        {/* 3. Slider Controls (Floating Desktop Buttons) */}
        <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between z-20 pointer-events-none hidden md:flex">
          <button onClick={prevSlide} className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all pointer-events-auto border border-white/10">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all pointer-events-auto border border-white/10">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* 4. Testimonial Cards Row */}
        <div className="relative overflow-hidden z-10 px-2 md:px-10">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-out"
          
       style={{ transform: `translateX(calc(-${currentIndex} * (100% + 24px) / ${typeof window !== 'undefined' && window.innerWidth > 1024 ? 3 : 1}))` }}
          >

            {reviews.map((review, index) => (
              <div key={index} className="min-w-full lg:min-w-[calc(33.333%-16px)] bg-white rounded-3xl p-8 shadow-xl flex flex-col justify-between min-h-[250px]">
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className={i < review.stars ? "fill-[#FFCC00] text-[#FFCC00]" : "text-gray-200"} 
                      />
                    ))}
                  </div>
                  {/* Review Text */}
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
                   <User className="w-6 h-6 text-[#FF5C00]" />
                  </div>
                  <span className="font-bold text-slate-900">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Mobile Controls & Progress Bar */}
        <div className="flex flex-col items-center mt-12 gap-6 relative z-10">
           {/* Custom Progress Bar */}
           <div className="flex gap-2 h-1.5 w-32 bg-white/20 rounded-full overflow-hidden">
             {reviews.map((_, i) => (
               <div 
                 key={i} 
                 className={`flex-1 transition-all duration-300 ${i === currentIndex ? 'bg-[#FF5C00]' : 'bg-transparent'}`}
               />
             ))}
           </div>
           
           {/* Mobile-Only Arrow Buttons */}
           <div className="flex gap-4 md:hidden">
            <button onClick={prevSlide} className="p-4 rounded-xl bg-white text-[#002d62] shadow-lg">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="p-4 rounded-xl bg-[#FF5C00] text-white shadow-lg">
              <ChevronRight size={20} />
            </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;