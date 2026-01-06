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

  // Close dropdown when clicking outside
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

  // Handle option selection
  const handleSelect = useCallback(
    (optionValue: string) => {
      onChange?.(optionValue);
      setIsOpen(false);
      setFocusedIndex(-1);
      buttonRef.current?.focus();
    },
    [onChange]
  );

  // Handle option key down
  const handleOptionKeyDown = (
    e: React.KeyboardEvent<HTMLLIElement>,
    optionValue: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSelect(optionValue);
    }
  };

  // Scroll focused option into view
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && menuRef.current) {
      const focusedOption = menuRef.current.children[
        focusedIndex
      ] as HTMLElement;
      if (focusedOption) {
        focusedOption.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [isOpen, focusedIndex]);

  const containerClasses = `relative ${className || ""}`;
  const buttonBaseClasses = "w-full flex items-center justify-between text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 dir-rtl";
  const buttonDisabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  const buttonClasses = `${buttonBaseClasses} ${buttonDisabledClasses} ${buttonClassName || ""}`;
  
  const spanClasses = !selectedOption ? "text-white" : "";
  const iconClasses = `text-base transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`;
  
  const menuBaseClasses = "absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-lg border border-gray-200 max-h-60 overflow-auto focus-visible:outline-none py-1";
  const menuClasses = `${menuBaseClasses} ${menuClassName || ""}`;

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
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={buttonClasses}
      >
        <span className={spanClasses}>
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
            const optionBaseClasses = "px-4 py-2 cursor-pointer text-right mx-1 transition-colors duration-150 focus-visible:outline-none rounded-full";
            const optionSelectedClasses = isSelected ? "bg-[#FF4C00] text-white" : "text-[#0A2745] hover:bg-[#FFF6F2]";
            const optionFocusedClasses = isFocused && !isSelected ? "bg-[#FFF6F2]" : "";
            const optionFocusedSelectedClasses = isSelected && isFocused ? "bg-[#E64500]" : "";
            const optionClasses = `${optionBaseClasses} ${optionSelectedClasses} ${optionFocusedClasses} ${optionFocusedSelectedClasses} ${optionClassName || ""}`;
            
            return (
              <li
                key={option.value}
                role="option"
                aria-selected={isSelected}
                tabIndex={isFocused ? 0 : -1}
                onClick={() => handleSelect(option.value)}
                onKeyDown={(e) => handleOptionKeyDown(e, option.value)}
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

