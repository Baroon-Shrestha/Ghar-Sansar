import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Users, Package, Settings, Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About Us", icon: Users },
    { href: "/products", label: "Products", icon: Package },
    { href: "/services", label: "Services", icon: Settings },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="h-18 w-18">
              <img src="logocopy.jpg" alt="" className="rounded-full" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={handleNavClick}
                    className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 ease-out rounded-lg hover:bg-blue-50/50 flex items-center space-x-2"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium">{item.label}</span>

                    {/* Animated underline */}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out group-hover:w-3/4 group-hover:left-1/8 rounded-full"></div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300"></div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-2 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50 group"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-0 rotate-180 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-180 scale-75"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 border-t border-gray-200/50"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={handleNavClick}
                className={`group flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 ease-out transform ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen
                    ? `${index * 100 + 200}ms`
                    : "0ms",
                }}
              >
                <div className="relative">
                  <IconComponent className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-500" />
                  <div className="absolute inset-0 w-5 h-5 bg-blue-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                </div>

                <span className="font-medium text-base group-hover:translate-x-1 transition-transform duration-300">
                  {item.label}
                </span>

                {/* Mobile item accent */}
                <div className="ml-auto w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-6 transition-all duration-300 rounded-full"></div>
              </Link>
            );
          })}
        </div>

        {/* Bottom gradient fade */}
        <div className="h-4 bg-gradient-to-b from-white/95 to-transparent"></div>
      </div>
    </nav>
  );
}
