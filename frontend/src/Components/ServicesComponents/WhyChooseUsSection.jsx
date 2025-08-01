import React from "react";

const reasons = [
  {
    icon: "🏆",
    title: "Top Quality Products",
    desc: "We only partner with certified and trusted brands, ensuring that every product we deliver meets the highest industry standards. Whether you're renovating or building from scratch, quality is guaranteed.",
    stat: "99.9% Quality Satisfaction",
    gradient: "from-purple-500 to-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    icon: "🚚",
    title: "Timely Delivery",
    desc: "We understand how important timelines are in construction. That's why we ensure quick, reliable delivery of all materials, complete with real-time tracking for your peace of mind.",
    stat: "24–48 Hours Dispatch",
    gradient: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    icon: "💰",
    title: "Best Market Price",
    desc: "We offer highly competitive rates without compromising quality or service. Enjoy exclusive deals, bulk discounts, and budget-friendly packages tailored for every project size.",
    stat: "Up to 30% Cost Savings",
    gradient: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-100",
  },
  {
    icon: "🤝",
    title: "Trusted by Thousands",
    desc: "Our reputation is built on trust. Thousands of homeowners, builders, and architects rely on us for dependable products, exceptional customer care, and consistent results.",
    stat: "10,000+ Happy Customers",
    gradient: "from-green-500 to-emerald-600",
    iconBg: "bg-green-100",
  },
  {
    icon: "📦",
    title: "One-Stop Home Shop",
    desc: "No need to hop between suppliers. From tiles to fittings, tools to paints — we provide everything under one roof so you can complete your dream project with ease.",
    stat: "500+ Product Categories",
    gradient: "from-indigo-500 to-purple-600",
    iconBg: "bg-indigo-100",
  },
  {
    icon: "📞",
    title: "Expert Assistance",
    desc: "Need guidance on material selection or design advice? Our experienced team is always ready to assist with personalized support and technical expertise.",
    stat: "15+ Years Experience",
    gradient: "from-rose-500 to-pink-600",
    iconBg: "bg-rose-100",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 mb-4">
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-purple-700">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-gray-900">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Ghar Sansar
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            We're more than just a supplier — we're your trusted partner in
            every step of your home building journey.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl border border-white/50 transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`${item.iconBg} w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* Stat Badge */}
              <div
                className={`inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r ${item.gradient} text-white text-sm font-semibold shadow-sm`}
              >
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 opacity-80"></span>
                {item.stat}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-sm text-gray-600">
            <span>Ready to start your project?</span>
            <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors underline decoration-2 underline-offset-2">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
