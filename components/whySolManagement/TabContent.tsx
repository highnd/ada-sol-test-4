"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import type { FeaturePill } from "@/data/featurePills";
import { useImagePreload } from "@/hooks/useImagePreload";

// Pre-computed className constants
const ORANGE_CONTAINER_CLASSES =
  "flex flex-col xl:w-1/2 w-full bg-[#FF4C00] rounded-2xl sm:rounded-3xl p-4 sm:p-6 2xl:p-10 gap-4 sm:gap-6 2xl:gap-8";

const IMAGE_CARD_CLASSES =
  "bg-white rounded-[24px] pb-4 sm:pb-6 md:pb-8 lg:pb-6 xl:pb-8 flex flex-col items-center justify-start gap-4 sm:gap-6 flex-1 md:min-h-0 md:self-stretch overflow-hidden";

const IMAGE_WRAPPER_CLASSES =
  "relative w-full lg:h-[250px] xl:h-[300px] h-full md:flex-1 md:min-h-0 flex items-start justify-center overflow-hidden self-start group";

const BUTTON_CLASSES =
  "inline-flex items-center justify-center gap-2 bg-[#FF4C00] hover:bg-[#E64500] text-white bold-fanum-font  rounded-full px-6 sm:px-8 2xl:px-16 py-2 text-sm sm:text-base md:text-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#FF4C00] cursor-pointer";

const TEXT_BOXES_CONTAINER_CLASSES =
  "flex flex-col regular-fanum-font flex-1 md:min-h-0 md:self-stretch gap-4 sm:gap-6";

const TEXT_BOX_WHITE_CLASSES =
  "bg-white regular-fanum-font rounded-t-[24px] px-2 md:px-3 py-2 md:py-4 text-[#0A2745]  flex items-center";

const TEXT_BOX_DARK_CLASSES =
  "bg-[#0A2745] regular-fanum-font rounded-b-[24px] px-2 md:px-6 py-4  text-white flex-1 flex items-start  ";

const TEXT_PARAGRAPH_CLASSES =
  "regular-fanum-font text-sm sm:text-base md:text-[16px] leading-relaxed";

const TITLE_CLASSES =
  "bold-fanum-font text-white text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 lg:mb-4 text-center w-full";

interface TabContentProps {
  selectedPill: FeaturePill;
  showTitle?: boolean;
}

/**
 * Tab content component with fade transitions
 * Displays image and text boxes based on selected pill
 * Memoized to prevent unnecessary re-renders when parent updates
 */
export const TabContent = React.memo(
  ({ selectedPill, showTitle = false }: TabContentProps) => {
    const [isVisible, setIsVisible] = useState(true);

    // Preload image for better UX
    useImagePreload(selectedPill.imageSrc);

    // Fade transition effect when content changes
    useEffect(() => {
      setIsVisible(false);
      const timer = setTimeout(() => setIsVisible(true), 150);
      return () => clearTimeout(timer);
    }, [selectedPill.id]);

    return (
      <div className={ORANGE_CONTAINER_CLASSES}>
        {/* Title - Top center of orange container (only in carousel) */}
        {showTitle && <h3 className={TITLE_CLASSES}>{selectedPill.label}</h3>}

        {/* Content wrapper - Image and Text boxes (row layout at md+) */}
        <div className="flex flex-col md:flex-row-reverse flex-1 gap-4 sm:gap-6 md:items-stretch">
          {/* Image Card - Left Side */}
          <div className={IMAGE_CARD_CLASSES}>
            <div className={IMAGE_WRAPPER_CLASSES}>
              <Image
                src={selectedPill.imageSrc}
                alt={selectedPill.label}
                width={400}
                height={500}
                className={`2xl:object-contain object-cover object-top w-full h-full transition-all duration-300 group-hover:scale-105 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={selectedPill.id === 17}
              />
            </div>
            <button
              type="button"
              className={BUTTON_CLASSES}
              aria-label="جزئیات بیشتر"
            >
              <span>جزئیات بیشتر</span>
              <IoIosArrowBack className="text-white text-base sm:text-lg md:text-xl" />
            </button>
          </div>

          {/* Text Boxes Container - Right Side */}
          <div className={TEXT_BOXES_CONTAINER_CLASSES}>
            {/* White Text Box - Top */}
            <div className={TEXT_BOX_WHITE_CLASSES}>
              <p className={TEXT_PARAGRAPH_CLASSES}>
                {selectedPill.whiteBoxText}
              </p>
            </div>

            {/* Dark Blue Text Box - Bottom */}
            <div className={TEXT_BOX_DARK_CLASSES}>
              <p className={TEXT_PARAGRAPH_CLASSES}>
                {selectedPill.darkBoxText}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Only re-render if the selected pill ID or showTitle prop changes
    return (
      prevProps.selectedPill.id === nextProps.selectedPill.id &&
      prevProps.showTitle === nextProps.showTitle
    );
  }
);

TabContent.displayName = "TabContent";
