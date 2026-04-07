"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail, Clock, ChevronDown, Menu, X, WashingMachine, Refrigerator, AirVent, Tv } from "lucide-react";

// Social Icon Components (To avoid library export issues)
const FacebookIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const InstagramIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const GoogleIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.83z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const brandData = {
  washing: ["LG", "Samsung", "IFB", "Bosch", "Whirlpool", "Haier", "Godrej", "Panasonic", "Onida", "Electrolux", "Videocon"],
  fridge: ["LG", "Samsung", "Whirlpool", "Haier", "Godrej", "Bosch", "Panasonic", "Hitachi", "Kelvinator", "Electrolux", "Videocon"],
  ac: ["Voltas", "Blue Star", "Daikin", "LG", "Samsung", "Carrier", "Hitachi", "Panasonic", "O General", "Lloyd", "Whirlpool", "Haier"],
  tv: ["Sony", "Samsung", "LG", "MI (Xiaomi)", "OnePlus", "TCL", "Panasonic", "Haier", "Vu", "Onida", "Philips", "Realme"]
};

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("washing");
  const servicesRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categories = [
    { id: "washing", label: "Washing Machine", icon: <WashingMachine size={18} /> },
    { id: "fridge", label: "Refrigerator", icon: <Refrigerator size={18} /> },
    { id: "ac", label: "Air conditioner(AC)", icon: <AirVent size={18} /> },
    { id: "tv", label: "TV", icon: <Tv size={18} /> },
  ];

  return (
    <header className="w-full sticky top-0 z-[100] bg-white shadow-sm font-sans">
      {/* Top Bar */}
      <div className="hidden md:flex bg-[#002D62] text-white text-[12px] px-6 lg:px-24 py-2 justify-between items-center">
        <div className="flex items-center gap-20">
          <div className="flex gap-3"><FacebookIcon /><TwitterIcon/><InstagramIcon /><GoogleIcon/></div>
          <span className="flex items-center gap-1.5 border-l border-white/20 pl-4">
            <Clock size={13} className="text-[#FF5C00]" /> Mon – Fri 8:00 – 6:30
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5"><MapPin size={13} className="text-[#FF5C00]" /> Coimbatore, TN</span>
          <span className="flex items-center gap-1.5"><Phone size={13} className="text-[#FF5C00]" /> (88) 00-11-52-44</span>
                    <span className="flex items-center gap-1.5"><Mail size={13} className="text-[#FF5C00]" /> covaihometech@gmail.com</span>

        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex justify-between items-center px-6 lg:px-24 py-4">
        <Link href="/" className="flex items-center gap-2">
          {/* LOGO WITH IMAGE ELEMENT */}
          <Image 
            src="/images/logo.png" 
            alt="Covai Home Tech Logo" 
            width={100} 
            height={50} 
            className="object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8 font-bold text-[15px] text-slate-800">
          <Link href="/" className="hover:text-[#FF5C00]">Home</Link>
          <Link href="/AboutUs" className="hover:text-[#FF5C00]">About us</Link>
          
          {/* MEGA DROPDOWN */}
          <div className="relative" ref={servicesRef}>
            <Link href="/OurServices">
            <button 
              onMouseEnter={() => setIsServicesOpen(true)}
              className="flex items-center gap-1 hover:text-[#FF5C00]"
            >
              Services <ChevronDown size={16} className={isServicesOpen ? "rotate-180" : ""} />
            </button>

            </Link>

            {isServicesOpen && (
              <div 
                className="absolute top-full -left-48 w-[800px] bg-white shadow-2xl rounded-xl mt-4 flex border border-slate-100 overflow-hidden"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {/* Left Sidebar */}
                <div className="w-1/3 bg-slate-50 p-4 border-r border-slate-100">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onMouseEnter={() => setActiveTab(cat.id)}
                      className={`w-full flex items-center gap-3 px-4 py-4 rounded-lg text-left transition-all ${
                        activeTab === cat.id ? "bg-white text-[#FF5C00] shadow-md" : "text-slate-600 hover:bg-white/50"
                      }`}
                    >
                      {cat.icon} <span className="text-sm font-bold">{cat.label}</span>
                    </button>
                  ))}
                </div>

                {/* Right Content Area */}
                <div className="w-2/3 p-8">
                  <h4 className="text-[#FF5C00] font-black uppercase text-xs tracking-widest mb-6">Book by brands</h4>
                  <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                    {brandData[activeTab].map((brand, idx) => (
                      <Link 
                        key={idx} 
                        href={`/services/${activeTab}/${brand.toLowerCase()}`}
                        className="text-[13px] text-slate-600 hover:text-[#002D62] hover:font-bold transition-all"
                      >
                        {brand} {categories.find(c => c.id === activeTab).label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="#" className="hover:text-[#FF5C00]">Our works</Link>
          <Link href="#" className="hover:text-[#FF5C00]">Contact Us</Link>
        </div>

        <button className="hidden lg:block bg-[#002D62] text-white px-8 py-3 rounded-full font-bold text-[14px] hover:bg-[#FF5C00] transition-transform active:scale-95">
          Book Now
        </button>
      </nav>
    </header>
  );
}