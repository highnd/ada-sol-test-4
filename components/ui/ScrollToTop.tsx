"use client";

import React, { useEffect, useState, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // وقتی کاربر کمی اسکرول کند (مثلاً بیشتر از 200px)، دکمه نمایش داده شود
      if (window.pageYOffset > 3000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed left-4 bottom-6 sm:left-6 sm:bottom-8 z-40 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF4C00] text-white shadow-[0_4px_12px_rgba(255,76,0,0.3)] hover:bg-[#E64500] hover:shadow-[0_4px_16px_rgba(255,76,0,0.4)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 cursor-pointer"
      aria-label="بازگشت به بالا"
    >
      <FaArrowUp className="text-2xl " />
    </button>
  );
};

export default ScrollToTop;
