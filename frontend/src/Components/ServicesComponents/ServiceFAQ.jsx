import React, { useState } from "react";

export default function ServiceFAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What types of products does Ghar Sansar sell?",
      answer:
        "We offer a complete range of home building and renovation materials including tiles, pipes, paints, bathroom accessories, cement, steel, and sanitaryware.",
    },
    {
      question: "Do you deliver to my location?",
      answer:
        "Yes, we deliver across Nepal. Delivery time may vary based on location, but most deliveries happen within 24 to 48 hours.",
    },
    {
      question: "Is there any delivery charge?",
      answer:
        "Delivery is free within a certain distance from our main store in Bangau. For distant locations, minimal delivery charges may apply.",
    },
    {
      question: "How do I request a quote for bulk purchases?",
      answer:
        "You can use our contact form or reach us on WhatsApp to request a quote for bulk or construction site orders.",
    },
    {
      question: "Can I get help choosing the right materials?",
      answer:
        "Absolutely! Our experienced team offers free expert consultation to help you choose the best materials for your needs.",
    },
    {
      question: "Do you offer installation services?",
      answer:
        "While we do not provide direct installation, we can connect you with trusted local professionals for various services.",
    },
    {
      question: "How do I place an order?",
      answer:
        "You can place an order through our WhatsApp, call us directly, or visit our store in person. Online ordering is coming soon!",
    },
    {
      question: "What if I receive a damaged product?",
      answer:
        "We offer easy returns or replacements for any damaged or incorrect items within 7 days of delivery.",
    },
    {
      question: "Are your products genuine and branded?",
      answer:
        "Yes, we only deal with authentic and reputed brands to ensure the best quality for our customers.",
    },
    {
      question: "Do you have a physical store?",
      answer:
        "Yes, our main showroom is located in Bangau, Nepal, where you can explore our full range of products in person.",
    },
    {
      question: "How do I get instant support?",
      answer:
        'You can click the "Get Instant Support" button or message us directly on WhatsApp for immediate help.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-20">
        <h3 className="text-4xl font-bold text-black text-center mb-10">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left font-semibold text-xl flex justify-between items-center text-black"
              >
                {faq.question}
                <span className="text-2xl">
                  {openFAQ === index ? "-" : "+"}
                </span>
              </button>
              {openFAQ === index && (
                <p className="mt-4 text-black/90 text-base sm:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
