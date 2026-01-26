"use client";

import React from "react";
import Container from "../ui/container";
import { Pill } from "./Pill";
import { TabContent } from "./TabContent";
import { FEATURE_PILLS } from "@/data/featurePills";
import { useTabSelection } from "@/hooks/useTabSelection";
import WhySolManagementCarousel from "./WhySolManagementCarousel";

// Pre-computed className constants
const SECTION_CLASSES = "w-full bg-white mt-20";

const TITLE_CLASSES =
  "extrabold-fanum-font text-[#0A2745] text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16";

const CONTENT_GRID_CLASSES =
  "flex flex-col-reverse xl:flex-row items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16";

const PILLS_CONTAINER_CLASSES =
  "flex flex-row xl:grid xl:grid-cols-3 gap-3 sm:gap-4 md:gap-4 2xl:gap-7 overflow-x-auto overflow-y-hidden xl:overflow-visible snap-x snap-mandatory scroll-smooth [-webkit-overflow-scrolling:touch] xl:w-1/2 w-full";

// Static calculation: Split pills into 3 columns for grid layout (calculated once)
// Column order matches the original design
const GRID_PILLS: (typeof FEATURE_PILLS)[number][] = (() => {
  const column1 = FEATURE_PILLS.slice(16, 24); // Column 3 in data (displayed first)
  const column2 = FEATURE_PILLS.slice(8, 16); // Column 2 in data
  const column3 = FEATURE_PILLS.slice(0, 8); // Column 1 in data (displayed last)

  // Flatten pills into grid rows - each row has 3 pills (one from each column)
  const maxRows = Math.max(column1.length, column2.length, column3.length);
  const result: (typeof FEATURE_PILLS)[number][] = [];

  for (let i = 0; i < maxRows; i++) {
    if (column1[i]) result.push(column1[i]);
    if (column2[i]) result.push(column2[i]);
    if (column3[i]) result.push(column3[i]);
  }

  return result;
})();

const WhySolManagement: React.FC = () => {
  // Use custom hook for tab selection with O(1) Map-based lookup
  const { selectedId, selected, selectItem } = useTabSelection(
    FEATURE_PILLS,
    17 // default: orange pill (ارسال پیامک رایگان)
  );

  return (
    <section dir="rtl" className={SECTION_CLASSES}>
      <Container>
        {/* Section Title */}
        <h2 className={TITLE_CLASSES}>
          چرا نرم‌افزار مدیریت رستوران و کافی‌شاپ سول؟
        </h2>

        {/* Mobile/Tablet: Carousel View (md and below) */}
        <div className="block lg:hidden">
          <WhySolManagementCarousel />
        </div>

        {/* Desktop: Grid View (lg and above) */}
        <div className="hidden lg:block">
          {/* Main Content Grid */}
          <div className={CONTENT_GRID_CLASSES}>
            {/* Left Side - Orange Container with Tab Content */}
            <TabContent selectedPill={selected} />

            {/* Right Side - Feature Pills Grid */}
            <div
              role="tablist"
              aria-label="ویژگی‌های نرم‌افزار سول"
              className={PILLS_CONTAINER_CLASSES}
            >
              {GRID_PILLS.map((pill) => (
                <Pill
                  key={pill.id}
                  pill={pill}
                  isSelected={pill.id === selectedId}
                  onClick={selectItem}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhySolManagement;
