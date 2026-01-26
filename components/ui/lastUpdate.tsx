"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const LastUpdate = () => {
  const [isSituationOpen, setSituationOpen] = useState(false);
  return (
    <div>
      <div className="w-full items-center justify-center flex flex-col -translate-y-3">
        <button
          className={`w-52 h-auto min-h-10 pt-2    bg-white  text-[#0A2745] -bottom-9 left-[45%]  rounded-2xl z-20 border border-orange-500 cursor-pointer ${
            isSituationOpen ? "bg-[#FF4C00] " : ""
          }`}
          onClick={() => setSituationOpen(!isSituationOpen)}
        >
          {/* <span>{isSituationOpen ? <FaMinus /> : <FaPlus />}</span> */}
         
          <div className="relative gap-2 flex items-center justify-center font-fanum w-full h-full text-sm z-30">
            آخرین وضعیت سول{" "}
            <div className=" rounded-3xl h-5 w-5 bg-red-500 flex items-center justify-center  ">
              <IoChevronDownOutline
                className={` font-bold text-xl text-white transition-transform duration-200 ${
                  !isSituationOpen ? "" : "rotate-180"
                } `}
              />
            </div>
          </div>
        </button>

        <div
          className={`overflow-hidden bg-white border border-orange-500  f rounded-b-xl w-52 -translate-y-3 transition-height duration-300 ease-in-out ${
            isSituationOpen ? "h-23 " : "h-0"
          } text-gray-700`}
        >
          <p className=" pt-8 text-center text-[#0A2745] bold-fanum-font text-xs flex flex-col cursor-pointer">
            <span className="flex items-center justify-center gap-2">
              <Image
                src="/icons-brands/websol-tik.webp"
                alt="نسخه تحت وب سول"
                width={20}
                height={20}
                loading="lazy"
                unoptimized
                className=""
              />
              پایدار و آماده خدمت‌رسانی{" "}
            </span>
            <span className="underline pt-2 text-orange-500">
              {" "}
              اطلاعات بیشتر
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LastUpdate;
