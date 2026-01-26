"use client";

import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  PRODUCTS_MENU_ITEMS,
  MenuItem,
  SubmenuItem,
  TOPBAR_ITEMS,
} from "@/data";
import { IoChevronDownOutline, IoMenu } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import {
  FaLaptop,
  FaDesktop,
  FaCalculator,
  FaCashRegister,
  FaUserTie,
  FaTabletAlt,
  FaMobileAlt,
  FaHamburger,
  FaCoffee,
  FaStore,
  FaUtensils,
  FaFire,
  FaGlassWhiskey,
  FaBirthdayCake,
  FaIndustry,
  FaBuilding,
  FaGraduationCap,
  FaHospital,
  FaHardHat,
  FaShieldAlt,
  FaTruck,
  FaMoneyBillWave,
  FaWarehouse,
  FaUsers,
  FaQrcode,
  FaSitemap,
  FaSms,
  FaPoll,
  FaCalendarCheck,
  FaCreditCard,
  FaPlug,
  FaChartLine,
  FaMapMarkerAlt,
  FaGlobe,
  FaPrint,
  FaPhone,
  FaTable,
  FaBarcode,
  FaBell,
  FaFileAlt,
  FaWallet,
  FaBox,
  FaExchangeAlt,
  FaClipboard,
  FaStar,
  FaTicketAlt,
  FaGift,
  FaChartBar,
} from "react-icons/fa";
import dynamic from "next/dynamic";
import Search from "@/components/ui/search";
import LastUpdate from "@/components/ui/lastUpdate";

const Drawer = dynamic(() => import("@/components/ui/drawer"), {
  ssr: false,
});

// Pre-computed button classes (static - zero runtime cost)
const BUTTON_SOLID_DESKTOP_CLASSES =
  "inline-flex items-center justify-center px-3 sm:px-4 py-2 md:px-6  text-xs sm:text-sm lg:text-base bold-fanum-font rounded-[50px] bg-[#FF4C00] text-white hover:bg-[#E64500] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2  cursor-pointer";

const BUTTON_OUTLINE_DESKTOP_CLASSES =
  "inline-flex bold-fanum-font items-center justify-center px-3 py-2 sm:px-6  text-xs sm:text-sm lg:text-base rounded-[50px] border-2 border-[#FF4C00] text-[#FF4C00] bg-transparent hover:bg-[#FF4C00]/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2  cursor-pointer";

// Mobile login/register button classes
const BUTTON_LOGIN_MOBILE_CLASSES =
  "inline-flex items-center justify-center px-4 py-2.5 text-sm bold-fanum-font rounded-xl border-2 border-[#FF4C00] text-[#FF4C00] bg-transparent hover:bg-[#FF4C00]/10 active:bg-[#FF4C00]/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 cursor-pointer min-h-[44px]";

const BUTTON_REGISTER_MOBILE_CLASSES =
  "inline-flex items-center justify-center px-4 py-2.5 text-sm bold-fanum-font rounded-xl bg-[#FF4C00] text-white hover:bg-[#E64500] active:bg-[#CC3D00] shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 cursor-pointer min-h-[44px]";

// const BUTTON_OUTLINE_MOBILE_CLASSES =
//   "w-full inline-flex items-center justify-center  py-3 text-base extrabold-fanum-font rounded-[50px] border-2 border-[#FF4C00] text-[#FF4C00] bg-transparent hover:bg-[#FF4C00]/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 cursor-pointer";

// const BUTTON_SOLID_MOBILE_NAVBAR_CLASSES =
//   "inline-flex items-center justify-center px-3 py-1.5 text-xs bold-fanum-font rounded-[50px] bg-[#FF4C00] text-white hover:bg-[#E64500] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 cursor-pointer";

// const BUTTON_OUTLINE_MOBILE_NAVBAR_CLASSES =
//   "inline-flex items-center justify-center px-3 py-1.5 text-xs bold-fanum-font rounded-[50px] border-2 border-[#FF4C00] text-[#FF4C00] bg-transparent hover:bg-[#FF4C00]/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 cursor-pointer";

