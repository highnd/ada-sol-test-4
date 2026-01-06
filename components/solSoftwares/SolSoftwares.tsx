import React from "react";
import Image from "next/image";
import Container from "../ui/container";
import { FaArrowLeft } from "react-icons/fa6";
type SolSoftwareFeature = {
  id: number;
  label: string;
};

const FEATURES: SolSoftwareFeature[] = [
  { id: 1, label: "نرم افزار اتوماسیون تغذیه سول" },
  { id: 2, label: "نرم افزار اتوماسیون تغذیه سلف و غذاخوری" },
  {
    id: 3,
    label: "نرم افزار اتوماسیون تغذیه کارخانجات و  شرکت های بزرگ",
  },
  {
    id: 4,
    label: "نرم افزار اتوماسیون تغذیه سازمانی (دولتی و خصوصی)",
  },
  { id: 5, label: "نرم افزار اتوماسیون تغذیه دانشگاه و مراکز عالی" },
  { id: 6, label: "نرم افزار اتوماسیون تغذیه بیمارستان و مراکز خدماتی" },
  {
    id: 7,
    label: "نرم افزار اتوماسیون تغذیه مجموعه های خدماتی و پیمانکاری",
  },
  { id: 8, label: "نرم افزار اتوماسیون تغذیه سازمان های نظامی" },
  { id: 9, label: "نرم افزار اتوماسیون تغذیه شرکت های خدمات تهیه غذا" },
];

const SolSoftwares = () => {
  return (
    <section dir="rtl" className="py-20">
      <Container className="bg-[#FFF6F2] ">
        <div className="mx-auto  flex flex-col-reverse lg:flex-row items-stretch xl:min-h-[520px] pt-10">
          <div className="w-full lg:w-1/2 text-right">
            <div className="mt-8 lg:mt-0 space-y-4 lg:space-y-5">
              <h2 className="extrabold-fanum-font text-xl sm:text-2xl lg:text-4xl 2xl:text-5xl text-[#0A2745] leading-snug">
                نرم افزار اتوماسیون تغذیه
              </h2>
              <p className="fanum-font text-sm sm:text-base 2xl:text-xl text-[#0A2745] leading-loose text-justify">
                اتوماسیون تغذیه سیستمی پیشرفته که بصورت نرم افزار تحت وب
                فرآیندهای مدیریت سلف غذاخوری در سازمان‌ها، از جمله رزرو غذا،
                سفارش‌دهی، مدیریت منو، کنترل موجودی و گزارش‌گیری را به‌صورت
                خودکار و یکپارچه ساماندهی می‌کند.
              </p>
            </div>

            <ul className="my-12 space-y-3 sm:space-y-4">
              {FEATURES.map((feature) => (
                <li
                  key={feature.id}
                  className="flex flex-col rounded-[2px] group cursor-pointer"
                >
                  <div className="flex flex-row-reverse items-center justify-between gap-3 px-1 sm:px-1.5">
                    <span className="flex h-6 w-6 -rotate-40 items-center justify-center text-[#FF4C00] group-hover:text-[#0A2745]  text-lg leading-none">
                      <FaArrowLeft />
                    </span>
                    <p className="bold-fanum-font text-xs sm:text-sm 2xl:text-lg text-[#0A2745] group-hover:text-[#FF4C00] transition-colors duration-100 leading-relaxed text-right text-justify">
                      {feature.label}
                    </p>
                  </div>
                  <div className="mt-2 h-[2px] w-full bg-[#FF4C00] transition-all duration-100 group-hover:bg-[#0A2745]" />
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-center lg:items-end">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-[620px]">
              <Image
                src="/softwares/garson.svg"
                alt="نرم افزار اتوماسیون تغذیه"
                width={480}
                height={520}
                loading="lazy"
                className="w-full h-auto object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SolSoftwares;
