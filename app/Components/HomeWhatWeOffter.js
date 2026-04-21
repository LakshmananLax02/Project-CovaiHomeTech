"use client";

import React from 'react';
import { UserCheck, Headset, ShieldCheck, Cog } from 'lucide-react';

const offers = [
  {
    title: "Expert Technicians",
    description: "Our team consists of certified professionals with years of experience in appliance repair.",
    icon: <UserCheck className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Customer Support",
    description: "Dedicated support team available to assist you with scheduling and queries.",
    icon: <Headset className="w-8 h-8" />,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "3 Months Service Warranty",
    description: "Complete peace of mind with a 90-day guarantee on all our labor and service work.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "6 Months Spare Parts Warranty",
    description: "We use only genuine spares, backed by a solid 180-day replacement warranty.",
    icon: <Cog className="w-8 h-8" />,
    color: "bg-purple-50 text-purple-600"
  }
];

export default function WhatWeOffer() {
  return (
    <section className="py-10 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="bg-[#FF6600] text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
          Offers
        </span>
          <h2 className="text-4xl font-bold mt-3 text-black">What we offer</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          {/* <p className="mt-6 text-slate-500 font-medium max-w-2xl mx-auto">
            We provide reliable and high-quality repair services for all your home appliances in Coimbatore.
          </p> */}
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[1rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-black text-[#001529] mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}