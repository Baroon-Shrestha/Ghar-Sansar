import React from "react";

const Brands = () => {
  const images = [
    "https://picsum.photos/120/80?random=1",
    "https://picsum.photos/120/80?random=2",
    "https://picsum.photos/120/80?random=3",
    "https://picsum.photos/120/80?random=4",
    "https://picsum.photos/120/80?random=5",
    "https://picsum.photos/120/80?random=6",
    "https://picsum.photos/120/80?random=7",
    "https://picsum.photos/120/80?random=8",
  ];

  return (
    <div className="w-full ] bg-gray-50 flex flex-col justify-center py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Trusted Brands
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          Join thousands of companies who trust our platform to deliver
          exceptional results and drive their business forward.
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of images */}
          {images.map((src, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-6 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt={`Brand ${index + 1}`}
                className="w-48 h-42 object-cover rounded-lg shadow-md "
              />
            </div>
          ))}

          {/* Second set for seamless loop */}
          {images.map((src, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-6 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt={`Brand ${index + 1}`}
                className="w-48 h-42 object-cover rounded-lg shadow-md "
              />
            </div>
          ))}

          {/* Third set to ensure smooth infinite scroll */}
          {images.map((src, index) => (
            <div
              key={`third-${index}`}
              className="flex-shrink-0 mx-6 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt={`Brand ${index + 1}`}
                className="w-48 h-42 object-cover rounded-lg shadow-md "
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(120 + 48) * images.length}px);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Brands;
