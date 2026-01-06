import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { BusinessCategory } from "./Businesses";

type BusinessCardProps = {
  category: BusinessCategory;
};

// Pre-computed className constants (outside component - zero runtime cost)
const LINK_BASE_CLASSES =
  "group relative flex h-full w-fit flex-col items-center rounded-[999px] bg-[#FFF6F2] transition-colors duration-300 ease-out hover:bg-[#FF6A00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A00] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const TEXT_CLASSES =
  "bold-fanum-font text-sm sm:text-[17px] text-[#0A2745] text-center leading-relaxed transition-colors duration-300 ease-out group-hover:text-white";

const FAB_BASE_CLASSES =
  "absolute flex h-16 w-16 items-center justify-center rounded-full bg-[#FF6A00] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:bg-white group-hover:text-[#FF6A00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#FF6A00]";

// Pre-computed FAB position classes
const FAB_TOP_CLASSES = "top-4 -translate-y-1/2 end-1";
const FAB_BOTTOM_CLASSES = "bottom-6 translate-y-1/2 end-1";

// Single business capsule card - Server Component (no client-side JS overhead)
// Optimized: prefetch disabled, static className constants, simplified structure
const BusinessCard: React.FC<BusinessCardProps> = ({ category }) => {
  const isTextTop = category.layout === "text-top";
  const isImageAtTop = !isTextTop;

  // Simple string concatenation (no hooks, no runtime overhead)
  const linkClassName = `${LINK_BASE_CLASSES} ${
    isTextTop ? "pt-12 p-1" : "p-1 pb-12"
  }`;
  const fabClassName = `${FAB_BASE_CLASSES} ${
    isImageAtTop ? FAB_TOP_CLASSES : FAB_BOTTOM_CLASSES
  }`;

  return (
    <section className="flex justify-center">
      <Link href={category.href} className={linkClassName} prefetch={false}>
        {/* Label - بالا یا پایین بر اساس layout */}
        {isTextTop && (
          <p className={`${TEXT_CLASSES} mb-8 sm:mb-9 text-justify`}>{category.title}</p>
        )}

        {/* Circular image container - چسبیده به کپسول */}
        <div className="relative flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full bg-white overflow-hidden">
          <Image
            src={category.imageSrc}
            alt={category.title}
            width={192}
            height={192}
            className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-125"
            loading="lazy"
          />
        </div>

        {/* Label - بالا یا پایین بر اساس layout */}
        {!isTextTop && (
          <p className={`${TEXT_CLASSES} mt-8 sm:mt-9 text-justify`}>{category.title}</p>
        )}

        {/* Floating Action Button (FAB) - decorative, inside Link so no separate button needed */}
        <div
          className={fabClassName}
          aria-label={`مشاهده دسته ${category.title}`}
          role="presentation"
        >
          {/* Arrow icon - single image with GPU-accelerated filter transition */}
          <div className={isImageAtTop ? "" : "rotate-180"}>
            <Image
              src="/icons-brands/arrow-icon.svg"
              alt=""
              width={12}
              height={12}
              className="w-3 h-3 transition-[filter] duration-300 ease-out will-change-[filter] filter-[brightness(0)_invert(1)] group-hover:filter-[brightness(0)]"
            />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default BusinessCard;
