import React from "react";
import { Shield, Users, Leaf, Lightbulb, Globe, Heart } from "lucide-react";

export default function AboutCorevalues() {
  const missionPillars = [
    {
      icon: Shield,
      title: "Preserve Heritage",
      description:
        "We are dedicated to preserving Nepal’s rich architectural and cultural heritage by incorporating traditional craftsmanship into every design and product.",
      colors: {
        bg: "bg-blue-50/70",
        border: "border-blue-100 hover:border-blue-200",
        iconBg: "bg-gradient-to-r from-blue-400 to-blue-500",
      },
    },
    {
      icon: Users,
      title: "Empower Communities",
      description:
        "We strive to create meaningful opportunities for local artisans, helping them sustain their livelihoods and pass down their skills to future generations.",
      colors: {
        bg: "bg-orange-50/70",
        border: "border-orange-100 hover:border-orange-200",
        iconBg: "bg-gradient-to-r from-orange-400 to-orange-500",
      },
    },
    {
      icon: Leaf,
      title: "Sustainable Future",
      description:
        "We prioritize sustainability by sourcing eco-conscious materials, minimizing waste, and adopting green practices that protect our planet.",
      colors: {
        bg: "bg-green-50/70",
        border: "border-green-100 hover:border-green-200",
        iconBg: "bg-gradient-to-r from-green-400 to-green-500",
      },
    },
    {
      icon: Lightbulb,
      title: "Design Innovation",
      description:
        "Our creative process blends timeless Nepali design elements with modern aesthetics, resulting in innovative, functional, and beautiful solutions.",
      colors: {
        bg: "bg-purple-50/70",
        border: "border-purple-100 hover:border-purple-200",
        iconBg: "bg-gradient-to-r from-purple-400 to-purple-500",
      },
    },
    {
      icon: Globe,
      title: "Global Standards",
      description:
        "We follow international quality benchmarks in our materials, processes, and designs to ensure that every product we offer meets global expectations.",
      colors: {
        bg: "bg-indigo-50/70",
        border: "border-indigo-100 hover:border-indigo-200",
        iconBg: "bg-gradient-to-r from-indigo-400 to-indigo-500",
      },
    },
    {
      icon: Heart,
      title: "Customer Commitment",
      description:
        "Our customers are at the heart of what we do. We ensure transparency, reliability, and excellence in every interaction, product, and service.",
      colors: {
        bg: "bg-pink-50/70",
        border: "border-pink-100 hover:border-pink-200",
        iconBg: "bg-gradient-to-r from-pink-400 to-pink-500",
      },
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/20 rounded-full translate-y-32 -translate-x-32"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase mb-4 block">
            Core Values
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Core Values
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
            We are committed to building a meaningful, sustainable, and
            community-centered ecosystem that blends tradition with innovation
            while delivering international quality.
          </p>
          <div className="w-24 h-1 mt-6 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {missionPillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={index}
                className={`group p-6 rounded-2xl ${pillar.colors.bg} backdrop-blur-sm border ${pillar.colors.border} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-14 h-14 ${pillar.colors.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative Pulsing Dots */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/3 right-16 w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-300 opacity-60"></div>
        <div className="absolute top-2/3 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-700 opacity-60"></div>
      </div>
    </section>
  );
}
