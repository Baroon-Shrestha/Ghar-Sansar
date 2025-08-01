import React from "react";
import { ArrowRight } from "lucide-react";

export default function HorizontalCTASection() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-100 via-blue-50 to-purple-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-left">
            <p className="text-blue-600 text-xs font-medium mb-3 tracking-wide uppercase">
              get premium household accessories through us
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight capitalize">
              Ready to Elevate Your Home Decor with us?
            </h1>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Take the next step toward transforming your house decor. With Ghar
              Sansar's assistance, we provide exceptional support that sets your
              home apart.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group">
                Get started now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-between">
            <div className="relative">
              <img src="/cta.jpg" alt="" className="rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
