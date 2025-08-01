import React, { useEffect, useState } from "react";

export default function HomeTestimonials() {
  const [isVisible, setIsVisible] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Kathmandu",
      testimonial:
        "The craftsmanship is exceptional. Our dining set has become the centerpiece of our home. Every detail reflects the rich tradition of Nepali woodworking.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Sita Gurung",
      location: "Pokhara",
      testimonial:
        "Beautiful traditional designs with modern comfort. The quality exceeded our expectations and the delivery was prompt. Highly recommended!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Arjun Thapa",
      location: "Lalitpur",
      testimonial:
        "Outstanding quality and excellent customer service. The team was professional and helped us choose the perfect pieces for our home. Worth every rupee!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Sita Gurung",
      location: "Pokhara",
      testimonial:
        "Beautiful traditional designs with modern comfort. The quality exceeded our expectations and the delivery was prompt. Highly recommended!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Arjun Thapa",
      location: "Lalitpur",
      testimonial:
        "Outstanding quality and excellent customer service. The team was professional and helped us choose the perfect pieces for our home. Worth every rupee!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Sita Gurung",
      location: "Pokhara",
      testimonial:
        "Beautiful traditional designs with modern comfort. The quality exceeded our expectations and the delivery was prompt. Highly recommended!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Arjun Thapa",
      location: "Lalitpur",
      testimonial:
        "Outstanding quality and excellent customer service. The team was professional and helped us choose the perfect pieces for our home. Worth every rupee!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Maya Rai",
      location: "Bhaktapur",
      testimonial:
        "We love our custom bedroom set! The attention to detail and use of sustainable materials impressed us. True artistry at its finest.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Kiran Shrestha",
      location: "Chitwan",
      testimonial:
        "From design consultation to final delivery, everything was perfect. The furniture perfectly blends traditional craftsmanship with contemporary style.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const itemsPerSlide = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const getItemsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return itemsPerSlide.desktop;
      if (window.innerWidth >= 768) return itemsPerSlide.tablet;
    }
    return itemsPerSlide.mobile;
  };

  const [itemsVisible, setItemsVisible] = useState(getItemsPerSlide());

  const maxSlides = Math.ceil(testimonials.length / itemsVisible);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setItemsVisible(getItemsPerSlide());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, maxSlides]);

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
        className="py-20 px-6 md:px-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-amber-200/25 to-orange-300/15 rounded-full blur-xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.testimonials
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase mb-4 block">
              Customer Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div
              className="overflow-hidden rounded-2xl"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentSlide * (100 / maxSlides)
                  }%)`,
                  width: `${maxSlides * 100}%`,
                }}
              >
                {Array.from({ length: maxSlides }).map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="flex gap-6"
                    style={{ width: `${100 / maxSlides}%` }}
                  >
                    {testimonials
                      .slice(
                        slideIndex * itemsVisible,
                        (slideIndex + 1) * itemsVisible
                      )
                      .map((testimonial, index) => (
                        <div
                          key={slideIndex * itemsVisible + index}
                          className={`flex-1 p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                            isVisible.testimonials
                              ? "translate-y-0 opacity-100"
                              : "translate-y-10 opacity-0"
                          }`}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          {/* Quote icon */}
                          {/* <div className="text-4xl text-blue-200 mb-4">"</div> */}

                          {/* Rating */}

                          {/* Testimonial text */}
                          <p className="text-slate-700 italic mb-6 leading-relaxed">
                            {testimonial.testimonial}
                          </p>
                          <div className="flex items-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i} className="text-amber-400 text-lg">
                                ⭐
                              </span>
                            ))}
                          </div>

                          {/* Customer info */}
                          <div className="flex items-center pt-4 border-t border-slate-200">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-200"
                            />
                            <div>
                              <p className="font-semibold text-slate-800">
                                {testimonial.name}
                              </p>
                              <p className="text-sm text-slate-600">
                                {testimonial.location}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
