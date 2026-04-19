"use client";

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FindUsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 uppercase tracking-tight">
          Find us on <span className="text-orange-500">google maps</span>
        </h2>
        <div className="w-24 h-1.5 bg-[#008cff] mx-auto rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Side: Google Map Iframe with Pin Focus */}
        <div className="w-full lg:w-2/3 h-[450px] md:h-[550px] rounded-[1rem] overflow-hidden shadow-2xl border-8 border-slate-50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,140,255,0.15)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d563.8042692948216!2d76.9756896853128!3d11.040048478725296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858689d7922fb%3A0x58fb7e9df807a5e6!2s28-B%2C%20Nallimarathottam%2C%20Sridevi%20Nagar%2C%20Ganapathy%2C%20Coimbatore%2C%20Tamil%20Nadu%20641006!5e0!3m2!1sen!2sin!4v1776360957199!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Covaihome Tech Location"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Right Side: Contact Card */}
        <div className="w-full lg:w-1/3 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100">
          
          <h3 className="text-[32px] md:text-[36px] font-black text-[#001529] leading-tight mb-4">
            Covaihome Tech
          </h3>

          <p className="text-slate-600 text-[17px] font-medium leading-relaxed mb-10">
            28B, Nallimarathottam,<br/> Moogambikai Nagar,<br />
            Ganapathy, Coimbatore - 641006.
          </p>

          <h4 className="text-[22px] font-black text-[#001529] mb-6">
            Contact
          </h4>

          <div className="flex flex-col gap-5">
            {/* Call Us Button */}
            <a 
              href="tel:+917418183318" 
              className="flex items-center justify-center gap-3 bg-[#002D62] hover:bg-orange-500 text-white py-5 rounded-[1.2rem] font-bold text-lg shadow-[0_10px_25px_-5px_rgba(0,140,255,0.4)] transition-all hover:-translate-y-1 active:scale-[0.98]"
            >
              <Phone size={22} fill="white" className="text-white" />
              Call us now
            </a>

            {/* WhatsApp Button */}
            {/* <a 
              href="https://wa.me/917418183318" 
              className="flex items-center justify-center gap-3 bg-[#006e21] hover:bg-[#005a1b] text-white py-5 rounded-[1.2rem] font-bold text-lg shadow-[0_10px_25px_-5px_rgba(0,110,33,0.4)] transition-all hover:-translate-y-1 active:scale-[0.98]"
            >
              <MessageCircle size={22} fill="white" className="text-white" />
              Whatsapp
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}