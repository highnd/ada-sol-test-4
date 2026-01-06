"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";

interface EmblaCarouselProps {
  children: React.ReactNode;
  onSelect?: (emblaApi: EmblaCarouselType) => void;
}

export const EmblaCarousel: React.FC<EmblaCarouselProps> = ({
  children,
  onSelect,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      direction: "rtl",
      align: "start",
      loop: true,
      dragFree: false,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const handleSelect = useCallback(() => {
    if (emblaApi && onSelect) {
      onSelect(emblaApi);
    }
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", handleSelect);
    handleSelect();

    return () => {
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi, handleSelect]);

  return (
    <div className=" overflow-hidden relative" ref={emblaRef}>
      <div className="flex  will-change-transform backface-visibility-hidden">
        {children}
      </div>
    </div>
  );
};
