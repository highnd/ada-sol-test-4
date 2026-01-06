"use client";

import { ReactNode, useMemo } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "solid" | "outline";
  color?: string; // e.g. "#FF4C00" or "blue-500"
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  [key: string]: any;
}

export const Button = ({
  children,
  variant = "solid",
  color = "blue-500",
  className,
  href,
  disabled,
  type = "button",
  ...props
}: ButtonProps) => {
  // Memoize the hex check to ensure consistency
  const isHex = useMemo(
    () =>
      typeof color === "string" &&
      /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(color.trim()),
    [color]
  );

  // Base Tailwind classes (static → safe)
  const baseClasses = [
    "inline-flex items-center justify-center",
    "px-6 py-2",
    "text-base font-medium",
    "rounded-[50px]",
    "transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    disabled
      ? "opacity-50 pointer-events-none cursor-not-allowed"
      : "cursor-pointer",
  ]
    .filter(Boolean)
    .join(" ");

  // Tailwind-only classes (non-hex colors)
  const tailwindClasses = [
    !isHex && variant === "solid" ? `bg-${color}` : "",
    !isHex && variant === "solid" ? "text-white" : "",
    !isHex && variant === "solid"
      ? `hover:bg-${color.replace(/\d+$/, (n) => String(+n + 100))}`
      : "",
    !isHex && variant === "solid" ? `focus-visible:ring-${color}` : "",
    !isHex && variant === "outline" ? "bg-transparent" : "",
    !isHex && variant === "outline" ? "border-2" : "",
    !isHex && variant === "outline" ? `border-${color}` : "",
    !isHex && variant === "outline" ? `text-${color}` : "",
    !isHex && variant === "outline" ? `hover:bg-${color}/10` : "",
    !isHex && variant === "outline" ? `focus-visible:ring-${color}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  // Helper function to darken hex color for hover
  const darkenHex = (hex: string, percent: number): string => {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, Math.min(255, (num >> 16) + amt));
    const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amt));
    const B = Math.max(0, Math.min(255, (num & 0x0000ff) + amt));
    return `#${((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1)}`;
  };

  // Helper function to convert hex to rgba
  const hexToRgba = (hex: string, alpha: number): string => {
    const num = parseInt(hex.replace("#", ""), 16);
    const R = (num >> 16) & 255;
    const G = (num >> 8) & 255;
    const B = num & 255;
    return `rgba(${R}, ${G}, ${B}, ${alpha})`;
  };

  // Memoize inline styles to ensure consistency between server and client
  // Use CSS custom properties to avoid hydration mismatches
  const style = useMemo(() => {
    if (isHex && variant === "solid") {
      const hoverColor = darkenHex(color, -15); // Darken by 15% on hover
      return {
        "--button-bg": color,
        "--button-hover-bg": hoverColor,
        "--button-text": "#ffffff",
        backgroundColor: "var(--button-bg)",
        color: "var(--button-text)",
      } as React.CSSProperties & {
        "--button-bg"?: string;
        "--button-hover-bg"?: string;
        "--button-text"?: string;
      };
    }
    if (isHex && variant === "outline") {
      return {
        "--button-color": color,
        "--button-border": color,
        "--button-hover-bg": hexToRgba(color, 0.1), // 10% opacity for hover background
        color: "var(--button-color)",
        borderColor: "var(--button-border)",
        backgroundColor: "transparent",
        borderWidth: "2px",
        borderStyle: "solid",
      } as React.CSSProperties & {
        "--button-color"?: string;
        "--button-border"?: string;
        "--button-hover-bg"?: string;
      };
    }
    return undefined;
  }, [isHex, variant, color]);

  const classes = [
    baseClasses,
    variant === "outline" ? "border-2" : "",
    tailwindClasses,
    isHex ? "button-hex-hover" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        style={style}
        suppressHydrationWarning
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      style={style}
      disabled={disabled}
      suppressHydrationWarning
      {...props}
    >
      {children}
    </button>
  );
};

interface AnimatedBorderButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  wrapperClassName?: string;
  buttonClassName?: string;
  textColor?: string;
  bgColor?: string;
  [key: string]: any;
}

export function AnimatedBorderButton({
  children,
  onClick,
  href,
  type = "button",
  disabled = false,
  className = "",
  wrapperClassName = "",
  buttonClassName = "",
  textColor = "text-black",
  bgColor = "bg-white",
  ...props
}: AnimatedBorderButtonProps) {
  const wrapperClasses = [
    "rainbow",
    "w-fit h-fit",
    "relative z-0",
    "bg-white/15",
    "overflow-hidden",
    "p-[3px]",
    "flex items-center justify-center",
    "rounded-full",
    "hover:scale-105",
    "transition duration-300",
    "active:scale-100",
    disabled ? "opacity-50 pointer-events-none" : "",
    wrapperClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const buttonClasses = [
    "px-8 text-sm py-3",
    textColor,
    "rounded-full",
    "font-medium",
    bgColor,
    "backdrop-blur",
    "w-full",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    disabled ? "cursor-not-allowed" : "cursor-pointer",
    buttonClassName,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={wrapperClasses} {...props}>
        <button
          type={type}
          className={buttonClasses}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <div className={wrapperClasses}>
      <button
        type={type}
        className={buttonClasses}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

export const AnimatedtextHoverButton = () => {
  return (
    <div>
      <button className="group px-8 py-2.5 bg-[#ff4c00] rounded-lg text-white cursor-pointer active:scale-95 transition duration-300 ">
        <p className="relative h-6 overflow-hidden">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            Hover Me
          </span>
          <span className="absolute w-full top-full left-1/2 -translate-x-1/2 block transition-transform duration-300 group-hover:translate-y-[-100%]">
            hello
          </span>
        </p>
      </button>
    </div>
  );
};
