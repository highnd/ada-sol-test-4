"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { MOCK_SEARCH_SUGGESTIONS } from "@/data";

export type SearchSuggestion = {
  id: string;
  title: string;
  category: string;
  href: string;
};

export interface SearchProps {
  variant?: "mobile" | "desktop";
  isExpanded?: boolean;
  onClose?: () => void;
  suggestions?: SearchSuggestion[];
  placeholder?: string;
  className?: string;
}

const Search: React.FC<SearchProps> = ({
  variant = "desktop",
  isExpanded = false,
  onClose,
  suggestions = MOCK_SEARCH_SUGGESTIONS,
  placeholder,
  className = "",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Filter search suggestions based on query
  const filteredSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    return suggestions
      .filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      )
      .slice(0, 8); // Limit to 8 suggestions
  }, [searchQuery, suggestions]);

  // Mount check for portal and calculate dropdown position (mobile only)
  useEffect(() => {
    if (variant === "mobile") {
      setMounted(true);
    }
  }, [variant]);

  // Calculate dropdown position only when it should be visible (mobile)
  useEffect(() => {
    if (
      variant === "mobile" &&
      containerRef.current &&
      (filteredSuggestions.length > 0 || searchQuery.trim())
    ) {
      const rect = containerRef.current.getBoundingClientRect();
      setDropdownStyle({
        top: `${rect.bottom + 8}px`,
        left: `${rect.left}px`,
        width: `${Math.max(rect.width, 200)}px`,
      });
    }
  }, [variant, searchQuery, filteredSuggestions.length]);

  // Focus input when expanded
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  // Reset search query when closed
  useEffect(() => {
    if (!isExpanded) {
      setSearchQuery("");
    }
  }, [isExpanded]);

  const handleSuggestionClick = () => {
    setSearchQuery("");
    onClose?.();
  };

  const defaultPlaceholder = "چی می‌خوای جستجو کنی؟";

  // Legacy mobile variant: inline search input with portal for dropdown (backward compatibility - not used in navbar)
  if (variant === "mobile") {
    const shouldShowDropdown =
      filteredSuggestions.length > 0 ||
      (searchQuery.trim() && filteredSuggestions.length === 0);

    const dropdownContent =
      shouldShowDropdown && dropdownStyle.width ? (
        <div
          className="fixed bg-white shadow-2xl rounded-2xl border border-gray-100 z-60 max-h-[400px] overflow-y-auto"
          style={dropdownStyle}
        >
          {filteredSuggestions.length > 0 ? (
            <ul className="py-2" role="list">
              {filteredSuggestions.map((suggestion) => (
                <li key={suggestion.id} role="listitem">
                  <Link
                    href={suggestion.href}
                    onClick={handleSuggestionClick}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-[#FFF6F2] transition-colors group"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#FF4C00] transition-colors">
                      <CiSearch className="text-gray-500 group-hover:text-white text-sm transition-colors" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <span className="text-sm text-[#0A2745] group-hover:text-[#FF4C00] transition-colors font-medium">
                        {suggestion.title}
                      </span>
                      <span className="text-xs text-gray-500">
                        {suggestion.category}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="py-8 px-4 text-center">
              <p className="text-sm text-gray-500">نتیجه‌ای یافت نشد</p>
            </div>
          )}
        </div>
      ) : null;

    return (
      <>
        <div ref={containerRef} className={`relative ${className}`}>
          <div className="flex items-center gap-2 flex-1 max-w-[220px] px-3 py-2 bg-gray-100 rounded-full border border-gray-200 focus-within:border-[#FF4C00] focus-within:ring-2 focus-within:ring-[#FF4C00]">
            <CiSearch className="text-gray-500 text-lg" />
            <input
              ref={inputRef}
              type="text"
              placeholder={placeholder || defaultPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-[#0A2745] placeholder:text-gray-500 focus:outline-none"
            />
          </div>
        </div>
        {mounted &&
          dropdownContent &&
          createPortal(dropdownContent, document.body)}
      </>
    );
  }

  // Desktop variant: expandable panel (also works on mobile when used with icon button)
  return (
    <>
      {isExpanded && (
        <div className="fixed left-4 right-4 lg:left-8 lg:right-auto top-[72px] lg:top-[132px] xl:top-[142px] w-auto lg:w-[480px] max-w-[90vw] bg-white shadow-2xl rounded-2xl border border-gray-100 z-40">
          <div className="p-3 sm:p-4 flex items-center gap-3 border-b border-gray-100">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#FFF6F2]">
              <CiSearch className="text-[#FF4C00] text-lg" />
            </div>
            <input
              ref={inputRef}
              type="text"
              placeholder={placeholder || defaultPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-3 py-3 rounded-3xl border border-gray-200 text-sm text-[#0A2745] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF4C00] focus:border-[#FF4C00]"
            />
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-800 px-1.5 py-1 transition-colors cursor-pointer"
              aria-label="بستن جستجو"
            >
              <IoClose className="text-base" />
              <span>بستن</span>
            </button>
          </div>

          {/* Search suggestions list */}
          {filteredSuggestions.length > 0 && (
            <div className="max-h-[400px] overflow-y-auto">
              <ul className="py-2" role="list">
                {filteredSuggestions.map((suggestion) => (
                  <li key={suggestion.id} role="listitem">
                    <Link
                      href={suggestion.href}
                      onClick={handleSuggestionClick}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[#FFF6F2] transition-colors group"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#FF4C00] transition-colors">
                        <CiSearch className="text-gray-500 group-hover:text-white text-sm transition-colors" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <span className="text-sm text-[#0A2745] group-hover:text-[#FF4C00] transition-colors font-medium">
                          {suggestion.title}
                        </span>
                        <span className="text-xs text-gray-500">
                          {suggestion.category}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* No results message */}
          {searchQuery.trim() && filteredSuggestions.length === 0 && (
            <div className="py-8 px-4 text-center">
              <p className="text-sm text-gray-500">نتیجه‌ای یافت نشد</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Search;
