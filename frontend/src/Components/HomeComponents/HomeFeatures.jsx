import React, { useEffect, useState } from "react";

export default function HomeFeatures() {
  const [isVisible, setIsVisible] = useState({});

  const features = [
    {
      icon: "🏠",
      title: "Custom Furniture Design",
      description:
        "Bespoke pieces tailored to your space and style preferences",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: "🌿",
      title: "Sustainable Materials",
      description: "Eco-friendly wood sourcing and responsible craftsmanship",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: "🎨",
      title: "Traditional Craftsmanship",
      description: "Preserving centuries-old Nepali woodworking techniques",
      gradient: "from-blue-600 to-orange-500",
    },
    {
      icon: "🤝",
      title: "Community Support",
      description: "Empowering local artisans and their families",
      gradient: "from-orange-600 to-blue-500",
    },
    {
      icon: "✨",
      title: "Modern Aesthetics",
      description: "Contemporary designs that honor our cultural heritage",
      gradient: "from-blue-500 to-orange-500",
    },
    {
      icon: "🏆",
      title: "Quality Assurance",
      description: "Each piece crafted with meticulous attention to detail",
      gradient: "from-orange-500 to-blue-600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div>
      <section
        id="features"
        className="py-24 px-6 md:px-16 bg-gradient-to-br from-orange-50 to-blue-50 relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/40 rounded-full blur-lg"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.features
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              What Makes Us Special
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${
                  isVisible.features
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
