"use client";

import React from "react";
import Image from "next/image";
import { FaCreditCard, FaMapMarkerAlt } from "react-icons/fa";
import { AngleLineToBottom, AngleLineToTop } from "../ui/AngleLines";
import { BsQrCode } from "react-icons/bs";
import { FiGitBranch } from "react-icons/fi";
import { TbBuildingWarehouse } from "react-icons/tb";
import { BiMoneyWithdraw } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { PiUsersThree } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { LiaSmsSolid } from "react-icons/lia";
import { LiaCoinsSolid } from "react-icons/lia";

/* =======================
   FEATURE CIRCLE
======================= */

interface FeatureCircleProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  textPosition: "left" | "right";
}

const FeatureCircle: React.FC<FeatureCircleProps> = ({
  icon: Icon,
  text,
  textPosition,
}) => (
  <div
    className={`flex relative z-30 items-center gap-3 sm:gap-4 ${
      textPosition === "right" ? "flex-row" : "flex-row-reverse"
    }`}
  >
    <div
      className={
        "w-14 h-14 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-22 xl:h-22 rounded-full border group transition-all duration-300 ease-out hover:bg-[#FF4C00] border-[#FF4C00] flex items-center justify-center shrink-0 bg-[#FFF6F2]"
      }
    >
      <Icon
        className={
          "text-[#FF4C00] text-lg sm:text-xl md:text-lg lg:text-xl xl:text-3xl group-hover:text-[#0A2745]"
        }
      />
    </div>
    <p
      className={
        "text-[#0A2745] text-xs sm:text-sm md:text-xs lg:text-sm bold-fanum-font max-w-[200px] md:max-w-[140px] lg:max-w-[180px] xl:hidden text-justify"
      }
    >
      {text}
    </p>
  </div>
);

/* =======================
   MAIN COMPONENT
======================= */

