"use client";
import React, { useState } from "react";
import Container from "../ui/container";
import { Button } from "../ui/button";

const WhySol = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "مدیریت و رشد" },
    { title: "پرداخت و نظارتی" },
    { title: "آماده سازی و سرو" },
    { title: "گرفتن سفارش ها" },
  ];

  const images = [
    "https://www.shopurfood.com/images/add-manage-restaurant.webp",
    "https://posbytz.com/wp-content/uploads/2022/12/billing-1024x683.png",
    "https://cdn.sanity.io/images/2nz3tcxf/production/47bcb6904f00721adf05372c6b6dcd4934e26aa3-1200x957.png",
    "https://www.tekkiwebsolutions.com/wp-content/uploads/online-food-ordering-system.png",
  ];

  return (
    <Container>
      <div className="w-full  pt-24 md:pt-36 pb-12 sm:pb-16 md:pb-20">
        {/* Title */}
        <h2 className="extrabold-fanum-font text-xl md:text-2xl lg:text-4xl  2xl:text-5xl text-[#0A2745] text-center mb-6 sm:mb-8 md:mb-12 px-4">
          سول چیه و چطوری رستوران شما را متحول می‌کنه؟
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 md:mb-16 md:px-4">
          {tabs.map((tab, index) => (
            <Button
              key={index}
              variant={activeTab === index ? "solid" : "outline"}
              color="#FF4C00"
              onClick={() => setActiveTab(index)}
              className="px-4 sm:px-5 md:px-6 py-1 sm:py-2.5 md:py-3 bold-fanum-font  text-[10px]  md:text-base min-w-0 md:w-[200px] w-[130px]"
            >
              {tab.title}
            </Button>
          ))}
        </div>

        {/* Image Section - Fixed height ~600px */}
        <div className="flex justify-center px-2 sm:px-4 bg-transparent">
          <div className="relative w-full ">
            {" "}
            {/* Limits max width for large screens */}
            <img
              src={images[activeTab]}
              alt={tabs[activeTab].title}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-contain rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border border-gray-200"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhySol;
