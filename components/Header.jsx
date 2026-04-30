"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">Your Company</span>
            <img
              alt="Huzaifa Logo"
              src="/logo-org.png"
              className="h-14 sm:h-24 w-auto -my-2 sm:-my-4"
            />
            <div className="ml-2 sm:ml-4 flex flex-col justify-center">
              <span
                className="hidden sm:block text-sm/5 font-bold tracking-widest text-gray-900 uppercase"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                A Qatar-Based
              </span>
              <span
                className="hidden sm:block text-xs/4 font-semibold text-[#D4AF37] uppercase tracking-widest"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Professional Company
              </span>
              <div className="mt-0 sm:mt-1.5 flex flex-col gap-y-0.5 sm:gap-y-1">
                <div className="flex items-center gap-x-1 sm:gap-x-2">
                  <div className="flex size-3 sm:size-4 items-center justify-center rounded bg-[#D4AF37]">
                    <PhoneIcon
                      className="size-2 sm:size-3 text-black"
                      aria-hidden="true"
                      strokeWidth={2.5}
                    />
                  </div>
                  <span
                    className="text-[7px] sm:text-[10px] font-semibold text-gray-700 tracking-wider"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    +974 51977707
                  </span>
                </div>
                <div className="flex items-center gap-x-1 sm:gap-x-2">
                  <div className="flex size-3 sm:size-4 items-center justify-center rounded bg-[#D4AF37]">
                    <EnvelopeIcon
                      className="size-2 sm:size-3 text-black"
                      aria-hidden="true"
                      strokeWidth={2.5}
                    />
                  </div>
                  <span
                    className="text-[7px] sm:text-[10px] font-semibold text-gray-700 tracking-wider"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    huzaifabrothers.qar@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Detailed Office Location */}
          <div className="flex items-center ml-2 sm:ml-6">
            <div
              className="flex items-start gap-1 sm:gap-2 text-gray-700 text-[6px] sm:text-[10px] leading-tight sm:leading-snug font-bold tracking-wider uppercase"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              <div className="bg-[#D4AF37] p-0.5 sm:p-1 rounded mt-0 sm:mt-0.5">
                <MapPinIcon className="size-2 sm:size-3 text-black flex-shrink-0" />
              </div>
              <span>
                Lulu Express - B-ring Road
                <br />
                Bldg No: 113, Office 411
                <br />
                Doha, Qatar
              </span>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div
          className="hidden lg:flex lg:gap-x-5 xl:gap-x-8"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <a
            href="/Trading"
            className="flex items-center gap-x-1.5 text-xs xl:text-sm font-semibold text-gray-900 hover:text-[#D4AF37] transition-colors"
          >
            <BriefcaseIcon
              className="size-4 xl:size-5 text-[#D4AF37]"
              aria-hidden="true"
            />
            Trading
          </a>
          <a
            href="/Construction"
            className="flex items-center gap-x-1.5 text-xs xl:text-sm font-semibold text-gray-900 hover:text-[#D4AF37] transition-colors"
          >
            <BuildingOfficeIcon
              className="size-4 xl:size-5 text-[#D4AF37]"
              aria-hidden="true"
            />
            Construction
          </a>
          <a
            href="/Facility-management"
            className="flex items-center gap-x-1.5 text-xs xl:text-sm font-semibold text-gray-900 hover:text-[#D4AF37] transition-colors"
          >
            <SparklesIcon
              className="size-4 xl:size-5 text-[#D4AF37]"
              aria-hidden="true"
            />
            Cleaning & Facility
          </a>
          <a
            href="/Contact-us"
            className="flex items-center gap-x-1.5 text-xs xl:text-sm font-semibold text-gray-900 hover:text-[#D4AF37] transition-colors"
          >
            <PhoneIcon
              className="size-4 xl:size-5 text-[#D4AF37]"
              aria-hidden="true"
            />
            Contact Us
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed top-24 right-4 z-50 w-72 overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-1.5 rounded-md p-1.5 text-gray-700 hover:bg-gray-50"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-2 flow-root">
            <div className="divide-y divide-gray-500/10">
              <div
                className="space-y-2 py-6"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <a
                  href="/Trading"
                  className="-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <BriefcaseIcon
                    className="size-6 text-[#D4AF37]"
                    aria-hidden="true"
                  />
                  Trading
                </a>
                <a
                  href="/Construction"
                  className="-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <BuildingOfficeIcon
                    className="size-6 text-[#D4AF37]"
                    aria-hidden="true"
                  />
                  Construction
                </a>
                <a
                  href="/Facility-management"
                  className="-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <SparklesIcon
                    className="size-6 text-[#D4AF37]"
                    aria-hidden="true"
                  />
                  Cleaning & Facility
                </a>
                <a
                  href="/Contact-us"
                  className="-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <PhoneIcon
                    className="size-6 text-[#D4AF37]"
                    aria-hidden="true"
                  />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
