import React, { useState } from "react";
import { Card } from "../SharedComponent/Card";

const products = [
  {
    id: 1,
    code: "STL001",
    name: "MS Round Steel Bar",
    category: "Steel",
    grade: "Fe 415",
    price: 65,
    unit: "piece",
    inStock: true,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop",
    specs: {
      diameter: "12mm",
      length: "12m",
      weight: "10.7kg",
    },
    delivery: "Free delivery above ₹5000",
  },
  {
    id: 2,
    code: "BSN002",
    name: "Premium Ceramic Wash Basin",
    category: "Bathroom",
    price: 3500,
    unit: "piece",
    inStock: true,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop",
    specs: {
      size: '24" x 18"',
      material: "Ceramic",
      color: "White",
      warranty: "2 years",
    },
    delivery: "Standard delivery 3-5 days",
  },
  {
    id: 3,
    code: "TIL003",
    name: "Premium Vitrified Floor Tiles",
    category: "Tiles",
    price: 45,
    originalPrice: 55,
    unit: "sq.ft",
    inStock: true,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
    specs: {
      size: "600x600mm",
      finish: "Glossy",
      thickness: "8mm",
      origin: "Morbi",
    },
    delivery: "Bulk delivery available",
  },
  {
    id: 4,
    code: "CEM004",
    name: "UltraTech Portland Cement",
    category: "Cement",
    price: 420,
    unit: "bag",
    inStock: false,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&h=300&fit=crop",
    specs: {
      grade: "OPC 53",
      weight: "50kg",
      brand: "UltraTech",
      strength: "53 MPa",
    },
    delivery: "Next day delivery",
  },
  {
    id: 5,
    code: "STL005",
    name: "Stainless Steel Pipe",
    category: "Steel",
    grade: "SS 304",
    price: 280,
    unit: "meter",
    inStock: true,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    specs: {
      diameter: "2 inch",
      thickness: "2mm",
      finish: "Mirror",
      application: "Water supply",
    },
    delivery: "Cut to size available",
  },
  {
    id: 6,
    code: "BSN006",
    name: "Brass Chrome Finish Faucet",
    category: "Bathroom",
    price: 2800,
    originalPrice: 3200,
    unit: "piece",
    inStock: true,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    specs: {
      material: "Brass",
      finish: "Chrome",
      type: "Single Handle",
      warranty: "5 years",
    },
    delivery: "Installation service available",
  },
];

// Main Store Component
const HardwareStore = () => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");

  const handleAddToCart = (product, quantity) => {
    setCart((prev) => [...prev, { ...product, quantity }]);
    setNotification(`Added ${quantity} ${product.name} to cart!`);
    setTimeout(() => setNotification(""), 3000);
  };

  const handleQuoteRequest = (product) => {
    setNotification(`Quote request sent for ${product.name}!`);
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-center items-center flex-col gap-3">
          <div className="text-3xl md:text-6xl font-extrabold">
            Our Products
          </div>
          <p className="text-center max-w-3xl text-lg md:text-xl font-extralight">
            Explore our collection of high-quality construction materials and
            interior fittings — perfect for your next home or building project.
          </p>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded mb-4 text-center shadow-md transition-all duration-300">
            {notification}
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              // onAddToCart={handleAddToCart}
              onQuoteRequest={handleQuoteRequest}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HardwareStore;
