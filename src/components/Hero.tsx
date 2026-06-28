import React from "react";

export default function Hero() {
  return (
    <section className="w-full py-24 bg-gradient-to-r from-synexil-blue via-synexil-teal to-synexil-green text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Empowering Ethical Innovation
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl">
            Governance, Security, Automation, and Training for Modern Enterprises.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/services"
              className="bg-synexil-green text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 transition"
            >
              Explore Services
            </a>

            <a
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-synexil-blue transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl" />
        </div>
      </div>
    </section>
  );
}
