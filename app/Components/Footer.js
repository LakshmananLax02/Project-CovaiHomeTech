import React from 'react';
import Image from 'next/image';

// Custom SVG components for stability
const YoutubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16h-4.267zM4 20l6.768-6.768m2.46-2.46L20 4"/></svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* Reduced overall top padding from pt-16 to pt-10 */}
      <div className="bg-gradient-to-r from-[#5d3a27] via-[#2d2d44] to-[#002d62] pt-10 pb-8 px-6 md:px-12 lg:px-24">
        
        {/* 1. Header - Reduced bottom margin from mb-16 to mb-8 */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6">
            <div className="relative w-28 h-28 transition-all hover:scale-105 duration-500">
              <Image 
                src="/images/Logo.png" 
                alt="Covai Home Tech Logo"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
                priority
              />
            </div>
            
          </div>
          {/* Reduced top margin of the HR from mt-12 to mt-6 */}
          <hr className="border-white/10 mt-6" />
        </div>

        {/* 2. Content Grid - Reduced bottom margin from mb-20 to mb-10 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 mb-10">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/90 border-l-2 border-orange-500/70 pl-4">Services</h3>
            <ul className="space-y-3 text-sm font-medium text-white/60">
              <li className="hover:text-orange-500 cursor-pointer transition-all hover:translate-x-1">Washing machine repair</li>
              <li className="hover:text-orange-500 cursor-pointer transition-all hover:translate-x-1">Ac repair and maintenance</li>
              <li className="hover:text-orange-500 cursor-pointer transition-all hover:translate-x-1">Tv repair</li>
              <li className="hover:text-orange-500 cursor-pointer transition-all hover:translate-x-1">Refrigerator repair</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/90 border-l-2 border-orange-500/70 pl-4">Quick Links</h3>
            <ul className="space-y-3 text-sm font-medium text-white/60">
              <li className="hover:text-orange-500 cursor-pointer transition-all hover:translate-x-1">Home</li>
              <li className="hover:text-orange-500 cursor-pointer transition-all hover:translate-x-1">About us</li>
              <li className="hover:text-orange-500 cursor-pointer transition-all hover:translate-x-1">Our works</li>
              <li className="hover:text-orange-500 cursor-pointer transition-all hover:translate-x-1">Rent and purchase</li>
              <li className="hover:text-orange-500 cursor-pointer transition-all hover:translate-x-1">Contact us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/90 border-l-2 border-orange-500/70 pl-4">Address</h3>
            <p className="text-sm leading-relaxed text-white/60 max-w-[240px]">
              Maecens rhoncus molese conubia lores mauris class etiam potenti been nonum ectus folish consequat
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/90 border-l-2 border-orange-500/70 pl-4">Contact Us</h3>
            <div className="mb-4">
              <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-1">Primary Line</p>
              <p className="text-2xl font-black tracking-tight text-white">02 (650) 365 2560</p>
            </div>
            
            <div>
              <p className="text-[10px] font-bold mb-3 text-white/50 uppercase tracking-widest">Connect With Us</p>
              <div className="flex gap-5">
                <YoutubeIcon className="w-5 h-5 cursor-pointer hover:text-orange-500 transition-all hover:-translate-y-1" />
                <FacebookIcon className="w-5 h-5 cursor-pointer hover:text-orange-500 transition-all hover:-translate-y-1" />
                <XIcon className="w-5 h-5 cursor-pointer hover:text-orange-500 transition-all hover:-translate-y-1" />
                <InstagramIcon className="w-5 h-5 cursor-pointer hover:text-orange-500 transition-all hover:-translate-y-1" />
                <LinkedinIcon className="w-5 h-5 cursor-pointer hover:text-orange-500 transition-all hover:-translate-y-1" />
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Bar - Tightened padding */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold">
          <p className="opacity-50 uppercase tracking-[0.2em]">
            Copyright © 2026 <span className="text-orange-500">Covaihome tech</span>. All Rights Reserved.
          </p>
          <div className="flex gap-2 opacity-50 uppercase tracking-[0.2em]">
            <span>Developed by</span>
            <span className="text-orange-500">Wexoraa infotech</span>
          </div>
        </div>
      </div>
    </footer>
  );
}