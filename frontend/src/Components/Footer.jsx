import React from "react";
import {
  Mail,
  Phone,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  ArrowRight,
  Heart,
} from "lucide-react";

export default function GharSansarFooter() {
  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Top Wave Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-1"></div>

      <div className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Content - Horizontal Layout */}
          <div className="flex flex-col lg:flex-row gap-16 mb-16">
            {/* Left Side - Brand & Newsletter */}
            <div className="lg:w-2/5">
              <div className="mb-8">
                <h3 className="text-5xl font-bold text-white mb-2">
                  Ghar Sansar
                </h3>
                <p className="text-orange-400 text-lg font-medium">
                  Home Appliances & Beyond
                </p>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-10">
                Transforming homes with handcrafted furniture that tells a
                story. Each piece is a testament to Nepali craftsmanship and
                modern design sensibilities.
              </p>
            </div>

            {/* Right Side - Links Grid */}
            <div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {/* Navigation */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-6 relative">
                  Navigation
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-400"></div>
                </h4>
                <nav className="space-y-4">
                  {["Home", "Collections", "Services", "Contact"].map(
                    (link) => (
                      <a
                        key={link}
                        href="#"
                        className="block text-slate-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-2 transform"
                      >
                        {link}
                      </a>
                    )
                  )}
                </nav>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-6 relative">
                  Categories
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-400"></div>
                </h4>
                <nav className="space-y-4">
                  {[
                    "Living Room",
                    "Bedroom",
                    "Dining",
                    "Office",
                    "Accessories",
                  ].map((category) => (
                    <a
                      key={category}
                      href="#"
                      className="block text-slate-300 hover:text-orange-400 transition-colors duration-300 hover:translate-x-2 transform"
                    >
                      {category}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-6 relative">
                  Get in Touch
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-400"></div>
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">
                        Visit Our Showroom
                      </p>
                      <p className="text-slate-300 text-sm">Kathmandu, Nepal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Call Us</p>
                      <p className="text-slate-300 text-sm">+977-1-XXXXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Email Us</p>
                      <p className="text-slate-300 text-sm">
                        info@gharsansar.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-slate-400">
                © 2024 Ghar Sansar. Made with Love in Nepal
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <span className="text-slate-400 text-md mr-2">Find us on:</span>

                <a href="#" className="group">
                  <div className="w-8 h-8 border border-slate-600 rounded-full flex items-center justify-center hover:border-blue-500 hover:bg-blue-500 transition-all duration-300">
                    <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </a>

                <a href="#" className="group">
                  <div className="w-8 h-8 border border-slate-600 rounded-full flex items-center justify-center hover:border-pink-500 hover:bg-pink-500 transition-all duration-300">
                    <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </a>

                <a href="#" className="group">
                  <div className="w-8 h-8 border border-slate-600 rounded-full flex items-center justify-center hover:border-green-500 hover:bg-green-500 transition-all duration-300">
                    <Mail className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
