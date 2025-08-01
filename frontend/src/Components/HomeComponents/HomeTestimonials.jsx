import React, { useEffect, useState } from "react";

export default function HomeTestimonials() {
  const [isVisible, setIsVisible] = useState({});

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
        id="testimonials"
        className="py-24 px-6 md:px-16 bg-gradient-to-br from-orange-50 to-blue-50"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.testimonials
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase mb-4 block">
              Customer Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Sharma",
                location: "Kathmandu",
                testimonial:
                  "The craftsmanship is exceptional. Our dining set has become the centerpiece of our home.",
                rating: 5,
              },
              {
                name: "Sita Gurung",
                location: "Pokhara",
                testimonial:
                  "Beautiful traditional designs with modern comfort. Highly recommended!",
                rating: 5,
              },
              {
                name: "Arjun Thapa",
                location: "Lalitpur",
                testimonial:
                  "Outstanding quality and excellent customer service. Worth every rupee!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible.testimonials
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-orange-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">
                  "{testimonial.testimonial}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-blue-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
