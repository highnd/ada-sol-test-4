"use client";
import { SERVICE_OPTIONS } from "@/components/ConsultingAndDemo/ConsultingAndDemo";
import FAQAccordion from "@/components/FaqAccordian/FaqAccordian";
import { getSocialIcon } from "@/components/Footer/Footer";
import Dropdown from "@/components/ui/dropdown";
import { SOCIAL_MEDIA } from "@/data/footerData";
import { FAQ_ITEMS } from "@/data/faq";
import React, { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";

export const contactData = [
  {
    id: 1,
    title: "شماره تماس",
    value: "۰۲۱ ۹۱۰۰ ۰۳۲۷",
    icon: FiPhone,
  },
  {
    id: 2,
    title: "ایمیل",
    value: "info@sol.ir",
    icon: FiMail,
  },
  {
    id: 3,
    title: "کد پستی",
    value: "۱۴۸۱۸۹۶۵۸۵",
    icon: FiMapPin,
  },
  {
    id: 4,
    title: "ساعت کاری",
    value: "شنبه تا چهارشنبه 9 تا 18",
    icon: FiMapPin,
  },
  {
    id: 5,
    title: "آدرس",
    value:
      "تهران، ابتدای بلوار فردوس شرق، بین خیابان احمدی و سلیمی جهرمی، بن بست سوم، پلاک 11، طبقه 4",
    icon: HiOutlineLocationMarker,
  },
];

const inputClass =
  "md:flex-1 w-full bg-accent text-black rounded-full px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-base regular-fanum-font placeholder:text-secondary text-right border border-white focus:outline-none focus:bg-[#FF4C00] ";

const SUBMIT_BUTTON_CLASSES =
  "inline-flex cursor-pointer items-center justify-center gap-2 bg-white text-[#0A2745] rounded-full p-1 pl-6 text-sm sm:text-base md:text-lg font-bold transition-colors duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#FF4C00] self-end mt-2";

const SUBMIT_BUTTON_ICON_CLASSES =
  "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#0A2745] flex items-center justify-center";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    email: "",
    company: "",
    description: "",
    freeConsultation: false, // Added checkbox state
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic can be added here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      {/* Header */}
      <div className="w-full min-h-56 lg:h-72 bg-accent flex items-center justify-center flex-col gap-4 px-4 text-center">
        <h1 className="text-primary extrabold-fanum-font text-center text-5xl">
          تماس با ما
        </h1>

        <h2 className="text-secondary font-fanum text-lg max-w-3xl">
          هر زمان خواستید میتوانید با ما در ارتباط باشید. در اولین فرصت ممکن با
          شما تماس خواهیم گرفت
        </h2>
      </div>

      {/* Main Content */}
      <article className="px-4 sm:px-8 md:px-12 lg:px-24 mt-12 lg:mt-24">
        <div className="w-full h-full flex flex-col xl:flex-row items-start gap-12">
          {/* Contact Info */}
          <div className="w-full xl:w-[40%] space-y-8">
            <h2 className="text-secondary  text-3xl bold-fanum-font">
              اطلاعات تماس
            </h2>
            {contactData.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-xl shrink-0">
                    <Icon />
                  </div>

                  <div dir="ltr" className="text-right">
                    <p className="text-secondary font-semibold">{item.title}</p>
                    <p className="text-gray-700 leading-7 max-w-xl">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="py-6">
              <p className="regular-fanum-font text-sm sm:text-base md:text-xl text-[#0A2745] leading-relaxed md:flex hidden">
                برای اطلاع از تخفیف‌ها و جدیدترین خبرها
              </p>
              <p className="extrabold-fanum-font text-sm sm:text-base md:text-3xl text-[#0A2745] leading-relaxed md:flex hidden">
                سول را در شبکه‌های اجتماعی دنبال کنید...
              </p>
              <div className="flex items-center gap-3 sm:gap-4 lg:my-6 my-2">
                {SOCIAL_MEDIA.map((social) => {
                  const IconComponent = getSocialIcon(social.icon);
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF4C00] text-white flex items-center justify-center hover:bg-[#FF4C00]/80 transition-colors duration-200"
                      aria-label={social.ariaLabel}
                    >
                      <IconComponent className="text-lg sm:text-3xl" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full xl:w-[60%]  ">
            <form
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-secondary  px-4 sm:px-6 md:px-10 lg:px-14 py-8 rounded-4xl"
              onSubmit={handleSubmit}
            >
              {/* نام و نام خانوادگی */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm text-right">
                  نام و نام خانوادگی <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی خود را بنویسید"
                  className={inputClass}
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* شماره موبایل */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm text-right">
                  شماره موبایل <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="شماره موبایل خود را بنویسید"
                  className={`${inputClass} ltr`}
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* نوع کسبو کار */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm text-right">
                  نوع نرم افزار درخواستی<span className="text-red-400">*</span>
                </label>
                <div className="flex-1 w-full">
                  <Dropdown
                    id="service"
                    name="service"
                    options={SERVICE_OPTIONS}
                    placeholder="نوع کسبو کار را انتخاب کنید"
                    placeholderColor="text-secondary"
                    value={formData.service}
                    onChange={handleServiceChange}
                    buttonClassName={`${inputClass} cursor-pointer`}
                    aria-label="انتخاب نوع کسبو کار"
                  />
                </div>
              </div>

              {/* ایمیل */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm text-right">
                  ایمیل
                </label>
                <input
                  type="email"
                  placeholder="ایمیل خود را بنویسید"
                  className={inputClass}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              {/* نام مجموعه */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm text-right">
                  نام مجموعه
                </label>
                <input
                  type="text"
                  placeholder="نام مجموعه خود را بنویسید"
                  className={inputClass}
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>



              {/* توضیحات بیشتر (تمام عرض) */}
              <div className="lg:col-span-2 flex flex-col gap-2">
                <label className="text-white text-sm text-right">
                  توضیحات بیشتر
                </label>
                <textarea
                  placeholder="توضیحات بیشتر را بنویسید"
                  className={`${inputClass} rounded-xl min-h-[100px] resize-none`}
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              {/* مشاوره رایگان قبل خرید */}
              <div className="lg:col-span-2 flex items-center justify-start gap-3 mt-2 mb-2">
                <input
                  type="checkbox"
                  id="freeConsultation"
                  name="freeConsultation"
                  checked={formData.freeConsultation}
                  onChange={handleInputChange}
                  className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer accent-white border-2 border-white rounded-md  bg-transparent"
                  aria-label="مشاوره رایگان قبل خرید"
                />
                <label
                  htmlFor="freeConsultation"
                  className="text-white regular-fanum-font text-sm sm:text-base md:text-lg cursor-pointer select-none"
                >
                  مشاوره رایگان قبل خرید
                </label>
              </div>

              {/* دکمه ارسال */}
              <div className="xl:col-span-2 flex justify-end w-full mt-4 gap-8 text-white">
                <div className=" flex items-center justify-center gap-2 cursor-pointer">
                  <span> 021-9100-2037</span>
                  <BsTelephoneFill className="text-xl sm:text-3xl text-primary" />
                </div>
                <button type="submit" className={SUBMIT_BUTTON_CLASSES}>
                  <div className={SUBMIT_BUTTON_ICON_CLASSES}>
                    <IoIosSend className="text-white text-base sm:text-lg md:text-xl" />
                  </div>
                  <span>ثبت درخواست</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <section id="reviews" className="my-24">
          <FAQAccordion items={FAQ_ITEMS} />
        </section>
      </article>
    </div>
  );
};

export default Contact;