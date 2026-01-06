"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import { IoClose } from "react-icons/io5";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Drawer = ({ isOpen, onClose, children, title = "منو" }: DrawerProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Memoized close handler to prevent unnecessary re-renders
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Set initial transform state to ensure smooth animation
  useEffect(() => {
    if (drawerRef.current) {
      // Force initial closed state
      drawerRef.current.style.transform = "translateX(100%)";
    }
  }, []);

  // Focus close button when drawer opens
  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure drawer is visible
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, handleClose]);

  // Focus trap: keep focus within drawer
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;

    const drawer = drawerRef.current;
    const focusableElements = drawer.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    drawer.addEventListener("keydown", handleTabKey);
    return () => drawer.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  // Memoize backdrop click handler
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );

  // Don't render drawer on large screens at all
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      // Close drawer if resizing to desktop
      if (!mobile && isOpen) {
        onClose();
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [isOpen, onClose]);

  // Don't render on large screens
  if (!isMobile) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ease-out ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-white shadow-2xl z-50 lg:hidden transition-transform duration-300 ease-out will-change-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        aria-hidden={!isOpen}
        dir="rtl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 h-[60px]">
          {title ? (
            <h2
              id="drawer-title"
              className="text-xl font-bold text-[#0A2745] regular-fanum-font"
            >
              {title}
            </h2>
          ) : (
            <div id="drawer-title" className="sr-only">
              منو
            </div>
          )}
          <button
            ref={closeButtonRef}
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF4C00] focus:ring-offset-2 transition-colors text-[#0A2745] cursor-pointer"
            aria-label="بستن منو"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        {/* Content */}
        <div className="h-[calc(100%-60px)] overflow-y-auto">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
