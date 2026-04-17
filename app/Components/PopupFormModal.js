"use client";

import React, { useEffect } from 'react';
import { User, Phone, Settings, ShieldCheck, MapPin, Send, X, Wrench} from 'lucide-react';
import { sendBookingEmail } from '../Components/actions';

const brandsData = {
  "Washing Machine Repair Service": ["LG", "Samsung", "IFB", "Bosch", "Whirlpool", "Haier", "Godrej", "Panasonic", "Onida", "Electrolux", "Videocon"],
  "AC Repair Service": ["Voltas", "Blue Star", "Daikin", "LG", "Samsung", "Carrier", "Hitachi", "Panasonic", "O General", "Lloyd", "Whirlpool", "Haier"],
  "Refrigerator Repair Service": ["LG", "Samsung", "Whirlpool", "Haier", "Godrej", "Bosch", "Panasonic", "Hitachi", "Kelvinator", "Electrolux", "Videocon"],
  "TV Repair Service": ["Sony", "Samsung", "LG", "MI (Xiaomi)", "OnePlus", "TCL", "Panasonic", "Haier", "Vu", "Onida", "Philips", "Realme"]
};

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = React.useState({
    name: "", mobile: "", serviceType: "", brand: "", address: ""
  });

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, [name]: value,
      ...(name === "serviceType" ? { brand: "" } : {})
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Start loading state (optional)
  const result = await sendBookingEmail(formData);

  if (result.success) {
    alert("Success! Your booking details have been sent to our team.");
    onClose();
  } else {
    alert("Something went wrong. Please try calling us directly.");
  }
};

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-100 hover:bg-red-500 hover:text-white rounded-full transition-all"
        >
          <X size={20} />
        </button>

        {/* Left Panel */}
        <div className="md:w-1/3 bg-[#002D62] p-8 md:p-10 text-white flex flex-col justify-between min-h-[200px]">
          <div>
            <div className="w-12 h-1 bg-[#FF5C00] mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-black uppercase italic leading-tight mb-4">
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

        {/* Right Panel (Form) */}
        <div className="md:w-2/3 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Name</label>
                <div className="flex items-center border-b-2 border-slate-100 group-focus-within:border-[#FF5C00] py-1 transition-colors">
                  <User size={16} className="text-slate-300 mr-2" />
                  <input type="text" name="name" required placeholder="Full Name" className="w-full outline-none text-sm font-bold" onChange={handleInputChange}/>
                </div>
              </div>

              <div className="group">
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Phone</label>
                <div className="flex items-center border-b-2 border-slate-100 group-focus-within:border-[#FF5C00] py-1 transition-colors">
                  <Phone size={16} className="text-slate-300 mr-2" />
                  <input type="tel" name="mobile" required placeholder="Mobile" className="w-full outline-none text-sm font-bold" onChange={handleInputChange}/>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Service</label>
                <div className="flex items-center border-b-2 border-slate-100 group-focus-within:border-[#FF5C00] py-1 transition-colors">
                  <Settings size={16} className="text-slate-300 mr-2" />
                  <select name="serviceType" required className="w-full outline-none text-sm font-bold bg-transparent" onChange={handleInputChange} value={formData.serviceType}>
                    <option value="" disabled>Select</option>
                    {Object.keys(brandsData).map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className={`group transition-opacity ${!formData.serviceType ? 'opacity-30' : 'opacity-100'}`}>
                <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Brand</label>
                <div className="flex items-center border-b-2 border-slate-100 group-focus-within:border-[#FF5C00] py-1 transition-colors">
                  <ShieldCheck size={16} className="text-slate-300 mr-2" />
                  <select name="brand" required={!!formData.serviceType} className="w-full outline-none text-sm font-bold bg-transparent" onChange={handleInputChange} value={formData.brand}>
                    <option value="" disabled>Select Brand</option>
                    {formData.serviceType && brandsData[formData.serviceType].map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="group">
              <label className="text-[10px] font-black uppercase text-slate-400 mb-1 block">Address</label>
              <div className="flex items-start border-b-2 border-slate-100 group-focus-within:border-[#FF5C00] py-1 transition-colors">
                <MapPin size={16} className="text-slate-300 mr-2 mt-1" />
                <textarea name="address" rows="2" placeholder="Street / Area / Landmark" className="w-full outline-none text-sm font-bold resize-none" onChange={handleInputChange}></textarea>
              </div>
            </div>

            <button type="submit" className="w-full bg-[#FF5C00] text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#002D62] shadow-lg transition-all active:scale-95 group">
              <span>BOOK NOW</span>
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}