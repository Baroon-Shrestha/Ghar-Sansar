import React, { useState, useEffect } from "react";
import AboutHero from "./AboutHero";
import AboutWho from "./AboutWho";
import AboutVision from "./AboutVision";
import AboutCorevalues from "./AboutCorevalues";
import AboutCTA from "./AboutCTA";

export default function AboutMain() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Our Story",
      subtitle: "Crafting Dreams Into Reality",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Heritage & Innovation",
      subtitle: "Where Tradition Meets Modernity",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Artisan Excellence",
      subtitle: "Handcrafted With Passion & Precision",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Enhanced Hero Section with Slideshow */}
      <AboutHero />
      {/* Who We Are Section */}
      <AboutWho />
      {/* Our Vision Section */}
      <AboutVision />
      {/* Values Section */}
      <AboutCorevalues />
      {/* Call to Action */}
      <AboutCTA />
    </div>
  );
}
