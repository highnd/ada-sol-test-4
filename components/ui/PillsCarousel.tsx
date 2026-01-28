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

export interface PillsCarouselItem {
  id: string | number;
  label: string;
  content: React.ReactNode;
}

export interface PillsCarouselProps {
  items: PillsCarouselItem[];
  initialIndex?: number;
  pillsContainerClassName?: string;
  pillsTopMargin?: string;
  arrowTopPosition?: {
    mobile?: string;
    sm?: string;
    md?: string;
  };
  onSlideChange?: (index: number) => void;
  ariaLabel?: string;
  pillsAriaLabel?: string;
}

/**
 * Reusable Pills Carousel Component
 * Displays pills at top and carousel slides with navigation arrows
 * Used for mobile/tablet views with RTL support
 */
export const PillsCarousel: React.FC<PillsCarouselProps> = ({
  items,
  initialIndex = 0,
  pillsContainerClassName,
  pillsTopMargin = "mt-0",
  arrowTopPosition = {
    mobile: "18%",
    sm: "20%",
    md: "22%",
  },
  onSlideChange,
  ariaLabel = "محتوای کاروسل",
  pillsAriaLabel = "تب‌های کاروسل",
}) => {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const pillsContainerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize Embla Carousel without Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "rtl",
    align: "start",
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
  });

  // Handle carousel selection change
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const newIndex = emblaApi.selectedScrollSnap();
    setSelectedIndex(newIndex);

    // Call external callback if provided
    if (onSlideChange) {
      onSlideChange(newIndex);
    }

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
  }, [emblaApi, onSlideChange]);

  // Listen to carousel select events
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    // Scroll to initial index on mount
    if (initialIndex >= 0 && initialIndex < items.length) {
      emblaApi.scrollTo(initialIndex);
    }
    onSelect(); // Initial call

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect, initialIndex, items.length]);

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

  // Dynamic arrow positioning based on props
  const arrowTopMobile = arrowTopPosition.mobile || "18%";
  const arrowTopSm = arrowTopPosition.sm || "20%";
  const arrowTopMd = arrowTopPosition.md || "22%";

  // State for responsive arrow positioning
  const [arrowTop, setArrowTop] = useState(arrowTopMobile);

  // Handle responsive arrow positioning
  useEffect(() => {
    const updateArrowPosition = () => {
      if (window.innerWidth >= 768) {
        setArrowTop(arrowTopMd);
      } else if (window.innerWidth >= 640) {
        setArrowTop(arrowTopSm);
      } else {
        setArrowTop(arrowTopMobile);
      }
    };

    updateArrowPosition();
    window.addEventListener("resize", updateArrowPosition);
    return () => window.removeEventListener("resize", updateArrowPosition);
  }, [arrowTopMobile, arrowTopSm, arrowTopMd]);

  return (
    <div className="w-full" dir="rtl">
      {/* Pills Row - Top */}
      <div
        ref={pillsContainerRef}
        role="tablist"
        aria-label={pillsAriaLabel}
        className={`${PILLS_CONTAINER_CLASSES} ${pillsTopMargin} ${pillsContainerClassName || ""}`}
      >
        {items.map((item, index) => {
          const isSelected = index === selectedIndex;
          return (
            <div
              key={item.id}
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
                {item.label}
              </button>
            </div>
          );
        })}
      </div>

      {/* Carousel */}
      <div className={CAROUSEL_WRAPPER_CLASSES}>
        <div role="region" aria-label={ariaLabel} aria-live="polite">
          <div className="overflow-hidden relative" ref={emblaRef}>
            <div className="flex will-change-transform backface-visibility-hidden">
              {items.map((item) => (
                <div key={item.id} className={SLIDE_CLASSES}>
                  <div className="w-full h-full transition-opacity duration-300">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={`${ARROW_BUTTON_CLASSES} left-3 sm:left-4 md:left-6 -translate-y-1/2`}
          style={{ top: arrowTop }}
          aria-label="آیتم بعدی"
        >
          <IoIosArrowBack className="text-2xl sm:text-3xl md:text-4xl" />
        </button>
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={`${ARROW_BUTTON_CLASSES} right-3 sm:right-4 md:right-6 -translate-y-1/2`}
          style={{ top: arrowTop }}
          aria-label="آیتم قبلی"
        >
          <IoIosArrowForward className="text-2xl sm:text-3xl md:text-4xl" />
        </button>
      </div>
    </div>
  );
};
