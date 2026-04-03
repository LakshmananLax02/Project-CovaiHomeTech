// components/WhyChooseUs.jsx
import { ThumbsUp, Calendar, TreePine, ClipboardCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Trained & experienced staffs",
      description: "Only skilled, background-checked professionals.",
      icon: <ThumbsUp className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Flexible Scheduling",
      description: "We work around your time, not the other way around.",
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Eco-Conscious Approach",
      description: "Safe for kids, pets, and the environment. Safe for kids, pets",
      icon: <TreePine className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Satisfaction Guarantee",
      description: "Driven by a passion for excellence that shapes our work every day.",
      icon: <ClipboardCheck className="w-8 h-8 text-orange-500" />,
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-r from-[#3d2315] via-[#1a2533] to-[#0a1e33] text-white overflow-hidden rounded-3xl">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Heading Content */}
        <div className="max-w-md">
          <span className="bg-orange-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 leading-[1.1]">
            Why Covaihome tech Is the Right Choice for Quality
          </h2>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed">
            Discover a range of services designed to bring comfort
          </p>
          <button className="px-8 py-3 bg-[#003d7a] hover:bg-orange-500 text-white rounded-full font-semibold transition-all shadow-lg">
            Enquire Now
          </button>
        </div>

        {/* Right Side: Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="mb-2">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}