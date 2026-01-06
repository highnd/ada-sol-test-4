"use client";

import React from "react";
import type { FeaturePill } from "@/data/featurePills";

// Pre-computed className constants
const PILL_BASE_CLASSES =
  "bold-fanum-font rounded-full px-4 sm:px-2 lg:px-3 xl:px-4 py-1 lg:py-1.5 xl:py-2 2xl:py-3 text-xs sm:text-[12px]   2xl:text-[16px] transition-all duration-300 flex items-center justify-center text-center h-full min-w-[140px] sm:min-w-[160px] lg:min-w-[160px] xl:min-w-0 xl:w-full shrink-0 snap-start";

const PILL_WHITE_CLASSES =
  "bg-[#FFF6F2] text-[#0A2745] hover:bg-[#FFE8DC] hover:shadow-md border border-transparent hover:border-[#FFE8DC]";

const PILL_ORANGE_CLASSES =
  "bg-[#FF4C00] text-white hover:bg-[#E64500] shadow-lg scale-105 border-2 border-[#FF4C00]";

interface PillProps {
  pill: FeaturePill;
  isSelected: boolean;
  onClick: (id: number) => void;
}

/**
 * Memoized, accessible pill component for tab selection
 * Supports keyboard navigation and screen readers
 */
// Pre-computed className combinations for better performance
const PILL_CLASSES_SELECTED = `${PILL_BASE_CLASSES} ${PILL_ORANGE_CLASSES} cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF4C00] focus-visible:outline-offset-2`;
const PILL_CLASSES_UNSELECTED = `${PILL_BASE_CLASSES} ${PILL_WHITE_CLASSES} cursor-pointer focus-visible:outline-2 focus-visible:outline-[#FF4C00] focus-visible:outline-offset-2`;

export const Pill = React.memo(({ pill, isSelected, onClick }: PillProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(pill.id);
    }
  };

  return (
    <div
      role="tab"
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      onClick={() => onClick(pill.id)}
      onKeyDown={handleKeyDown}
      className={isSelected ? PILL_CLASSES_SELECTED : PILL_CLASSES_UNSELECTED}
    >
      {pill.label}
    </div>
  );
});

Pill.displayName = "Pill";
