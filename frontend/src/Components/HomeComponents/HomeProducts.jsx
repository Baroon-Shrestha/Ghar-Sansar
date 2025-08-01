import React, { useEffect, useState } from "react";

export default function HomeCategories() {
  const [isVisible, setIsVisible] = useState({});

  const categories = [
    {
      name: "Living Room",
      image:
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop",
      icon: "🛋️",
      count: "25+ Items",
    },
    {
      name: "Dining Room",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      icon: "🍽️",
      count: "18+ Items",
    },
    {
      name: "Bedroom",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop",
      icon: "🛏️",
      count: "32+ Items",
    },
    {
      name: "Office",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      icon: "💼",
      count: "15+ Items",
    },
    {
      name: "Kitchen",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      icon: "🍳",
      count: "12+ Items",
    },
    {
      name: "Outdoor",
      image:
        "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=400&h=300&fit=crop",
      icon: "🌿",
      count: "8+ Items",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section
        id="categories"
        className="py-24 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.categories
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="bg-gradient-to-r from-orange-600 to-blue-500 bg-clip-text text-transparent text-sm font-bold tracking-wider uppercase mb-4 block">
              Shop by Category
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Browse Collections
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <a
                key={index}
                href="/products"
                className={`group block transform transition-all duration-300 hover:scale-105 ${
                  isVisible.categories
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${category.image})` }}
                  ></div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <span className="text-2xl filter drop-shadow-lg">
                      {category.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-200 opacity-90">
                      {category.count}
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300"></div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/products"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
