import Image from 'next/image';

const stats = [
  { label: "Happy clients", value: "100+" },
  { label: "Average rating", value: "4.9/5" },
  { label: "Years of experience", value: "5+" },
  { label: "customer Satisfaction", value: "98%" },
];

export default function WhatWeDo() {
  return (
    <section className="py-16 px-6 lg:px-24 bg-white">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        
        {/* Left Side: Image Container */}
        <div className="relative h-[450px] md:h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/Whatwedoimg.png" // Replace with image_b94e68.jpg content
            alt="Technician repairing AC"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col">
          {/* Orange Badge */}
          <div className="mb-4">
            <span className="bg-[#FF6600] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
              What We Do
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[#000000] text-3xl md:text-5xl font-bold mb-6 leading-tight">
            About Covaihome Tech
          </h2>

          {/* Paragraphs */}
          <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-4 mb-10">
            <p>
              At Covaihome Tech, We Specialize In Home Appliance Repair And Maintenance Services Across Coimbatore. 
              Our Mission Is To Keep Your Household Running Smoothly By Offering Fast, Affordable, And Professional 
              Repair Solutions — All At Your Doorstep.
            </p>
            <p>
              With Years Of Hands-On Experience, Our Team Of Certified Technicians Ensures That Every Repair Is Done 
              With Precision, Care, And Commitment.
            </p>
            <p>
              Whether It&apos;s Your AC, Washing Machine, Refrigerator, Or TV, We Understand How Essential These 
              Appliances Are To Your Daily Comfort — And That&apos;s Why We Make It Our Mission To Fix Them Quickly And Efficiently.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-100">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-[#003366] text-2xl md:text-3xl font-black mb-1">
                  {stat.value}
                </span>
                <span className="text-[#003366] text-[11px] md:text-xs font-semibold leading-tight uppercase opacity-80">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}