import React, { useState, useEffect } from 'react';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Our Story",
      subtitle: "Crafting Dreams Into Reality"
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Heritage & Innovation",
      subtitle: "Where Tradition Meets Modernity"
    },
    {
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Artisan Excellence",
      subtitle: "Handcrafted With Passion & Precision"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Enhanced Hero Section with Slideshow */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1500 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(30, 64, 175, 0.85), rgba(194, 65, 12, 0.65)), url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
              }}
            />
          ))}
        </div>

        {/* Enhanced Animated Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-transparent to-orange-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-orange-400/25 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute bottom-40 right-20 w-20 h-20 bg-blue-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/4 right-16 w-16 h-16 bg-white/15 rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-1/4 left-16 w-12 h-12 bg-orange-300/20 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-1/2 left-8 w-8 h-8 bg-blue-300/25 rounded-full animate-pulse delay-150"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 right-32 w-32 h-32 border-2 border-orange-400/20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-blue-400/20 rotate-12 animate-pulse"></div>
        
        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-white px-6">
          <div className="text-center max-w-5xl mx-auto">
            {/* Enhanced Content Animation */}
            <div className="mb-12 transform transition-all duration-1000">
              {/* Company Name with Enhanced Animation */}
              <div className="relative mb-8">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl bg-gradient-to-r from-white via-orange-200 to-blue-200 bg-clip-text text-transparent">
                  Ghar Sansar
                </h1>
                {/* Animated Underline */}
                <div className="flex justify-center space-x-4 mb-8">
                  <div className="w-16 h-1.5 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse"></div>
                  <div className="w-8 h-1.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse delay-75"></div>
                  <div className="w-16 h-1.5 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
              
              {/* Dynamic Content Based on Slide */}
              <div className="space-y-6">
                <p className="text-orange-200 text-2xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto transform transition-all duration-700">
                  {heroSlides[currentSlide].title}
                </p>
                <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </div>
              
              {/* Tagline */}
              <p className="text-blue-200 text-base md:text-lg font-medium mt-6 max-w-2xl mx-auto leading-relaxed">
                Where Every Corner Tells a Story of Comfort, Style, and Belonging
              </p>
            </div>
            
            {/* Enhanced Call to Action */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-orange-500/30 relative overflow-hidden">
                <span className="relative z-10">Discover Our Story</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
              <button className="group border-2 border-white/80 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm relative overflow-hidden">
                <span className="relative z-10">Our Collection</span>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </div>
            
            {/* Mission Statement */}
            <div className="mt-16 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-white/90 text-sm md:text-base font-light italic leading-relaxed">
                  "We don't just create furniture; we craft experiences that transform houses into homes, 
                  spaces into sanctuaries, and dreams into beautiful realities."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <div className="flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                  index === currentSlide 
                    ? 'w-12 h-3 bg-gradient-to-r from-orange-400 to-orange-500' 
                    : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                }`}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="ml-6 text-white/70 text-sm font-medium">
            {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center relative">
              <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-white/60 text-xs font-medium tracking-wider">SCROLL</span>
          </div>
        </div>
        
        {/* Corner Decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-orange-400/30"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-blue-400/30"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-blue-400/30"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-orange-400/30"></div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            {/* Text Content */}
            <div className="space-y-6 transform transition-all duration-700 hover:translate-x-2">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
                  Our Foundation
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                Who We Are
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full"></div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ghar Sansar is more than just a name — it's a representation of warmth, creativity, and modern home living. 
                We blend traditional Nepali comfort with contemporary aesthetics to create timeless furniture pieces and home décor ideas.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From bustling urban apartments in Kathmandu to serene countryside homes in the hills, our mission is to bring 
                charm, functionality, and purpose to every space we touch.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">500+</div>
                  <div className="text-sm text-gray-600">Happy Homes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Beautiful Nepali home interior with traditional and modern elements"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover transform transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200/40 rounded-full blur-lg"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            {/* Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-400 to-orange-400 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern living room with traditional Nepali elements and handcrafted furniture"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover transform transition-all duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-orange-900/10 rounded-3xl"></div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl shadow-lg transform rotate-3">
                  <span className="text-sm font-bold">Innovation Meets Tradition</span>
                </div>
                
                {/* Bottom Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-blue-900">Handcrafted Excellence</span>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-gradient-to-r from-orange-600 to-blue-500 bg-clip-text text-transparent text-sm font-bold tracking-wider uppercase">
                    Our Dream & Mission
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight">
                  Our Vision
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-700 text-xl leading-relaxed font-medium">
                  To revolutionize homes across Nepal and beyond by creating furniture that bridges the gap between 
                  time-honored traditions and contemporary lifestyle needs.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We envision a future where every piece of furniture tells a story — where sustainable craftsmanship 
                  meets innovative design, and where local artisans thrive while preserving centuries-old techniques 
                  for generations to come.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our ultimate goal is to make "Ghar Sansar" synonymous with quality, authenticity, and the perfect 
                  harmony between form and function in every Nepali home.
                </p>
              </div>
              
              {/* Mission Points */}
              <div className="space-y-4 pt-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Our Mission Pillars</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-blue-100 hover:border-blue-200 transition-colors">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-800 block">Preserve Heritage</span>
                      <span className="text-gray-600 text-sm">Keeping traditional Nepali craftsmanship alive</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-orange-100 hover:border-orange-200 transition-colors">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-800 block">Empower Communities</span>
                      <span className="text-gray-600 text-sm">Supporting local artisans and their families</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-blue-100 hover:border-blue-200 transition-colors">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-800 block">Sustainable Future</span>
                      <span className="text-gray-600 text-sm">Eco-friendly materials and responsible practices</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-orange-100 hover:border-orange-200 transition-colors">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-gray-800 block">Design Innovation</span>
                      <span className="text-gray-600 text-sm">Modern aesthetics that honor our roots</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/5 rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-16">
            <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Core Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Drives Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-300 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Passion for Craft</h3>
              <p className="text-blue-100 leading-relaxed">
                Every piece we create carries the soul of traditional Nepali craftsmanship merged with contemporary design sensibilities.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainable Future</h3>
              <p className="text-blue-100 leading-relaxed">
                We source responsibly and design for longevity, ensuring our beautiful pieces contribute to a healthier planet.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Community First</h3>
              <p className="text-blue-100 leading-relaxed">
                We believe in supporting local artisans and communities, creating opportunities while preserving traditional skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to create a home that reflects your unique story and style. 
            Discover our collection and start your journey with Ghar Sansar today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              View Our Collection
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}