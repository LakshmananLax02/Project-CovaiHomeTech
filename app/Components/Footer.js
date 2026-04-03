import React from 'react';

// Custom SVG Icon Components to avoid library export errors
const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m11 13-9 9" /><path d="m15 9 9-9" /><path d="M4 4l16 16" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden">
      <div className="bg-gradient-to-r from-[#5d3a27] via-[#2d2d44] to-[#002d62] pt-16 pb-8 px-6 md:px-12 lg:px-24">
        
        {/* Logo Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <div className="absolute inset-0 border-2 border-orange-500 rounded-lg rotate-45 flex items-center justify-center">
                <span className="text-orange-500 font-bold -rotate-45">C</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter leading-none">Covai</h2>
              <p className="text-xs tracking-[0.2em] font-medium opacity-80">HOME TECH</p>
            </div>
          </div>
          <hr className="border-white/20 mt-8" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/90">Services</h3>
            <ul className="space-y-4 text-sm font-medium text-white/70">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Washing machine repair</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Ac repair and maintenance</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Tv repair</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Refrigerator repair</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/90">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium text-white/70">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Home</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">About us</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Our works</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Rent and purchase</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Contact us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/90">Address</h3>
            <p className="text-sm leading-relaxed text-white/70 max-w-[200px]">
              Maecens rhoncus molese conubia lores mauris class etiam potenti been nonum ectus folish consequat
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/90">Contact Us</h3>
            <div className="mb-6">
              <p className="text-orange-500 text-sm font-bold mb-1">Phone number</p>
              <p className="text-xl font-bold tracking-tight">02 (650) 365 2560</p>
            </div>
            
            <div>
              <p className="text-sm font-bold mb-4">Join Us</p>
              <div className="flex gap-4">
                {/* Social Icons using SVGs and remaining Lucide icons if they work, 
                    otherwise replace them with similar SVG blocks */}
                <FacebookIcon className="w-5 h-5 cursor-pointer hover:text-orange-500 transition-colors" />
                <TwitterIcon className="w-5 h-5 cursor-pointer hover:text-orange-500 transition-colors" />
                {/* Adding Instagram as SVG too just in case */}
                <svg className="w-5 h-5 cursor-pointer hover:text-orange-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-medium">
          <p className="opacity-80">
            Copyright © 2026 <span className="text-orange-500">Covaihome tech</span>. All Rights Reserved.
          </p>
          <p className="opacity-80">
            Design and developed by <span className="text-orange-500 font-bold">Wexoraa infotech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}