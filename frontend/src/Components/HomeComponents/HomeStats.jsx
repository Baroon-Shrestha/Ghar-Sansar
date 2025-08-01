import React, { useEffect, useState } from "react";

export default function HomeStats() {
  const [isVisible, setIsVisible] = useState({});
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
        id="stats"
        className="py-24 px-6 md:px-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/5 rounded-full translate-y-32 -translate-x-32"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div
            className={`mb-16 transform transition-all duration-1000 ${
              isVisible.stats
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Achievement
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Numbers That Matter
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-300 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Families", icon: "🏠" },
              { number: "15+", label: "Years Experience", icon: "⭐" },
              { number: "50+", label: "Skilled Artisans", icon: "👥" },
              { number: "1000+", label: "Custom Pieces", icon: "🎨" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible.stats
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