// Icon mapping for submenu items
const getSubmenuIcon = (iconName?: string) => {
  if (!iconName) return null;

  const iconMap: Record<string, React.ComponentType<any>> = {
    FaLaptop,
    FaDesktop,
    FaCalculator,
    FaCashRegister,
    FaUserTie,
    FaTabletAlt,
    FaMobileAlt,
    FaHamburger,
    FaCoffee,
    FaStore,
    FaUtensils,
    FaFire,
    FaGlassWhiskey,
    FaBirthdayCake,
    FaIndustry,
    FaBuilding,
    FaGraduationCap,
    FaHospital,
    FaHardHat,
    FaShieldAlt,
    FaTruck,
    FaMoneyBillWave,
    FaWarehouse,
    FaUsers,
    FaQrcode,
    FaSitemap,
    FaSms,
    FaPoll,
    FaCalendarCheck,
    FaCreditCard,
    FaPlug,
    FaChartLine,
    FaMapMarkerAlt,
    FaGlobe,
    FaPrint,
    FaPhone,
    FaTable,
    FaBarcode,
    FaBell,
    FaFileAlt,
    FaWallet,
    FaBox,
    FaExchangeAlt,
    FaClipboard,
    FaStar,
    FaTicketAlt,
    FaGift,
    FaChartBar,
  };

  return iconMap[iconName] || null;
};

