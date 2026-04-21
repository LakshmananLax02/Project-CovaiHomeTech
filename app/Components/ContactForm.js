"use client";

import React, { useState } from 'react';
import { User, Phone, Settings, ShieldCheck, MapPin, Send, Wrench } from 'lucide-react';
import { sendBookingEmail } from '../Components/actions';


const brandsData = {
  "Washing Machine Repair Service": ["LG", "Samsung", "IFB", "Bosch", "Whirlpool", "Haier", "Godrej", "Panasonic", "Onida", "Electrolux", "Videocon"],
  "AC Repair Service": ["Voltas", "Blue Star", "Daikin", "LG", "Samsung", "Carrier", "Hitachi", "Panasonic", "O General", "Lloyd", "Whirlpool", "Haier"],
  "Refrigerator Repair Service": ["LG", "Samsung", "Whirlpool", "Haier", "Godrej", "Bosch", "Panasonic", "Hitachi", "Kelvinator", "Electrolux", "Videocon"],
  "TV Repair Service": ["Sony", "Samsung", "LG", "MI (Xiaomi)", "OnePlus", "TCL", "Panasonic", "Haier", "Vu", "Onida", "Philips", "Realme"]
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    serviceType: "",
    brand: "",
    address: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === "serviceType" ? { brand: "" } : {})
    }));
  };

   const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Start loading state (optional)
  const result = await sendBookingEmail(formData);

  if (result.success) {
    alert("Success! Your booking details have been sent to our team.");
    
  } else {
    alert("Something went wrong. Please try calling us directly.");
  }
};

  return (
    <section className="py-10">
      <div className="max-w-9xl mx-auto">
        <div className=" rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-100">
          
          {/* Left Side: Branding/Trust Panel */}
          <div className="md:w-1/3 bg-[#002D62]  p-10 text-white flex flex-col justify-between">
            <div>
              <div className="w-12 h-1 bg-[#FF5C00] mb-6"></div>
              <h2 className="text-3xl font-black leading-tight mb-4 uppercase">
                Service <br />Booking
              </h2>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Provide your details and location. Our expert team at <span className="text-[#FF5C00]">Covai Home Tech</span> will reach your doorstep.
              </p>
            </div>
            
            <div className="space-y-6 py-2  ">
             
             
               {/* Service Warranty */}
  <div className="flex items-center gap-2">
    <ShieldCheck size={26} className="text-[#FF5C00]" />
    <span className="text-xs font-bold uppercase tracking-widest">
      3 Months Service Warranty
    </span>
  </div>

  {/* Spare Parts Warranty */}
  <div className="flex items-center gap-2">
    <Wrench size={26} className="text-[#FF5C00]" />
    <span className="text-xs font-bold uppercase tracking-widest">
      6 Months Spare Parts Warranty
    </span>
  </div>
            </div>
          </div>

         {/* Right Side: Form Fields with Background Video */}
<div className="md:w-2/3 p-10 md:p-14 relative bg-slate-900 overflow-hidden">
  
  {/* 1. Background Video Layer */}
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover opacity-20"
    >
      <source src="/videos/web.mp4" type="video/mp4" />
    </video>
    {/* Dark Overlay to ensure text visibility */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/80" />
  </div>

  {/* 2. Content Wrapper (Form) - Using z-10 to stay on top */}
  <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Name */}
      <div className="group">
        <label className="text-[10px] font-black uppercase text-white mb-2 block tracking-widest">Full Name</label>
        <div className="flex items-center border-b-2 border-white/10 group-focus-within:border-[#FF5C00] transition-colors py-2">
          <User className="text-white/100 mr-3" size={18} />
          <input 
            type="text" 
            name="name"
            required
            placeholder="e.g. Rahul"
            className="w-full outline-none bg-transparent text-white font-bold placeholder:text-white/40"
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="group">
        <label className="text-[10px] font-black uppercase text-white mb-2 block tracking-widest">Phone Number</label>
        <div className="flex items-center border-b-2 border-white/10 group-focus-within:border-[#FF5C00] transition-colors py-2">
          <Phone className="text-white/100 mr-3" size={18} />
          <input 
            type="tel" 
            name="mobile"
            required
            placeholder="10-digit mobile"
            className="w-full outline-none bg-transparent text-white font-bold placeholder:text-white/40"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Service Dropdown */}
      <div className="group">
        <label className="text-[10px] font-black uppercase text-white mb-2 block tracking-widest">Service Required</label>
        <div className="flex items-center border-b-2 border-white/10 group-focus-within:border-[#FF5C00] transition-colors py-2">
          <Settings className="text-white/100 mr-3" size={18} />
          <select 
            name="serviceType"
            required
            className="w-full outline-none text-white font-bold bg-transparent cursor-pointer [&>option]:text-black"
            onChange={handleInputChange}
            value={formData.serviceType}
          >
            <option value="" disabled>Select Appliance</option>
            {Object.keys(brandsData).map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Brand Dropdown */}
      <div className={`group transition-opacity ${!formData.serviceType ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
        <label className="text-[10px] font-black uppercase text-white mb-2 block tracking-widest">Appliance Brand</label>
        <div className="flex items-center border-b-2 border-white/10 group-focus-within:border-[#FF5C00] transition-colors py-2">
          <ShieldCheck className="text-white/80 mr-3" size={18} />
          <select 
            name="brand"
            required={!!formData.serviceType}
            className="w-full outline-none text-white font-bold bg-transparent cursor-pointer [&>option]:text-black"
            onChange={handleInputChange}
            value={formData.brand}
          >
            <option value="" disabled>Select Brand</option>
            {formData.serviceType && brandsData[formData.serviceType].map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
      </div>
    </div>

    {/* Address Field */}
    <div className="group">
      <label className="text-[10px] font-black uppercase text-white mb-2 block tracking-widest">Service Location / Address</label>
      <div className="flex items-start border-b-2 border-white/10 group-focus-within:border-[#FF5C00] transition-colors py-2">
        <MapPin className="text-white/100 mr-3 mt-1" size={18} />
        <textarea 
          name="address"
          rows="2"
          placeholder="Enter your street, area, and landmark"
          className="w-full outline-none bg-transparent text-white font-bold placeholder:text-white/40 resize-none"
          onChange={handleInputChange}
        ></textarea>
      </div>
    </div>

    {/* Submit */}
    <button 
      type="submit"
      className="w-full bg-[#FF5C00] text-white font-black py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-white hover:text-[#002D62] transition-all shadow-xl active:scale-95 group"
    >
      <span>BOOK NOW</span>
      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
    </button>
  </form>
</div>

        </div>
      </div>
    </section>
  );
}