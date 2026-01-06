"use client";

import React, { useState, useMemo } from "react";
import { Testimonial } from "./types";

interface Props {
  data: Testimonial;
}

const CARD_CLASSES =
  "w-full bg-white rounded-[24px] shadow-md p-6 md:min-h-84 flex flex-col justify-between h-full relative max-h-84";

const AVATAR_CLASSES =
  "absolute -top-8 left-20 mx-auto  h-14 w-14 sm:h-18 sm:w-18 rounded-full bg-gray-200  ";

const TEXT_CONTAINER_CLASSES =
  "flex-1 flex flex-col pt-12 min-h-0 overflow-hidden";

const TEXT_CLASSES =
  "text-lg text-[#0A2745] leading-relaxed regular-fanum-font overflow-y-auto pr-2";

const TEXT_TRUNCATED_CLASSES =
  "text-lg text-[#0A2745] leading-relaxed regular-fanum-font line-clamp-3";

const READ_MORE_CLASSES =
  "text-lg text-[#FF4C00] cursor-pointer hover:underline transition-all duration-200 text-center mt-2";

const FOOTER_CLASSES =
  "mt-4 flex items-start justify-between flex-col flex-shrink-0";

const NAME_CLASSES = "font-bold text-[#0A2745] extrabold-font text-right";

const ROLE_CLASSES = "text-lg text-[#0A2745] bold-fanum-font text-right";

const STARS_CONTAINER_CLASSES = "w-full flex pl-3 justify-between";

const STAR_FILLED_CLASSES = "text-[#FF4C00] text-lg sm:text-2xl";

const STAR_EMPTY_CLASSES = "text-gray-300 text-lg sm:text-2xl";

const TRUNCATE_LENGTH = 200;

export default function TestimonialCard({ data }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { displayText, shouldShowReadMore } = useMemo(() => {
    if (data.text.length <= TRUNCATE_LENGTH) {
      return { displayText: data.text, shouldShowReadMore: false };
    }

    if (isExpanded) {
      return { displayText: data.text, shouldShowReadMore: true };
    }

    return {
      displayText: data.text.slice(0, TRUNCATE_LENGTH) + "...",
      shouldShowReadMore: true,
    };
  }, [data.text, isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article className={CARD_CLASSES}>
      {/* Avatar */}
      <div className={AVATAR_CLASSES} />

      {/* Text Container */}
      <div className={TEXT_CONTAINER_CLASSES}>
        <p className={`${isExpanded ? TEXT_CLASSES : TEXT_TRUNCATED_CLASSES} text-justify`}>
          {displayText}
        </p>

        {/* Read more */}
        {shouldShowReadMore && (
          <span className={READ_MORE_CLASSES} onClick={toggleExpand}>
            {isExpanded ? "کمتر" : "ادامه"}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className={FOOTER_CLASSES}>
        <div className="text-right">
          <p className={`${NAME_CLASSES} text-justify`}>{data.name}</p>
        </div>

        {/* Stars */}
        <div className={STARS_CONTAINER_CLASSES} dir="ltr">
          <div>
            {Array.from({ length: 5 }).map((_, i) => {
              const isFilled = i < data.rating;
              return (
                <span
                  key={i}
                  className={
                    isFilled ? STAR_FILLED_CLASSES : STAR_EMPTY_CLASSES
                  }
                >
                  ★
                </span>
              );
            })}
          </div>
          <p className={`${ROLE_CLASSES} text-justify`}>{data.role}</p>
        </div>
      </div>
    </article>
  );
}
