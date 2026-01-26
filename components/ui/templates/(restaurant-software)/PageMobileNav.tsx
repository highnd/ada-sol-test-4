"use client"
import React, { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type PageMobileNavProps = {
  navigationItems: NavItem[];
};

const PageMobileNav: React.FC<PageMobileNavProps> = ({ navigationItems }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);

  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      setNavOpen(false);

      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset + 70;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#FFF6F2] lg:p-4 md:p-2 p-8 transition-height duration-300 flex flex-col-reverse md:flex-row-reverse md:items-center items-start justify-around rounded-[50px] lg:-mt-32 gap-4 ${navOpen ? "max-h-screen pt-16 pb-4 flex-col-reverse" : "max-h-96"
        }`}
    >
      {/* hamburger icon */}
      <button
        className="absolute right-4 top-3 md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-[#FFF6F2] cursor-pointer transition-colors"
        aria-label="منوی ناوبری"
        onClick={toggleNav}
      >
        <svg
          className="w-6 h-6 text-[#0A2745]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              navOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>

      {navigationItems.map((item) => (
        <button
          key={item.href}
          className={`text-[#0A2745] bold-fanum-font text-sm sm:text-xs md:text-[9px] xl:text-lg hover:text-[#FF4C00] cursor-pointer transition-colors duration-200 ${navOpen ? "flex" : "md:flex hidden"
            }`}
          onClick={() => handleScroll(item.href)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default PageMobileNav;
