"use client";
import SoftwaresTab from "@/components/price/Softwarestab";
import { WindowsSoftwareTab } from "@/components/price/WindowsSoftwareTab";
import { SolModuleCarousel } from "@/components/carousels/solModuleCS/SolModuleCarousel";
import { SoftwareCard } from "@/components/ui/cards";
import { softwareList } from "@/data/softwares";
import React, { useState, useMemo } from "react";
import { PillsCarousel, type PillsCarouselItem } from "@/components/ui/PillsCarousel";

interface TabContent {
  label: string;
  content: React.ReactNode;
}

const tabContents: TabContent[] = [
  {
    label: "نرم افزار رستورانی تحت وب",
    content: <WindowsSoftwareTab />,
  },
  {
    label: "نرم افزار رستورانی ویندوزی",
    content: (
      <SoftwaresTab
        title="نرم افزار رستورانی ویندوزی"
        subtitle="راهکار حرفه ای مدیریت فروش و عملیات صندوق"
        description=" نرم افزار رستورانی ویندوزی,مناسب رستوران ها,فست فود ها و کافی شاپ های برای کنترل دقیق فروش,صدور فاکتور و گزارش گیری."
      />
    ),
  },
  {
    label: "نرم افزار اتوماسیون تغذیه",
    content: (
      <SoftwaresTab
        title="نرم افزار اتوماسیون تغذیه"
        subtitle="راهکار سازمانی برای مدیریت هوشمند تغذیه"
        description="مناسب سازمان‌ها، کارخانجات و مراکز درمانی برای مدیریت تغذیه در مقیاس بالا و افزایش بهره‌وری."
      />
    ),
  },
  {
    label: "اپلیکیشن مدیریت رستوران اندروید",
    content: (
      <SoftwaresTab
        title="اپلیکیشن مدیریت رستوران اندروید"
        subtitle="مدیریت کامل رستوران از طریق موبایل  و تبلت"
        description="اپلیکیشن اندوریدی سول,امکان مدیریت فروش,گزارش ها و عملکرد رستوران به صورت لحظه ای و در هر مکان."
      />
    ),
  },
  {
    label: "نرم افزار حسابداری رستوران",
    content: (
      <SoftwaresTab
        title="نرم افزار حسابداری رستوران"
        subtitle="مدیریت مالی  و حسابداری دقیق گسبو کار رستورانی"
        description="نرم افزار حسابداری رستوران سول, کنترل هزینه ها,ثبت حساب ها و گزارش گیری مالی پیشرفته طراحی شده است."
      />
    ),
  },
  {
    label: "نرم افزار صندوق رستوران",
    content: (
      <SoftwaresTab
        title="نرم افزار صندوق رستوران"
        subtitle=" سیستم پیشرفته صندوق فروشگاهی مخصوص رستوران ها"
        description="نرم افزار صندوق رستوران سول,برای ثبت سریع سفارشات,کنترل فروش و تسهیل عملیات صندوق بهینه شده است."
      />
    ),
  },
  {
    label: "نرم افزار کیوسک رستوران",
    content: (
      <SoftwaresTab
        title="نرم افزار کیوسک سفارشگیر"
        subtitle="راهکار نوین سفارش گیری خودکار برای رستوران ها"
        description="کیوسک سفارشگیر سول,تجربه ای سریع و آسان برای مشتریان شما جهت ثبت سفارش بدون نیاز به حضور پرسنل."
      />
    ),
  },
  {
    label: "نرم افزار سفارشگیر گارسون",
    content: (
      <SoftwaresTab
        title="نرم افزار سفارشگیر گارسون"
        subtitle="راهکار هوشمند و سریع برای سفارش گیری توسط گارسون ها"
        description=" نرم افزار سفارشگیر گارسون سول,  امکان ثبت سفارشات به صورت سریع و دقیق توسط گارسون ها,کاهش خطا و افزایش سرعت سرویس دهی."
      />
    ),
  },
];

function Price() {
  const [activeTab, setActiveTab] = useState(0);

  // Convert tabContents to PillsCarouselItem format
  const carouselItems: PillsCarouselItem[] = useMemo(
    () =>
      tabContents.map((tab, index) => ({
        id: index,
        label: tab.label,
        content: tab.content,
      })),
    []
  );

  // Desktop handlers
  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <section className="w-full h-full">
        <h2 className=" mx-auto  pt-20 pb-4 extrabold-fanum-font text-center text-2xl lg:text-4xl lg:leading-[70px] tracking-[0] max-w-4xl  text-[#0A2745] ">
          لیست قیمت نرم افزار های رستورانی و اتوماسیون تغذیه سول
        </h2>

        {/* Mobile Carousel Layout (lg and below) */}
        <div className="block lg:hidden w-full">
          <PillsCarousel
            items={carouselItems}
            initialIndex={activeTab}
            pillsTopMargin="mt-6 sm:mt-8"
            arrowTopPosition={{
              mobile: "18%",
              sm: "20%",
              md: "22%",
            }}
            onSlideChange={setActiveTab}
            ariaLabel="محتوای تب‌ها"
            pillsAriaLabel="تب‌های نرم‌افزار"
          />
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:block">
          <div className=" flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-4 sm:px-8 lg:px-24 2xl:px-72 py-4">
            {tabContents.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`whitespace-nowrap rounded-xl border-2 border-[#FF4C00] px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 text-sm sm:text-base bold-fanum-font font-medium  
                  transition-all duration-150  cursor-pointer ${activeTab === index
                    ? "bg-[#FF4C00] text-white hover:bg-[#FF4C00]/80"
                    : "bg-white text-[#FF4C00] hover:bg-[#FF4C00]/20"
                  }
                  
                  `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className=" text-black text-3xl text-center ">
            {tabContents[activeTab].content}
          </div>
        </div>

        <div className="w-full h-auto mt-24">
          <h2 className=" mx-auto  py-6 extrabold-fanum-font text-center text-2xl lg:text-4xl lg:leading-[70px] tracking-[0] max-w-4xl  text-[#0A2745] ">
            لیست ماژول های رستورانی سول
          </h2>
          <SolModuleCarousel />
        </div>

        <div className="py-44 w-full h-full md:px-24 px-4">
          <h2 className=" mx-auto  pb-16 extrabold-fanum-font text-center text-2xl lg:text-4xl lg:leading-[70px] tracking-[0] max-w-4xl  text-[#0A2745] ">
            نرم افزار تخصصی سول مناسب برای همه کسبو کار ها
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {softwareList.map((item) => (
              <SoftwareCard
                key={item.id}
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                features={item.features}
                featured={item.featured}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Price;
