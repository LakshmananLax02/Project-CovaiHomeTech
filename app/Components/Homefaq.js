"use client";
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default first one open like the image

  const faqData = [
    {
      question: "Do I need to be home during the cleaning?",
      answer: "No, as long as we have access, you can carry on with your day. Many of our clients provide a spare key or a digital lock code so we can perform the service while they are at work or running errands."
    },
    {
      question: "Are your cleaning products safe for pets and kids?",
      answer: "Absolutely. We prioritize the health of your family and pets by using non-toxic, eco-friendly cleaning agents that are effective against grime but gentle on your living environment."
    },
    {
      question: "What happens if I’m not satisfied with the cleaning?",
      answer: "Your satisfaction is our priority. If you are not happy with any area we've cleaned, please notify us within 24 hours, and we will send a team back to re-clean those specific areas at no additional cost."
    },
    {
      question: "Can I schedule recurring services?",
      answer: "Yes, we offer weekly, bi-weekly, and monthly scheduling options. Recurring clients often benefit from discounted rates and a consistent cleaning professional who gets to know your home's specific needs."
    },
    {
      question: "Is there a cancellation fee?",
      answer: "We understand plans change. We request a 24-hour notice for cancellations. Cancellations made less than 24 hours before the appointment may incur a small convenience fee to compensate our technicians for the lost time."
    }
  ];

  return (
    <section className="py-10 px-3 md:px-12 lg:px-14 bg-white">
      {/* 1. Header Section */}
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
      <div className="max-w-4xl mx-auto space-y-4">
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