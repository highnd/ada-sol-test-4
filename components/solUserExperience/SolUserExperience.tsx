"use client";

import React, { useCallback, useMemo, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { EmblaCarousel } from "../ui/emblaCarousel";
import TestimonialCard from "./TestimonialCard";
import type { SolUserExperienceProps } from "./types";
import Image from "next/image";

const SECTION_CLASSES =
  "w-full relative overflow-hidden 2xl:pt-0 xl:pt-44 lg:pt-24";

const CONTENT_CLASSES = "relative z-10 md:pt-36 2xl:pt-52 xl:pt-10 pt-24";

const TITLE_CLASSES =
  "extrabold-fanum-font text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center mb-8 sm:mb-10 md:mb-12 xl:mb-16 px-4";

const CAROUSEL_WRAPPER_CLASSES = "relative mb-8 sm:mb-10 md:mb-12";

const SLIDE_CLASSES =
  "flex-[0_0_90%] sm:flex-[0_0_48%] xl:flex-[0_0_28%] px-3 sm:px-4 py-12";

const CONTROLS_CONTAINER_CLASSES =
  "flex flex-col items-center gap-4 sm:gap-6 mt-6 sm:mt-8";

const ARROWS_CONTAINER_CLASSES = "flex items-center gap-4 sm:gap-6";

const ARROW_BUTTON_CLASSES =
  "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-transparent border-2 border-white hover:bg-[#FFF6F2] hover:border-white text-white hover:text-[#0A2745] transition-all duration-300 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#FF4C00] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

const DOTS_CONTAINER_CLASSES = "flex items-center gap-2 sm:gap-3";

const DOT_CLASSES =
  "w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/50 transition-all duration-300 cursor-pointer hover:bg-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#FF4C00]";

const DOT_ACTIVE_CLASSES = "bg-white w-6 sm:w-8";

export const SolUserExperience: React.FC<SolUserExperienceProps> = ({
  title,
  testimonials,
}) => {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setEmblaApi(api);
    setSelectedIndex(api.selectedScrollSnap());
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const canScrollPrev = useMemo(
    () => emblaApi?.canScrollPrev() ?? false,
    [emblaApi]
  );

  const canScrollNext = useMemo(
    () => emblaApi?.canScrollNext() ?? false,
    [emblaApi]
  );

  return (
    <section dir="rtl" className={`${SECTION_CLASSES} `}>
      {/* Wave background - optimized with Next.js Image */}
      <Image
        src="/Banner/experience-bg.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className={CONTENT_CLASSES}>
        <h2 className={TITLE_CLASSES}>{title}</h2>

        <div className={CAROUSEL_WRAPPER_CLASSES}>
          <div role="region" aria-label="نظرات مشتریان" aria-live="polite">
            <EmblaCarousel onSelect={onSelect}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className={SLIDE_CLASSES}>
                  <TestimonialCard data={testimonial} />
                </div>
              ))}
            </EmblaCarousel>
          </div>

          <div className={CONTROLS_CONTAINER_CLASSES}>
            <div className={ARROWS_CONTAINER_CLASSES}>
              <button
                type="button"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className={ARROW_BUTTON_CLASSES}
                aria-label="نظرات قبلی"
              >
                <IoIosArrowForward className="text-xl sm:text-2xl" />
              </button>

              <button
                type="button"
                onClick={scrollNext}
                disabled={!canScrollNext}
                className={ARROW_BUTTON_CLASSES}
                aria-label="نظرات بعدی"
              >
                <IoIosArrowBack className="text-xl sm:text-2xl" />
              </button>
            </div>

            <div
              className={DOTS_CONTAINER_CLASSES}
              role="tablist"
              aria-label="نظرات مشتریان"
            >
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollTo(index)}
                  className={`${DOT_CLASSES} ${
                    index === selectedIndex ? DOT_ACTIVE_CLASSES : ""
                  }`}
                  aria-label={`رفتن به نظرات ${index + 1}`}
                  aria-current={index === selectedIndex ? "true" : "false"}
                  role="tab"
                  aria-selected={index === selectedIndex}
                  tabIndex={index === selectedIndex ? 0 : -1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
