import { useState } from "react";
import { Phone, ShoppingCart, Plus, Minus, Star } from "lucide-react";

export const Card = ({ product, onQuoteRequest }) => {
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const calculateTotal = () => {
    return (product.price * quantity).toFixed(2);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1 ${
        !product.inStock ? "opacity-75" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-48 object-cover transition-all duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Grade/Special badge */}
        {product.grade && (
          <div className="absolute top-3 left-3 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold">
            {product.grade}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Product Name */}
        <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">
          {product.name}
        </h3>

        {/* Specifications with better styling */}
        <div className="mb-4 space-y-2">
          {Object.entries(product.specs).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0"
            >
              <span className="text-sm text-gray-600 capitalize">{key}:</span>
              <span className="text-sm font-semibold text-gray-800">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Rating if available */}
        {product.rating && (
          <div className="flex items-center gap-2 mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) ? "fill-current" : ""
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.rating})</span>
          </div>
        )}

        {/* Pricing section with better design */}
        <div className="mb-5 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-baseline justify-between mb-2">
            <div>
              <span className="text-2xl font-bold text-blue-600">
                NRs. {product.price.toLocaleString()}
              </span>
              <span className="text-sm text-gray-500 ml-1">
                /{product.unit}
              </span>
            </div>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                NRs. {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Interactive Quantity Selector */}
          <div className="flex items-center justify-between">
            <div className="flex items-center bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="p-2 hover:bg-gray-100 transition-colors"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4 text-gray-600" />
              </button>
              <div className="px-4 py-2 bg-gray-50 min-w-[60px] text-center font-semibold">
                {quantity}
              </div>
              <button
                onClick={() => handleQuantityChange(1)}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            <div className="text-right">
              <p className="text-xs text-gray-500">Total</p>
              <p className="text-lg font-bold text-green-600">
                NRs. {calculateTotal()}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            // onClick={() => onAddToCart(product, quantity)}
            disabled={!product.inStock}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 ${
              product.inStock
                ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>

          <button
            onClick={() => onQuoteRequest(product)}
            className="w-full py-2 px-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-sm hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
};