const SpecialModule = () => {
  return (
    <section
      dir="rtl"
      className={"w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24  "}
    >
      <div className="w-full max-w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
        {/* Title */}
        <h2
          className={
            "extrabold-fanum-font text-[#0A2745] text-2xl md:text-2xl lg:text-4xl  2xl:text-5xl text-center mb-10 sm:mb-12 md:mb-16 lg:mb-36 cursor-pointer"
          }
        >
          ماژول‌های تخصصی نرم‌افزار مدیریت رستوران سول
        </h2>

        {/* Layout */}
        <div className="w-full flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row items-center justify-center gap-8 md:gap-8 lg:gap-12">
          {/* RIGHT COLUMN */}
          <div className="w-full flex flex-col justify-center gap-4 sm:gap-5 md:gap-4 lg:gap-6 xl:gap-8 order-2 md:order-1 xl:order-1">
            {/* first right circle  */}
            <div className="w-full relative  2xl:pr-42 ">
              <FeatureCircle
                icon={FiGitBranch}
                text="نرم افزار مدیریت شعب"
                textPosition="right"
              />
              <p
                className={
                  "text-[#0A2745] text-xs sm:text-sm 2xl:text-lg bold-fanum-font max-w-[200px] absolute bottom-15 2xl:right-70 right-35 hidden xl:block cursor-pointer z-60 text-justify"
                }
              >
                {"نرم افزار مدیریت شعب"}
              </p>
              <div className="absolute -top-2 right-62 rotate-180 hidden 2xl:block">
                <AngleLineToBottom />
              </div>
            </div>
            {/* second right circle */}
            <div className="w-full relative  2xl:pr-42 ">
              <FeatureCircle
                icon={BsQrCode}
                text="منو دیجیتال (QR Code)"
                textPosition="right"
              />
              <p
                className={
                  "text-[#0A2745] text-xs sm:text-sm 2xl:text-lg bold-fanum-font max-w-[200px] absolute bottom-15 2xl:right-70 right-35 hidden xl:block cursor-pointer z-60 text-justify"
                }
              >
                {"منو دیجیتال (QR Code)"}
              </p>
              <div className="absolute top-3 right-62 rotate-180 hidden 2xl:block">
                <AngleLineToTop />
              </div>
            </div>
            {/* middle right circle */}
            <div className="w-full relative   ">
              <FeatureCircle
                icon={TbBuildingWarehouse}
                text="انبارداری و کنترل موجودی"
                textPosition="right"
              />
              <p
                className={
                  "text-[#0A2745] text-xs sm:text-sm 2xl:text-lg bold-fanum-font max-w-[200px] absolute bottom-15 right-42 hidden xl:block cursor-pointer z-60"
                }
              >
                {"انبارداری و کنترل موجودی"}
              </p>
              <span className=" w-full h-[3px] bg-[#FFF6F2] absolute bottom-10 left-0 hidden xl:block"></span>
              <span className="angle-pulse-middle-right hidden xl:block" />
            </div>
            {/* forth right circle */}
            <div className="w-full relative  2xl:pr-42 ">
              <FeatureCircle
                icon={BiMoneyWithdraw}
                text="مالی و حسابداری"
                textPosition="right"
              />
              <p
                className={
                  "text-[#0A2745] text-xs sm:text-sm 2xl:text-lg bold-fanum-font max-w-[200px] absolute bottom-15 2xl:right-70 right-35 hidden xl:block cursor-pointer z-60 text-justify"
                }
              >
                {"مالی و حسابداری"}
              </p>
              <div className="absolute -top-2 right-62 rotate-180 hidden 2xl:block">
                <AngleLineToBottom />
              </div>
            </div>
            {/* fifth right circle */}
            <div className="w-full relative  2xl:pr-42 ">
              <FeatureCircle
                icon={AiOutlineMessage}
                text="نظرسنجی هوشمند"
                textPosition="right"
              />
              <p
                className={
                  "text-[#0A2745] text-xs sm:text-sm 2xl:text-lg bold-fanum-font max-w-[200px] absolute bottom-15 2xl:right-70 right-35 hidden xl:block cursor-pointer z-60 text-justify"
                }
              >
                {"نظرسنجی هوشمند"}
              </p>
              <div className="absolute top-3 right-62 rotate-180 hidden 2xl:block">
                <AngleLineToTop />
              </div>
            </div>
          </div>

          {/* CENTER IMAGE */}
          {/* CENTER IMAGE - on top for mobile/md/lg, center for xl */}
          <div className="w-full xl:w-auto flex items-center justify-center shrink-0 order-1 md:order-first md:col-span-2 xl:order-2 xl:col-span-1">
            <div className="relative xl:absolute z-60 xl:left-1/2 xl:-translate-x-1/2 w-[240px] sm:w-[280px] md:w-[320px] p-2 bg-[#FF4C00] rounded-[56.27px]">
              <Image
                src="/specialModule/iPhone16Pro.svg"
                alt="آیفون ۱۶ پرو - ماژول‌های تخصصی سول"
                width={400}
                height={800}
                loading="lazy"
                className="w-full h-auto object-contain"
                priority={false}
              />
            </div>
          </div>

          {/* LEFT COLUMN */}
          <div className="w-full flex flex-col justify-center gap-4 sm:gap-5 md:gap-4 lg:gap-6 xl:gap-8 order-3 md:order-2 xl:order-3">
            {/* first circle left */}
            <div className="w-full relative  2xl:pl-42 ">
              <FeatureCircle
                icon={PiUsersThree}
                text="باشگاه مشتریان هوشمند"
                textPosition="left"
              />

              <p
                className={
                  "text-[#0A2745] text-xs sm:text-sm 2xl:text-lg bold-fanum-font text-center max-w-[150px] absolute bottom-15 2xl:left-68 left-35 hidden xl:block cursor-pointer z-60"
                }
              >
                {"باشگاه مشتریان هوشمند"}
              </p>
              <div className="absolute -top-2 left-62 hidden 2xl:block">
                <AngleLineToTop />
              </div>
            </div>
            {/* second circle left */}
            <div className="w-full relative  2xl:pl-42">
              <FeatureCircle
                icon={SlCalender}
                text="رزرو و نوبت دهی هوشمند"
                textPosition="left"
              />
              <p
                className={
                  "text-[#0A2745] text-xs sm:text-sm 2xl:text-lg bold-fanum-font text-center max-w-[150px] absolute bottom-15 2xl:left-68 left-35 hidden xl:block cursor-pointer z-60"
                }
              >
                {"رزرو و نوبت دهی هوشمند"}
              </p>
              <div className="absolute top-3 left-62 hidden 2xl:block">
                <AngleLineToBottom />
              </div>
            </div>
            {/* middle circle left */}
            <div className="w-full relative  ">
              <FeatureCircle
                icon={LiaSmsSolid}
                text="پیام کوتاه رستوران"
                textPosition="left"
              />
              <p
                className={
                  "text-[#0A2745] text-xs sm:text-sm 2xl:text-lg bold-fanum-font 2xl:max-w-[240px] max-w-[140px] absolute bottom-15 2xl:left-68 left-35 hidden xl:block cursor-pointer z-60 text-justify"
                }
              >
                {"پیام کوتاه رستوران"}
              </p>
              <span className=" w-full h-[3px] bg-[#FFF6F2] absolute bottom-10 left-0 hidden xl:block"></span>
              <span className="angle-pulse-middle-left hidden xl:block" />
            </div>
            {/* forth circle left */}
            <div className="w-full relative  2xl:pl-42">
              <FeatureCircle
                icon={FaCreditCard}
                text="درگاه پرداخت"
                textPosition="left"
              />
              <p
                className={
                  "text-[#0A2745] text-xs sm:text-sm 2xl:text-lg bold-fanum-font text-center max-w-[150px] absolute bottom-15 2xl:left-72 left-35 hidden xl:block cursor-pointer z-60"
                }
              >
                {"درگاه پرداخت"}
              </p>
              <div className="absolute -top-2 left-62 hidden 2xl:block">
                <AngleLineToTop />
              </div>
            </div>
            {/* fifth circle left */}
            <div className="w-full relative  2xl:pl-42">
              <FeatureCircle
                icon={LiaCoinsSolid}
                text="مدیریت پیک و سفارش‌های بیرون‌بر با GPS"
                textPosition="left"
              />
              <p
                className={
                  "text-[#0A2745] text-xs sm:text-sm 2xl:text-lg bold-fanum-font text-center 2xl:max-w-[240px] max-w-[140px] absolute bottom-15 2xl:left-64 left-35 hidden xl:block cursor-pointer z-60"
                }
              >
                {"مدیریت پیک و سفارش‌های بیرون‌بر با GPS"}
              </p>
              <div className="absolute top-3 left-62 hidden 2xl:block">
                <AngleLineToBottom />
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <button
            type="button"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2 text-sm sm:text-base md:text-lg bold-fanum-font rounded-[50px] bg-[#FF4C00] hover:bg-[#E64500] text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 cursor-pointer"
          >
            مشاهده همه ماژول‌ها
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialModule;
