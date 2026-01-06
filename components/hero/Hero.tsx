import React from "react";
import Link from "next/link";
import Container from "../ui/container";
import Image from "next/image";
import Stars from "./stars";

// Pre-computed button classes (static - zero runtime cost)
const BUTTON_SOLID_HERO_CLASSES =
  "inline-flex items-center justify-center px-6 py-3 sm:py-2 sm:px-8 text-sm sm:text-base lg:text-lg bold-fanum-font rounded-[50px] bg-[#FF4C00] text-white hover:bg-[#E64500] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 w-full sm:w-44 cursor-pointer";

const BUTTON_OUTLINE_HERO_CLASSES =
  "inline-flex items-center justify-center px-6 py-3 sm:py-2 sm:px-8 text-sm sm:text-base lg:text-lg bold-fanum-font rounded-[50px] border-2 border-[#FF4C00] text-[#FF4C00] bg-transparent hover:bg-[#FF4C00]/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 w-full sm:w-auto cursor-pointer";

const Hero = () => {
  return (
    <Container>
      <div
        id="hero-section"
        dir="rtl"
        className="w-full lg:h-[60vh] h-full flex flex-col lg:flex-row"
      >
        {/* right part images */}
        <div className="w-full xl:w-[35%] h-full   pt-4 sm:pt-5 md:pt-6 text-[#0A2745]">
          <h1 className="bold-fanum-font text-3xl text-center lg:text-right  md:text-4xl xl:text-5xl 2xl:text-6xl leading-relaxed lg:w-[500px] 2xl:w-[700px]">
            <span className="text-[#FF4C00] pl-2"> سول؛</span>
            نرم‌افزار رستورانی و اتوماسیون تغذیه
          </h1>

          <p className="py-6 sm:py-8 md:py-8 lg:py-12 font-light leading-relaxed text-center lg:text-right text-base sm:text-lg xl:text-[22px] 2xl:text-[24px] fanum-font">
            محصولی از شرکت نرم افزاری آدا با تکنولوژی به‌روز، جهت ساده‌سازی
            فرایند‌های مدیریتی و حسابداری در رستوران شما
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 py-2 regular-fanum-font lg:justify-start justify-center">
            <button type="button" className={BUTTON_SOLID_HERO_CLASSES}>
              دمو | مشاوره
            </button>

            <Link href="/auth" className={BUTTON_OUTLINE_HERO_CLASSES}>
              پلن ها | قیمت ها
            </Link>
          </div>

          <Stars />
        </div>

        {/*  left part  (images) sliders */}
        <div className="w-full xl:w-[65%] relative  overflow-hidden flex items-center justify-center">
          <Image
            src={"/hero/hero-section-image-2.webp"}
            alt={""}
            width={1920}
            height={1280}
            className="w-full h-full object-contain "
            priority
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
