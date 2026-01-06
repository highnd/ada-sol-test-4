"use client";
import {
  AnimatedBorderButton,
  AnimatedtextHoverButton,
} from "@/components/ui/button";

const Buttons = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-[#0A2745] mb-8">
        نمونه دکمه‌های با حاشیه متحرک
      </h2>

      <div className="flex flex-col sm:flex-row gap-6 items-center">
        {/* Example 1: Basic */}
        <AnimatedBorderButton onClick={() => alert("کلیک شد!")}>
          کلیک کنید
        </AnimatedBorderButton>

        {/* Example 2: With Link */}
        <AnimatedBorderButton href="/contact">تماس با ما</AnimatedBorderButton>

        {/* Example 3: Custom Colors */}
        <AnimatedBorderButton
          textColor="text-white"
          bgColor="bg-[#FF4C00]"
          onClick={() => console.log("دکمه نارنجی کلیک شد")}
        >
          دکمه نارنجی
        </AnimatedBorderButton>

        {/* Example 4: Disabled */}
        <AnimatedBorderButton disabled>غیرفعال</AnimatedBorderButton>

        <AnimatedtextHoverButton />
      </div>
    </div>
  );
};

export default Buttons;
