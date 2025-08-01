import React, { useEffect, useState } from "react";

export default function HomeFeatures() {
  const [isVisible, setIsVisible] = useState({});

  const features = [
    {
      icon: "🏠",
      title: "Custom Furniture Design",
      description:
        "Bespoke pieces tailored to your space and style preferences",
      gradient: "from-slate-900/80 via-slate-800/70 to-slate-900/90",
      bgImage:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    },
    {
      icon: "🌿",
      title: "Sustainable Materials",
      description: "Eco-friendly wood sourcing and responsible craftsmanship",
      gradient: "from-emerald-900/80 via-emerald-800/70 to-slate-900/90",
      bgImage:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    },
    {
      icon: "🎨",
      title: "Traditional Craftsmanship",
      description: "Preserving centuries-old Nepali woodworking techniques",
      gradient: "from-amber-900/80 via-orange-800/70 to-slate-900/90",
      bgImage:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400&h=300&fit=crop",
    },
    {
      icon: "🤝",
      title: "Community Support",
      description: "Empowering local artisans and their families",
      gradient: "from-blue-900/80 via-indigo-800/70 to-slate-900/90",
      bgImage:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
    },
    {
      icon: "✨",
      title: "Modern Aesthetics",
      description: "Contemporary designs that honor our cultural heritage",
      gradient: "from-purple-900/80 via-violet-800/70 to-slate-900/90",
      bgImage:
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop",
    },
    {
      icon: "🏆",
      title: "Quality Assurance",
      description: "Each piece crafted with meticulous attention to detail",
      gradient: "from-rose-900/80 via-pink-800/70 to-slate-900/90",
      bgImage:
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&h=300&fit=crop",
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
        className="py-24 px-6 md:px-16 bg-gradient-to-br from-slate-100 to-gray-200 relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-300/30 rounded-full blur-lg"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.features
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              What Makes Us Special
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative h-80 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  isVisible.features
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${feature.bgImage})` }}
                ></div>

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${feature.gradient}`}
                ></div>

                {/* Icon in top right */}
                <div className="absolute top-6 right-6 z-10">
                  <span className="text-3xl filter drop-shadow-lg">
                    {feature.icon}
                  </span>
                </div>

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed text-sm opacity-90">
                    {feature.description}
                  </p>

                  {/* Subtle bottom accent */}
                  <div className="h-1 w-16 bg-white/40 rounded-full mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
