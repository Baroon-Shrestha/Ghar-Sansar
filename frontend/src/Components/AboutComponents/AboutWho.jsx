import React from "react";

export default function AboutWho() {
  return (
    <div>
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
                Ghar Sansar is more than just a name — it's a representation of
                warmth, creativity, and modern home living. We blend traditional
                Nepali comfort with contemporary aesthetics to create timeless
                furniture pieces and home décor ideas.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                From bustling urban apartments in Kathmandu to serene
                countryside homes in the hills, our mission is to bring charm,
                functionality, and purpose to every space we touch.
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
    </div>
  );
}
