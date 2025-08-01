import React, { useEffect, useState } from "react";

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Traditional Meets Modern",
      subtitle: "Handcrafted furniture with contemporary design",
    },
    {
      image:
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Comfort Redefined",
      subtitle: "Creating spaces that feel like home",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Sustainable Living",
      subtitle: "Eco-friendly materials, timeless design",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
      <section className="relative h-[80vh] overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(30, 64, 175, 0.8), rgba(194, 65, 12, 0.6)), url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            />
          ))}
        </div>

        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-transparent to-orange-900/40"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-75"></div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-white px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8 transform transition-all duration-1000">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                Ghar Sansar
              </h1>
              <div className="w-32 h-1.5 bg-gradient-to-r from-orange-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
              <p className="text-orange-200 text-2xl md:text-3xl font-light leading-relaxed max-w-4xl mx-auto mb-4">
                {heroSlides[currentSlide].title}
              </p>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-orange-500/25">
                Explore Collection
              </button>
              <button className="border-2 border-white/80 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm">
                Custom Design
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        {/* <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-orange-400 w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
