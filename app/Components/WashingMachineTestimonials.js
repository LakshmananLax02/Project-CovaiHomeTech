"use client";
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

const reviews = [
  {
    name: "Priya S.",
    image: "/images/TVrepairimg.png",
    stars: 5,
    text: "Excellent washing machine repair service. The technician arrived on time, identified the issue quickly, and fixed the drainage problem within an hour. Highly professional service."
  },
  {
    name: "Arun K.",
    image: "/images/TVrepairimg.png",
    stars: 5,
    text: "Very satisfied with the service quality and pricing. My front-load washing machine is now working perfectly without noise."
  },
  {
    name: "Meena R.",
    image: "/images/TVrepairimg.png",
    stars: 5,
    text: "Best doorstep service in Coimbatore. The technician explained the issue clearly and replaced the faulty spare part with a genuine one."
  },
  {
    name: "Karthik V.",
    image: "/images/TVrepairimg.png",
    stars: 5,
    text: "Quick response and same-day repair support. Highly recommended for washing machine service."
  },
  {
    name: "Divya P.",
    image: "/images/TVrepairimg.png",
    stars: 5,
    text: "Affordable pricing, polite technician, and excellent repair work."
  },
  {
    name: "Saravanan M.",
    image: "/images/TVrepairimg.png",
    stars: 5,
    text: "Outstanding customer support and timely service."
  }
];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-10 px-6 md:px-6 lg:px-10 bg-white">
      {/* 1. Main Container with Gradient Background */}
      <div className="relative rounded-[40px] bg-gradient-to-r from-[#5d3a27] via-[#2d2d44] to-[#002d62] p-8 md:p-16 overflow-hidden">
        
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
            style={{ transform: `translateX(-${currentIndex * (100 / (typeof window !== 'undefined' && window.innerWidth > 1024 ? 3 : 1))}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="min-w-full lg:min-w-[calc(33.333%-16px)] bg-white rounded-3xl p-8 shadow-xl flex flex-col justify-between min-h-[350px]">
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
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-50">
                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
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