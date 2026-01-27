"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type Props = {
  item: FaqItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
};

const FAQItem: React.FC<Props> = ({ item, isOpen, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="space-y-3">
      <div
        onClick={() => onToggle(item.id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-full mb-3 p-5 text-right transition-all duration-200 rounded-3xl cursor-pointer
          ${isOpen
            ? "bg-[#FF4C00] text-white shadow-lg"
            : "bg-accent text-[#0A2745] hover:bg-[#FF4C00]/10 hover:text-[#FF4C00]"
          }
        `}
      >
        <span className="flex items-center justify-between w-full gap-3">
          <span className={`bold-fanum-font transition-all duration-300 ${isOpen ? "text-xs md:text-sm" : "text-sm md:text-base"}`}>
            {item.question}
          </span>
          <span
            className={`rounded-full p-1 transition-all duration-200 ${isOpen
              ? "bg-white text-primary"
              : isHovered
                ? "bg-[#FF4C00] text-white"
                : "bg-secondary text-white"
              }`}
          >
            {isOpen ? <FaMinus /> : <FaPlus />}
          </span>
        </span>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-72 py-4" : "max-h-0"}
        `}
        >
          <p className={`px-5 pb-4 text-sm md:text-base ${isOpen ? "text-white" : "text-secondary"}`}>
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
