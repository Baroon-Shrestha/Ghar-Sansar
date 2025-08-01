import React from "react";

export default function HomeCTA() {
  return (
    <div>
      <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 border-2 border-white rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Create Your Dream Home?
          </h2>
          <p className="text-orange-100 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's work together to bring your vision to life. From custom
            designs to traditional craftsmanship, we're here to make your home
            uniquely yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-orange-600 px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/25 transform transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
              Visit Our Showroom
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
