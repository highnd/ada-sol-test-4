"use client";

import React, { useState } from "react";
import Container from "../ui/container";
import Dropdown from "../ui/dropdown";
import { IoIosSend } from "react-icons/io";
import type { DropdownOption } from "../ui/dropdown";
import { BsHeadset, BsFillEnvelopeFill, BsTelephoneFill } from "react-icons/bs";

// Pre-computed className constants
const SECTION_CLASSES =
  "w-full bg-transparent py-12 sm:py-16 md:py-20 lg:py-24 mt-20";

const CONTENT_GRID_CLASSES =
  "flex flex-col xl:flex-row items-stretch gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16";

// Form Card Styles
const FORM_CARD_CLASSES =
  "w-full xl:w-1/2 bg-secondary rounded-2xl sm:rounded-[36px] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col gap-4 sm:gap-5 md:gap-6";

const FORM_FIELD_CONTAINER_CLASSES =
  "flex lg:flex-row flex-col items-center w-full";

const FORM_LABEL_CLASSES =
  "text-white regular-fanum-font text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0 min-w-full sm:min-w-[120px] py-2 md:py-0 md:min-w-[130px] md:ml-4 lg:ml-8 xl:ml-10 text-right";

const FORM_INPUT_CLASSES =
  "md:flex-1 w-full bg-white/40 text-white rounded-full px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-base regular-fanum-font placeholder:text-white text-right border-1 border-white focus:outline-none focus:bg-white/60 text-white";

const SUBMIT_BUTTON_CLASSES =
  "inline-flex cursor-pointer items-center hover:scale-105 justify-center gap-2 bg-white text-[#0A2745] rounded-full p-1 pr-6 text-sm sm:text-base md:text-lg font-bold transition-colors duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#FF4C00]";

const SUBMIT_BUTTON_ICON_CLASSES =
  "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center";

// Text Content Styles
const TEXT_CONTENT_CLASSES = "w-full xl:w-1/2 flex flex-col gap-8";

const HEADING_CLASSES =
  "extrabold-fanum-font text-[#0A2745] text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl leading-tight";

const HEADING_SECOND_LINE_CLASSES =
  "fanum-font text-[#0A2745] text-xl sm:text-2xl md:text-3xl 2xl:text-5xl ";

const DESCRIPTION_CLASSES =
  "regular-fanum-font text-[#0A2745] leading-loose text-base md:text-lg 2xl:text-2xl";

const CONTACT_ITEMS_CONTAINER_CLASSES =
  "flex flex-row-reverse gap-4 sm:gap-6 md:gap-24 items-start sm:items-center justify-end ";

const CONTACT_ITEM_CLASSES =
  "flex items-center gap-2 sm:gap-3 text-[#0A2745] regular-fanum-font text-xs sm:text-base 2xl:text-lg cursor-pointer";

const CONTACT_ICON_CLASSES =
  "w-8 h-8 sm:w-9 sm:h-9 2xl:w-12 2xl:h-10 rounded-full bg-[#FF4C00] flex items-center justify-center flex-shrink-0 transition-colors duration-200 group";

const CONTACT_ICON_ICON_CLASSES =
  "text-white group-hover:text-black text-base sm:text-lg md:text-xl transition-colors duration-200";

// Mock service options - can be moved to data file later
export const SERVICE_OPTIONS: DropdownOption[] = [
  { value: "restaurant", label: "  نرم افزار رستوران ", },
  { value: "nutrition-automation", label: " نرم افزار اتوماسیون تغذیه ", },
  { value: "cafe-shop", label: " نرم افزار کافی‌شاپ ", },
  { value: "food-court", label: "نرم افزار فودکورت ", },
  { value: "fast-food", label: "نرم افزار فست فود", },
  { value: "catering", label: "نرم افزار کترینگ", },
  { value: "cafe-restaurant", label: "نرم افزار کافه رستوران", },
  { value: "juice-ice-cream", label: "نرم افزار آبمیوه و بستنی فروشی", },
  { value: "traditional-cafe", label: "نرم افزار کافه سنتی", },
  { value: "sandwich-shop", label: "نرم افزار ساندویچی", },
  { value: "soup-and-halim", label: "نرم افزار آش و حلیم فروشی", },
  { value: "home-food-bakery", label: "نرم افزار غذای خانگی / قنادی", },
  { value: "taba-khi-kalle-pazi", label: "نرم افزار طباخی و کله پزی", },
  { value: "kebab-shop", label: "نرم افزار کبابی و چلوکبابی", },
];
const ConsultingAndDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    freeConsultation: false, // Added checkbox state
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic can be added here
    console.log("Form submitted:", formData);
    // You can add API call here
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
            <p className={`${DESCRIPTION_CLASSES} md:text-justify`}>
              برای انتخاب بهترین راهکار متناسب با کسب‌وکارتان، همین حالا درخواست
              مشاوره رایگان ثبت کنید. مشاوران ما در کوتاه‌ترین زمان با شما تماس
              می‌گیرند و راهنمایی تخصصی ارائه می‌دهند.
            </p>
            <div className={CONTACT_ITEMS_CONTAINER_CLASSES}>
              <div className={CONTACT_ITEM_CLASSES}>
                <div className={CONTACT_ICON_CLASSES}>
                  <BsHeadset className={CONTACT_ICON_ICON_CLASSES} />
                </div>
                <span>مشاوره</span>
              </div>

              <div className={CONTACT_ITEM_CLASSES}>
                <div className={CONTACT_ICON_CLASSES}>
                  <BsFillEnvelopeFill className={CONTACT_ICON_ICON_CLASSES} />
                </div>
                <span>info@sol.ir</span>
              </div>
              <div className={CONTACT_ITEM_CLASSES}>
                <div className={CONTACT_ICON_CLASSES}>
                  <BsTelephoneFill className={CONTACT_ICON_ICON_CLASSES} />
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
                شماره موبایل*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="09123456789 "
                className={FORM_INPUT_CLASSES}
                required
                aria-required="true"
              />
            </div>

            {/* Service Select */}
            <div className={FORM_FIELD_CONTAINER_CLASSES}>
              <label htmlFor="service" className={FORM_LABEL_CLASSES}>
                نوع نرم افزار *
              </label>
              <div className="flex-1 w-full">
                <Dropdown
                  id="service"
                  name="service"
                  options={SERVICE_OPTIONS}
                  placeholder=" نوع  نرم افزار خود را انتخاب کنید"
                  value={formData.service}
                  onChange={handleServiceChange}
                  buttonClassName={`${FORM_INPUT_CLASSES} cursor-pointer`}
                  aria-label="انتخاب سرویس"
                />
              </div>
            </div>

            {/* Free Consultation Checkbox and Submit Button */}
            <div className="flex md:flex-row flex-col items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="freeConsultation"
                  name="freeConsultation"
                  checked={formData.freeConsultation}
                  onChange={handleInputChange}
                  className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer accent-white border-2 border-white rounded-md bg-transparent"
                  aria-label="مشاوره رایگان قبل خرید"
                />
                <label
                  htmlFor="freeConsultation"
                  className="text-white regular-fanum-font text-sm sm:text-base md:text-lg cursor-pointer select-none"
                >
                  مشاوره رایگان قبل خرید
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className={SUBMIT_BUTTON_CLASSES}>
                <span>ثبت درخواست</span>
                <div className={SUBMIT_BUTTON_ICON_CLASSES}>
                  <IoIosSend className="text-white text-base sm:text-lg md:text-xl" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ConsultingAndDemo;
