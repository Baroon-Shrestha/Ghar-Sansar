import React, { useEffect, useState } from "react";

export default function AboutHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-[80vh] flex relative overflow-hidden">
      {/* Background Image Slideshow (visible on all screens) */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Lighter overlay for better text readability */}
            <div className="absolute inset-0 bg-white/20 lg:bg-gradient-to-r lg:from-white/40 lg:via-white/20 lg:to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Left Content Panel */}
      <div className="w-full lg:w-[50%] bg-white/80 lg:bg-white/50 backdrop-blur-sm flex flex-col justify-center px-8 lg:px-16 py-20 relative overflow-hidden">
        {/* Ambient Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-200/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative z-10 space-y-8 max-w-2xl">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500"></div>
              <span className="text-orange-600 text-sm uppercase tracking-[0.3em] font-medium">
                About Us
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-gray-800 leading-none tracking-tight">
              Ghar
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">
                Sansar
              </span>
            </h1>
          </div>

          {/* Static Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-orange-600 mb-3">
                Our Story
              </h2>
              <p className="text-gray-700 text-lg font-light leading-relaxed">
                Crafting Dreams Into Reality
              </p>
            </div>
          </div>

          {/* Static Description */}
          <div className="space-y-4">
            <p className="text-gray-600 text-base leading-relaxed">
              Where heritage meets innovation, and tradition blends seamlessly
              with modernity. We are artisans of excellence, dedicated to
              handcrafting spaces with passion and precision.
            </p>
          </div>

          {/* Quote Section */}
          <div className="relative">
            <div className="absolute -left-4 -top-2 text-6xl text-orange-400/40 font-serif"></div>
            <blockquote className="text-xl lg:text-2xl text-gray-800 font-medium italic leading-relaxed pl-8">
              We build your dream, just not a home
            </blockquote>
            <div className="absolute -right-2 -bottom-4 text-6xl text-orange-400/40 font-serif"></div>
          </div>
        </div>
      </div>

      {/* Right Image Panel (visible only on large screens) */}
      <div className="hidden lg:block lg:w-[40%] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-8 right-8 w-24 h-24 border-2 border-white/40 rounded-full z-10"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-orange-400/50 rotate-45 z-10"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 right-16 w-2 h-2 bg-orange-500 rounded-full animate-pulse z-10"></div>
        <div className="absolute top-1/3 right-32 w-1 h-1 bg-white rounded-full animate-pulse delay-300 z-10"></div>
        <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-amber-500 rounded-full animate-pulse delay-700 z-10"></div>

        {/* Modern Glass Effect */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/30 to-transparent backdrop-blur-sm z-10"></div> */}
      </div>
    </section>
  );
}
