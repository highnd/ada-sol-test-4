"use client";

import { useEffect } from "react";

/**
 * Hook for intelligent image preloading
 * Preloads images to reduce perceived loading time
 * @param imageSrc - Source path of the image to preload
 */
export const useImagePreload = (imageSrc: string) => {
  useEffect(() => {
    if (!imageSrc) return;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = imageSrc;
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [imageSrc]);
};
