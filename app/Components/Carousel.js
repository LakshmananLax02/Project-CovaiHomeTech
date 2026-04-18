// components/HeroSection.jsx
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] md:h-[70vh] overflow-hidden bg-[#050a14]">
      {/* Background Video */}
      <video
        autoPlay loop muted playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/web.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950/70 z-10" />

      <div className="container mx-auto px-6 h-full relative z-20 flex flex-col md:grid md:grid-cols-2 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex pr-30 flex-col z-30 pt-20 md:pt-0 md:pr-12 md:pb-24 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Fast & Reliable Appliance Repair in <span className="text-orange-500">Coimbatore</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-200 font-medium mb-10 max-w-xl opacity-90">
            Doorstep service for AC, Washing Machine, TV, and Refrigerator.
          </p>
          
          <div>
            <button className="px-10 py-4 bg-[#002D62] text-white rounded-3xl text-lg font-semibold hover:bg-orange-500 transition duration-150 transform hover:scale-[1.02] shadow-xl">
              Enquire Now
            </button>
          </div>
        </div>

      {/* Right Column: Agent Image (Now Solid on Mobile) */}
<div className="flex justify-end items-end h-full w-full absolute bottom-0 left-0 md:relative md:flex z-30 pointer-events-none">
  <div className="relative w-[280px] sm:w-[380px] lg:w-[450px] aspect-[3/4] md:-right-10 lg:-right-20">
    <Image
      src="/images/carouselmecimg.png"
      alt="Service Technician"
      fill
      className="object-contain object-bottom transition-opacity duration-500"
      priority 
    />
  </div>
</div>
      </div>
    </section>
  );
}