// components/FeatureSection.tsx
"use client";

import React, { useState } from "react";
import { features } from "@/data/features";
import {
  FaBolt,
  FaChartLine,
  FaShieldAlt,
  FaMobileAlt,
  FaUsers,
  FaChartBar,
  FaCloud,
  FaBell,
  FaCog,
  FaFire,
  FaStar,
  FaMagic,
  FaRobot,
  FaLeaf,
  FaCreditCard,
  FaClipboardList,
  FaShoppingCart,
  FaUtensils,
  FaWineGlassAlt,
  FaQrcode,
  FaCashRegister,
} from "react-icons/fa";
import {
  GiHotSpices,
  GiCoffeeCup,
  GiChefToque,
  GiForkKnifeSpoon,
  GiMeal,
  GiCookingPot,
  GiSaucepan,
  GiCook,
  GiFoodTruck,
  GiDeliveryDrone,
} from "react-icons/gi";

// Map feature icons for visual variety - all in FF4C00 color
const featureIcons = [
  <GiHotSpices key="spices" className="w-6 h-6" />,
  <FaBolt key="bolt" className="w-6 h-6" />,
  <FaChartLine key="chart" className="w-6 h-6" />,
  <FaShieldAlt key="shield" className="w-6 h-6" />,
  <FaMobileAlt key="mobile" className="w-6 h-6" />,
  <FaUsers key="users" className="w-6 h-6" />,
  <FaChartBar key="bar" className="w-6 h-6" />,
  <FaCloud key="cloud" className="w-6 h-6" />,
  <FaBell key="bell" className="w-6 h-6" />,
  <FaCog key="cog" className="w-6 h-6" />,
  <GiChefToque key="chef" className="w-6 h-6" />,
  <GiForkKnifeSpoon key="utensils" className="w-6 h-6" />,
  <FaFire key="fire" className="w-6 h-6" />,
  <FaCreditCard key="credit" className="w-6 h-6" />,
  <FaClipboardList key="clipboard" className="w-6 h-6" />,
  <FaShoppingCart key="cart" className="w-6 h-6" />,
  <FaUtensils key="utensils-fa" className="w-6 h-6" />,
  <FaWineGlassAlt key="wine" className="w-6 h-6" />,
  <FaQrcode key="qrcode" className="w-6 h-6" />,
  <FaCashRegister key="register" className="w-6 h-6" />,
  <GiMeal key="meal" className="w-6 h-6" />,
  <GiCookingPot key="pot" className="w-6 h-6" />,
  <GiSaucepan key="pan" className="w-6 h-6" />,
  <GiCook key="cook" className="w-6 h-6" />,
  <GiFoodTruck key="truck" className="w-6 h-6" />,
  <GiDeliveryDrone key="drone" className="w-6 h-6" />,
];

export default function FeatureSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative px-4 lg:px-24 mt-24 lg:mt-52 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-linear-to-r from-orange-50/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-linear-to-l from-orange-50/10 to-transparent rounded-full blur-3xl"></div>

      {/* Floating decorative icons */}
      <div className="absolute top-10 right-10 xl:opacity-100 opacity-10">
        <GiHotSpices className="w-24 h-24 text-[#FF4C00]" />
      </div>
      <div className="absolute top-10 left-10 xl:opacity-100 opacity-10">
        <GiChefToque className="w-20 h-20 text-[#FF4C00]" />
      </div>

      {/* Section header */}
      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center justify-center gap-3 mb-6">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#FF4C00] animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-[#FF4C00] animate-pulse delay-100"></div>
            <div className="w-2 h-2 rounded-full bg-[#FF4C00] animate-pulse delay-200"></div>
          </div>
          <span className="bg-linear-to-r from-[#FF4C00] to-orange-400 bg-clip-text text-transparent font-bold text-sm lg:text-base tracking-wide px-4 py-1 rounded-full border border-orange-100">
            قابلیت‌های ویژه
          </span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#FF4C00] animate-pulse delay-200"></div>
            <div className="w-2 h-2 rounded-full bg-[#FF4C00] animate-pulse delay-100"></div>
            <div className="w-2 h-2 rounded-full bg-[#FF4C00] animate-pulse"></div>
          </div>
        </div>

        <h2 className="mx-auto text-center text-[#0A2745] extrabold-fanum-font text-2xl xl:text-[48px] lg:leading-[70px] max-w-4xl mb-6 relative">
          <span className="relative z-10  inline-block">
            امکانات نرم افزار مدیریت رستورانی سول
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed mt-8">
          مجموعه‌ای کامل و یکپارچه از ابزارهای مدیریتی برای موفقیت در کسب‌وکار
          رستوران‌داری
        </p>
      </div>

      {/* Feature cards grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Card glow effect on hover */}
            <div className="absolute -inset-0.5 bg-linear-to-br from-[#FF4C00]/10 via-orange-300/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>

            {/* Main card */}
            <div className="relative h-full  to-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-3  border border-gray-100 group-hover:border-orange-100 group-hover:-translate-y-1 overflow-hidden">
              {/* Animated background pattern */}

              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03]">
                <div className="absolute top-4 right-4 w-16 h-16 border border-[#FF4C00] rounded-full"></div>
              </div>

              {/* Icon container */}
              <div className="relative mb-6 flex items-center justify-between">
                <div className="relative">
                  {/* Glow effect */}
                  <div
                    className={`absolute -top-1 -right-1 w-12 h-12 rounded-full ${
                      hoveredIndex === idx
                        ? "bg-[#FF4C00]/30"
                        : "bg-[#FF4C00]/10"
                    } blur-md transition-all duration-300`}
                  ></div>

                  {/* Icon with number */}
                  <div className="relative w-12 h-12 rounded-xl bg-linear-to-br from-orange-50 to-white border border-orange-100 shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
                    <div
                      className={`text-[#FF4C00] ${
                        hoveredIndex === idx ? "scale-110" : ""
                      } transition-transform duration-300`}
                    >
                      {featureIcons[idx % featureIcons.length]}
                    </div>
                  </div>
                </div>

                {/* Number badge */}
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-gray-50 to-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-bold text-gray-700">
                    {idx + 1}
                  </span>
                </div>
              </div>

              {/* Feature text */}
              <div className="relative">
                <p
                  className={`text-right text-gray-800 font-medium text-base lg:text-sm leading-relaxed transition-all duration-300 ${
                    hoveredIndex === idx ? "text-gray-900" : ""
                  } pr-2`}
                >
                  {feature}
                </p>
              </div>

              {/* Hover indicator line */}
              <div className="mt-3 h-px bg-linear-to-r from-transparent via-gray-100 to-transparent overflow-hidden">
                <div
                  className={`h-full bg-linear-to-r from-transparent via-[#FF4C00] to-transparent transition-all duration-500 ${
                    hoveredIndex === idx ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