const Navbar = () => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [activeSubmenuId, setActiveSubmenuId] = useState<string | null>(null);
  const [activeNestedSubmenuId, setActiveNestedSubmenuId] = useState<
    string | null
  >(null);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);
  const hasAutoExpandedRef = useRef(false);

  // Auto-expand menu items that have active submenu items on mobile (only once when drawer opens)
  useEffect(() => {
    if (!pathname || !isDrawerOpen) {
      // Reset flag when drawer closes
      if (!isDrawerOpen) {
        hasAutoExpandedRef.current = false;
      }
      return;
    }

    // Only auto-expand once when drawer first opens
    if (hasAutoExpandedRef.current) return;

    // Find menu item with active submenu in PRODUCTS_MENU_ITEMS
    const productItemWithActiveSubmenu = PRODUCTS_MENU_ITEMS.find((item) => {
      if (!item.submenu) return false;
      return item.submenu.some((sub) => {
        if (pathname === sub.href) return true;
        if (sub.submenu) {
          return sub.submenu.some((nested) => pathname === nested.href);
        }
        return false;
      });
    });

    // Find topbar item with active submenu
    const topbarItemWithActiveSubmenu = TOPBAR_ITEMS.find((item) => {
      if (!item.submenu) return false;
      return item.submenu.some((sub) => pathname === sub.href);
    });

    // Auto-expand if found (only on initial drawer open)
    if (productItemWithActiveSubmenu) {
      setActiveItemId(productItemWithActiveSubmenu.label);
      hasAutoExpandedRef.current = true;
    } else if (topbarItemWithActiveSubmenu) {
      setActiveItemId(topbarItemWithActiveSubmenu.label);
      hasAutoExpandedRef.current = true;
    }
  }, [pathname, isDrawerOpen]);

  const activeItem: MenuItem | null = useMemo(() => {
    if (!activeItemId) return null;
    return (
      PRODUCTS_MENU_ITEMS.find((item) => item.label === activeItemId) || null
    );
  }, [activeItemId]);

  const activeSubmenu: SubmenuItem | null = useMemo(() => {
    if (!activeItem || !activeSubmenuId) return null;
    return (
      activeItem.submenu.find((sub) => sub.label === activeSubmenuId) || null
    );
  }, [activeItem, activeSubmenuId]);

  const activePreviewSrc: string | undefined = useMemo(() => {
    if (activeSubmenu?.previewSrc) return activeSubmenu.previewSrc;
    if (activeItem?.defaultPreviewSrc) return activeItem.defaultPreviewSrc;
    return undefined;
  }, [activeItem, activeSubmenu]);

  const handleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(true);
    // Reset auto-expand flag when drawer opens so it can auto-expand active items
    hasAutoExpandedRef.current = false;
  }, []);

  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
    // Reset states when drawer closes
    setActiveItemId(null);
    setActiveSubmenuId(null);
    hasAutoExpandedRef.current = false;
  }, []);

  const handleDesktopSubmenuEnter = useCallback(
    (_itemLabel: string, submenuLabel: string) => {
      setActiveSubmenuId(submenuLabel);
      setActiveNestedSubmenuId(null); // Reset nested submenu when hovering main submenu
    },
    []
  );

  const handleNestedSubmenuEnter = useCallback((nestedSubmenuLabel: string) => {
    setActiveNestedSubmenuId(nestedSubmenuLabel);
  }, []);

  const handleDesktopItemClick = useCallback(
    (itemLabel: string, hasSubmenu: boolean) => {
      if (!hasSubmenu) return;
      setActiveItemId((prev) => (prev === itemLabel ? null : itemLabel));
      setActiveSubmenuId(null);
    },
    []
  );

  const handleMobileToggleItem = useCallback((itemLabel: string) => {
    setActiveItemId((prev) => (prev === itemLabel ? null : itemLabel));
    setActiveSubmenuId(null);
    // Mark that user has manually interacted, so auto-expand won't interfere
    hasAutoExpandedRef.current = true;
  }, []);

  const handleMobileSubmenuClick = useCallback(
    (itemLabel: string, submenuLabel: string) => {
      setActiveItemId(itemLabel);
      setActiveSubmenuId(submenuLabel);
    },
    []
  );

  const handleDesktopSubmenuClick = useCallback(() => {
    setActiveItemId(null);
    setActiveSubmenuId(null);
    setActiveNestedSubmenuId(null);
  }, []);

  // Close drawer when window resizes to large screen (lg+)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isDrawerOpen]);

  // Close desktop mega menu when clicking outside navbar (only on desktop, not when drawer is open)
  useEffect(() => {
    if (!activeItemId) return;
    if (isDrawerOpen) return; // Don't add listener when drawer is open (mobile)

    const handleClickOutside = (event: MouseEvent) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(event.target as Node)) {
        setActiveItemId(null);
        setActiveSubmenuId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeItemId, isDrawerOpen]);

  return (
    <>
      <div className="bg-white h-[72px] relative shadow-[0_2px_8px_0_rgba(0,0,0,0.15)]  z-40">
        <nav
          ref={navRef}
          className=" h-full flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-0 py-2  px-2  xl:px-24   "
          dir="rtl"
        >
          {/* right: logo - hidden on mobile (shown in drawer), visible on desktop */}
          <div className="hidden lg:flex items-center ">
            <Link href="/" className="flex items-center">
              <Image
                src="/icons-brands/logo-sol.svg"
                alt="سول - نرم‌افزار رستورانی"
                width={70}
                height={20}
                priority
                className="w-16 sm:w-20 md:w-24 lg:w-[70px] h-auto"
              />
            </Link>
          </div>

          {/* center: menu items - hidden on mobile, visible on desktop */}
          <ul className="hidden lg:flex items-center gap-2 xl:gap-4 2xl:gap-8  ">
            {PRODUCTS_MENU_ITEMS.map((item) => {
              const isActive = activeItemId === item.label;
              const hasSubmenu = item.submenu && item.submenu.length > 0;

              // Check if current pathname matches the menu item href or any of its submenu items
              const isCurrentPage = pathname === item.href;
              const hasActiveSubmenuItem = hasSubmenu
                ? item.submenu!.some((sub) => {
                  // Check direct submenu items
                  if (pathname === sub.href) return true;
                  // Check nested submenu items if they exist
                  if (sub.submenu) {
                    return sub.submenu.some((nested) => pathname === nested.href);
                  }
                  return false;
                })
                : false;

              // Apply active styling if current page or has active submenu item
              const isPageActive = isCurrentPage || hasActiveSubmenuItem;

              return (
                <li key={item.label} className="relative">
                  <button
                    type="button"
                    className={`relative cursor-pointer transition-colors text-xs lg:text-xs xl:text-[14px] 2xl:text-[16px] leading-[25px] flex items-center after:absolute after:bottom-[-4px] after:right-0 after:left-0 after:h-[2px] 
                    after:bg-[#FF4C00] after:origin-right after:transition-transform after:duration-300 after:ease-out 
                    hover:text-[#FF4C00] hover:after:scale-x-100 ${isPageActive
                        ? "text-[#FF4C00] after:scale-x-100"
                        : "text-[#0A2745] after:scale-x-0"
                      } ${isActive ? "aria-expanded:after:scale-x-100" : ""}`}
                    onClick={() =>
                      handleDesktopItemClick(item.label, hasSubmenu)
                    }
                    aria-expanded={hasSubmenu ? isActive : undefined}
                  >
                    {item.label}
                    {hasSubmenu && (
                      <IoChevronDownOutline
                        className={`text-[10px] lg:text-[10px] xl:text-[14px] mx-1 transition-transform ${isActive || isPageActive
                          ? " rotate-180  text-[#FF4C00]"
                          : "rotate-0"
                          }  `}
                      />
                    )}
                  </button>

                  {hasSubmenu && isActive && (
                    <div
                      className="fixed left-1/2 top-[142px] -translate-x-1/2 w-[80vw] max-w-[1100px] h-fit bg-white shadow-2xl rounded-2xl border border-gray-100 z-40 hidden lg:block p-6"
                      dir="ltr"
                    >
                      <div className="relative w-full h-full">
                        <div className="flex flex-row w-full gap-4   overflow-y-auto ">
                          {/* Left: preview image */}
                          <div className="w-1/2 flex items-top justify-start  rounded-xl overflow-hidden">
                            {activePreviewSrc ? (
                              <Image
                                src={activePreviewSrc}
                                alt={activeSubmenu?.label || item.label}
                                width={360}
                                height={220}
                                className="w-72 h-auto max-h-72 object-contain  p-4 bg-red-500"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                                تصویر
                              </div>
                            )}
                          </div>
                          {/* Right: submenu items */}
                          <div className="w-1/2 relative">
                            <ul className="space-y-1">
                              {item.submenu.map((sub) => {
                                const isSubActive =
                                  isActive && activeSubmenuId === sub.label;
                                const hasNestedSubmenu =
                                  sub.submenu && sub.submenu.length > 0;
                                const IconComponent = getSubmenuIcon(sub.icon);
                                const isSubmenuItemActive = pathname === sub.href;
                                return (
                                  <li
                                    key={sub.href}
                                    dir="rtl"
                                    className="relative group"
                                  >
                                    <Link
                                      href={sub.href}
                                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm leading-[22px] transition-colors ${isSubActive || isSubmenuItemActive
                                        ? "bg-[#FFF6F2] text-[#FF4C00]"
                                        : "text-[#0A2745] hover:bg-gray-50 hover:text-[#FF4C00]"
                                        } ${hasNestedSubmenu ? "pr-6" : ""}`}
                                      onMouseEnter={() =>
                                        handleDesktopSubmenuEnter(
                                          item.label,
                                          sub.label
                                        )
                                      }
                                      onClick={handleDesktopSubmenuClick}
                                    >
                                      {IconComponent && (
                                        <IconComponent className="text-base shrink-0 text-[#FF4C00]" />
                                      )}
                                      <span className="flex-1 min-w-0 whitespace-normal">
                                        {sub.label}
                                      </span>
                                      {hasNestedSubmenu && (
                                        <IoChevronDownOutline
                                          className={`text-xs text-[#FF4C00] shrink-0 transition-transform rotate-90 ${isSubActive
                                            ? " -translate-x-2"
                                            : "translate-x-0"
                                            }`}
                                        />
                                      )}
                                    </Link>
                                    {/* Nested submenu */}
                                    {hasNestedSubmenu && sub.submenu && (
                                      <div
                                        className="absolute right-full top-0 mr-2  w-64 bg-white shadow-xl rounded-lg border border-gray-100 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                                        dir="rtl"
                                        onMouseEnter={() =>
                                          handleNestedSubmenuEnter(sub.label)
                                        }
                                        onMouseLeave={() =>
                                          setActiveNestedSubmenuId(null)
                                        }
                                      >
                                        <ul className="py-2">
                                          {sub.submenu.map((nested) => {
                                            const NestedIconComponent =
                                              getSubmenuIcon(nested.icon);
                                            const isNestedItemActive = pathname === nested.href;
                                            return (
                                              <li key={nested.href}>
                                                <Link
                                                  href={nested.href}
                                                  className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${isNestedItemActive
                                                    ? "bg-[#FFF6F2] text-[#FF4C00]"
                                                    : "text-[#0A2745] hover:bg-[#FFF6F2] hover:text-[#FF4C00]"
                                                    }`}
                                                  onClick={
                                                    handleDesktopSubmenuClick
                                                  }
                                                >
                                                  {NestedIconComponent && (
                                                    <NestedIconComponent className="text-sm shrink-0 text-[#FF4C00]" />
                                                  )}
                                                  <span className="flex-1 min-w-0 whitespace-normal">
                                                    {nested.label}
                                                  </span>
                                                </Link>
                                              </li>
                                            );
                                          })}
                                        </ul>
                                      </div>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                        {item.showMoreButton !== false && (
                          <div className="  border-t border-gray-100 py-3 flex justify-end px-4 bg-white">
                            <Link
                              href={item.href}
                              className="bg-[#FF4C00] md:w-1/3 text-white px-4 py-2 rounded-md text-sm font-medium hover:underline text-center"
                              onClick={handleDesktopSubmenuClick}
                            >
                              مشاهده بیشتر
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* left: auth buttons + search / hamburger */}
          <div className="flex  items-center gap-2 sm:gap-3 md:gap-4 py-2 w-full lg:w-auto justify-between lg:justify-end">
            {/* Mobile: hamburger + logo (right) + search + auth (left) */}
            <div className="flex items-center w-full lg:hidden justify-between">
              {/* Hamburger + Logo on the right (first in RTL) */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={handleDrawerOpen}
                  className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none  text-[#0A2745] cursor-pointer shrink-0"
                  aria-label="باز کردن منو"
                  aria-expanded={isDrawerOpen}
                  aria-controls="mobile-drawer"
                >
                  <IoMenu className="text-2xl" />
                </button>
                <Link href="/" className="flex items-center shrink-0">
                  <Image
                    src="/icons-brands/logo-sol.svg"
                    alt="سول - نرم‌افزار رستورانی"
                    width={70}
                    height={20}
                    className="h-8 w-auto object-contain"
                  />
                </Link>
              </div>
              {/* Search + Auth on the left (last in RTL) */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* search icon button */}
                <button
                  type="button"
                  onClick={() => setIsSearchExpanded((v) => !v)}
                  className="p-2 rounded-full hover:bg-gray-100 focus:bg-gray-100 focus:outline-none  text-[#0A2745] cursor-pointer shrink-0"
                  aria-label="جستجو"
                  aria-expanded={isSearchExpanded}
                >
                  <BsSearch className="text-xl" />
                </button>
                {/* Auth buttons */}
                <div className="flex items-center gap-2">
                  <Link href="/auth" className={BUTTON_LOGIN_MOBILE_CLASSES}>
                    ورود
                  </Link>
                  <Link href="/auth" className={BUTTON_REGISTER_MOBILE_CLASSES}>
                    ثبت نام
                  </Link>
                </div>
              </div>
            </div>

            {/* Desktop: auth buttons + search trigger (panel centered below header) */}
            <div className="hidden lg:flex items-center gap-2 sm:gap-3 md:gap-4">
              <Link href="/auth" className={BUTTON_OUTLINE_DESKTOP_CLASSES}>
                ورود
              </Link>

              <Link href="/auth" className={BUTTON_SOLID_DESKTOP_CLASSES}>
                ثبت نام
              </Link>

              <button
                type="button"
                onClick={() => setIsSearchExpanded((v) => !v)}
                className="p-2 rounded-full hover:bg-gray-100 focus:bg-gray-100 focus:outline-none  text-[#0A2745] cursor-pointer"
                aria-label="جستجو"
                aria-expanded={isSearchExpanded}
              >
                <BsSearch className="text-xl" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* اخرین وضعیت سول  sticky small nav in center*/}
      {/* <>
        <LastUpdate />
      </> */}

      {/* Search panel - desktop and mobile */}
      <Search
        variant="desktop"
        isExpanded={isSearchExpanded}
        onClose={() => setIsSearchExpanded(false)}
      />

      {/* Mobile Drawer - always rendered for smooth animation */}
      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} title="">
        <div className="flex flex-col h-full " dir="rtl" id="mobile-drawer">
          {/* Logo Section */}
          <div className="px-6 py-4 border-b border-gray-200">
            <Link
              href="/"
              onClick={handleDrawerClose}
              className="flex items-center justify-center"
            >
              <Image
                src="/icons-brands/logo-sol.svg"
                alt="سول - نرم‌افزار رستورانی"
                width={120}
                height={34}
                priority
                className="w-28 h-auto"
              />
            </Link>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2" role="list">
              {PRODUCTS_MENU_ITEMS.map((item) => {
                const isOpen = activeItemId === item.label;
                const hasSubmenu = item.submenu && item.submenu.length > 0;
                const panelId = `mobile-submenu-${item.label}`;

                // Check if current pathname matches the menu item href or any of its submenu items
                const isCurrentPage = pathname === item.href;
                const hasActiveSubmenuItem = hasSubmenu
                  ? item.submenu!.some((sub) => {
                    // Check direct submenu items
                    if (pathname === sub.href) return true;
                    // Check nested submenu items if they exist
                    if (sub.submenu) {
                      return sub.submenu.some((nested) => pathname === nested.href);
                    }
                    return false;
                  })
                  : false;

                // Apply active styling if current page or has active submenu item
                const isPageActive = isCurrentPage || hasActiveSubmenuItem;

                return (
                  <li key={item.label} role="listitem">
                    {hasSubmenu ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleMobileToggleItem(item.label)}
                          className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors rounded-md text-base font-medium regular-fanum-font min-h-[48px] cursor-pointer ${isPageActive
                            ? "text-[#FF4C00] bg-gray-50"
                            : "text-[#0A2745] hover:text-[#FF4C00]"
                            }`}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                        >
                          <span>{item.label}</span>
                          <IoChevronDownOutline
                            className={`text-sm transition-transform ${isOpen ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                        {isOpen && (
                          <div
                            id={panelId}
                            className="mt-3 space-y-3 px-2"
                            aria-hidden={!isOpen}
                          >
                            {activePreviewSrc && (
                              <div className="w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-50 mb-3">
                                <Image
                                  src={activePreviewSrc}
                                  alt={activeSubmenu?.label || item.label}
                                  width={400}
                                  height={240}
                                  className="w-full h-auto object-contain"
                                />
                              </div>
                            )}
                            <ul className="space-y-1" role="list">
                              {item.submenu.map((sub) => {
                                const isSubmenuItemActive = pathname === sub.href;
                                return (
                                  <li key={sub.href} role="listitem">
                                    <Link
                                      href={sub.href}
                                      onClick={() => {
                                        handleMobileSubmenuClick(
                                          item.label,
                                          sub.label
                                        );
                                        handleDrawerClose();
                                      }}
                                      className={`block px-4 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors rounded-md text-sm ${isSubmenuItemActive
                                        ? "text-[#FF4C00] bg-gray-50 font-medium"
                                        : "text-gray-600 hover:text-gray-900"
                                        }`}
                                    >
                                      {sub.label}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={handleDrawerClose}
                        className={`flex px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors rounded-md text-base font-medium regular-fanum-font min-h-[48px] items-center ${isCurrentPage
                          ? "text-[#FF4C00] bg-gray-50"
                          : "text-[#0A2745] hover:text-[#FF4C00]"
                          }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}

              {/* Separator */}
              <li className="pt-4 pb-2 border-t border-gray-200">
                <span className="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  لینک‌های سریع
                </span>
              </li>

              {/* Topbar Items */}
              {TOPBAR_ITEMS.map((item) => {
                const hasSubmenu = item.submenu && item.submenu.length > 0;
                const isOpen = activeItemId === item.label;
                const panelId = `mobile-topbar-${item.label}`;

                // Check if current pathname matches the topbar item href or any of its submenu items
                const isCurrentPage = pathname === item.href;
                const hasActiveSubmenuItem = hasSubmenu
                  ? item.submenu!.some((sub) => pathname === sub.href)
                  : false;

                // Apply active styling if current page or has active submenu item
                const isPageActive = isCurrentPage || hasActiveSubmenuItem;

                return (
                  <li key={item.label} role="listitem">
                    {hasSubmenu ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleMobileToggleItem(item.label)}
                          className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors rounded-md text-base font-medium regular-fanum-font min-h-[48px] cursor-pointer ${isPageActive
                            ? "text-[#FF4C00] bg-gray-50"
                            : "text-[#0A2745] hover:text-[#FF4C00]"
                            }`}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                        >
                          <span>{item.label}</span>
                          <IoChevronDownOutline
                            className={`text-sm transition-transform ${isOpen ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                        {isOpen && (
                          <div
                            id={panelId}
                            className="mt-3 space-y-3 px-2"
                            aria-hidden={!isOpen}
                          >
                            <ul className="space-y-1" role="list">
                              {item.submenu!.map((sub) => {
                                const isSubmenuItemActive = pathname === sub.href;
                                return (
                                  <li key={sub.href} role="listitem">
                                    <Link
                                      href={sub.href}
                                      onClick={handleDrawerClose}
                                      className={`block px-4 py-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors rounded-md text-sm ${isSubmenuItemActive
                                        ? "text-[#FF4C00] bg-gray-50 font-medium"
                                        : "text-gray-600 hover:text-gray-900"
                                        }`}
                                    >
                                      {sub.label}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={handleDrawerClose}
                        className={`flex px-4 py-3 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors rounded-md text-base font-medium regular-fanum-font min-h-[48px] items-center ${isCurrentPage
                          ? "text-[#FF4C00] bg-gray-50"
                          : "text-[#0A2745] hover:text-[#FF4C00]"
                          }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
