"use client";

import React from "react";
import Link from "next/link";

type PageHeaderButton = {
  type: "solid" | "outline";
  label: string;
  href?: string;
  onClick?: () => void;
};

type PageHeaderProps = {
  title: React.ReactNode;
  subtitle: string;
  description: string;
  buttons: PageHeaderButton[];
  bgColor?: string;
};

const BUTTON_SOLID_HERO_CLASSES =
  "inline-flex items-center justify-center px-6 py-2 sm:px-8 text-sm sm:text-base lg:text-lg bold-fanum-font rounded-[50px] bg-[#FF4C00] text-white hover:bg-[#E64500] transition-colors duration-200  w-full sm:w-auto cursor-pointer";

const BUTTON_OUTLINE_HERO_CLASSES =
  "inline-flex items-center justify-center px-6 py-2 sm:px-8 text-sm sm:text-base lg:text-lg bold-fanum-font rounded-[50px] border-2 border-white text-white bg-transparent hover:bg-[#FF4C00]/10 transition-colors duration-200  w-full sm:w-auto cursor-pointer";

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  description,
  buttons,
  bgColor = "#0A2745",
}) => {
  return (
    <div
      className="lg:h-187.5 w-full flex flex-col items-center justify-start pt-15 md:gap-4 gap-2 px-6 pb-48"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="bold-fanum-font text-white text-center text-3xl xl:text-[48px] 2xl:text-[56px] md:leading-17.5 leading-10 tracking-[0]">
        {title}
      </h1>

      <h2 className="regular-fanum-font text-white text-center text-lg lg:text-[48px] md:leading-17.5 leading-7.5 tracking-[0] max-w-2xl">
        {subtitle}
      </h2>

      <p className="regular-fanum-font text-white text-center text-xs xl:text-[16px] 2xl:text-[20px] leading-10 tracking-[0] max-w-2xl">
        {description}
      </p>

      <div className="sm:w-auto w-full flex sm:items-center  gap-3 sm:gap-4 py-2 regular-fanum-font">
        {buttons.map((btn, idx) => {
          const classes =
            btn.type === "solid"
              ? BUTTON_SOLID_HERO_CLASSES
              : BUTTON_OUTLINE_HERO_CLASSES;

          if (btn.href) {
            return (
              <Link key={idx} href={btn.href} className={classes}>
                {btn.label}
              </Link>
            );
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={btn.onClick}
              className={classes}
            >
              {btn.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PageHeader;
