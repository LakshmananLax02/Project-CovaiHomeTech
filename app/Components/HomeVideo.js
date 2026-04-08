"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const stats = [
    { label: "Happy clients", value: "100+" },
    { label: "customer Satisfaction", value: "98%" },
    { label: "Average rating", value: "4.9/5" },
    { label: "Years of experience", value: "5+" },
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="bg-white py-8 px-4">

      {/* 1. Header Content */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-5 gap-8">
        <div className="max-w-xl">
          <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-4 leading-tight">
            Trusted By Hundreds <br/> Of Happy Homes
          </h2>
        </div>
        <p className="text-slate-600 md:max-w-md text-lg leading-relaxed pt-8">
          We believe a clean home creates space for a better life. From standard
          upkeep to detailed deep cleaning, we handle every corner
          with care, precision, and eco-friendly solutions.
        </p>
      </div>

      {/* 2. Video Area */}
      <div className="relative w-full aspect-[21/9] max-h-[400px] rounded-2xl overflow-hidden group mb-12 shadow-2xl bg-slate-900">
        <video
          ref={videoRef}
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/web.mp4" type="video/mp4" />
        </video>

        <div 
          onClick={handleTogglePlay}
          className={`absolute inset-0 z-10 flex items-center justify-center cursor-pointer transition-all duration-500 ${
            isPlaying 
              ? "bg-transparent opacity-0 group-hover:opacity-100 group-hover:bg-black/30" 
              : "bg-black/20 opacity-100"
          }`}
        >
          <button className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110">
            {isPlaying ? (
              <Pause className="fill-orange-500 text-orange-500 w-6 h-6 md:w-10 md:h-10" />
            ) : (
              <Play className="fill-orange-500 text-orange-500 w-6 h-6 md:w-10 md:h-10 ml-1" />
            )}
          </button>
        </div>
      </div>

      {/* 3. Statistics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-cyan-50/50 rounded-2xl p-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
              {stat.value}
            </span>
            <span className="text-slate-600 font-medium capitalize text-sm md:text-base">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}