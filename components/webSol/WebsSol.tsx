import React from "react";
import Image from "next/image";
import Container from "../ui/container";
import { Button } from "../ui/button";

const WebsSol = () => {
  return (
    <section
      aria-labelledby="websol-heading"
      className="bg-white md:mt-44 mt-12"
      dir="rtl"
    >
      <Container className="py-12 md:py-24 lg:py-32">
        <div className="space-y-14 md:space-y-32">
          <article className="flex flex-col lg:flex-row-reverse items-center md:gap-10">
            {/* Image - stays first in DOM so it appears on top on mobile */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end">
              <div className="w-full max-w-md lg:max-w-2xl">
                <Image
                  src="/websol/software-image.svg"
                  alt="نرم‌افزار تحت وب سول برای مدیریت رستوران"
                  width={640}
                  height={430}
                  loading="lazy"
                  className="w-full h-auto object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 regular-fanum-font text-right space-y-2 text-[#0A2745]">
              <h2 className="extrabold-fanum-font  text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl leading-relaxed ">
                نرم افزار رستورانی تحت وب سول
              </h2>
              <h3 className="fanum-font text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl  leading-relaxed">
                راهکار قدرتمند، همیشه آنلاین
              </h3>
              <div className="flex flex-row items-start gap-3 xl:mt-6">
                <Image
                  src="/icons-brands/web-icon-animated.webp"
                  alt="نرم‌افزار تحت وب سول"
                  width={50}
                  height={50}
                  unoptimized
                  loading="lazy"
                  className="mt-1 ml-2"
                />
                <p className="text-sm  sm:text-base xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
                  نسخه تحت وب سول یک سیستم یکپارچه و نسل جدید مدیریت رستوران است
                  که بدون نیاز به نصب، روی هر دستگاه اجرا می‌شود. از کنترل فروش
                  تا گزارش‌گیری لحظه‌ای و مدیریت چند شعبه، همه چیز در یک فضای
                  ساده و هوشمند در اختیار شماست.
                </p>
              </div>

              <div className="xl:pt-6 space-y-3 flex flex-row items-start gap-3">
                <Image
                  src="/icons-brands/websol-diamond.webp"
                  alt="نسخه تحت وب سول"
                  width={45}
                  height={45}
                  unoptimized
                  loading="lazy"
                />
                <div className="lg:space-y-2 flex-col flex">
                  <p className="text-base xl:text-xl 2xl:text-2xl   text-[#FF4C00] regular-fanum-font leading-relaxed text-justify">
                    انتخاب بهترین رستوران‌های حرفه‌ای.
                  </p>

                  <p className="regular-fanum-font text-base xl:text-xl 2xl:text-2xl   text-[#0A2745] pt-3 md:pt-0  2xl:pt-5 text-justify">
                    ارزش پیشنهادی:
                  </p>

                  <span className="text-base xl:text-xl 2xl:text-2xl  text-[#FF4C00] ">
                    مقیاس‌ پذیر
                    <span className="mx-2 text-[#0A2745]">|</span>
                    بدون محدودیت
                    <span className="mx-2 text-[#0A2745]">|</span>
                    امکانات کامل
                  </span>
                  <Button
                    variant="solid"
                    color="#FF4C00"
                    className="mt-6 md:mt-4 xl:w-1/2 w-56 ttext-sm sm:text-base xl:text-xl  regular-fanum-font  lg:text-xl 2xl:text-2xl "
                  >
                    نسخه تحت وب
                  </Button>
                </div>
              </div>
            </div>
          </article>
          {/* Row 2: Image right, text left (on desktop) */}

          <article className="flex flex-col lg:flex-row items-center md:gap-10 md:mt-44">
            {/* Image - stays first in DOM so it appears on top on mobile */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start">
              <div className="w-full max-w-md lg:max-w-2xl">
                <Image
                  src="/websol/software-image-2.svg"
                  alt="وب سول؛ گزارش‌ها و تحلیل‌های پیشرفته مدیریت رستوران"
                  width={640}
                  height={430}
                  loading="lazy"
                  className="w-full h-auto object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 regular-fanum-font text-right space-y-2 text-[#0A2745]">
              <h2 className="extrabold-fanum-font  text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl leading-relaxed ">
                نرم افزار رستورانی ویندوزی سول
              </h2>
              <h3 className="fanum-font text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl  leading-relaxed">
                راهکار اقتصادی برای مدیریت پایه
              </h3>
              <div className="flex flex-row items-start gap-3 xl:mt-6">
                <Image
                  src="/icons-brands/websol-pc.webp"
                  alt="نرم‌افزار تحت وب سول"
                  width={50}
                  height={50}
                  loading="lazy"
                  unoptimized
                  className="mt-1 ml-2"
                />
                <p className="text-sm  sm:text-base xl:text-xl 2xl:text-2xl leading-relaxed text-justify">
                  اگر کسب‌وکار شما تازه شروع شده یا به امکانات پایه مدیریت فروش
                  و عملیات روزانه نیاز دارید، نسخه ویندوزی سول گزینه‌ای اقتصادی
                  و ساده است. این نسخه روی ویندوز نصب می‌شود و در صورت نیاز،
                  می‌توانید اپلیکیشن مدیریت رستوران اندروید را به‌صورت جداگانه
                  تهیه کنید.
                </p>
              </div>

              <div className="xl:pt-6 space-y-3 flex flex-row items-start gap-3">
                <Image
                  src="/icons-brands/websol-tik.webp"
                  alt="نسخه تحت وب سول"
                  width={40}
                  height={40}
                  loading="lazy"
                  unoptimized
                  className="mt-1 ml-2"
                />

                <div className="space-y-2 flex-col flex w-full ">
                  <p className="text-base xl:text-xl 2xl:text-2xl  text-[#FF4C00] regular-fanum-font leading-relaxed">
                    مناسب رستوران‌های کوچک و کسب‌وکارهای تازه‌کار.
                  </p>

                  <p className="regular-fanum-font text-base xl:text-xl 2xl:text-2xl  text-[#0A2745] pt-3 md:pt-0  2xl:pt-5 text-justify">
                    ارزش پیشنهادی:
                  </p>

                  <span className=" text-base xl:text-xl 2xl:text-2xl text-[#FF4C00] ">
                    اقتصادی
                    <span className="mx-2 text-[#0A2745]">|</span>
                    ساده و کاربردی
                    <span className="mx-2 text-[#0A2745]">|</span>
                    بدون نیاز به اینترنت
                  </span>
                  <div className="flex lg:flex-row flex-col items-start gap-3 mt-6 w-full pl-12 ">
                    <Button
                      variant="solid"
                      color="#FF4C00"
                      className=" lg:w-1/3 w-full text-sm sm:text-base lg:text-sm xl:text-lg 2xl:text-2xl  regular-fanum-font py-2"
                    >
                      نسخه ویندوزی
                    </Button>
                    <Button
                      variant="outline"
                      color="#FF4C00"
                      className="lg:w-[60%]  w-full text-sm sm:text-base lg:text-sm xl:text-xl 2xl:text-2xl regular-fanum-font "
                    >
                      اپلیکیشین رستوران اندرویدی
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default WebsSol;
