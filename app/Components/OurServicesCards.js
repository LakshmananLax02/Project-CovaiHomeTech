import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from "next/link";

const serviceData = [
  {
    title: "Washing Machine Services",
    image: "/images/WMrepairimg.png",
    href: "/washing-machine-services",
    points: [
      "Drum not rotating / draining issues",
      "Noise and vibration problems",
      "Motor & PCB repairs",
      "Full machine servicing and cleaning"
    ]
  },
  {
    title: "Refrigerator Repair Services",
    image: "/images/Refridgerepairimg.png",
    href: "/fridge-service-page",
    points: [
      "Cooling & gas refill solutions",
      "Compressor & thermostat replacement",
      "Door gasket repair and hinge fixes",
      "Complete refrigerator servicing & maintenance"
    ]
  },
  {
    title: "Ac repair and service",
    image: "/images/ACrepairimg.png",
    href: "/ac-service-page",
    points: [
      "Installation & uninstallation",
      "Gas refilling and leakage repair",
      "Cooling inefficiency & Sensor issue",
      "Regular cleaning and service"
    ]
  },
  {
    title: "Television (TV) Repair Services",
    image: "/images/TVrepairimg.png",
    href: "/tv-service-page",
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
            Expert Care
          </span>
          <h2 className="text-3xl md:text-4xl font-black mt-4 text-black">Our Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service, index) => (
            <div key={index} className="group bg-[#F8F9FA] rounded-[2.5rem] p-5 flex flex-col shadow-xl border border-slate-100 transition-all hover:shadow-2xl">
              
              {/* Entire Image Area is a Link */}
              <Link href={service.href} className="relative block h-64 w-full rounded-3xl overflow-hidden mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Fixed Overlay Arrow: Now correctly references the single service */}
                <div className="absolute top-4 right-4 bg-[#FF6600] p-2.5 rounded-full text-white shadow-lg z-10 group-hover:bg-black transition-colors">
                  <ArrowRight size={22} />
                </div>
              </Link>

              {/* Text Content */}
              <h3 className="text-xl font-black text-black mb-6 min-h-[56px] leading-tight px-2">
                {service.title}
              </h3>

              {/* Feature Points */}
              <ul className="space-y-4 mb-8 flex-grow px-2">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#FF6600] flex-shrink-0 mt-1" />
                    <span className="text-[13px] text-slate-700 font-bold leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Book Now Button */}
              <Link href="/contact" className="w-full">
                <button className="w-full bg-[#003366] text-white font-black py-4 rounded-2xl hover:bg-[#FF6600] transition-all transform active:scale-95 tracking-wide">
                  Book Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}