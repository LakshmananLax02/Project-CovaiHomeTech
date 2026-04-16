
import DisclaimerSection from "../../../Components/DisclaimerSection";

export const metadata = {
  title: "Samsung Washing Machine Service in Coimbatore | Covai Home Tech",
  description: "Professional Samsung washing machine repair in Coimbatore for all models. Quick fixes for drum, motor, drainage, and power issues.",
};

 const commonIssues = [
    "Machine not starting", "Drum not spinning", "Water leakage", 
    "Drainage issue", "Motor problem", "Noise issue", 
    "Power issue", "Error code issues", "PCB board issue"
  ];

  const supportModels = [
    "Top Load Washing Machines", "Front Load Washing Machines", 
    "Semi Automatic Models", "Fully Automatic Models", 
    "Inverter Washing Machines", "Smart Washing Machines"
  ];
export default function samsungwashingmachine(){

  
    return(
        <>
       <div className="bg-white min-h-screen">
      {/* 1. HEADER SECTION (Dark Slate) */}
      <div className="bg-[#002D62] pt-10 pb-12   shadow-2xl relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <span className="bg-orange-600 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
              Covai Home Tech
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mt-4">
              Samsung Washing Machine <br />
              <span className="text-[#FF5C00]">Repair Experts</span>
            </h1>
          </div>
          
         

          {/* BIG IMAGE CONTAINER (At the bottom of the header section) */}
          <div className="mt-16 w-full">
 <div className="relative aspect-[10/11] rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl group">              <img 
                src="/washingmachine/Samsung.jpg" 
                alt="Professional Samsung Washing Machine Repair Service" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
   <div className="bg-[#FF5C00] text-white px-6 py-2 rounded-2xl shadow-xl flex items-center justify-between mb-3 w-full max-w-sm">
  {/* Text stays on the far left */}
  <span className="font-black italic text-xl">SAMSUNG</span>

  {/* Logo stays on the far right */}
  <img 
    src="/brandlogos/Samsung.png" 
    alt="Samsung Logo" 
    className="h-5 w-auto object-contain md:h-15" 
  />
</div>
                <p className="text-white font-bold text-sm md:text-lg">Specialized Doorstep Support in Coimbatore</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT SECTION */}
      <section className="py-20 px-4 md:px-8 max-w-8xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2 space-y-16">
            {/* Introduction */}
            <article>
              <h2 className="text-3xl font-black text-slate-900 border-l-8 border-[#FF5C00] pl-6 mb-6">
                Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                At **Covai Home Tech**, we provide professional Samsung washing machine repair 
                services in Coimbatore with fast doorstep support. Our experienced technicians 
                are trained to handle all Samsung washing machine models, including top load, 
                front load, semi-automatic, and fully automatic machines. We ensure quick diagnosis, 
                affordable service charges, and genuine spare parts for long-lasting performance.
              </p>
            </article>

            {/* About Our Service */}
            <article className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm">
              <h2 className="text-3xl font-black text-slate-900 mb-6">About Our Service</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">
                Our expert team offers reliable repair and maintenance services for all Samsung 
                washing machine issues. Whether it is a minor fault or major repair, we provide 
                fast solutions with quality service.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Same-day doorstep service",
                  "Genuine spare parts",
                  "Experienced technicians",
                  "Affordable pricing",
                  "Customer satisfaction",
                  "Service warranty"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-[#FF5C00] text-xl">●</span>
                    <span className="text-slate-800 font-bold text-sm uppercase tracking-tight">{point}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Common Issues & Models */}
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="bg-white">
                <h3 className="text-xl font-black text-blue-900 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF5C00]"></span>
                  Common Issues We Fix
                </h3>
                <ul className="space-y-4">
                  {commonIssues.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-600 font-semibold text-base">
                      <span className="text-orange-500">●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white">
                <h3 className="text-xl font-black text-blue-900 mb-6 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                   Models We Support
                </h3>
                <ul className="space-y-4">
                  {supportModels.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-600 font-semibold text-base">
                      <span className="text-blue-500">●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Areas */}
            <div className="pt-8 border-t border-slate-100">
               <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Service Areas</h2>
               <p className="text-slate-600 text-lg">
                We provide Samsung washing machine repair services across Coimbatore and nearby areas.
               </p>
            </div>
          </div>

          {/* Sidebar: Why Choose & CTA */}
          <aside className="space-y-8">
            <div className="bg-[#002D62] text-white p-10 rounded-[3rem] shadow-2xl sticky top-24">
              <h3 className="text-2xl font-black mb-8 text-orange-400 leading-tight">
                Why Choose <br />Covai Home Tech
              </h3>
              <ul className="space-y-5">
                {[
                  "Fast response time",
                  "Skilled technicians",
                  "Doorstep service",
                  "Affordable pricing",
                  "Genuine spare parts",
                  "Trusted service in Coimbatore"
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-center text-sm">
                    <span className="text-[#FF5C00] font-black text-lg">●</span>
                    <span className="font-bold text-blue-50">{text}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <p className="text-sm text-blue-200 mb-8 font-medium italic">
                  Need fast and reliable Samsung washing machine service in Coimbatore?
                </p>
                <button className="w-full bg-[#FF5C00] hover:bg-orange-500 text-white font-black py-5 rounded-2xl transition-all shadow-xl active:scale-95 text-lg">
                  Book Service Today
                </button>
              </div>
            </div>
          </aside>

        </div>
      </section>

      
    </div>
    <DisclaimerSection/>
        </>
    )
}