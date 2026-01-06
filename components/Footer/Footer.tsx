"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/container";
import {
  FaWhatsapp,
  FaInstagram,
  FaPlayCircle,
  FaPhone,
  FaEnvelope,
  FaMapPin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiAparat } from "react-icons/si";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandLinkedin, TbBrandTelegram } from "react-icons/tb";

import {
  SOCIAL_MEDIA,
  PRODUCTS,
  RESOURCES,
  CONTACT_LINKS,
  CONTACT_INFO,
  TRUST_BADGES,
} from "@/data/footerData";
import { toPersianDigits } from "@/utils/numberUtils";

const FOOTER_CLASSES = "w-full bg-[#FFF6F2] py-8 sm:py-12  ";

// Outer grid: right brand/social column (۱/۳) + left wrapper (۲/۳)
const GRID_CLASSES =
  "grid grid-cols-1 xl:grid-cols-[1.1fr_2fr] gap-8 lg:gap-12 items-start";

const COLUMN_CLASSES = "flex flex-col gap-3";

const LOGO_CLASSES = "w-24 h-auto mb-4 sm:mb-6";

const SOCIAL_ICONS_CONTAINER_CLASSES = "flex items-center gap-3 sm:gap-4 my-6 ";

const SOCIAL_ICON_CLASSES =
  "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF4C00] text-white flex items-center justify-center hover:bg-[#FF4C00]/80 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2";

const TRUST_BADGES_CONTAINER_CLASSES = "flex items-center gap-3 sm:gap-4 ";

const TRUST_BADGE_CARD_CLASSES =
  "bg-white rounded-lg p-2  shadow-sm hover:shadow-md transition-shadow duration-200";

const TRUST_BADGE_IMAGE_CLASSES = "w-16 h-16  object-cover";

const COLUMN_TITLE_CLASSES =
  "extrabold-fanum-font text-[#0A2745] text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6";

const LINK_LIST_CLASSES = "flex flex-col gap-2 sm:gap-3 lg:gap-4";

const LINK_ITEM_CLASSES =
  "text-[#595B5C] regular-fanum-font text-sm md:text-base lg:text-lg hover:text-[#FF4C00] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2";

const CONTACT_INFO_CLASSES =
  "text-[#0A2745] regular-fanum-font text-xs md:text-sm lg:text-base leading-relaxed mt-4 sm:mt-6 not-italic";

const CONTACT_ITEM_WRAPPER_CLASSES =
  "flex items-center gap-2 md:gap-3 group mt-2 md:mt-3";

const CONTACT_ITEM_WRAPPER_ADDRESS_CLASSES =
  "flex items-start gap-2 md:gap-3 group mt-2 md:mt-3";

const CONTACT_ICON_CLASSES =
  "text-[#FF4C00] text-lg md:text-xl lg:text-2xl shrink-0 group-hover:scale-110 transition-transform duration-200";

const CONTACT_ICON_ADDRESS_CLASSES =
  "text-[#FF4C00] text-lg md:text-xl lg:text-2xl shrink-0 group-hover:scale-110 transition-transform duration-200 mt-0.5";

const CONTACT_INNER_FLEX_CLASSES =
  "flex flex-col sm:flex-row sm:items-center items-start gap-1 sm:gap-2 flex-1";

const CONTACT_INNER_FLEX_ADDRESS_CLASSES =
  "flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 flex-1";

const CONTACT_LABEL_CLASSES =
  "text-[#595B5C] bold-fanum-font text-xs md:text-sm lg:text-base";

const CONTACT_PHONE_LINK_CLASSES =
  "text-[#0A2745] bold-fanum-font text-sm md:text-base lg:text-lg xl:text-xl hover:text-[#FF4C00] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 whitespace-nowrap";

const CONTACT_EMAIL_LINK_CLASSES =
  "text-[#0A2745] bold-fanum-font text-xs md:text-sm lg:text-base hover:text-[#FF4C00] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2";

const CONTACT_POSTAL_CODE_CLASSES =
  "text-[#0A2745] bold-fanum-font text-xs md:text-sm lg:text-base";

const CONTACT_ADDRESS_TEXT_CLASSES =
  "text-[#0A2745] regular-fanum-font text-xs md:text-sm lg:text-base leading-relaxed";

const CONTACT_LABEL_ADDRESS_CLASSES =
  "text-[#595B5C] bold-fanum-font text-xs md:text-sm lg:text-base shrink-0";

const COPYRIGHT_BAR_CLASSES =
  "text-right text-[#0A2745] regular-fanum-font text-xs sm:text-sm mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-[#FF4C00]/20";

const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "FaWhatsapp":
      return FaWhatsapp;
    case "TbBrandTelegram ":
      return TbBrandTelegram;
    case "FaInstagram":
      return FaInstagram;
    case "TbBrandLinkedin":
      return TbBrandLinkedin;
    case "AiOutlineYoutube":
      return AiOutlineYoutube;
    case "SiAparat":
      return SiAparat;
    default:
      return FaPlayCircle;
  }
};

