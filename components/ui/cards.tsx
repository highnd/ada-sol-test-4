import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PlanCardProps {
  planName: string;
  description: string;
  features?: string; // Optional: Add features if needed
  priceInquiryText: string;
  highlightColor?: string;
  selected: boolean; // Optional: Allow customizing the highlight color
}

export const PlanCard: React.FC<PlanCardProps> = ({
  planName,
  description,
  features,
  priceInquiryText,
  selected,
}) => {
  return (
    <div
      className={`xl:w-1/4 sm:w-72 h-auto relative bg-white rounded-4xl xl:p-8 p-4  transition-all duration-100 cursor-pointer border-2 border-[#FF4C00] ${selected ? " scale-105 shadow-[0_10px_0_0_#FF4C00]" : "scale-90"
        }`}
    >
      {selected && (
        <div className=" absolute -top-5 right-12 py-2 px-4  text-center rounded-full text-[#FF4C00] text-lg bg-white border-2 border-[#FF4C00]">
          محبوب ترین
        </div>
      )}
      <p
        className={`w-full h-16 text-secondary rounded-xl flex items-center justify-center extrabold-fanum-font xl:text-3xl `}
      >
        {planName}
      </p>
      <h3 className="text-secondary text-xs lg:text-sm  2xl:text-xl  bold-fanum-font text-center">
        {description}
      </h3>

      {features && (
        <p className="text-secondary fanum-font my-8 text-xs lg:text-sm  2xl:text-lg text-center">
          {features}
        </p>
      )}

      <button className="w-full h-auto py-3 bg-[#FF4C00] text-white fanum-font rounded-full cursor-pointer hover:bg-[#E64500] text-lg">
        {priceInquiryText}
      </button>
    </div>
  );
};

interface SoftwareCardProps {
  title: string;
  description: string;
  imageSrc: string;
  features?: string[];
  ctaText?: string;
  featured?: boolean;
}

export const SoftwareCard: React.FC<SoftwareCardProps> = ({
  title,
  description,
  imageSrc,
  features = [],
  ctaText = "مشاهده جزئیات",
  featured = false,
}) => {
  return (
    <div
      dir="rtl"
      className={`group relative flex flex-col cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-200 hover:-translate-y-1
      ${featured ? "ring-2 ring-[#FF4C00]" : ""}`}
    >
      {/* تصویر نرم‌افزار */}
      <div className="relative h-40 w-full overflow-hidden bg-gray-100">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-115 scale-110"
        />

        {featured && (
          <span className="absolute right-4 top-4 rounded-full bg-[#FF4C00] px-3 py-1 text-xs font-bold text-white">
            پیشنهاد ویژه
          </span>
        )}
      </div>

      {/* محتوا */}
      <div className="flex flex-1 flex-col p-5 text-right">
        <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>

        <p className="mb-4 line-clamp-2 text-sm text-gray-600">{description}</p>

        {/* قابلیت‌ها */}
        {/* {features.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2 justify-start">
            {features.slice(0, 4).map((feature, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
              >
                {feature}
              </span>
            ))}
          </div>
        )} */}

        {/* دکمه */}
        <button className="mt-auto rounded-xl bg-[#FF4C00] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer">
          {ctaText}
        </button>
      </div>
    </div>
  );
};

interface ValueCardProps {
  title: string;
  description: string;
  img?: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({
  title,
  description,
  img,
}) => {
  return (
    <div
      dir="rtl"
      className="flex flex-col w-auto h-72 items-start gap-4 bg-white rounded-3xl shadow-md p-6 text-right"
    >
      {/* Gray Circle */}
      <div className="w-14 h-14 bg-gray-300 rounded-full shrink-0"></div>

      {/* Text Content */}

      <h3 className="text-lg extrabold-fanum-font text-secondary mb-1">
        {title}
      </h3>
      <p className="2xl:text-lg text-sm regular-fanum-font text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
};

type BulletItem = {
  icon: React.ReactNode;
  text: string;
};

type FeatureCardProps = {
  title: string;
  bullets: BulletItem[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean; // image left or right
  customHeight?: string; // Optional custom height class (e.g., "xl:h-[70vh]")
};

export function FeatureCard({
  title,
  bullets,
  imageSrc,
  imageAlt,
  reverse = false,
  customHeight,
}: FeatureCardProps) {
  const heightClass = customHeight || "xl:h-[60vh]";
  // Use 2 columns only if there are 8 or more bullets
  const useTwoColumns = bullets.length >= 12;
  const gridColsClass = useTwoColumns
    ? "grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-1.5 lg:gap-x-4 lg:gap-y-2"
    : "space-y-1.5 lg:space-y-2";

  return (
    <article
      className={`w-full ${heightClass} h-auto min-h-[400px] md:min-h-[500px]  lg:min-h-0 flex flex-col lg:flex-row md:mt-44 mt-20 bg-white overflow-hidden`}
    >
      {/* IMAGE */}
      <div
        className={`relative w-full lg:w-1/2   h-64 md:h-80 lg:h-auto  ${reverse ? "order-1 lg:order-2 pr-12" : " pl-12"
          }`}
      >
        {/* <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain object-center"
        /> */}

        <div className={`w-full h-full border-5 border-[#0A2745] rounded-4xl bg-gray-200  ${reverse ? " -translate-x-[30px]" : "translate-x-[30px]"}`}>

        </div>
      </div>

      {/* TEXT */}
      <div
        className={`w-full lg:w-1/2  lg:py-0 py-6 xl:px-20 px-6 flex flex-col text-right ${reverse ? "order-2 lg:order-1" : ""
          }`}
      >
        <h3 className="font-extrabold max-w-xl text-[#0A2745] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight mb-3 sm:mb-4 md:mb-6 lg:mb-10">
          {title}
        </h3>

        <ul
          className={`text-[#1F2A3D] text-xs sm:text-xs xl:text-sm 2xl:text-[16px] bold-fanum-font leading-relaxed ${gridColsClass}`}
        >
          {bullets.map((b, idx) => (
            <li className="flex items-start  gap-1.5 sm:gap-2" key={idx}>
              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF4C00] shrink-0 ">
                {b.icon}
              </span>
              <span className="flex-1">{b.text}</span>
            </li>
          ))}

        </ul>
        <Link
          href="/demo"
          className="w-fit px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 bg-[#FF4C00] mt-4 sm:mt-5 md:mt-6 mb-2 sm:mb-3 md:mb-4 lg:mb-0 text-white bold-fanum-font rounded-full cursor-pointer hover:bg-[#E64500] text-sm sm:text-base lg:text-lg"
        >
          درخواست دمو رایگان
        </Link>
      </div>
    </article>
  );
}
