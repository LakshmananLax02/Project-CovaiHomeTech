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
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-100">
          
          {/* Left Side: Branding/Trust Panel */}
          <div className="md:w-1/3 bg-[#002D62]  p-10 text-white flex flex-col justify-between">
            <div>
              <div className="w-12 h-1 bg-[#FF5C00] mb-6"></div>
              <h2 className="text-3xl font-black leading-tight mb-4 uppercase italic">
                Service <br />Booking
              </h2>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Provide your details and location. Our expert team at <span className="text-[#FF5C00]">Covai Home Tech</span> will reach your doorstep.
              </p>
            </div>
            
            <div className="space-y-6">
             
             
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

          {/* Right Side: Form Fields */}
          <div className="md:w-2/3 p-10 md:p-14">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="group">
                  <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Full Name</label>
                  <div className="flex items-center border-b-2 border-slate-100 group-focus-within:border-[#FF5C00] transition-colors py-2">
                    <User className="text-slate-300 mr-3" size={18} />
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="e.g. Rahul"
                      className="w-full outline-none text-slate-700 font-bold placeholder:text-slate-200"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Mobile */}
                <div className="group">
                  <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Phone Number</label>
                  <div className="flex items-center border-b-2 border-slate-100 group-focus-within:border-[#FF5C00] transition-colors py-2">
                    <Phone className="text-slate-300 mr-3" size={18} />
                    <input 
                      type="tel" 
                      name="mobile"
                      required
                      placeholder="10-digit mobile"
                      className="w-full outline-none text-slate-700 font-bold placeholder:text-slate-200"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Service Dropdown */}
                <div className="group">
                  <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Service Required</label>
                  <div className="flex items-center border-b-2 border-slate-100 group-focus-within:border-[#FF5C00] transition-colors py-2">
                    <Settings className="text-slate-300 mr-3" size={18} />
                    <select 
                      name="serviceType"
                      required
                      className="w-full outline-none text-slate-700 font-bold bg-transparent cursor-pointer"
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

                {/* Brand Dropdown (Conditional) */}
                <div className={`group transition-opacity ${!formData.serviceType ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
                  <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Appliance Brand</label>
                  <div className="flex items-center border-b-2 border-slate-100 group-focus-within:border-[#FF5C00] transition-colors py-2">
                    <ShieldCheck className="text-slate-300 mr-3" size={18} />
                    <select 
                      name="brand"
                      required={!!formData.serviceType}
                      className="w-full outline-none text-slate-700 font-bold bg-transparent cursor-pointer"
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

              {/* ADDRESS FIELD (New) */}
              <div className="group">
                <label className="text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest">Service Location / Address</label>
                <div className="flex items-start border-b-2 border-slate-100 group-focus-within:border-[#FF5C00] transition-colors py-2">
                  <MapPin className="text-slate-300 mr-3 mt-1" size={18} />
                  <textarea 
                    name="address"
                    rows="2"
                    placeholder="Enter your street name, area, and landmark in Coimbatore"
                    className="w-full outline-none text-slate-700 font-bold placeholder:text-slate-200 resize-none"
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>

              {/* Submit */}
              <button 
                type="submit"
                className="w-full bg-[#FF5C00] text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl active:scale-95 group"
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