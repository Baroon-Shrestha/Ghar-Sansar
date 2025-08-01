import React from 'react';

export default function ServiceHero() {
  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80')",
        }}
      ></div>

      {/* Gradient overlay with better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5a4a91]/80 via-[#6e5b9b]/60 to-[#d57a66]/70 backdrop-brightness-75" />

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-8 max-w-4xl text-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-md">
          Discover Our Wide Range of Services
        </h1>

        <p className="mt-6 text-lg sm:text-xl font-medium text-white/90 hover:text-white transition duration-300 hover:scale-105 max-w-2xl mx-auto">
          From premium tiles to durable fittings and stylish interiors, <span className="font-bold">Ghar Sansar</span> brings everything under one roof to build your perfect home.
        </p>

        {/* Optional CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-[#5a4a91] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Explore Services
          </button>
          <button className="bg-white/10 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#5a4a91] transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
