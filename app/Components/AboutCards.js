import { Users, Zap, Clock } from "lucide-react";

const features = [
  {
    title: "Highly skilled team",
    description: "Skilled, certified & continuously educated plumbers voluptuous selenite antique corrupted.",
    icon: <Users className="text-[#FF6600]" size={32} />,
  },
  {
    title: "Fast and reliable",
    description: "Skilled, certified & continuously educated plumbers voluptuous selenite antique corrupted.",
    icon: <Zap className="text-[#FF6600]" size={32} />,
  },
  {
    title: "24/7 availability",
    description: "Skilled, certified & continuously educated plumbers voluptuous selenite antique corrupted.",
    icon: <Clock className="text-[#FF6600]" size={32} />,
  },
];

export default function FeatureCards() {
  return (
    <section className="py-6 px-6 lg:px-8 bg-white">
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div 
            key={index}
            className="relative p-8 rounded-[40px] overflow-hidden min-h-[220px] flex flex-col justify-between"
            style={{
              background: "linear-gradient(to right, #8B5E3C, #1E4D7B)"
            }}
          >
            <div className="flex gap-5">
              {/* Icon Container */}
              <div className="flex-shrink-0 bg-white p-4 rounded-2xl h-fit shadow-md">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="text-white">
                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/80 text-[13px] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Double Arrow Link Icon */}
            <div className="mt-4 text-white/90">
               <span className="text-xl font-bold opacity-80 cursor-pointer hover:opacity-100 transition-opacity">
                 »
               </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}