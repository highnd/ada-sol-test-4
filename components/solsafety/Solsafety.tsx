import React from "react";
import Container from "../ui/container";
import SecurityCircle from "./SecurityCircle";

// Pre-computed className constants
const SECTION_CLASSES =
  "w-full bg-[#FFF6F2] py-12 sm:py-10 md:py-12 lg:py-16 mt-20";

const TITLE_CLASSES =
  "extrabold-fanum-font text-[#0A2745] text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-10 md:mb-12 lg:mb-24";

const CIRCLES_CONTAINER_CLASSES =
  "flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-10 flex-wrap";

// Security features data
const SECURITY_FEATURES = [
  {
    id: 1,
    imageSrc: "/icons-brands/blockchain.svg",
    imageAlt: "تکنولوژی بلاکچین",
    title: "تکنولوژی بلاکچین برای بخش مالی و انبارداری",
    backgroundColor: "#FF4C00", // Right circle - orange
    textColor: "#FFFFFF", // White text
  },
  {
    id: 2,
    imageSrc: "/icons-brands/hashing-icon.svg",
    imageAlt: "رمزنگاری و هش کردن داده‌ها",
    title: "رمزنگاری و هش کردن داده‌ها در دیتابیس",
    backgroundColor: "#FFFFFF", // Middle circle - white
    textColor: "#0A2745", // Dark text
  },
  {
    id: 3,
    imageSrc: "/icons-brands/access-level.svg",
    imageAlt: "سطوح دسترسی کاربران",
    title: "انواع سطوح دسترسی کاربران",
    backgroundColor: "#595B5C", // Left circle - gray
    textColor: "#FFFFFF", // White text
  },
] as const;

const Solsafety: React.FC = () => {
  return (
    <section dir="rtl" className={SECTION_CLASSES}>
      <Container>
        {/* Section Title */}
        <h2 className={TITLE_CLASSES}>امنیت اطلاعات شما در نرم افزار سول</h2>

        {/* Circles Container */}
        <div className={CIRCLES_CONTAINER_CLASSES}>
          {SECURITY_FEATURES.map((feature) => (
            <SecurityCircle
              key={feature.id}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              title={feature.title}
              backgroundColor={feature.backgroundColor}
              textColor={feature.textColor}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Solsafety;
