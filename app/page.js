import { CheckIcon } from "@heroicons/react/24/outline";
import { MissionVisionScroll } from "../components/MissionVisionScroll";

export default function Home() {
  return (
    <main>
      <section
        className="relative flex min-h-[80vh] flex-col justify-start pt-16 md:pt-12 md:justify-end bg-cover bg-center bg-no-repeat px-6 pb-12 lg:px-16 lg:pb-24"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto text-left">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "Playfair Display, serif", lineHeight: "1.2" }}
          >
            Building Quality.
            <br />
            Delivering Trust.
          </h1>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="relative bg-white py-20 px-6 sm:px-12 lg:px-24 border-t border-gray-200">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-[2px] bg-gradient-to-r from-transparent to-[#D4AF37] w-12 sm:w-32"></div>
            <h2 className="text-3xl md:text-5xl font-medium text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Company Overview
            </h2>
            <div className="h-[2px] bg-gradient-to-l from-transparent to-[#D4AF37] w-12 sm:w-32"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              {/* Paragraph */}
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-12 tracking-wide">
                <strong className="text-[#D4AF37] font-semibold">HUZAIFA BROTHERS</strong> Trading, Contracting & Services is a
            professionally established company operating in the State of Qatar.
            The company provides reliable and structured solutions in construction,
            trading, and facility services while maintaining full compliance with
            Qatar&apos;s commercial and regulatory requirements.
          </p>

          {/* Key Focus Areas */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl md:text-3xl font-medium text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Key Focus Areas:
              </h3>
              <div className="h-[1px] bg-gradient-to-r from-[#D4AF37]/80 to-transparent flex-1 max-w-[200px] mt-2"></div>
            </div>
            
            <ul className="space-y-4">
              {[
                "Quality-driven execution",
                "Regulatory compliance",
                "Client satisfaction",
                "Professional service delivery"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-lg md:text-xl text-gray-700">
                  <CheckIcon className="size-6 md:size-7 text-[#D4AF37] flex-shrink-0" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:pl-8">
          <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
            <img src="/1.jpeg" alt="Company Showcase 1" className="w-full h-48 sm:h-64 lg:h-72 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
            <img src="/3.jpeg" alt="Company Showcase 3" className="w-full h-48 sm:h-64 lg:h-72 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="space-y-4 sm:space-y-6">
            <img src="/2.jpeg" alt="Company Showcase 2" className="w-full h-48 sm:h-64 lg:h-72 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
            <img src="/5.png" alt="Company Showcase 4" className="w-full h-48 sm:h-64 lg:h-72 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* Mission & Vision Section */}
      <MissionVisionScroll />
    </main>
  );
}
