"use client";

import React, { useState } from "react";
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
  GiChefToque,
  GiForkKnifeSpoon,
  GiMeal,
  GiCookingPot,
  GiSaucepan,
  GiCook,
  GiFoodTruck,
  GiDeliveryDrone,
} from "react-icons/gi";

type PageFeaturesProps = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
};

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

export default function PageFeatures({
  title,
  subtitle,
  description,
  features,
}: PageFeaturesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative  mt-24 lg:mt-52 overflow-hidden">



      <div className="relative z-10 text-center mb-16">


        <h2 className="mx-auto text-center text-[#0A2745] extrabold-fanum-font text-2xl xl:text-[48px] lg:leading-[70px] max-w-4xl mb-6 relative">
          <span className="relative z-10 inline-block">{title}</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base leading-relaxed mt-8">
          {description}
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center gap-4 lg:gap-6 pb-6">
        {features.map((feature, idx) => (
          // feature card
          <div
            key={idx}
            className="group relative w-full sm:max-w-[calc(50%-0.5rem)] lg:max-w-[calc(33.333%-1rem)] xl:max-w-[calc(20%-1.2rem)]"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute -inset-0.5 bg-linear-to-br from-[#FF4C00]/10 via-orange-300/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>

            <div className="relative h-full  rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-3 border border-gray-300 group-hover:border-orange-100 group-hover:-translate-y-1 overflow-hidden">


              <div className="relative my-4 flex items-center justify-center ">
                <div className="relative">
                  <div
                    className={`absolute -top-1 -right-1 w-12 h-12 rounded-full ${hoveredIndex === idx
                      ? "bg-[#FF4C00]/30"
                      : "bg-[#FF4C00]/10"
                      } blur-md transition-all duration-300`}
                  ></div>

                  <div className="relative w-14 h-14  bg-accent rounded-full flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
                    <div
                      className={`text-[#FF4C00] ${hoveredIndex === idx ? "scale-110" : ""
                        } transition-transform duration-300`}
                    >
                      {featureIcons[idx % featureIcons.length]}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <p
                  className={`text-center text-secondary bold-fanum-font text-base lg:text-base leading-relaxed transition-all duration-300 ${hoveredIndex === idx ? "text-secondary" : ""
                    }`}
                >
                  {feature}
                </p>
              </div>

              <div className="mt-3 h-px bg-linear-to-r from-transparent via-gray-100 to-transparent overflow-hidden">
                <div
                  className={`h-full bg-linear-to-r from-transparent via-[#FF4C00] to-transparent transition-all duration-500 ${hoveredIndex === idx ? "w-full" : "w-0"
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
