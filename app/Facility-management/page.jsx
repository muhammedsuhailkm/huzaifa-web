import Image from "next/image";
import Link from "next/link";
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  GlobeEuropeAfricaIcon,
  ScaleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function FacilityManagementPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-40 md:pt-48 pb-20 md:pb-28 px-6 lg:px-12 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/cleaning.jpg"
          alt="Cleaning & Facility Services Hero"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0f172a]/75" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Left: Label + Breadcrumb */}
          <div className="flex flex-col gap-6">
            <div
              className="flex items-center gap-2 text-sm text-[#D4AF37] tracking-widest font-bold uppercase"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <span>Cleaning & Facility</span>
            </div>
          </div>

          {/* Right: Large Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] text-white max-w-2xl font-bold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Cleaning &<br />
            Facility Services
          </h1>
        </div>
      </section>

      {/* Section 1: Core Capabilities */}
      <section className="relative w-full py-20 md:py-28 px-6 lg:px-12 border-t border-gray-200 overflow-hidden">
        {/* Gold & Blue Pattern Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: "#ffffff",
            backgroundImage: `repeating-linear-gradient(45deg, rgba(212, 175, 55, 0.07) 0, rgba(212, 175, 55, 0.07) 1px, transparent 1px, transparent 24px), 
                              repeating-linear-gradient(-45deg, rgba(15, 23, 42, 0.04) 0, rgba(15, 23, 42, 0.04) 1px, transparent 1px, transparent 24px)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Top row: Heading + Bullet Grid */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
            {/* Left: Heading */}
            <h2
              className="text-3xl md:text-4xl lg:text-[42px] leading-[1.2] text-[#0f172a] max-w-md flex-shrink-0 font-bold"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Comprehensive
              <br />
              <span className="text-[#D4AF37]">Facility Solutions</span>
            </h2>

            {/* Right: Two Sections of Capabilities */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {/* Trading Services */}
              <div>
                <h3
                  className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <SparklesIcon className="w-6 h-6 text-[#D4AF37]" />
                  Trading Services
                </h3>
                <div
                  className="space-y-4 text-sm md:text-[15px] text-gray-800 font-semibold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Trading of sanitary and janitorial materials
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Supply of cleaning chemicals
                    </span>
                  </div>
                </div>
              </div>

              {/* Cleaning & Facility Services */}
              <div>
                <h3
                  className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <SparklesIcon className="w-6 h-6 text-[#D4AF37]" />
                  Cleaning & Facility
                </h3>
                <div
                  className="space-y-4 text-sm md:text-[15px] text-gray-800 font-semibold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Commercial & residential cleaning
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      General facility maintenance
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Waste management solutions
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Trained cleaning and facility staff
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-gray-200 my-16" />

          {/* Description */}
          <div className="max-w-4xl">
            <h3
              className="text-xl md:text-2xl font-bold text-[#0f172a] mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Excellence in Janitorial & Maintenance Operations
            </h3>
            <p
              className="text-[15px] md:text-base leading-[2] text-gray-600 font-medium"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Huzaifa Brothers (Activity Code: 812902) delivers top-tier
              cleaning and facility management services across Qatar. We not
              only provide expert commercial and residential cleaning teams, but
              we also ensure your operations run smoothly with our complete
              supply of high-grade sanitary materials and cleaning chemicals.
              Our comprehensive maintenance solutions are tailored to meet the
              highest standards of hygiene and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Health, Safety & Environment (HSE) */}
      <section className="relative w-full py-20 md:py-28 px-6 lg:px-12 border-t border-gray-200 overflow-hidden">
        {/* Gold & Blue Pattern Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: "#f8fafc",
            backgroundImage: `repeating-linear-gradient(45deg, rgba(212, 175, 55, 0.07) 0, rgba(212, 175, 55, 0.07) 1px, transparent 1px, transparent 24px), 
                              repeating-linear-gradient(-45deg, rgba(15, 23, 42, 0.04) 0, rgba(15, 23, 42, 0.04) 1px, transparent 1px, transparent 24px)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Health, Safety & Environment (HSE)
            </h2>
            <p
              className="text-gray-500 max-w-3xl mx-auto font-semibold leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              HUZAIFA BROTHERS prioritizes Health, Safety, and Environment (HSE)
              in all operations, aiming for zero harm. Here are our Key HSE
              Principles:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheckIcon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3
                className="text-lg font-bold text-[#0f172a] mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Safe Work Practices
              </h3>
              <p
                className="text-gray-500 leading-relaxed text-sm font-medium"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Establishing safe work practices across all commercial and
                residential cleaning operations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <AcademicCapIcon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3
                className="text-lg font-bold text-[#0f172a] mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Ongoing Training
              </h3>
              <p
                className="text-gray-500 leading-relaxed text-sm font-medium"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Providing ongoing health and safety training to all our cleaning
                and facility staff.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3
                className="text-lg font-bold text-[#0f172a] mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Safety Inspections
              </h3>
              <p
                className="text-gray-500 leading-relaxed text-sm font-medium"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Conducting regular and rigorous safety inspections at all
                managed facilities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <ScaleIcon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3
                className="text-lg font-bold text-[#0f172a] mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Legal Compliances
              </h3>
              <p
                className="text-gray-500 leading-relaxed text-sm font-medium"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Ensuring strict adherence to all environmental and legal
                compliances in Qatar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <GlobeEuropeAfricaIcon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3
                className="text-lg font-bold text-[#0f172a] mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Protecting Environment
              </h3>
              <p
                className="text-gray-500 leading-relaxed text-sm font-medium"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Protecting the environment and managing waste responsibly in all
                facility operations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheckIcon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3
                className="text-lg font-bold text-[#0f172a] mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                International Standards
              </h3>
              <p
                className="text-gray-500 leading-relaxed text-sm font-medium"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Compliance with both local and international HSE regulations for
                maximum safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative w-full overflow-hidden">
        {/* Background image */}
        <Image
          src="/fac.jpg"
          alt="CTA Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-[#0f172a]/85" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-8 text-center md:py-10">
          <h2
            className="text-xl leading-[1.4] text-white md:text-2xl lg:text-3xl font-medium mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Huzaifa Brothers offers expert assistance in
            <br className="hidden md:block" />{" "}
            <span className="text-[#D4AF37] font-bold">
              Cleaning & Facility Management
            </span>{" "}
            <br className="hidden md:block" /> across Qatar.
          </h2>

          <Link
            href="/Contact-us"
            className="inline-block rounded-full bg-[#D4AF37] px-8 py-3 text-sm font-bold tracking-wider uppercase text-black shadow-[0_8px_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:bg-[#b8952b] hover:-translate-y-1"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Request A Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
