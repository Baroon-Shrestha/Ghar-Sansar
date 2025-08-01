import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Star,
} from "lucide-react";

export default function ContactHero() {
  return (
    <div>
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/Herosection.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-400/30 mb-8">
              <Star className="w-4 h-4 text-orange-300 mr-2" />
              <span className="text-orange-200 text-sm font-medium">
                Let's Connect
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Have a vision for your dream furniture? We're just a message away.
              Let’s build it together.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
                <Phone className="w-5 h-5 text-orange-400 mr-3" />
                <span className="text-white font-medium">+977-9852030175</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
                <Mail className="w-5 h-5 text-orange-400 mr-3" />
                <span className="text-white font-medium">
                  gharsansar@email.com
                </span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
                <Clock className="w-5 h-5 text-orange-400 mr-3" />
                <span className="text-white font-medium">Mon–Fri, 9AM–6PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