const Footer: React.FC = () => {
  return (
    <footer dir="rtl" className={FOOTER_CLASSES}>
      <Container>
        <div className={GRID_CLASSES}>
          {/* Right Column: Brand & Social (۱/۳ عرض) */}
          <div className={COLUMN_CLASSES}>
            <Link href="/" className="inline-block">
              <Image
                src="/icons-brands/logo-sol.svg"
                alt="سول - نرم‌افزار رستورانی"
                width={120}
                height={40}
                className={LOGO_CLASSES}
                priority
              />
            </Link>
            <>
              <p className="regular-fanum-font text-sm sm:text-base md:text-xl text-[#0A2745] leading-relaxed">
                برای اطلاع از تخفیف‌ها و جدیدترین خبرها
              </p>
              <p className="extrabold-fanum-font text-sm sm:text-base md:text-3xl text-[#0A2745] leading-relaxed">
                سول را در شبکه‌های اجتماعی دنبال کنید...
              </p>
            </>

            <div className={SOCIAL_ICONS_CONTAINER_CLASSES}>
              {SOCIAL_MEDIA.map((social) => {
                const IconComponent = getSocialIcon(social.icon);
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={SOCIAL_ICON_CLASSES}
                    aria-label={social.ariaLabel}
                  >
                    <IconComponent className="text-lg sm:text-3xl" />
                  </a>
                );
              })}
            </div>

            <div className={TRUST_BADGES_CONTAINER_CLASSES}>
              {TRUST_BADGES.map((badge) => (
                <a
                  key={badge.name}
                  href={badge.href}
                  target={badge.href !== "#" ? "_blank" : undefined}
                  rel={badge.href !== "#" ? "noopener noreferrer" : undefined}
                  className={TRUST_BADGE_CARD_CLASSES}
                  aria-label={badge.alt}
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    width={80}
                    height={80}
                    className={TRUST_BADGE_IMAGE_CLASSES}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Left Wrapper: محصولات، منابع، پل‌های ارتباطی (۲/۳ عرض) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Products Column */}
            <nav className={COLUMN_CLASSES} aria-label="محصولات سول">
              <h3 className={COLUMN_TITLE_CLASSES}>محصولات سول</h3>
              <ul className={LINK_LIST_CLASSES}>
                {PRODUCTS.map((product) => (
                  <li key={product.label}>
                    <Link href={product.href} className={LINK_ITEM_CLASSES}>
                      {product.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Resources Column */}
            <nav className={COLUMN_CLASSES} aria-label="منابع">
              <h3 className={COLUMN_TITLE_CLASSES}>منابع</h3>
              <ul className={LINK_LIST_CLASSES}>
                {RESOURCES.map((resource) => (
                  <li key={resource.label}>
                    <Link href={resource.href} className={LINK_ITEM_CLASSES}>
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Column */}
            <div className={COLUMN_CLASSES}>
              <h3 className={COLUMN_TITLE_CLASSES}>پل‌های ارتباطی</h3>
              <nav aria-label="لینک‌های ارتباطی">
                <ul className={LINK_LIST_CLASSES}>
                  {CONTACT_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={LINK_ITEM_CLASSES}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <address className={CONTACT_INFO_CLASSES} dir="rtl">
                {/* Phone Number */}
                <div className="-mt-4">
                  <div className={CONTACT_ITEM_WRAPPER_CLASSES}>
                    <FaPhone className={CONTACT_ICON_CLASSES} />
                    <div className={CONTACT_INNER_FLEX_CLASSES}>
                      <span className={CONTACT_LABEL_CLASSES}>شماره تماس:</span>
                      <a
                        href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                        className={CONTACT_PHONE_LINK_CLASSES}
                        dir="ltr"
                        aria-label={`تماس با شماره ${toPersianDigits(
                          CONTACT_INFO.phone
                        )}`}
                      >
                        {toPersianDigits(CONTACT_INFO.phone)}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className={CONTACT_ITEM_WRAPPER_CLASSES}>
                  <FaEnvelope className={CONTACT_ICON_CLASSES} />
                  <div className={CONTACT_INNER_FLEX_CLASSES}>
                    <span className={CONTACT_LABEL_CLASSES}>ایمیل:</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className={CONTACT_EMAIL_LINK_CLASSES}
                      dir="ltr"
                      aria-label={`ارسال ایمیل به ${CONTACT_INFO.email}`}
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Postal Code */}
                <div className={CONTACT_ITEM_WRAPPER_CLASSES}>
                  <FaMapPin className={CONTACT_ICON_CLASSES} />
                  <div className={CONTACT_INNER_FLEX_CLASSES}>
                    <span className={CONTACT_LABEL_CLASSES}>کدپستی:</span>
                    <span className={CONTACT_POSTAL_CODE_CLASSES}>
                      {toPersianDigits(CONTACT_INFO.postalCode)}
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className={CONTACT_ITEM_WRAPPER_ADDRESS_CLASSES}>
                  <FaMapMarkerAlt className={CONTACT_ICON_ADDRESS_CLASSES} />
                  <div className={CONTACT_INNER_FLEX_ADDRESS_CLASSES}>
                    <span className={CONTACT_LABEL_ADDRESS_CLASSES}>آدرس:</span>
                    <a
                      href="https://maps.app.goo.gl/gzNUGj7oUXB5ewUe8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${CONTACT_ADDRESS_TEXT_CLASSES} hover:text-[#FF4C00] transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2`}
                      aria-label="مشاهده موقعیت روی نقشه گوگل"
                    >
                      {CONTACT_INFO.address}
                    </a>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className={COPYRIGHT_BAR_CLASSES}>
          <p>
            تمامی حقوق مادی و معنوی این وبسایت متعلق به شرکت نرم افزاری آدا
            می‌باشد.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
