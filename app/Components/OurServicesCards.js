import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const serviceData = [
  {
    title: "Washing Machine Services",
    image: "/washing-machine.jpg", // Replace with your image paths
    points: [
      "Drum not rotating / draining issues",
      "Noise and vibration problems",
      "Motor & PCB repairs",
      "Full machine servicing and cleaning"
    ]
  },
  {
    title: "Refrigerator Repair Services",
    image: "/fridge-repair.jpg",
    points: [
      "Cooling & gas refill solutions",
      "Compressor & thermostat replacement",
      "Door gasket repair and hinge fixes",
      "Complete refrigerator servicing & maintenance"
    ]
  },
  {
    title: "Ac repair and service",
    image: "/ac-repair.jpg",
    points: [
      "Installation & uninstallation",
      "Gas refilling and leakage repair",
      "Cooling inefficiency & Sensor issue",
      "Regular cleaning and service"
    ]
  },
  {
    title: "Television (TV) Repair Services",
    image: "/tv-repair.jpg",
    points: [
      "Display & backlight repair",
      "Sound or signal issues",
      "Motherboard & power board repair",
      "Wall mounting & installation"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="bg-[#FF6600] text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-black">Our services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service, index) => (
            <div key={index} className="bg-[#F8F9FA] rounded-3xl p-5 flex flex-col shadow-sm border border-slate-100">
              
              {/* Image Container with Arrow Overlay */}
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                {/* Orange Circle Arrow Button */}
                <div className="absolute top-4 right-4 bg-[#FF6600] p-2.5 rounded-full text-white cursor-pointer hover:scale-110 transition-transform">
                  <ArrowRight size={24} />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-black mb-6 min-h-[56px] leading-tight">
                {service.title}
              </h3>

              {/* Feature Points */}
              <ul className="space-y-4 mb-8 flex-grow">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FF6600] flex-shrink-0 mt-0.5" />
                    <span className="text-[13px] text-slate-700 font-medium leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Book Now Button */}
              <button className="w-full bg-[#003366] text-white font-bold py-4 rounded-2xl hover:bg-[#FF6600] transition-colors tracking-wide">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}