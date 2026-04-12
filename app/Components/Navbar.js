"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, MapPin, Mail, Clock, ChevronDown, 
  Menu, X, WashingMachine, Refrigerator, AirVent, Tv 
} from "lucide-react";

// --- Sub-components for cleaner code ---
const SocialIcons = () => (
  <div className="flex gap-4">
    <FacebookIcon />
    <TwitterIcon />
    <InstagramIcon />
    <GoogleIcon />
  </div>
);

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
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const brandData = {
  washingmachine: [
    { name: "LG", slug: "lgwashingmachine" },
    { name: "Samsung", slug: "samsungwashingmachine" },
    { name: "IFB", slug: "ifbwashingmachine" },
    { name: "Bosch", slug: "boschwashingmachine" },
    { name: "Whirlpool", slug: "whirlpoolwashingmachine" },
    { name: "Haier", slug: "haierwashingmachine" },
    { name: "Godrej", slug: "godrejwashingmachine" },
    { name: "Panasonic", slug: "panasonicwashingmachine" },
    { name: "Onida", slug: "onidawashingmachine" },
    { name: "Electrolux", slug: "electroluxwashingmachine" },
    { name: "Videocon", slug: "videoconwashingmachine" }
  ],
  fridge: [
    { name: "LG", slug: "lgrefrigerator" },
    { name: "Samsung", slug: "samsungrefrigerator" },
    { name: "Whirlpool", slug: "whirlpoolrefrigerator" },
    { name: "Haier", slug: "haierrefrigerator" },
    { name: "Godrej", slug: "godrejrefrigerator" },
    { name: "Bosch", slug: "boschrefrigerator" },
    { name: "Panasonic", slug: "panasonicrefrigerator" },
    { name: "Hitachi", slug: "hitachirefrigerator" },
    { name: "Kelvinator", slug: "kelvinatorrefrigerator" },
    { name: "Electrolux", slug: "electroluxrefrigerator" },
    { name: "Videocon", slug: "videoconrefrigerator" }
  ],
  ac: [
    { name: "Voltas", slug: "voltasac" },
    { name: "Blue Star", slug: "bluestarac" },
    { name: "Daikin", slug: "daikinac" },
    { name: "LG", slug: "lgac" },
    { name: "Samsung", slug: "samsungac" },
    { name: "Carrier", slug: "carrierac" },
    { name: "Hitachi", slug: "hitachiac" },
    { name: "Panasonic", slug: "panasonicac" },
    { name: "O General", slug: "ogeneralac" },
    { name: "Lloyd", slug: "lloydac" },
    { name: "Whirlpool", slug: "whirlpoolac" },
    { name: "Haier", slug: "haierac" }
  ],
  tv: [
    { name: "Sony", slug: "sonytv" },
    { name: "Samsung", slug: "samsung" },
    { name: "LG", slug: "lg" },
    { name: "MI (Xiaomi)", slug: "mi-xiaomi" },
    { name: "OnePlus", slug: "oneplus" },
    { name: "TCL", slug: "tcl" },
    { name: "Panasonic", slug: "panasonic" },
    { name: "Haier", slug: "haier" },
    { name: "Vu", slug: "vu" },
    { name: "Onida", slug: "onida" },
    { name: "Philips", slug: "philips" },
    { name: "Realme", slug: "realme" }
  ]
};

