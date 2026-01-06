"use client";

import React from "react";
import Image from "next/image";
import Container from "../ui/container";
import { IoIosArrowBack } from "react-icons/io";

// TypeScript type for feature chips
type FeatureChip = {
  id: number;
  label: string;
};

// Feature chips data arrays - split into two rows
const FEATURE_CHIPS_ROW_1: readonly FeatureChip[] = [
  { id: 1, label: "میز سفارش گیر لمسی" },
  { id: 2, label: "کالر آیدی رستورانی" },
  { id: 3, label: "تبلت سفارش گیر" },
  { id: 4, label: "صندوق فروشگاهی" },
  { id: 5, label: "کیوسک سفارش گیر" },
];

const FEATURE_CHIPS_ROW_2: readonly FeatureChip[] = [
  { id: 6, label: "استند بارکد و منو دیجیتال (QR و NFC)" },
  { id: 7, label: "فیش پرینتر" },
  { id: 8, label: "آل این وان (کامپیوتر بدون کیس)" },
];

// Pre-computed className constants (outside component - zero runtime cost)
const SECTION_CLASSES =
  "relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden";

const BACKGROUND_CONTAINER_CLASSES = "absolute inset-0";

const OVERLAY_CLASSES =
  "absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10";

const CONTENT_WRAPPER_CLASSES =
  "flex flex-col items-center text-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8";

const HEADING_CLASSES =
  "extrabold-fanum-font text-white text-2l sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight sm:leading-snug md:leading-normal";

const SUBTITLE_CLASSES =
  "regular-fanum-font text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl sm:max-w-3xl leading-relaxed px-4";

const CHIPS_CONTAINER_CLASSES =
  "flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 px-4";

const CHIP_BASE_CLASSES =
  "bold-fanum-font rounded-full bg-white/60 hover:bg-white transition-all duration-300 ease-out text-[#0A2745] px-4 sm:px-5 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base inline-flex items-center gap-2 group cursor-pointer";

const BUTTON_CONTAINER_CLASSES = "pt-4 sm:pt-6 md:pt-8 ";

// Pre-computed button classes with orange background
const BUTTON_BASE_CLASSES =
  "inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2 text-sm sm:text-base md:text-lg bold-fanum-font rounded-[50px] bg-[#FF4C00] hover:bg-[#E64500] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 gap-2 sm:gap-3 cursor-pointer";

// Client Component with optimized CSS-based animations
// Optimized: static className constants, CSS transforms for GPU acceleration, no JavaScript state
const HardwareBanner: React.FC = () => {
  return (
    <section dir="rtl" className={SECTION_CLASSES}>
      {/* Background Image */}
      <div className={BACKGROUND_CONTAINER_CLASSES}>
        <Image
          src="/Banner/hardware-banner.svg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay */}
      <div className={OVERLAY_CLASSES} />

      {/* Content Container */}
      <Container className="relative z-10 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className={CONTENT_WRAPPER_CLASSES}>
          {/* Main Heading */}
          <h1 className={HEADING_CLASSES}>
            ارائه تجهیزات سخت‌افزاری فروشگاهی
            <br />
            سازگار با برنامه مدیریت رستوران و کافه سول
          </h1>

          {/* Subtitle */}
          <p className={`${SUBTITLE_CLASSES} text-justify`}>
            مشاوران ما همراه شما هستند تا بهترین انتخاب را متناسب با نوع
            کسب‌وکارتان انجام دهند.
          </p>

          {/* Feature Chips - Two Rows */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 px-4">
            {/* First Row */}
            <div className={CHIPS_CONTAINER_CLASSES}>
              {FEATURE_CHIPS_ROW_1.map((chip) => (
                <div key={chip.id} className={CHIP_BASE_CLASSES}>
                  <span className="inline-block transform transition-transform duration-300 ease-out -translate-x-[12px] group-hover:translate-x-[4px]">
                    {chip.label}
                  </span>
                  <IoIosArrowBack
                    className="text-[#0A2745] text-sm sm:text-xl opacity-0 transform translate-x-[-8px] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 will-change-transform"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
            {/* Second Row */}
            <div className={CHIPS_CONTAINER_CLASSES}>
              {FEATURE_CHIPS_ROW_2.map((chip) => (
                <div key={chip.id} className={CHIP_BASE_CLASSES}>
                  <span className="inline-block transform transition-transform duration-300 ease-out -translate-x-[12px] group-hover:translate-x-[4px]">
                    {chip.label}
                  </span>
                  <IoIosArrowBack
                    className="text-[#0A2745] text-sm sm:text-xl opacity-0 transform translate-x-[-8px] transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 will-change-transform"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button - Orange background button */}
          <div className={BUTTON_CONTAINER_CLASSES}>
            <button
              type="button"
              className={BUTTON_BASE_CLASSES}
              aria-label="خرید تجهیزات سخت‌افزاری"
            >
              <span className="text-white">خرید تجهیزات</span>
              <IoIosArrowBack className="text-white text-sm sm:text-xl" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HardwareBanner;
