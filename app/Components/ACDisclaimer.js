import React from 'react';

const Disclaimer = () => {
  return (
    <section className="bg-white py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="bg-[#002D62] rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-center">
            <span className="bg-[#FF6600] text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
          Disclaimer
        </span>

          {/* Decorative Background Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5C00]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[#FF5C00] h-10 w-2 rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
                 Disclaimer
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-10">
              {/* Primary Statement */}
              <div className="md:col-span-3">
                <p className="text-slate-200 text-lg leading-relaxed font-medium">
                  <span className="text-[#FF5C00] font-black">Covai Home Tech</span> is an independent home appliance service center providing expert repair and maintenance services for washing machines, refrigerators, air conditioners, and LED TVs.
                </p>
                <div className="mt-6 p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-orange-100/80 text-sm leading-relaxed italic">
                    "We are not affiliated with any specific brand or manufacturer, and we do not claim official authorization."
                  </p>
                </div>
              </div>

              {/* Secondary Details */}
              <div className="md:col-span-2 space-y-6">
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our technicians are trained to handle multiple brands, offering fast, affordable, and transparent service at your doorstep. We prioritize honesty, customer satisfaction, and data privacy in accordance with Google’s business and advertising policies.
                </p>
                
                <div className="pt-6 border-t border-white/10">
                 
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    All information provided on our website is accurate, and we maintain full transparency regarding our services and business identity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;