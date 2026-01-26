import React from "react";
import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";

const FastCall = () => {
  return (
    <div className="fixed right-1 bottom-6 sm:right-3 sm:bottom-1/3 z-40  flex-col items-center md:flex hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/icons-brands/fast-call.svg"
          alt=""
          fill
          className="object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Demo circle */}
      <button
        type="button"
        className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full text-xs sm:text-lg 
          text-white hover:bg-[#FF4C00] hover:text-white transition-colors duration-150 bold-fanum-font cursor-pointer"
      >
        دمو
      </button>

      {/* Call circle */}
      <button
        type="button"
        className="relative z-10 mt-1 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full 
         text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-[#e44500] transition-colors duration-150 cursor-pointer"
        aria-label="تماس تلفنی سریع"
      >
        <BsTelephoneFill className="text-xl sm:text-3xl" />
      </button>
    </div>
  );
};

export default FastCall;
