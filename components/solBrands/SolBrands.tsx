import React from "react";
import Image from "next/image";
import Container from "../ui/container";

// Pre-computed className constants
const SECTION_CLASSES =
  "w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 mt-20";

const TITLE_CLASSES =
  "extrabold-fanum-font text-[#0A2745] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center ";

const BRANDS_WRAPPER_CLASSES = "  overflow-visible";

const BRANDS_INNER_WRAPPER_CLASSES = "overflow-hidden relative";

const BRANDS_CONTAINER_CLASSES =
  "flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 brand-scroll-animation py-24";

const BRAND_CIRCLE_CLASSES =
  "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-[#FFF6F2] flex items-center justify-center p-3 sm:p-4 md:p-5 flex-shrink-0 border-2 border-transparent transition-all duration-300 ease-out hover:scale-130 hover:border-[#FF4C00] will-change-transform backface-visibility-hidden z-10 relative";
const BUTTON_CLASSES =
  "inline-flex items-center justify-center bg-[#FF4C00] hover:bg-[#E64500] text-white font-extrabold rounded-full px-8 sm:px-10 md:px-12 lg:px-16 py-1 sm:py-2 md:py-3 text-sm sm:text-base md:text-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 cursor-pointer";

// Brand logos data
const BRAND_LOGOS = [
  { src: "/icons-brands/sol-brands/aw-logo.svg", alt: "AW Logo" },
  { src: "/icons-brands/sol-brands/espanola-logo.svg", alt: "Espanola Logo" },
  { src: "/icons-brands/sol-brands/Harvester-logo.svg", alt: "Harvester Logo" },
  { src: "/icons-brands/sol-brands/Leon-logo.svg", alt: "Leon Logo" },
  { src: "/icons-brands/sol-brands/max-logo.svg", alt: "Max Logo" },
  {
    src: "/icons-brands/sol-brands/restaurant-logo.svg",
    alt: "Restaurant Logo",
  },
  { src: "/icons-brands/sol-brands/Teimoso-logo.svg", alt: "Teimoso Logo" },
] as const;

const SolBrands: React.FC = () => {
  return (
    <section dir="rtl" className={SECTION_CLASSES}>
      <Container>
        {/* Section Title */}
        <h2 className={TITLE_CLASSES}>
          سول؛ مورد اعتماد بیش از ۱۰۰۰ برند پیشرو
        </h2>

        {/* Brands Container - Infinite Scroll */}
        <div className={BRANDS_WRAPPER_CLASSES}>
          <div className={BRANDS_INNER_WRAPPER_CLASSES}>
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 md:w-40 lg:w-48 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 md:w-40 lg:w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
            <div className={BRANDS_CONTAINER_CLASSES} dir="ltr">
              {/* First set of brands */}
              {BRAND_LOGOS.map((brand, index) => (
                <div key={`first-${index}`} className={BRAND_CIRCLE_CLASSES}>
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {BRAND_LOGOS.map((brand, index) => (
                <div key={`second-${index}`} className={BRAND_CIRCLE_CLASSES}>
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Join Button - Centered */}
        <div className="flex justify-center">
          <button type="button" className={BUTTON_CLASSES}>
            شما هم به سول بپیوندید...
          </button>
        </div>
      </Container>
    </section>
  );
};

export default SolBrands;
