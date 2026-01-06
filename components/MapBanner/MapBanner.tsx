import React from "react";
import Image from "next/image";
import Container from "../ui/container";
import { IoIosArrowBack } from "react-icons/io";
// Pre-computed className constants (outside component - zero runtime cost)
const SECTION_CLASSES = "w-full bg-[#FFF6F2] md:mt-44 mt-20";

const CONTAINER_CLASSES = "py-12 sm:py-16 md:py-20 lg:py-20 ";

const CONTENT_GRID_CLASSES =
  "flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 md:gap-12 lg:gap-10 xl:gap-20";

const TEXT_COLUMN_CLASSES =
  "flex flex-col space-y-4 sm:space-y-5 md:space-y-6 w-full lg:w-1/2";

const MAP_COLUMN_CLASSES = "flex items-center justify-center w-full lg:w-1/2";

const HEADING_CLASSES =
  "extrabold-fanum-font text-[#0A2745] text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl ";

const PARAGRAPH_CLASSES =
  "fanum-font text-[#0A2745] text-sm sm:text-base 2xl:text-xl leading-relaxed max-w-2xl lg:mt-4 tracking-wide";

const BUTTON_CONTAINER_CLASSES =
  "pt-2 sm:pt-3 md:pt-4 text-end px-2 sm:px-8 xl:px-20";

// Pre-computed button classes (static - zero runtime cost)
// Using inline style for hex color to avoid Button component's runtime overhead
const BUTTON_BASE_CLASSES =
  "mt-12 inline-flex bg-[#FF4C00] cursor-pointer items-center justify-center px-6 sm:px-8 md:px-10 py-2 text-sm sm:text-base md:text-lg font-extrabold rounded-[50px] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C00] focus-visible:ring-offset-2 transition-all duration-200 hover:opacity-80 w-fit gap-2 sm:gap-3 ";

const MAP_IMAGE_CLASSES = "w-full h-auto xl:pt-0 pt-12";

// Server Component (no client-side JS overhead)
// Optimized: static className constants, simplified structure, no runtime computation
const MapBanner: React.FC = () => {
  return (
    <section dir="rtl" className={SECTION_CLASSES}>
      <Container className={CONTAINER_CLASSES}>
        <div className={CONTENT_GRID_CLASSES}>
          {/* Map Image Column */}
          <div className={MAP_COLUMN_CLASSES}>
            <Image
              src="/Banner/map.svg"
              alt="نقشه ایران با نشانگرهای موقعیت رستوران‌های سول"
              width={800}
              height={600}
              className={MAP_IMAGE_CLASSES}
              loading="lazy"
            />
          </div>

          {/* Text Content Column */}
          <div className={TEXT_COLUMN_CLASSES}>
            {/* Small Title */}
            <h2 className={HEADING_CLASSES}>سول؛</h2>

            {/* Main Heading */}
            <h2 className={HEADING_CLASSES}>انتخاب رستوران‌های سراسر ایران</h2>

            {/* Paragraph 1 */}
            <p className={PARAGRAPH_CLASSES}>
              از رستوران‌های کوچک محلی تا شعبات بزرگ، سول به‌عنوان کامل‌ترین
              نرم‌افزار مدیریت رستوران انتخاب شده است.
            </p>

            {/* Paragraph 2 */}
            <p className={PARAGRAPH_CLASSES}>
              با قابلیت‌هایی مانند مدیریت سفارش‌ها، حسابداری دقیق، گزارش‌گیری
              پیشرفته و اتصال به دستگاه‌های کارتخوان، سول تجربه‌ای روان، سریع و
              بدون خطا را برای مدیران رستوران فراهم می‌کند.
            </p>

            {/* CTA Button - Static button to avoid Button component's runtime overhead */}
            <div className={BUTTON_CONTAINER_CLASSES}>
              <button
                type="button"
                className={BUTTON_BASE_CLASSES}
                aria-label="درخواست دمو رایگان"
              >
                <span>دمو رایگان</span>
                <IoIosArrowBack className="text-white text-sm sm:text-xl" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MapBanner;
