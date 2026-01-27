"use client";

import React, { useCallback, useMemo, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { EmblaCarousel } from "../../ui/emblaCarousel";

import { TESTIMONIALS } from "@/data/testimonials";
import { ModuleItem, modulesList } from "@/data/CarouselsData";
import Image from "next/image";

const CAROUSEL_WRAPPER_CLASSES = "relative ";

const SLIDE_CLASSES =
  "flex-[0_0_50%] sm:flex-[0_0_30%] xl:flex-[0_0_15%] px-3 sm:px-4 py-12 flex flex-col items-center justify-start";

const CONTROLS_CONTAINER_CLASSES =
  "flex flex-col items-center gap-4 sm:gap-6 mt-2 sm:mt-8";

const ARROWS_CONTAINER_CLASSES = "flex items-center gap-4 sm:gap-6";

const ARROW_BUTTON_CLASSES =
  "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#FF4C00] hover:bg-[#FF4C00] hover:border-white text-[#FF4C00] hover:text-[#0A2745] transition-all duration-300 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#FF4C00] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

const DOTS_CONTAINER_CLASSES = "flex items-center gap-2 sm:gap-3";

const DOT_CLASSES =
  "w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gray-400 transition-all duration-300 cursor-pointer hover:bg-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const DOT_ACTIVE_CLASSES = "bg-primary w-6 sm:w-8";

export const SolModuleCarousel: React.FC = () => {
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
    <section dir="rtl" className={``}>
      <div className={"CONTENT_CLASSES"}>
        <div className={CAROUSEL_WRAPPER_CLASSES}>
          <div role="region" aria-label="ماژول های تخصصی" aria-live="polite">
            <EmblaCarousel onSelect={onSelect}>
              {modulesList.map((module: ModuleItem) => (
                <div key={module.id} className={SLIDE_CLASSES}>
                  <div className="w-44 h-44 rounded-full bg-[#FF4C00] mb-4 shrink-0">
                    {/* <Image
                      fill
                      src={module.imageSrc}
                      alt={module.title}
                      className="w-full h-full object-contain p-4"
                    /> */}
                  </div>

                  <p className="text-center text-secondary bold-fanum-font">
                    {module.title}
                  </p>
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
                aria-label="ماژول قبلی"
              >
                <IoIosArrowForward className="text-xl sm:text-2xl" />
              </button>

              <button
                type="button"
                onClick={scrollNext}
                disabled={!canScrollNext}
                className={ARROW_BUTTON_CLASSES}
                aria-label="ماژول بعدی"
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
                  className={`${DOT_CLASSES} ${index === selectedIndex ? DOT_ACTIVE_CLASSES : ""
                    }`}
                  aria-label={`رفتن به نظرات ${index + 1}`}
                  aria-current={index === selectedIndex ? "true" : "false"}
                  role="tab"
                  aria-selected={index === selectedIndex}
                  tabIndex={index === selectedIndex ? 0 : -1}
                />
              ))}
            </div>

            <div className=" w-full flex items-center justify-center  mt-6 ">
              <button className="py-2 px-8 bg-[#FF4C00]  text-white hover:bg-[#E64500]  cursor-pointer rounded-full">
                مشاهده همه
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
