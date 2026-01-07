import React from "react";
import Image from "next/image";

interface SecurityCircleProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  learnMoreText?: string;
  backgroundColor?: string;
  textColor?: string;
}

// Pre-computed className constants
const CIRCLE_CONTAINER_CLASSES =
  "w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] xl:w-[320px] xl:h-[320px] 2xl:w-[330px] 2xl:h-[330px] rounded-full flex flex-col items-center justify-between p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 flex-shrink-0 relative transition-transform duration-300 ease-out hover:scale-110 cursor-pointer";

const IMAGE_WRAPPER_CLASSES =
  "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[30%] w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-[104px] xl:h-[104px] 2xl:w-28 2xl:h-28 flex-shrink-0 z-10";

const TITLE_BASE_CLASSES =
  "extrabold-fanum-font text-center text-sm md:text-base lg:text-lg xl:text-[25px] leading-relaxed px-2";

const LEARN_MORE_BASE_CLASSES =
  "bold-fanum-font  sm:text-xs md:text-sm text-[14px] text-center";

/**
 * Reusable security circle component
 * Displays image at top, title in center, and "بیشتر بدانید" at bottom
 */
const SecurityCircle: React.FC<SecurityCircleProps> = ({
  imageSrc,
  imageAlt,
  title,
  learnMoreText = "بیشتر بدانید",
  backgroundColor = "#FFFFFF",
  textColor = "#0A2745",
}) => {
  return (
    <div className={CIRCLE_CONTAINER_CLASSES} style={{ backgroundColor }}>
      {/* Image at top */}
      <div className={IMAGE_WRAPPER_CLASSES}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={128}
          height={128}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Title in center */}
      <div className="flex-1 flex items-center justify-center pt-0 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-8 2xl:pt-10">
        <p className={`${TITLE_BASE_CLASSES} `} style={{ color: textColor }}>
          {title}
        </p>
      </div>

      {/* Learn more text at bottom */}
      <p className={`${LEARN_MORE_BASE_CLASSES} `} style={{ color: textColor }}>
        {learnMoreText}
      </p>
    </div>
  );
};

export default SecurityCircle;
