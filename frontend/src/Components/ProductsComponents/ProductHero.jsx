import React, { useState } from "react";
import { Search } from "lucide-react";

// #fbf1f0
// #956d37

// #0D50B9
// #FE9300

export default function ProductHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Add your search logic here
  };

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      />

      {/* Gradient Overlay - darker at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

      {/* Content Container */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Text */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#fbf1f0] mb-6 leading-tight">
            Discover Amazing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Products
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Find exactly what you're looking for from thousands of quality
            products, all in one place with unbeatable prices.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search for products, brands, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
                  className="w-full px-6 py-4 pr-16 text-lg bg-white/95 backdrop-blur-sm rounded-full border-0 focus:outline-none focus:ring-4 focus:ring-white/30 placeholder-gray-500 shadow-2xl"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Search size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Browse Categories
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
              View Deals
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}