const categories = [
  { id: "washingmachine", label: "Washing Machine", icon: <WashingMachine size={18} /> },
  { id: "fridge", label: "Refrigerator", icon: <Refrigerator size={18} /> },
  { id: "ac", label: "Air conditioner(AC)", icon: <AirVent size={18} /> },
  { id: "tv", label: "TV", icon: <Tv size={18} /> },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [mobileActiveTab, setMobileActiveTab] = useState("washingmachine");
  const [activeTab, setActiveTab] = useState("washingmachine");
  const servicesRef = useRef(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isMobileOpen]);

  const handleMobileClose = () => {
    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (

    <>
    <header className="w-full sticky top-0 z-[100] bg-white shadow-sm font-sans">
      {/* 1. TOP BAR (Hidden on Mobile) */}
      <div className="hidden md:flex bg-[#002D62] text-white text-[12px] px-6 lg:px-24 py-2 justify-between items-center">
        <div className="flex items-center gap-8">
          <SocialIcons />
          <span className="flex items-center gap-1.5 border-l border-white/20 pl-4 uppercase tracking-wider">
            <Clock size={13} className="text-[#FF5C00]" /> Mon – Sat 8:00 – 8:00
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5"><MapPin size={13} className="text-[#FF5C00]" /> Coimbatore, TN</span>
          <span className="flex items-center gap-1.5"><Phone size={13} className="text-[#FF5C00]" /> +91 8800115244</span>
          <span className="flex items-center gap-1.5"><Mail size={13} className="text-[#FF5C00]" /> covaihometech@gmail.com</span>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav className="flex justify-between items-center px-6 lg:px-24 py-4 relative bg-white">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="Covai Home Tech Logo" 
            width={70} 
            height={35} 
            className="object-contain w-auto h-auto"
            priority
          />
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex items-center gap-8 font-bold text-[15px] text-slate-800">
          <Link href="/" className="hover:text-[#FF5C00] transition-colors">Home</Link>
          <Link href="/AboutUs" className="hover:text-[#FF5C00] transition-colors">About us</Link>
          
          {/* Desktop Mega Dropdown */}
          <div className="relative" ref={servicesRef}>
            <Link href="/OurServices">
            <button 
              onMouseEnter={() => setIsServicesOpen(true)}
              className="flex items-center gap-1 hover:text-[#FF5C00] transition-colors py-2"
            >
              Services <ChevronDown size={16} className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            </Link>

            {isServicesOpen && (
              <div 
                className="absolute top-full -left-48 w-[800px] bg-white shadow-2xl rounded-xl mt-2 flex border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
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
                <div className="w-2/3 p-8">
                  <h4 className="text-[#FF5C00] font-black uppercase text-xs tracking-widest mb-6">Book by brands</h4>
                  <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                   {brandData[activeTab].map((brand, idx) => (
  <Link 
    key={idx} 
    href={`/services/${activeTab}/${brand.slug}`} // Changed from brand.toLowerCase()
    className="text-[13px] text-slate-600 hover:text-[#002D62] hover:font-bold transition-all"
  >
    {brand.name} {categories.find(c => c.id === activeTab).label}
  </Link>
))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/OurWorks" className="hover:text-[#FF5C00] transition-colors">Our works</Link>
          <Link href="/ContactUs" className="hover:text-[#FF5C00] transition-colors">Contact Us</Link>
        </div>

        {/* Mobile Actions & Trigger */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block lg:block bg-[#002D62] text-white px-8 py-3 rounded-full font-bold text-[14px] hover:bg-[#FF5C00] transition-all active:scale-95 shadow-lg shadow-blue-900/10">
            Book Now
          </button>
          
          <button 
            className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* 3. MOBILE OVERLAY MENU */}
      <div 
        className={`fixed inset-0 z-[200] lg:hidden transition-all duration-300 ${
          isMobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={handleMobileClose}
        />
        
        {/* Menu Content */}
        <div 
          className={`absolute top-0 right-0 h-full w-[300px] bg-white shadow-2xl transition-transform duration-300 transform flex flex-col ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex justify-between items-center border-b">
            <span className="font-black text-[#002D62]">MENU</span>
            <button onClick={handleMobileClose} className="p-2 hover:bg-slate-100 rounded-full">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2 font-bold text-slate-800 text-lg">
            <Link href="/" onClick={handleMobileClose} className="py-2 hover:text-[#FF5C00] transition-colors">Home</Link>
            <Link href="/AboutUs" onClick={handleMobileClose} className="py-2 hover:text-[#FF5C00] transition-colors">About Us</Link>

            {/* ── Mobile Services Accordion ── */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between py-2 w-full text-left hover:text-[#FF5C00] transition-colors"
              >
                <span>Services</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180 text-[#FF5C00]" : ""}`}
                />
              </button>

              {/* Accordion Panel */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-slate-50 rounded-xl mt-1 mb-2 overflow-hidden border border-slate-100">
                  {/* Category Tabs */}
                  <div className="flex border-b border-slate-200 overflow-x-auto scrollbar-hide">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setMobileActiveTab(cat.id)}
                        className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2.5 text-[11px] font-bold transition-all border-b-2 ${
                          mobileActiveTab === cat.id
                            ? "border-[#FF5C00] text-[#FF5C00] bg-white"
                            : "border-transparent text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        <span className="w-3.5 h-3.5 flex-shrink-0">{cat.icon}</span>
                        <span className="whitespace-nowrap">{cat.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Brand Links */}
                  <div className="p-3">
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#FF5C00] mb-2 px-1">Book by brands</p>
                    <div className="grid grid-cols-2 gap-1">
                     {brandData[mobileActiveTab].map((brand, idx) => (
  <Link
    key={idx}
    href={`/services/${mobileActiveTab}/${brand.slug}`} // Changed from brand.toLowerCase()
    onClick={handleMobileClose}
    className="text-[12px] text-slate-600 hover:text-[#002D62] hover:font-bold transition-all px-2 py-1.5 rounded-md hover:bg-white"
  >
    {brand.name}
  </Link>
))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ── End Mobile Services Accordion ── */}

            <Link href="/OurWorks" onClick={handleMobileClose} className="py-2 hover:text-[#FF5C00] transition-colors">Our Works</Link>
            <Link href="/ContactUs" onClick={handleMobileClose} className="py-2 hover:text-[#FF5C00] transition-colors">Contact Us</Link>
            
            <div className="pt-6 border-t mt-auto">
               <div className="flex flex-col gap-4">
                  <a href="tel:+918800115244" className="flex items-center gap-3 text-sm font-medium text-slate-600">
                    <Phone size={18} className="text-[#FF5C00]" /> +91 8800115244
                  </a>
                  <div className="flex justify-start pt-2">
                    <SocialIcons />
                  </div>
               </div>
            </div>
          </div>

          <div className="p-6 border-t">
            <button className="w-full bg-[#FF5C00] text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-500/20">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </header>

    </>
  );
}