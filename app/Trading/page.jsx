import Image from "next/image";
import Link from "next/link";
import {
  CheckCircleIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

export default function TradingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-40 md:pt-48 pb-20 md:pb-28 px-6 lg:px-12 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/construction-site.jpg"
          alt="Trading Hero Background"
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
              <span>Trading Services</span>
            </div>
          </div>

          {/* Right: Large Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] text-white max-w-2xl font-bold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Trading
            <br />
            Services
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
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16">
            {/* Left: Heading */}
            <h2
              className="text-3xl md:text-4xl lg:text-[42px] leading-[1.2] text-[#0f172a] max-w-md flex-shrink-0 font-bold"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Comprehensive
              <br />
              <span className="text-[#D4AF37]">Scrap Metal Trading</span>
              <br />
              Capabilities
            </h2>

            {/* Right: Bullet Points Grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 text-sm md:text-[15px] text-gray-800 font-semibold"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Building material scrap sales
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Proper handling and storage
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Environmental and legal compliance
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Reliable supply operations
                </span>
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
              Your Trusted Partner for Trading in Qatar
            </h3>
            <p
              className="text-[15px] md:text-base leading-[2] text-gray-600 font-medium"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Huzaifa Brothers (Activity Code: 475282) provides industry-leading
              scrap metal trading capabilities. From the procurement of building
              material scrap to execution of reliable supply operations, we
              ensure every transaction is handled with proper storage protocols
              and strict adherence to environmental and legal compliance in
              Qatar. Our extensive network guarantees competitive pricing and
              seamless supply chain integration, allowing you to focus on your
              core business operations with complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Why Choose Us - Service Points */}
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
              Why Partner With Us?
            </h2>
            <p
              className="text-gray-500 max-w-2xl mx-auto font-semibold leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              We bring unmatched reliability, transparent processes, and
              operational excellence to all our trading services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CurrencyDollarIcon className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3
                className="text-xl font-bold text-[#0f172a] mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Competitive Pricing
              </h3>
              <p
                className="text-gray-500 leading-relaxed text-sm font-medium"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                We leverage our strong market presence and supplier network to
                offer the best possible value for building materials and scrap
                trading.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheckIcon className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3
                className="text-xl font-bold text-[#0f172a] mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Strict Compliance
              </h3>
              <p
                className="text-gray-500 leading-relaxed text-sm font-medium"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Every transaction, storage procedure, and logistical movement is
                executed under rigorous legal and environmental guidelines.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TruckIcon className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3
                className="text-xl font-bold text-[#0f172a] mb-4"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Efficient Logistics
              </h3>
              <p
                className="text-gray-500 leading-relaxed text-sm font-medium"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                We guarantee proper handling, secure storage solutions, and
                timely delivery for all our reliable supply operations across
                Qatar.
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
              Scrap Metal Trading
            </span>{" "}
            and related supply <br className="hidden md:block" /> operations in
            Qatar.
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
