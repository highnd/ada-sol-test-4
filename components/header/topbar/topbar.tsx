"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { IoCallOutline, IoChevronDownOutline } from "react-icons/io5";
import { TOPBAR_ITEMS } from "@/data";
import { toPersianDigits } from "@/utils/numberUtils";

// Pre-computed button classes for mobile bottom navigation (zero runtime cost)
const MOBILE_BOTTOM_BAR_CLASSES =
  "lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.08)] border-t border-gray-200/60";

const MOBILE_BOTTOM_CONTAINER_CLASSES =
  "flex items-center justify-center gap-4 px-5 pt-4 pb-5 mb-safe";

const MOBILE_BUTTON_ORANGE_CLASSES =
  "flex-1 inline-flex items-center justify-center  py-3.5 text-base bold-fanum-font rounded-xl bg-[#FF4C00] text-white hover:bg-[#E64500] active:bg-[#CC3D00] shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 cursor-pointer";

const MOBILE_BUTTON_BLUE_CLASSES =
  "flex-1 inline-flex items-center justify-center  py-3.5 text-base bold-fanum-font rounded-xl bg-[#0A2745] text-white hover:bg-[#081a2e] active:bg-[#06141f] shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2745] focus-visible:ring-offset-2 cursor-pointer";

export default function Topbar() {
  const [activeSubmenuItem, setActiveSubmenuItem] = useState<string | null>(
    null
  );
  const submenuRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close submenus when clicking outside
      let clickedInsideSubmenu = false;
      submenuRefs.current.forEach((ref) => {
        if (ref && ref.contains(event.target as Node)) {
          clickedInsideSubmenu = true;
        }
      });

      if (!clickedInsideSubmenu) {
        setActiveSubmenuItem(null);
      }
    };

    if (activeSubmenuItem) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeSubmenuItem]);

  const handleSubmenuToggle = (itemLabel: string) => {
    setActiveSubmenuItem((prev) => (prev === itemLabel ? null : itemLabel));
  };

  return (
    <>
      {/* Desktop Topbar - hidden on mobile */}
      <div className="hidden lg:block w-full h-[50px] sm:h-[60px] lg:h-[70px] bg-[#FFF6F2] font-normal">
        <nav
          className="flex flex-col md:flex-row h-full py-2 sm:py-0 items-center justify-between px-4 xl:px-10"
          dir="ltr"
        >
          {/* left part  */}
          <div className="flex  items-center gap-2 sm:gap-4 font-normal tracking-[0] justify-center sm:justify-start">
            <div className="text-[#0A2745] flex items-center gap-1 sm:gap-2">
              <IoCallOutline className="text-xl sm:text-xl lg:text-lg xl:text-2xl 2xl:text-[27px] font-bold text-[#0A2745] phone-ring-animation rounded-full " />
              <a
                href="tel:02191002037"
                className="text-[#0A2745] text-sm sm:text-sm lg:text-xs xl:text-base hover:text-[#FF4C00] transition-colors cursor-pointer"
              >
                {toPersianDigits("021 9100 2037")}
              </a>
              <span className="text-[#0A2745] text-sm sm:text-sm lg:text-xs xl:text-base hidden sm:inline">
                پشتیبانی
              </span>
            </div>

            <Link
              href="/demo"
              className="relative font-extrabold text-[#0A2745] text-sm lg:text-xs xl:text-sm 2xl:text-base whitespace-nowrap after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#FF4C00] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
            >
              درخواست دمو رایگان
            </Link>
          </div>

          {/*  right list menu  - hidden on mobile, visible on desktop */}
          <div className="hidden lg:flex items-center gap-2  lg:gap-3 xl:gap-4 2xl:gap-8 justify-center sm:justify-end text-xs sm:text-sm md:text-[10px] lg:text-[11px] xl:text-[13px] 2xl:text-[16px]">
            {/* Visible items - show all on desktop */}
            {TOPBAR_ITEMS.map((item) => {
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const isSubmenuOpen = activeSubmenuItem === item.label;

              return (
                <div
                  key={item.label}
                  ref={(el) => {
                    if (el) {
                      submenuRefs.current.set(item.label, el);
                    } else {
                      submenuRefs.current.delete(item.label);
                    }
                  }}
                  className="relative"
                >
                  {hasSubmenu ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmenuToggle(item.label);
                      }}
                      className="relative text-[#0A2745] transition-colors leading-[25px] flex items-center hover:text-[#FF4C00] min-h-[44px] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#FF4C00] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 aria-expanded:after:scale-x-100 cursor-pointer bg-transparent border-none p-0"
                      aria-expanded={isSubmenuOpen}
                      aria-haspopup="true"
                    >
                      <IoChevronDownOutline
                        className={`text-[10px] sm:text-[12px] md:text-[14px] mt-0.5 mx-1 transition-transform ${
                          isSubmenuOpen ? "rotate-180" : ""
                        }`}
                      />
                      <span className="whitespace-nowrap">{item.label}</span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="relative text-[#0A2745] transition-colors leading-[25px] flex items-center hover:text-[#FF4C00] min-h-[44px] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#FF4C00] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 cursor-pointer"
                    >
                      <span className="whitespace-nowrap">{item.label}</span>
                    </Link>
                  )}
                  {/* Submenu */}
                  {hasSubmenu && isSubmenuOpen && (
                    <div className="absolute right-0 top-full mt-2 z-20 rounded-md border border-gray-200 bg-white shadow-lg min-w-[180px]">
                      <ul className="py-2">
                        {item.submenu!.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              onClick={() => setActiveSubmenuItem(null)}
                              className="px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition text-sm min-h-[44px] flex items-center cursor-pointer"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Mobile Bottom Navigation Bar - visible only on mobile */}
      <div className={MOBILE_BOTTOM_BAR_CLASSES} dir="rtl">
        <div className={MOBILE_BOTTOM_CONTAINER_CLASSES}>
          <Link href="/demo" className={MOBILE_BUTTON_ORANGE_CLASSES}>
            درخواست دمو رایگان
          </Link>
          <a href="tel:02191002037" className={MOBILE_BUTTON_BLUE_CLASSES}>
            درخواست شماره تلفن
          </a>
        </div>
      </div>
    </>
  );
}
