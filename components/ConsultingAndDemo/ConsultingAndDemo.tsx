"use client";

import React, { useState } from "react";
import Container from "../ui/container";
import Dropdown from "../ui/dropdown";
import { IoIosArrowBack, IoIosSend } from "react-icons/io";
import type { DropdownOption } from "../ui/dropdown";

// Pre-computed className constants
const SECTION_CLASSES =
  "w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24  mt-20";

const CONTENT_GRID_CLASSES =
  "flex flex-col xl:flex-row items-stretch gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16";

// Form Card Styles
const FORM_CARD_CLASSES =
  "w-full xl:w-1/2 bg-[#FF4C00] rounded-2xl sm:rounded-[36px] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col gap-4 sm:gap-5 md:gap-6";

const FORM_FIELD_CONTAINER_CLASSES =
  "flex md:flex-row flex-col items-center  w-full";

const FORM_LABEL_CLASSES =
  "text-white regular-fanum-font text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0 min-w-full sm:min-w-[120px] py-2 md:py-0 md:min-w-[130px] md:ml-6 lg:ml-8 xl:ml-10 text-right";

const FORM_INPUT_CLASSES =
  "md:flex-1 w-full bg-[#FF7033] text-[#0A2745] rounded-full px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-base regular-fanum-font placeholder:text-white text-right border-1 border-white focus:outline-none focus:bg-[#FF4C00] text-white";

const SUBMIT_BUTTON_CLASSES =
  "inline-flex cursor-pointer items-center justify-center gap-2 bg-white text-[#0A2745] rounded-full p-1 pl-6 text-sm sm:text-base md:text-lg font-bold transition-colors duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#FF4C00] self-end mt-2";

const SUBMIT_BUTTON_ICON_CLASSES =
  "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#0A2745] flex items-center justify-center";

// Text Content Styles
const TEXT_CONTENT_CLASSES = "w-full xl:w-1/2 flex flex-col gap-8";

const HEADING_CLASSES =
  "extrabold-fanum-font text-[#0A2745] text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl leading-tight";

const HEADING_SECOND_LINE_CLASSES =
  "fanum-font text-[#0A2745] text-xl sm:text-2xl md:text-3xl 2xl:text-5xl leading-relaxed";

const DESCRIPTION_CLASSES =
  "regular-fanum-font text-[#0A2745] text-base sm:text-lg md:text-2xl leading-relaxed ";

const CONTACT_ITEMS_CONTAINER_CLASSES =
  "flex flex-col sm:flex-row-reverse gap-4 sm:gap-6 md:gap-24 items-start sm:items-center justify-end";

const CONTACT_ITEM_CLASSES =
  "flex items-center gap-2 sm:gap-3 text-[#0A2745] regular-fanum-font text-sm sm:text-base 2xl:text-lg";

const CONTACT_ICON_CLASSES =
  "w-8 h-8 sm:w-9 sm:h-9 2xl:w-12 2xl:h-10 rounded-full bg-[#FF4C00] flex items-center justify-center flex-shrink-0 transition-colors duration-200 group";

const CONTACT_ICON_ICON_CLASSES =
  "text-white group-hover:text-black text-base sm:text-lg md:text-xl transition-colors duration-200";

// Mock service options - can be moved to data file later
const SERVICE_OPTIONS: DropdownOption[] = [
  { value: "restaurant", label: "نرم‌افزار رستوران" },
  { value: "cafe", label: "نرم‌افزار کافی‌شاپ" },
  { value: "pos", label: "سیستم فروشگاهی" },
  { value: "hardware", label: "تجهیزات سخت‌افزاری" },
  { value: "consulting", label: "مشاوره" },
];

const ConsultingAndDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic can be added here
  };

  return (
    <section dir="rtl" className={SECTION_CLASSES}>
      <Container>
        <div className={CONTENT_GRID_CLASSES}>
          {/* Right Side - Text Content */}
          <div className={TEXT_CONTENT_CLASSES}>
            <h2 className={HEADING_CLASSES}>
              درخواست دمو و مشاوره رایگان
              <br />
              <span className={HEADING_SECOND_LINE_CLASSES}>
                {" "}
                قبل خرید، نرم‌افزار را کامل تست کنید!
              </span>
            </h2>
            <p className={DESCRIPTION_CLASSES}>
              برای انتخاب بهترین راهکار متناسب با کسب‌وکارتان، همین حالا درخواست
              مشاوره رایگان ثبت کنید. مشاوران ما در کوتاه‌ترین زمان با شما تماس
              می‌گیرند و راهنمایی تخصصی ارائه می‌دهند.
            </p>
            <div className={CONTACT_ITEMS_CONTAINER_CLASSES}>
              <div className={CONTACT_ITEM_CLASSES}>
                <div className={CONTACT_ICON_CLASSES}>
                  <IoIosArrowBack className={CONTACT_ICON_ICON_CLASSES} />
                </div>
                <span>مشاوره</span>
              </div>

              <div className={CONTACT_ITEM_CLASSES}>
                <div className={CONTACT_ICON_CLASSES}>
                  <IoIosArrowBack className={CONTACT_ICON_ICON_CLASSES} />
                </div>
                <span>info@sol.ir</span>
              </div>
              <div className={CONTACT_ITEM_CLASSES}>
                <div className={CONTACT_ICON_CLASSES}>
                  <IoIosArrowBack className={CONTACT_ICON_ICON_CLASSES} />
                </div>
                <span dir="ltr">۰۲۱ ۹۱۰۰ ۲۰۳۷</span>
              </div>
            </div>
          </div>

          {/* Left Side - Orange Form Card */}
          <form onSubmit={handleSubmit} className={FORM_CARD_CLASSES}>
            {/* Name Input */}
            <div className={FORM_FIELD_CONTAINER_CLASSES}>
              <label htmlFor="name" className={FORM_LABEL_CLASSES}>
                نام و نام خانوادگی*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="نام و نام خانوادگی خود را وارد کنید"
                className={FORM_INPUT_CLASSES}
                required
                aria-required="true"
              />
            </div>

            {/* Phone Input */}
            <div className={FORM_FIELD_CONTAINER_CLASSES}>
              <label htmlFor="phone" className={FORM_LABEL_CLASSES}>
                شماره تماس*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="شماره تماس خود را وارد کنید"
                className={FORM_INPUT_CLASSES}
                required
                aria-required="true"
              />
            </div>

            {/* Service Select */}
            <div className={FORM_FIELD_CONTAINER_CLASSES}>
              <label htmlFor="service" className={FORM_LABEL_CLASSES}>
                سرویس موردنظر*
              </label>
              <div className="flex-1 w-full">
                <Dropdown
                  id="service"
                  name="service"
                  options={SERVICE_OPTIONS}
                  placeholder="سرویس خود را انتخاب کنید"
                  value={formData.service}
                  onChange={handleServiceChange}
                  buttonClassName={`${FORM_INPUT_CLASSES} cursor-pointer`}
                  aria-label="انتخاب سرویس"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className={SUBMIT_BUTTON_CLASSES}>
              <div className={SUBMIT_BUTTON_ICON_CLASSES}>
                <IoIosSend className="text-white text-base sm:text-lg md:text-xl" />
              </div>
              <span>ثبت درخواست</span>
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ConsultingAndDemo;
