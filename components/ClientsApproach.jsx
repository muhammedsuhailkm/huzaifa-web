import React from 'react';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

export function ClientsApproach() {
  return (
    <section className="relative w-full py-20 md:py-28 px-6 lg:px-12 bg-[#0f172a] overflow-hidden">
      {/* Background Pattern overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 1px, transparent 24px)`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-16 md:mb-20">
          <div className="h-[2px] bg-gradient-to-r from-transparent to-[#D4AF37] w-12 sm:w-32"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#D4AF37] text-center whitespace-nowrap" style={{ fontFamily: 'Playfair Display, serif' }}>
            Clients & Business Approach
          </h2>
          <div className="h-[2px] bg-gradient-to-l from-transparent to-[#D4AF37] w-12 sm:w-32"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
          {/* Vertical Divider for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent -translate-x-1/2"></div>

          {/* Client Categories */}
          <div className="flex flex-col items-center md:items-start md:pl-8 lg:pl-16">
            <h3 className="text-2xl md:text-3xl font-medium text-[#D4AF37] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Client Categories:
            </h3>
            <ul className="space-y-5 w-full max-w-sm">
              {[
                "Government entities",
                "Private companies",
                "Property developers",
                "Facility management companies"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-[1.1rem] text-white/90">
                  <ShieldCheckIcon className="size-6 text-[#D4AF37] flex-shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                  <span style={{ fontFamily: "Montserrat, sans-serif" }} className="tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Approach */}
          <div className="flex flex-col items-center md:items-start md:pl-12 lg:pl-20">
            <h3 className="text-2xl md:text-3xl font-medium text-[#D4AF37] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Approach:
            </h3>
            <ul className="space-y-5 w-full max-w-sm">
              {[
                "Professional communication",
                "Transparent pricing",
                "Customized solutions",
                "Long-term partnerships",
                "Reliable service delivery"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-[1.1rem] text-white/90">
                  <ShieldCheckIcon className="size-6 text-[#D4AF37] flex-shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                  <span style={{ fontFamily: "Montserrat, sans-serif" }} className="tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
