import React from "react";
import {
  BriefcaseIcon,
  DocumentCheckIcon,
  FaceSmileIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { id: 1, name: "Years of Experience", value: "2+", icon: BriefcaseIcon },
  { id: 2, name: "Completed Projects", value: "2K+", icon: DocumentCheckIcon },
  { id: 3, name: "Happy Clients", value: "1.9K+", icon: FaceSmileIcon },
  { id: 4, name: "Team Members", value: "50+", icon: UserGroupIcon },
];

export function StatsSection() {
  return (
    <section className="relative py-8 sm:py-12 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-[#0f172a]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/95 to-[#0f172a]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col sm:flex-row items-center justify-center sm:justify-start lg:justify-center gap-2 sm:gap-4"
            >
              <stat.icon
                className="h-12 w-12 md:h-12 md:w-12 text-[#0284c7] flex-shrink-0"
                strokeWidth={1.5}
              />
              <div className="flex flex-col text-center sm:text-left mt-1 sm:mt-0">
                <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-300 mt-1">
                  {stat.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
