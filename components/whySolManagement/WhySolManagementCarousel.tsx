"use client";

import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TabContent } from "./TabContent";
import { FEATURE_PILLS } from "@/data/featurePills";

// Pre-computed className constants for mobile carousel
const PILLS_CONTAINER_CLASSES =
  "flex flex-row gap-2 overflow-x-auto snap-x snap-mandatory scroll-smooth [-webkit-overflow-scrolling:touch] w-full pb-4 mb-6 px-1 hide-scrollbar";

// Mobile-specific pill styles - modern design with better spacing
const MOBILE_PILL_BASE_CLASSES =
  "bold-fanum-font rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm  flex items-center justify-center text-center  min-w-[120px] sm:min-w-[140px]  cursor-pointer ";

const MOBILE_PILL_UNSELECTED_CLASSES =
  "bg-white text-[#0A2745] border border-[#E5E7EB] hover:border-[#FF4C00]/30 hover:bg-[#FFF6F2] shadow-sm";

const MOBILE_PILL_SELECTED_CLASSES =
  "bg-gradient-to-r from-[#FF4C00] to-[#FF6B35] text-white shadow-md  font-semibold";

const CAROUSEL_WRAPPER_CLASSES = "relative w-full";

const SLIDE_CLASSES = "flex-[0_0_100%] min-w-0 relative p-2";

const ARROW_BUTTON_CLASSES =
  "absolute z-30 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/95 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl active:scale-95 text-[#FF4C00] transition-all duration-300 flex items-center justify-center  disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/95 disabled:hover:shadow-lg cursor-pointer";

// Position arrows at image center (image is at top on mobile, roughly at 30% from top of slide)
const ARROW_LEFT_CLASSES = `${ARROW_BUTTON_CLASSES} top-[30%] sm:top-[32%] md:top-[35%] left-3 sm:left-4 md:left-6 -translate-y-1/2`;

const ARROW_RIGHT_CLASSES = `${ARROW_BUTTON_CLASSES} top-[30%] sm:top-[32%] md:top-[35%] right-3 sm:right-4 md:right-6 -translate-y-1/2`;

/**
 * Mobile/Tablet carousel component for WhySolManagement
 * Displays pills at top and TabContent slides with navigation arrows
 */
const WhySolManagementCarousel: React.FC = () => {
  // Find initial index for pill ID 17 (default pill: ارسال پیامک رایگان)
  const initialIndex = FEATURE_PILLS.findIndex((pill) => pill.id === 17);
  const [selectedIndex, setSelectedIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );
  const pillsContainerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize Embla Carousel without Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      direction: "rtl",
      align: "start",
      loop: false, // No loop for better UX with arrows
      dragFree: false,
      containScroll: "trimSnaps",
    }
    // No Autoplay plugin
  );

  // Handle carousel selection change
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const newIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(newIndex);

    // Scroll pills container to show active pill
    const activePillElement = pillRefs.current[newIndex];
    if (activePillElement && pillsContainerRef.current) {
      const container = pillsContainerRef.current;
      const pillLeft = activePillElement.offsetLeft;
      const pillWidth = activePillElement.offsetWidth;
      const containerWidth = container.offsetWidth;

      const scrollLeft = pillLeft - containerWidth / 2 + pillWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [emblaApi]);

  // Listen to carousel select events
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    // Scroll to initial index on mount
    if (initialIndex >= 0) {
      emblaApi.scrollTo(initialIndex);
    }
    onSelect(); // Initial call

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect, initialIndex]);

  // Navigation functions
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollToPill = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  // Arrow button states
  const canScrollPrev = useMemo(
    () => emblaApi?.canScrollPrev() ?? false,
    [emblaApi, selectedIndex]
  );

  const canScrollNext = useMemo(
    () => emblaApi?.canScrollNext() ?? false,
    [emblaApi, selectedIndex]
  );

  return (
    <div className="w-full" dir="rtl">
      {/* Pills Row - Top - Mobile Optimized Design */}
      <div
        ref={pillsContainerRef}
        role="tablist"
        aria-label="ویژگی‌های نرم‌افزار سول"
        className={PILLS_CONTAINER_CLASSES}
      >
        {FEATURE_PILLS.map((pill, index) => {
          const isSelected = index === selectedIndex;
          return (
            <div
              key={pill.id}
              ref={(el) => {
                pillRefs.current[index] = el;
              }}
              className="shrink-0 mx-1 sm:mx-1.5"
            >
              <button
                type="button"
                onClick={() => scrollToPill(index)}
                role="tab"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                className={`${MOBILE_PILL_BASE_CLASSES} ${
                  isSelected
                    ? MOBILE_PILL_SELECTED_CLASSES
                    : MOBILE_PILL_UNSELECTED_CLASSES
                }`}
              >
                {pill.label}
              </button>
            </div>
          );
        })}
      </div>

      {/* Carousel */}
      <div className={CAROUSEL_WRAPPER_CLASSES}>
        <div role="region" aria-label="محتوای ویژگی‌های سول" aria-live="polite">
          <div className="overflow-hidden relative" ref={emblaRef}>
            <div className="flex will-change-transform backface-visibility-hidden">
              {FEATURE_PILLS.map((pill) => (
                <div key={pill.id} className={SLIDE_CLASSES}>
                  <TabContent selectedPill={pill} showTitle={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Navigation Arrows - Overlaid on Image Container (Positioned at image center) */}
        {/* Left Arrow (←) - goes left (next slide in RTL) - positioned on left */}
        <button
          type="button"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={ARROW_LEFT_CLASSES}
          aria-label="ویژگی بعدی"
        >
          <IoIosArrowBack className="text-2xl sm:text-3xl md:text-4xl" />
        </button>

        {/* Right Arrow (→) - goes right (previous slide in RTL) - positioned on right */}
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={ARROW_RIGHT_CLASSES}
          aria-label="ویژگی قبلی"
        >
          <IoIosArrowForward className="text-2xl sm:text-3xl md:text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default WhySolManagementCarousel;
