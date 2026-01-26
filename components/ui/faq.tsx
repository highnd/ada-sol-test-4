"use client";
import React from "react";
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
  return (
    <div className="border-b border-gray-200 space-y-3 ">
      <button
        onClick={() => onToggle(item.id)}
        className={`w-full  flex items-center justify-between p-5 text-right transition-all duration-300 rounded-xl cursor-pointer
          ${
            isOpen
              ? "bg-[#FF4C00] text-white shadow-lg"
              : "bg-accent text-[#0A2745] hover:bg-[#FF4C00]/10"
          }
        `}
      >
        <span className="flex items-center justify-between w-full gap-3">
          <span className="text-sm md:text-base font-medium">
            {item.question}
          </span>
          <span className="text-lg">{isOpen ? <FaMinus /> : <FaPlus />}</span>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-72 py-4" : "max-h-0"}
        `}
      >
        <p className="px-5 pb-4 text-gray-700 text-sm md:text-base">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
