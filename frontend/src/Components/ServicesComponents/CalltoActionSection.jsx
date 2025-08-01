import React, { useState } from "react";

export default function CalltoActionSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "9801354736";
    const text = `📞 New Callback Request:\n\n👤 Name: ${form.name}\n📧 Email: ${form.email}\n📱 Phone: ${form.phone}\n📝 Message: ${form.message}`;
    const whatsappURL = `https://wa.me/977${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 py-20 px-6 sm:px-10 lg:px-20 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text & CTA */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-snug">
            Experience <span className="text-yellow-300">Reliable</span> &{" "}
            <span className="text-yellow-300">Fast</span> Service with Ghar
            Sansar
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            From premium materials to expert advice and lightning-fast delivery,
            Ghar Sansar is your one-stop solution for everything you need to
            build or renovate your dream home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
            <button className="bg-white text-rose-600 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Explore Our Services
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-rose-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Get Instant Support
            </button>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 rounded-2xl p-8 shadow-lg text-gray-800 backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold mb-6 text-rose-700">
            Request a Callback
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Your Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold py-2 rounded-md hover:from-rose-600 hover:to-orange-600 transition"
            >
              Submit via WhatsApp
            </button>
          </div>
        </form>
      </div>

      {/* FAQ Section */}
    </section>
  );
}
