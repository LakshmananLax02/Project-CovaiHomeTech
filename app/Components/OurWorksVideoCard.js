"use client";

import React, { useState, useEffect } from 'react';
import { Play, X, CheckCircle2 } from 'lucide-react';

const workVideos = [
  { id: 1, title: "Washing Machine Wiring Work Fix", category: "Washing Machine", videoSrc: "/ourworkvideos/v1.mp4", thumbnail: "/images/work-thumb-1.jpg" },
  { id: 2, title: "Washing Machine Suspension Problem Fix", category: "Washing Machine", videoSrc: "/ourworkvideos/v2.mp4", thumbnail: "/images/work-thumb-2.jpg" },
  { id: 3, title: "Washing Machine Drum Dust Cleaning Fix", category: "Washing Machine", videoSrc: "/ourworkvideos/v3.mp4", thumbnail: "/images/work-thumb-3.jpg" },
  { id: 4, title: "Washing Machine Vibration Fix", category: "Washing Machine", videoSrc: "/ourworkvideos/v4.mp4", thumbnail: "/images/work-thumb-4.jpg" },
  { id: 5, title: "Washing Machine Inlet Value Issue Fix", category: "Washing Machine", videoSrc: "/ourworkvideos/v5.mp4", thumbnail: "/images/work-thumb-4.jpg" },
  { id: 6, title: "Washing Machine Drum Dust Cleaning Fix", category: "Washing Machine", videoSrc: "/ourworkvideos/v6.mp4", thumbnail: "/images/work-thumb-4.jpg" }
];

export default function OurWorksGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Prevent background scrolling when video is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedVideo]);

  return (
    <section className="py-20 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="bg-orange-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-[0.3em]">
              Proven Results
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
              See Our Technicians <br />
              <span className="text-orange-600">In Action</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium md:max-w-xs border-l-2 border-slate-200 pl-4">
            Real videos from our doorstep service visits across Coimbatore.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workVideos.map((work) => (
            <div 
              key={work.id} 
              className="group bg-white rounded-[1rem] overflow-hidden shadow-lg border border-slate-200 transition-all hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedVideo(work)}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full bg-slate-200 overflow-hidden">
                 {/* Video Preview (Paused/Muted) or Static Image */}
                <video 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                  muted
                  playsInline
                >
                  <source src={work.videoSrc} type="video/mp4" />
                </video>

                {/* Play Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="bg-white/90 p-5 rounded-full shadow-2xl transform transition-transform group-hover:scale-110">
                    <Play className="text-orange-600 fill-orange-600" size={28} />
                  </div>
                </div>

                <div className="absolute top-6 left-6">
                  <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-8">
                <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">
                  {work.title}
                </h3>
                <div className="flex items-center gap-2 text-green-600 font-bold text-[10px] uppercase tracking-tighter">
                  <CheckCircle2 size={14} />
                  Service Completed
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FULL SCREEN VIDEO MODAL */}
        {selectedVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
              onClick={() => setSelectedVideo(null)}
            ></div>

           <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] bg-black rounded-[1rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-[110] bg-white/10 hover:bg-orange-600 text-white p-3 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              <video 
                className="w-full h-full object-contain"
                autoPlay 
                controls 
                playsInline
              >
                <source src={selectedVideo.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            
            </div>
          </div>
        )}

        {/* Online Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-slate-600 text-sm font-bold uppercase tracking-widest">
              Available for service today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}