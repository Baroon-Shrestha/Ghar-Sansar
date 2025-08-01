import React, { useEffect, useState } from "react";

export default function HomeStats() {
  const [isVisible, setIsVisible] = useState({});
  const [counters, setCounters] = useState({});

  const stats = [
    { number: 500, label: "Happy Families", icon: "🏠", suffix: "+" },
    { number: 15, label: "Years Experience", icon: "⭐", suffix: "+" },
    { number: 50, label: "Skilled Artisans", icon: "👥", suffix: "+" },
    { number: 1000, label: "Custom Pieces", icon: "🎨", suffix: "+" },
  ];

  // Counter animation function
  const animateCounter = (target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCounters((prev) => ({ ...prev, [target]: Math.floor(start) }));
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));

            // Start counter animations when section becomes visible
            if (entry.target.id === "stats") {
              stats.forEach((stat, index) => {
                setTimeout(() => {
                  animateCounter(stat.number);
                }, index * 200); // Stagger animations
              });
            }
          }
        });
      },
      { threshold: 0.3 }
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
        className="py-16 px-6 md:px-12 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
      >
        {/* Enhanced Background Elements */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-amber-400/20 to-orange-500/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-tr from-cyan-400/15 to-blue-400/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-violet-400/10 to-purple-500/5 rounded-full blur-lg transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* Animated floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-violet-400/50 rounded-full animate-bounce"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div
            className={`mb-12 transform transition-all duration-1000 ${
              isVisible.stats
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase mb-3 block">
              Our Achievement
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              Numbers That Matter
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 mx-auto rounded-full shadow-lg"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-amber-400/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 ${
                  isVisible.stats
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-orange-500/0 group-hover:from-amber-400/5 group-hover:to-orange-500/5 rounded-2xl transition-all duration-500"></div>

                {/* Icon with enhanced styling */}
                <div className="text-3xl mb-4 filter drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Animated counter */}
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent mb-2 leading-tight">
                  {counters[stat.number] || 0}
                  {stat.suffix}
                </div>

                {/* Label with enhanced typography */}
                <div className="text-slate-200 font-medium text-sm tracking-wide">
                  {stat.label}
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent group-hover:w-16 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
