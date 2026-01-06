"use client";

import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Container from "../ui/container";

const INITIAL_TEXT =
  "سول؛ قدرتمندترین و کامل‌ترین نرم‌افزار رستورانی است که با هدف یکپارچه‌سازی تمام فرایندهای حیاتی رستوران‌ها، فست‌فودها، فودکورت‌ها و کافی‌شاپ‌ها توسط متخصصان شرکت آدا طراحی شده و توسعه پیدا کرده است. این نرم‌افزار با نیازسنجی دقیق بازار و در ارتباط نزدیک با صاحبان برترین برندها و بهترین رستوران‌های کشور توسعه پیدا کرده و تمام نیازهای نرم‌افزاری یک رستوران یا فود‌کورت را در قالب یک بسته کامل نرم‌افزاری در اختیار آن‌ها قرار می‌دهد.";

const FULL_TEXT = `سول؛ قدرتمندترین و کامل‌ترین نرم‌افزار رستورانی است که با هدف یکپارچه‌سازی تمام فرایندهای حیاتی رستوران‌ها، فست‌فودها، فودکورت‌ها و کافی‌شاپ‌ها توسط متخصصان شرکت آدا طراحی شده و توسعه پیدا کرده است. این نرم‌افزار با نیازسنجی دقیق بازار و در ارتباط نزدیک با صاحبان برترین برندها و بهترین رستوران‌های کشور توسعه پیدا کرده و تمام نیازهای نرم‌افزاری یک رستوران یا فود‌کورت را در قالب یک بسته کامل نرم‌افزاری در اختیار آن‌ها قرار می‌دهد.
نرم افزار سول قابلیت استفاده به‌صورت تحت وب، روی ویندوز، اندروید و iOS را دارد. این بدان معناست که شما برای مدیریت رستوران‌تان حتی نیاز به حضور فیزیکی نیز ندارید و می‌توانید فقط با استفاده از یک دستگاه هوشمند متصل به اینترنت، مهم‌ترین فرایندهای کسب‌وکارتان را مدیریت کنید.  سول فقط یک نرم افزار مدیریت رستوران نیست، سول ابزاری است برای مدیریت حسابداری رستوران، مدیریت باشگاه مشتریان، مدیریت فرایندها و جریان‌های کاری، مدیریت حقوق و دستمزد کارکنان، انبارگردانی، مدیریت اسناد مالی و ده‌ها قابلیت و ویژگی‌ دیگر که به‌محض پیاده‌سازی این نرم‌افزار در کسب‌وکارتان نتایج و ارزش افزوده‌ای که برای شما ایجاد می‌کنند را احساس خواهید کرد. برای پیاده‌سازی سول در رستوران‌تان کافی است با متخصصان ما تماس بگیرید، برای این‌کار از دکمه زیر استفاده کنید.`;

const CONTAINER_CLASSES = "w-full  py-8 sm:py-12 md:py-44";

const TEXT_CLASSES =
  "text-base sm:text-lg md:text-2xl text-[#0A2745] leading-relaxed regular-fanum-font text-justify";

const READ_MORE_BUTTON_CLASSES =
  "mt-4 text-lg sm:text-xl text-[#FF4C00] cursor-pointer hover:underline transition-all duration-200 font-bold flex items-center gap-2";

const AboutSol = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <div className={CONTAINER_CLASSES}>
        <p className={TEXT_CLASSES}>{isExpanded ? FULL_TEXT : INITIAL_TEXT}</p>
        <div className="flex justify-end gap-2 items-center">
          <button
            onClick={toggleExpand}
            className={READ_MORE_BUTTON_CLASSES}
            aria-label={isExpanded ? "بستن متن" : "ادامه مطلب"}
          >
            {isExpanded ? "بستن" : "ادامه مطلب"}
            <IoIosArrowBack className="text-xl sm:text-2xl" />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default AboutSol;
