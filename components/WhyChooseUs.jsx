"use client";
import React from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";

const reasons = [
  "Expert Team",
  "Comprehensive Services",
  "Client-Centric Approach",
  "Timely Execution",
  "Quality Assurance",
  "Reliable Support",
];

export function WhyChooseUs() {
  return (
    <section className="relative w-full bg-white pt-16 md:pt-24 pb-4 md:pb-8 overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#D4AF37] flex flex-col lg:flex-row shadow-lg">
          {/* Subtle line pattern on the gold background */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)`,
            }}
          ></div>

          {/* Left Content */}
          <div className="relative z-10 w-full lg:w-[60%] px-8 py-16 lg:px-16 lg:py-20 flex flex-col justify-center">
            <p className="text-white font-bold tracking-wider text-sm uppercase mb-3 drop-shadow-sm">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-white mb-12 leading-[1.1] drop-shadow-sm">
              Commitment to Excellence
              <br className="hidden md:block" /> and Client Satisfaction
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 max-w-2xl">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/40 backdrop-blur-sm hover:bg-white/50 transition-colors rounded-full py-1.5 pl-1.5 pr-6 shadow-sm"
                >
                  <div className="bg-white rounded-full p-2 flex-shrink-0 shadow-sm">
                    <CheckIcon
                      className="w-5 h-5 text-[#D4AF37]"
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className="text-gray-900 font-bold text-sm md:text-[15px]">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Container */}
          <div className="relative w-full lg:w-[40%] min-h-[350px] lg:min-h-0">
            {/* Desktop overlapping image — animation on wrapper, Image inside */}
            <div className="hidden lg:block absolute top-[-40px] bottom-[40px] right-0 left-0 overflow-hidden shadow-2xl">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.08 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                className="w-full h-full relative"
              >
                <Image
                  src="/fac.jpg"
                  alt="Why Choose Us - Engineering Team"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  loading="lazy"
                  quality={75}
                />
              </motion.div>
            </div>
            
            {/* Mobile image fallback */}
            <div className="block lg:hidden relative h-72 sm:h-96 w-full overflow-hidden">
              <Image
                src="/fac.jpg"
                alt="Why Choose Us - Engineering Team"
                fill
                className="object-cover object-center"
                sizes="100vw"
                loading="lazy"
                quality={75}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
