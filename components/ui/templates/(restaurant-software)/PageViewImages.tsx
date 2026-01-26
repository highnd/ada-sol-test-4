"use client";

import React, { useState } from "react";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import Image from "next/image";

type ButtonItem = {
  label: string;
  imageSrc?: string; // Optional image source for each tab
  imageAlt?: string; // Optional alt text for image
};

type PageViewImagesProps = {
  title: string;
  buttons: ButtonItem[];
};

const PageViewImages: React.FC<PageViewImagesProps> = ({ title, buttons }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  const selectedButton = buttons[selectedIndex];

  return (
    <>
      <h2 className="mx-auto lg:mt-32 mt-16 sm:mt-20 mb-6 sm:mb-8 extrabold-fanum-font text-center text-xl sm:text-2xl lg:text-3xl xl:text-[48px] lg:leading-17.5 tracking-[0] max-w-4xl text-[#0A2745] px-4">
        {title}
      </h2>

      <div className="w-full h-full flex lg:flex-row flex-col items-center justify-center xl:h-105.25 2xl:h-120 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
        <div className="lg:w-1/2 w-full h-full grid place-items-center">
          <div className="p-4 sm:p-6 lg:p-12 xl:p-16 2xl:p-20 gap-2 sm:gap-3 lg:gap-6 xl:gap-8 grid grid-cols-2 w-full">
            {buttons.map((btn, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={idx}
                  className={`w-full h-10 sm:h-12 bold-fanum-font px-3 sm:px-4 lg:px-6 xl:px-8 rounded-[50px] border-2 transition-all duration-200 cursor-pointer py-1.5 sm:py-2 text-xs sm:text-sm lg:text-base ${isSelected
                    ? "border-[#FF4C00] text-white bg-[#FF4C00] hover:bg-[#E64500]"
                    : "border-[#FF4C00] text-[#FF4C00] bg-transparent hover:bg-[#FF4C00]/10"
                    }`}
                  onClick={() => handleButtonClick(idx)}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:w-1/2 w-full h-full p-2 sm:p-3 lg:p-4">
          <div className="w-full h-full bg-[#F0F5F7] rounded-2xl sm:rounded-3xl lg:rounded-[36px] relative overflow-hidden min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
            {selectedButton?.imageSrc ? (
              <Image
                src={selectedButton.imageSrc}
                alt={selectedButton.imageAlt || selectedButton.label}
                fill
                className="object-contain p-4 sm:p-6 lg:p-8"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-[#595B5C] text-xs sm:text-sm text-center px-4">
                  {/* Placeholder for future image */}
                </div>
              </div>
            )}
            <HiOutlineMagnifyingGlassPlus className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 text-[#595B5C] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl cursor-pointer hover:opacity-80 transition-opacity z-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageViewImages;
