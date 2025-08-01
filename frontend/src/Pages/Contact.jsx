import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Star,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    service: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      service: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-orange-900">
      {/* Hero Section with Background Image */}
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

      {/* Two Column Section: Form and Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Service Interested In
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select one</option>
                <option value="custom-furniture">Custom Furniture</option>
                <option value="interior">Interior Design</option>
                <option value="bulk-order">Bulk Order</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>

            <Input
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />

            <div>
              <label className="block text-white font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-orange-500 resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>

          {/* Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white/10">
            <iframe
              title="Ghar Sansar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.222027216598!2d85.3354890751959!3d27.708963726491437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907f09e6e01%3A0xa057bce3be78c6c3!2sBaneshwor%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1691799481969!5m2!1sen!2snp"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-[450px] border-none"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Input component
function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-white font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder={label}
        required
      />
    </div>
  );
}
