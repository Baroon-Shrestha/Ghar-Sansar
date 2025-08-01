import React from 'react';

const services = [
  {
    emoji: '🧱',
    title: 'Premium Tiles',
    desc: 'Explore a wide range of durable and stylish floor and wall tiles for residential and commercial spaces.',
    image: '/images/heat-resistant-premium-design-plain-tiles-772.jpg',
    features: ['Ceramic & Porcelain', 'Water Resistant', 'Easy Maintenance']
  },
  {
    emoji: '🚰',
    title: 'Pipes & Fittings',
    desc: 'Quality plumbing materials and fixtures for residential and commercial construction projects.',
    image: '/images/Pipesandfiting1.jpeg',
    features: ['PVC & Copper', 'Leak Proof', 'Long Lasting']
  },
  {
    emoji: '🚿',
    title: 'Bathroom Accessories',
    desc: 'Modern, elegant, and functional accessories designed to complement all bathroom styles and preferences.',
    image: '/images/bathroom accessories.jpg',
    features: ['Premium Quality', 'Modern Design', 'Easy Installation']
  },
  {
    emoji: '🎨',
    title: 'Paints & Coatings',
    desc: 'Comprehensive selection of paint colors and protective coatings for interior and exterior applications.',
    image: '/images/Painting.png',
    features: ['Weather Resistant', 'Eco-Friendly', 'Wide Color Range']
  },
  {
    emoji: '🛠️',
    title: 'Tools & Equipment',
    desc: 'Professional-grade construction tools and hardware solutions for contractors and DIY enthusiasts.',
    image: '/images/Toolsansequiment1.webp',
    features: ['Professional Grade', 'Durable Build', 'Warranty Included']
  },
  {
    emoji: '🍽️',
    title: 'Modular Kitchen',
    desc: 'Custom modular kitchen solutions that perfectly blend functionality, style, and space optimization.',
    image: '/images/modularKitchen.jpg',
    features: ['Custom Design', 'Space Efficient', 'Premium Finish']
  },
];

export default function ServiceCardsGrid() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-violet-100 py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-violet-700 rounded-full mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction and home improvement solutions designed to bring your vision to life with quality, reliability, and professional expertise.
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto rounded-full shadow-sm"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent group-hover:from-purple-900/50 transition-colors duration-300" />

                {/* Emoji */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {service.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>

                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">
              Our team of experts is here to help you every step of the way. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-violet-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                Contact Us
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300 hover:shadow-md">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
