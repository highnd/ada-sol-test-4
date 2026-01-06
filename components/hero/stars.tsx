"use client";

import { useState } from "react";
import { IoStar, IoStarOutline, IoStarHalf } from "react-icons/io5";

const Stars = () => {
  const DEFAULT_RATING = 4.5; // Product's average rating

  const [temporaryRating, setTemporaryRating] = useState(0); // For brief visual flash only
  const [finalUserRating, setFinalUserRating] = useState(0); // Saved permanently for the message
  const [hovered, setHovered] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const [reviewCount, setReviewCount] = useState(1218);

  const handleClick = (value: number) => {
    if (hasRated) return;

    // 1. Show user's rating briefly on the stars
    setTemporaryRating(value);

    // 2. Save the rating permanently for the message
    setFinalUserRating(value);

    // 3. Mark as rated and increase count
    setHasRated(true);
    setReviewCount((prev) => prev + 1);

    // 4. After 600ms, hide the temporary rating → stars go back to average
    setTimeout(() => {
      setTemporaryRating(0);
    }, 600);
  };

  // What to display on the stars right now
  const displayedRating =
    hovered > 0
      ? hovered
      : temporaryRating > 0
      ? temporaryRating
      : DEFAULT_RATING;

  return (
    <div className="flex flex-col items-start pt-4 sm:pt-5 md:pt-6">
      <div className="flex flex-wrap items-center gap-2 text-[#0A2745] regular-fanum-font">
        <p className="pt-1 text-sm sm:text-base">
          <span className="text-[#FF4C00] font-bold">{DEFAULT_RATING.toFixed(1)}</span>
          {" "}میانگین | از <span className="text-[#FF4C00] font-bold">{reviewCount.toLocaleString("fa-IR")}</span> نظر
        </p>

        {/* Stars - filling from right to left */}
        <div className="flex flex-row-reverse gap-1">
          {[1, 2, 3, 4, 5].map((star) => {
            const isFilled = displayedRating >= star;
            const isHalfFilled = displayedRating >= star - 0.5 && displayedRating < star;

            return (
              <button
                key={star}
                type="button"
                onClick={() => handleClick(star)}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(0)}
                disabled={hasRated}
                className="transition-all duration-300 hover:scale-110 focus:outline-none"
              >
                {isFilled ? (
                  <IoStar className="text-xl sm:text-2xl text-[#FF4C00]" />
                ) : isHalfFilled ? (
                  <IoStarHalf className="text-xl sm:text-2xl text-[#FF4C00]" />
                ) : (
                  <IoStarOutline className="text-xl sm:text-2xl text-gray-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Thank you + user's score message - stays forever after rating */}
      {hasRated && (
        <div className="mt-3 space-y-1 text-right">
          <p className="text-xs sm:text-sm text-green-600 font-medium">
            ممنونم از نظر شما 🙏
          </p>
          <p className="text-xs sm:text-sm text-[#0A2745] font-medium">
            شما امتیاز {finalUserRating.toLocaleString("fa-IR")} دادید 🌟
          </p>
        </div>
      )}
    </div>
  );
};

export default Stars;
