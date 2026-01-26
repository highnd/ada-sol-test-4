import React from "react";
import Container from "../ui/container";
import BusinessCard from "./BusinessCard";

// Typed model for each business category item
export type BusinessCategory = {
  id: number;
  title: string;
  imageSrc: string;
  href: string;
  arrowPosition: "top" | "bottom";
  layout?: "image-top" | "text-top"; // ترتیب: عکس بالا یا متن بالا
};

// NOTE: update imageSrc paths to match actual assets in /public
// ترتیب از چپ به راست: ردیف بالا (1-6) سپس ردیف پایین (7-12)
// Layout ستونی: ستون 1,3,5 = image-top | ستون 2,4,6 = text-top
const BUSINESS_CATEGORIES: readonly BusinessCategory[] = [
  // ردیف بالا - از چپ به راست
  // ستون 1: image-top (عکس بالا، متن پایین)
  {
    id: 1,
    title: "کافه رستوران",
    imageSrc: "/Business/cofe-restoran.svg",
    href: "/businesses/cafe-restaurant",
    arrowPosition: "top",
    // layout: image-top (پیش‌فرض)
  },
  // ستون 2: text-top (متن بالا، عکس پایین)
  {
    id: 2,
    title: "کافی‌شاپ",
    imageSrc: "/Business/cofeeshop.svg",
    href: "/businesses/coffee-shop",
    arrowPosition: "bottom",
    layout: "text-top",
  },
  // ستون 3: image-top
  {
    id: 3,
    title: "کترینگ",
    imageSrc: "/Business/ketring.svg",
    href: "/businesses/catering",
    arrowPosition: "top",
    // layout: image-top (پیش‌فرض)
  },
  // ستون 4: text-top
  {
    id: 4,
    title: "فودکورت",
    imageSrc: "/Business/foodcort.svg",
    href: "/businesses/food-court",
    arrowPosition: "bottom",
    layout: "text-top",
  },
  // ستون 5: image-top
  {
    id: 5,
    title: "فست فود",
    imageSrc: "/Business/fastfood.svg",
    href: "/businesses/fast-food",
    arrowPosition: "top",
    // layout: image-top (پیش‌فرض)
  },
  // ستون 6: text-top
  {
    id: 6,
    title: "کافه سنتی",
    imageSrc: "/Business/cofe-sonati.svg",
    href: "/businesses/traditional-cafe",
    arrowPosition: "bottom",
    layout: "text-top",
  },
  // ردیف پایین - از چپ به راست
  // ستون 1: image-top (همان layout ستون 1)
  {
    id: 7,
    title: "ساندویچی",
    imageSrc: "/Business/sandwich.svg",
    href: "/businesses/sandwich",
    arrowPosition: "top",
    // layout: image-top (پیش‌فرض)
  },
  // ستون 2: text-top (همان layout ستون 2)
  {
    id: 8,
    title: "آش و حلیم فروشی",
    imageSrc: "/Business/ash-halim.svg",
    href: "/businesses/ash-halimp",
    arrowPosition: "bottom",
    layout: "text-top",
  },
  // ستون 3: image-top
  {
    id: 9,
    title: "غذای خانگی / قنادی",
    imageSrc: "/Business/ghanadi.svg",
    href: "/businesses/home-food",
    arrowPosition: "top",
    // layout: image-top (پیش‌فرض)
  },
  // ستون 4: text-top
  {
    id: 10,
    title: "طباخی و کله پزی",
    imageSrc: "/Business/tabakhi-kalepazi.svg",
    href: "/businesses/tabakhi",
    arrowPosition: "bottom",
    layout: "text-top",
  },
  // ستون 5: image-top
  {
    id: 11,
    title: "آبمیوه و بستنی فروشی",
    imageSrc: "/Business/abmive-bastani.svg",
    href: "/businesses/juice-icecream",
    arrowPosition: "top",
    // layout: image-top (پیش‌فرض)
  },
  // ستون 6: text-top
  {
    id: 12,
    title: "کبابی و چلوکبابی",
    imageSrc: "/Business/kababi-jegaraki.svg",
    href: "/businesses/kabab",
    arrowPosition: "bottom",
    layout: "text-top",
  },
];

const Businesses: React.FC = () => {
  return (
    <section dir="rtl" className="w-full bg-white">
      <Container className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        {/* Header */}
        <header className="mx-auto mb-12 sm:mb-16 lg:mb-28 max-w-2xl text-center xl:min-w-4xl ">
          <h2 className="extrabold-fanum-font text-xl md:text-2xl lg:text-4xl 2xl:text-5xl text-[#0A2745] mb-6">
            سول؛ سازگار با انواع کسب و کار
          </h2>
          <p className="bold-fanum-font text-xs sm:text-sm md:text-lg leading-relaxed text-[#1F3B57CC] ">
            نرم‌افزار مدیریت رستوران سول برای انواع رستوران‌ها، فودکورت‌ها،
            کافی‌شاپ‌ها و فست‌فودها طراحی شده است. با قابلیت مدیریت یکپارچه شعب،
            امکان کنترل لحظه‌ای همه امور مهم کسب‌وکار را بدون محدودیت فراهم
            می‌کند.
          </p>
        </header>

        {/* Businesses grid - LTR برای نمایش از چپ به راست */}
        <ul
          role="list"
          dir="ltr"
          className="mx-auto grid  grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-14 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
        >
          {BUSINESS_CATEGORIES.map((category) => (
            <BusinessCard key={category.id} category={category} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Businesses;
