import React from "react";

interface SoftwaresTabProps {
  title: string;
  subtitle: string;
  description: string;
}

const SoftwaresTab: React.FC<SoftwaresTabProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="w-full h-full px-4 sm:px-8 lg:px-24 py-6">
      <div
        className="bg-white shadow-xl text-right space-y-4 sm:space-y-5 lg:space-y-6 
                      p-5 sm:p-8 lg:p-12 rounded-2xl"
      >
        {/* عنوان */}
        <h1
          className="bold-fanum-font text-[#FF4C00] 
                       text-2xl sm:text-3xl lg:text-4xl leading-snug"
        >
          {title}
        </h1>

        {/* زیرعنوان */}
        <h3
          className="text-[#0A2745] bold-fanum-font 
                       text-lg sm:text-xl lg:text-2xl"
        >
          {subtitle}
        </h3>

        {/* توضیح */}
        <p
          className="font-fanum text-gray-500 
                      text-base sm:text-lg lg:text-xl leading-relaxed"
        >
          {description}
        </p>

        {/* دکمه‌ها */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
          <button
            className="w-full sm:w-auto px-6 py-3 
                       bg-[#FF4C00] rounded-2xl 
                       text-base sm:text-lg text-white 
                       cursor-pointer hover:opacity-80 transition"
          >
            درخواست مشاوره و دمو رایگان
          </button>

          <button
            className="w-full sm:w-auto px-6 py-3 
                       border-2 border-[#FF4C00] rounded-2xl 
                       text-base sm:text-lg text-[#FF4C00] 
                       bg-white cursor-pointer 
                       hover:bg-[#FF4C00]/20 transition"
          >
            استعلام قیمت (تماس با کارشناسان)
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoftwaresTab;
