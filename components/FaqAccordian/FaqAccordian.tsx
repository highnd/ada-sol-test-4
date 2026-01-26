"use client";
import React, { useState } from "react";
import FAQItem, { FaqItem } from "../ui/faq";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const BUTTON_SOLID_HERO_CLASSES =
  "inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 text-sm sm:text-base lg:text-lg bold-fanum-font rounded-[50px] bg-[#FF4C00] text-white hover:bg-[#E64500] transition-colors duration-200  w-full sm:w-44 cursor-pointer";

type FAQAccordionProps = {
  items: readonly FaqItem[]; // Required - data must be passed through props for reusability
  title?: string; // Optional, default: "سوالات متداول"
  buttonText?: string; // Optional, default: "تماس بگیرید"
  buttonHref?: string; // Optional, default: "#"
  containerClassName?: string; // Optional
};

/**
 * FAQAccordion Component
 *
 * A reusable component for displaying FAQ items in an accordion layout.
 * Accepts FAQ data through props for full reusability.
 *
 * @param items - Array of FAQ items (required - pass data through props)
 * @param title - Section title (optional, default: "سوالات متداول")
 * @param buttonText - Button text (optional, default: "تماس بگیرید")
 * @param buttonHref - Button link href (optional, default: "#")
 * @param containerClassName - Optional custom className for container
 */
const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  title = "سوالات متداول",
  buttonText = "تماس بگیرید",
  buttonHref = "#",
  containerClassName,
}) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className={`w-full mx-auto bg-white overflow-hidden flex xl:flex-row flex-col-reverse items-center justify-center ${
        containerClassName || ""
      }`}
    >
      <div className="w-full">
        {items.map((item) => (
          <FAQItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={handleToggle}
          />
        ))}
      </div>
      <div className="xl:w-1/3 w-full text-center space-y-4 text-[#0A2745] h-44">
        <h2 className="mx-auto extrabold-fanum-font text-2xl xl:text-[48px] lg:leading-[70px] tracking-[0] max-w-4xl">
          {title}
        </h2>

        <h3>آیا سوال بیشتری دارید؟</h3>

        <Link href={buttonHref} className={BUTTON_SOLID_HERO_CLASSES}>
          {buttonText}
          <IoIosArrowBack className="text-white text-sm sm:text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default FAQAccordion;
