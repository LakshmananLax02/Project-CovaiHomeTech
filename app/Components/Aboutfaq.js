  "use client";
  import React, { useState } from 'react';
  import { Plus, Minus } from 'lucide-react';

  const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0); // Default first one open like the image

    const faqData = [
    {
    question: "Who is Covai Home Tech?",
    answer: "Covai Home Tech is a trusted appliance repair service provider in Coimbatore with experienced technicians and reliable customer support."
  },
  {
    question: "How many years of experience do you have?",
    answer: "We have years of experience in repairing home appliances of all major brands."
  },
  {
    question: "Why should I choose Covai Home Tech?",
    answer: "We provide fast service, affordable pricing, genuine spare parts, and customer satisfaction."
  },
  {
    question: "Do you have trained technicians?",
    answer: "Yes, all our technicians are trained and experienced in handling multiple appliance brands."
  }
    ];

    return (
       <section className="py-5 px-4 md:px-6 lg:px-8 bg-white">        {/* 1. Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="bg-[#FF5C00] text-white text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-orange-500/20">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-6 text-slate-900 tracking-tight">
            Got Questions?
          </h2>
          <p className="text-slate-500 mt-4 text-base font-medium max-w-xl">
            We've got answers to your most common cleaning concerns.
          </p>
        </div>

        {/* 2. Accordion Container */}
        <div className="max-w-7xl mx-auto space-y-2">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`rounded-xl transition-all duration-300 border border-transparent overflow-hidden ${
                  isOpen 
                  ? 'bg-[#001D3D] shadow-lg' 
                  : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors"
                >
                  <span className={`text-lg font-bold ${isOpen ? 'text-white' : 'text-slate-900'}`}>
                    {item.question}
                  </span>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    {isOpen ? (
                      <Minus size={20} className="text-[#FF5C00]" />
                    ) : (
                      <Plus size={20} className="text-[#002d62]" />
                    )}
                  </div>
                </button>

                {/* 3. Expandable Content */}
                <div 
                  className={`transition-all duration-300 ease-in-out px-6 ${
                    isOpen ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <p className={`text-base leading-relaxed ${isOpen ? 'text-white/80' : 'text-slate-500'}`}>
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  export default FAQ;