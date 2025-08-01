import React from 'react';

export default function Hero1() {
  return (
    <div className="bg-[#f2eee8] py-16 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Section (Chair 1) */}
        <div className="relative bg-[#f5c269] p-6 rounded-lg shadow-md">
          <img
            src="/images/chair1.png" // 🪑 Replace with your actual image path
            alt="Yellow Chair"
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-xl font-bold">Diseño de venta</h2>
            <p className="text-sm">Confort moderno y elegante</p>
          </div>
        </div>

        {/* Right Section (Chair 2) */}
        <div className="relative bg-[#ddb8a4] p-6 rounded-lg shadow-md">
          <img
            src="/images/chair2.png" // 🪑 Replace with your actual image path
            alt="Modern Chair"
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-xl font-bold">Silla nueva</h2>
            <p className="text-sm">Minimalismo con estilo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
