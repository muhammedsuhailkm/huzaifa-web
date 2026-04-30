import React from "react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative w-full py-6 md:py-8 lg:py-10 overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/2.jpeg"
          alt="Huzaifa Brothers Services"
          className="w-full h-full object-cover grayscale opacity-90"
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-normal mb-6 leading-relaxed md:leading-snug drop-shadow-lg"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          <span className="text-[#D4AF37] font-bold">HUZAIFA BROTHERS</span>{" "}
          offers expert assistance in construction, trading, and related
          facility services in Qatar.
        </h2>

        <Link
          href="/Contact-us"
          className="inline-block bg-black hover:bg-[#111] text-white font-semibold text-sm tracking-wide py-2.5 px-8 rounded-[2rem] transition-transform hover:scale-105 duration-300 shadow-xl border border-white/10"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
