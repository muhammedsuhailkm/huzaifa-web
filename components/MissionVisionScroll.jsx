"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Our Mission",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          Our mission is to deliver professional and efficient services that meet client expectations while maintaining strict quality and safety standards.
        </p>
        <div>
          <p className="font-semibold mb-2">We are committed to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Delivering services aligned with recognized quality standards</li>
            <li>Executing projects within agreed timelines</li>
            <li>Operating with integrity and transparency</li>
            <li>Complying with health, safety, environmental, and regulatory requirements</li>
          </ul>
        </div>
      </div>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/ourmission.jpg"
          className="h-full w-full object-cover rounded-2xl"
          alt="Our Mission"
        />
      </div>
    ),
  },
  {
    title: "Our Vision",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          To become a trusted and recognized service provider in Qatar's construction, trading, and facility services.
        </p>
        <p>
          HUZAIFA BROTHERS aims to build a strong reputation through consistent quality delivery, ethical business practices, and compliance with industry standards. The company is committed to supporting Qatar's infrastructure development and service.
        </p>
        <div>
          <p className="font-semibold mb-2">Our Vision Reflects:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Trust and reliability</li>
            <li>Long-term sustainability</li>
            <li>Professional excellence</li>
          </ul>
        </div>
      </div>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/ourvision.jpg"
          className="h-full w-full object-cover rounded-2xl"
          alt="Our Vision"
        />
      </div>
    ),
  },
];

export function MissionVisionScroll() {
  return (
    <div className="w-full bg-zinc-50 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[2px] bg-gradient-to-r from-transparent to-[#D4AF37] w-12 sm:w-32"></div>
          <h2 className="text-3xl md:text-5xl font-medium text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Mission & Vision
          </h2>
          <div className="h-[2px] bg-gradient-to-l from-transparent to-[#D4AF37] w-12 sm:w-32"></div>
        </div>
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
