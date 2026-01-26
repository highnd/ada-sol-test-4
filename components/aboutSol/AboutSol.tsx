"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Container from "../ui/container";

interface ReadMoreTextProps {
  text: string;
  collapsedLength?: number;
  containerClassName?: string;
  textClassName?: string;
  buttonClassName?: string;
  readMoreLabel?: string;
  closeLabel?: string;
}

const AboutSol: React.FC<ReadMoreTextProps> = ({
  text,
  collapsedLength = 250,
  containerClassName = "w-full py-8 sm:py-12 md:py-44",
  textClassName = "text-base sm:text-lg md:text-2xl text-[#0A2745] leading-relaxed regular-fanum-font text-justify",
  buttonClassName = "mt-4 text-lg sm:text-xl text-[#FF4C00] cursor-pointer hover:underline transition-all duration-200 font-bold flex items-center gap-2",
  readMoreLabel = "ادامه مطلب",
  closeLabel = "بستن",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isLongText = text?.length > collapsedLength;
  const displayedText = isExpanded
    ? text
    : text?.slice(0, collapsedLength) + (isLongText ? "..." : "");

  return (
    <Container>
      <div className={containerClassName}>
        <p className={textClassName}>{displayedText}</p>

        {isLongText && (
          <div className="flex justify-end">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={buttonClassName}
              aria-label={isExpanded ? closeLabel : readMoreLabel}
            >
              {isExpanded ? closeLabel : readMoreLabel}
              <IoIosArrowBack
                className={`text-xl sm:text-2xl transition-transform ${
                  isExpanded ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default AboutSol;
