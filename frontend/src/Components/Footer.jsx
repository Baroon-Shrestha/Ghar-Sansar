import React from "react";

export default function GharSansarFooter() {
  return (
    <footer className="bg-blue-900 text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent mb-4">
              Ghar Sansar
            </h3>
            <p className="text-blue-200 leading-relaxed mb-6 max-w-md">
              Creating beautiful, sustainable furniture that brings warmth and character to your home. 
              Where tradition meets innovation.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors cursor-pointer">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors cursor-pointer">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors cursor-pointer">
                <span className="text-sm">🌐</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Custom Design</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-blue-200">
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                Kathmandu, Nepal
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                +977-1-XXXXXXX
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                info@gharsansar.com
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-300">
            © 2024 Ghar Sansar. All rights reserved. Crafted with ❤️ in Nepal.
          </p>
        </div>
      </div>
    </footer>
  );
}
