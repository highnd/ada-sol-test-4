import Link from "next/link";
import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";

const Softwares = () => {
  const BUTTON_SOLID_HERO_CLASSES =
    "inline-flex items-center justify-center px-6 py-2 sm:px-8 text-sm sm:text-base lg:text-lg bold-fanum-font rounded-[50px] bg-[#FF4C00] text-white hover:bg-[#E64500] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 w-full sm:w-44 cursor-pointer";

  const BUTTON_OUTLINE_HERO_CLASSES =
    "inline-flex items-center justify-center px-6 py-2 sm:px-8 text-sm sm:text-base lg:text-lg bold-fanum-font rounded-[50px] border-2 border-[#FF4C00] text-[#FF4C00] bg-transparent hover:bg-[#FF4C00]/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 w-full sm:w-auto cursor-pointer";

  const navigationItems = [
    { label: "نظرات", href: "#reviews" },
    { label: "سوالات متداول", href: "#faq" },
    { label: "سایر محصولات", href: "#products" },
    { label: "مشتری‌ها", href: "#customers" },
    { label: "سخت افزارها", href: "#hardware" },
    { label: "ماژول‌ها", href: "#modules" },
    { label: "دمو", href: "#demo" },
    { label: "ویژگی‌های جدید", href: "#features" },
    { label: "پکیج‌ها", href: "#packages" },
    { label: "امکانات حرفه ای", href: "#pro-features" },
    { label: "امکانات", href: "#features-list" },
    { label: "تصاویر", href: "#images" },
  ];

  return (
    <div className="bg-white w-full h-full pb-40">
      <div className="xl:h-[719px] 2xl:h-[800px] w-full bg-[#0A2745] flex flex-col items-center justify-start pt-15 gap-4">
        <h1 className="bold-fanum-font text-white text-center xl:text-[48px] 2xl:text-[56px] leading-[70px] tracking-[0]">
          نرم افزار مدیریت و حسابداری{" "}
          <span className="text-[#FF4C00]">تحت وب سول</span>
        </h1>

        <h3 className="regular-fanum-font text-white text-center text-[48px] leading-[70px] tracking-[0] max-w-2xl">
          کامل‌ترین ابزار برای مدیریت و حسابداری رستوران شما
        </h3>

        <p className="regular-fanum-font text-white text-center xl:text-[16px] 2xl:text-[20px] leading-[40px] tracking-[0] max-w-2xl">
          نرم افزار رستوران آنلاین (ابری) سول محصولی از شرکت نرم افزاری آدا با
          تکنولوژی به روز، جهت ساده‌سازی فرایند‌های مدیریتی و حسابداری در
          رستوران شما
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 py-2 regular-fanum-font">
          <button type="button" className={BUTTON_SOLID_HERO_CLASSES}>
            دمو | مشاوره
          </button>

          <Link href="/auth" className={BUTTON_OUTLINE_HERO_CLASSES}>
            پلن ها | قیمت ها
          </Link>
        </div>
      </div>

      <article className="w-full h-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 relative ">
        {/*  video container */}
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <div className="w-full xl:h-[528px] 2xl:h-[580px] bg-[#F0F5F7] rounded-[32px] flex items-center justify-center translate-y-[-50%] border-2 border-black">
            <FaRegPlayCircle className="text-black text-xl sm:text-3xl md:text-4xl lg:text-6xl cursor-pointer hover:opacity-80 transition-opacity" />
          </div>

          <div className="w-full bg-[#FFF6F2] p-[16px] flex flex-row-reverse flex-wrap items-center justify-around  rounded-[50px] -mt-44 ">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#0A2745] bold-fanum-font text-sm sm:text-base md:text-lg hover:text-[#FF4C00] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center mt-52 mb-8">
          <h2 className="extrabold-fanum-font text-center text-[48px] leading-[70px] tracking-[0] max-w-4xl  text-[#0A2745]">
            نمایی از محیط کاربری نرم‌افزار رستورانی سول (نسخه تحت وب)
          </h2>
        </div>

        <section className="w-full h-full flex  items-center justify-center xl:h-[421px] 2xl:h-[480px]">
          <div className="w-1/2 h-full border border-orange-500 p-2"></div>
          <div className="w-1/2 h-full  p-2">
            <div className="w-full h-full bg-[#F0F5F7] rounded-[36px] relative">
              <HiOutlineMagnifyingGlassPlus className="absolute top-4 right-4 text-[#595B5C] text-2xl sm:text-3xl md:text-4xl cursor-pointer hover:opacity-80 transition-opacity" />
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Softwares;
