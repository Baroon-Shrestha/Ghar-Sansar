import React from "react";

export default function AboutVision() {
  return (
    <div>
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
                  <span className="text-sm font-bold">
                    Innovation Meets Tradition
                  </span>
                </div>

                {/* Bottom Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-blue-900">
                    Handcrafted Excellence
                  </span>
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
                  To revolutionize homes across Nepal and beyond by creating
                  furniture that bridges the gap between time-honored traditions
                  and contemporary lifestyle needs.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We envision a future where every piece of furniture tells a
                  story — where sustainable craftsmanship meets innovative
                  design, and where local artisans thrive while preserving
                  centuries-old techniques for generations to come.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our ultimate goal is to make "Ghar Sansar" synonymous with
                  quality, authenticity, and the perfect harmony between form
                  and function in every Nepali home.
                </p>
              </div>

              {/* Mission Points */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
