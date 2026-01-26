"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  placeholderColor?: string; // 👈 NEW
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  buttonClassName?: string;
  menuClassName?: string;
  optionClassName?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  "aria-label"?: string;
}

/**
 * Reusable dropdown component with keyboard navigation and accessibility
 * Supports RTL layout and customizable styling
 */
const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "انتخاب کنید",
  placeholderColor = "text-white", // 👈 default placeholder color
  value,
  onChange,
  className = "",
  buttonClassName = "",
  menuClassName = "",
  optionClassName = "",
  disabled = false,
  id,
  name,
  "aria-label": ariaLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;

      switch (e.key) {
        case "Enter":
        case " ":
        case "ArrowDown":
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
            setFocusedIndex(0);
          } else if (e.key === "ArrowDown") {
            setFocusedIndex((prev) =>
              prev < options.length - 1 ? prev + 1 : 0
            );
          }
          break;

        case "ArrowUp":
          e.preventDefault();
          if (isOpen) {
            setFocusedIndex((prev) =>
              prev > 0 ? prev - 1 : options.length - 1
            );
          }
          break;

        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          setFocusedIndex(-1);
          buttonRef.current?.focus();
          break;

        case "Tab":
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
      }
    },
    [disabled, isOpen, options.length]
  );

  // Select option
  const handleSelect = useCallback(
    (optionValue: string) => {
      onChange?.(optionValue);
      setIsOpen(false);
      setFocusedIndex(-1);
      buttonRef.current?.focus();
    },
    [onChange]
  );

  // Scroll focused option into view
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && menuRef.current) {
      const el = menuRef.current.children[focusedIndex] as HTMLElement;
      el?.scrollIntoView({ block: "nearest" });
    }
  }, [isOpen, focusedIndex]);

  const containerClasses = `relative ${className}`;
  const buttonClasses = `
    w-full flex items-center justify-between text-right dir-rtl
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00]
    focus-visible:ring-offset-2
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${buttonClassName}
  `;

   
  const iconClasses = `transition-transform duration-200 ${
    isOpen ? "rotate-180" : ""
  }`;

  const menuClasses = `
    absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-lg
    border border-gray-200 max-h-60 overflow-auto py-1
    ${menuClassName}
  `;

  return (
    <div ref={containerRef} className={containerClasses}>
      <button
        ref={buttonRef}
        type="button"
        id={id}
        name={name}
        disabled={disabled}
        aria-label={ariaLabel || placeholder}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={`${id || "dropdown"}-menu`}
        onClick={() => !disabled && setIsOpen((p) => !p)}
        onKeyDown={handleKeyDown}
        className={buttonClasses}
      >
        <span className={placeholderColor}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <IoChevronDownOutline className={iconClasses} />
      </button>

      {isOpen && (
        <ul
          ref={menuRef}
          id={`${id || "dropdown"}-menu`}
          role="listbox"
          aria-label={ariaLabel || placeholder}
          className={menuClasses}
        >
          {options.map((option, index) => {
            const isSelected = option.value === value;
            const isFocused = index === focusedIndex;

            const optionClasses = `
              px-4 py-2 mx-1 text-right rounded-full cursor-pointer
              transition-colors duration-150
              ${isSelected ? "bg-[#FF4C00] text-white" : "text-[#0A2745] hover:bg-[#FFF6F2]"}
              ${isFocused && !isSelected ? "bg-[#FFF6F2]" : ""}
              ${isFocused && isSelected ? "bg-[#E64500]" : ""}
              ${optionClassName}
            `;

            return (
              <li
                key={option.value}
                role="option"
                aria-selected={isSelected}
                tabIndex={isFocused ? 0 : -1}
                onClick={() => handleSelect(option.value)}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") &&
                  handleSelect(option.value)
                }
                className={optionClasses}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
