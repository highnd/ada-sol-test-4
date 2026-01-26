import SolBrands from "@/components/carousels/solBrands/SolBrands";
import { SolLicanceCs } from "@/components/carousels/solLicanceCs/SolLicanceCs";
import ConsultingAndDemo from "@/components/ConsultingAndDemo/ConsultingAndDemo";
import StateSection from "@/components/stateSection/StateSection";
import { ValueCard } from "@/components/ui/cards";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const BUTTON_SOLID_HERO_CLASSES =
  "inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 text-sm sm:text-base lg:text-lg bold-fanum-font rounded-[50px] bg-[#FF4C00] text-white hover:bg-[#E64500] transition-colors duration-200  w-auto cursor-pointer";

const About = () => {
  return (
    <div className=" w-full ">
      <div className="lg:h-[550px]  w-full bg-primary flex flex-col items-center justify-start  md:gap-4 gap-2 px-6 pt-24 pb-4">
        <h1 className="bold-fanum-font text-white text-center text-3xl xl:text-[48px] 2xl:text-[56px] md:leading-[70px] leading-[40px]  tracking-[0]">
          درباره سول
        </h1>

        <p className="regular-fanum-font text-white text-center text-sm xl:text-[16px] 2xl:text-[20px] leading-[40px] tracking-[0] max-w-5xl">
          داستان ما از یک ایده ساده شکل گرفت: استفاده از فناوری برای حل چالش‌های
          واقعی رستوران‌داران. از آن زمان، ما متعهد به نوآوری، کیفیت و اعتماد
          بوده‌ایم و تلاش کرده‌ایم تا نرم‌افزاری خلق کنیم که هر رستوران بتواند
          با آن داستان موفقیت خود را بنویسد.
        </p>
        <div className=" w-full lg:px-32 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 mt-16 lg:translate-y-8">
          {/* Card 1 */}
          <div className="aspect-4/3 sm:aspect-auto sm:h-56 lg:h-44 bg-[#F0F5F7] rounded-3xl grid place-items-center border border-secondary md:translate-y-8">
            <FaRegPlayCircle className="text-black text-3xl sm:text-4xl lg:text-6xl cursor-pointer hover:opacity-80 transition" />
          </div>

          {/* Card 2 */}
          <div className="aspect-4/3 sm:aspect-auto sm:h-56 lg:h-72 bg-[#F0F5F7] rounded-3xl grid place-items-center border border-secondary">
            <FaRegPlayCircle className="text-black text-3xl sm:text-4xl lg:text-6xl cursor-pointer hover:opacity-80 transition" />
          </div>

          {/* Card 3 */}
          <div className="aspect-4/3 sm:aspect-auto sm:h-56 lg:h-44 bg-[#F0F5F7] rounded-3xl grid place-items-center border border-secondary md:translate-y-8">
            <FaRegPlayCircle className="text-black text-3xl sm:text-4xl lg:text-6xl cursor-pointer hover:opacity-80 transition" />
          </div>

          {/* Card 4 */}
          <div className="aspect-4/3 sm:aspect-auto sm:h-56 lg:h-72 bg-[#F0F5F7] rounded-3xl grid place-items-center border border-secondary ">
            <FaRegPlayCircle className="text-black text-3xl sm:text-4xl lg:text-6xl cursor-pointer hover:opacity-80 transition" />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="min-h-screen w-full  bg-accent pt-84 ">
        <section className="">
          <Container>
            <p className=" md:text-xl text-md text-secondary leading-loose text-justify">
              از سال ۱۳۹۰، با رهبری دکتر محمد تیموری، مدیرعامل، مسیر تازه‌ای در
              حوزه نرم‌افزارهای رستورانی رقم خورد؛ جایی که تیم ما مأموریتی بزرگ
              را آغاز کرد: خلق راهکارهای نرم‌افزاری جامع و حرفه‌ای که بتوانند
              چالش‌ها و نیازهای واقعی صنعت رستوران‌داری را به‌طور کامل پاسخ
              دهند. این مسیر، نقطه آغاز شکل‌گیری نرم‌افزار «سول» بود؛ محصولی که
              با تکیه بر دانش فنی بومی و سال‌ها تجربه همکاری نزدیک با مدیران و
              فعالان بزرگ‌ترین رستوران‌ها، کافی‌شاپ‌ها، فست‌فودها و فودکورت‌ها
              طراحی و توسعه یافته است.
              <br /> نرم‌افزار سول حاصل تعاملی مستمر با فعالان واقعی این صنعت
              است؛ نرم‌افزاری که تمامی جنبه‌های مدیریت کسب‌وکارهای رستورانی را
              از فروش، سفارش‌گیری سریع و دقیق، مدیریت هوشمند انبار، گزارش‌گیری
              جامع و تحلیل‌های کاربردی گرفته تا طراحی منوی دیجیتال و اتصال کامل
              به سخت‌افزارهای مختلف پوشش می‌دهد. ما باور داریم یک نرم‌افزار
              حرفه‌ای باید نه تنها عملیات روزمره را ساده و سریع‌تر کند، بلکه با
              هوشمندی و دقت، کیفیت خدمات و رضایت مشتریان را به بالاترین سطح
              برساند.
              <br />
              نرم‌افزار سول با رویکرد دانش‌بنیان و بهره‌گیری از فناوری‌های نوین،
              همه فرآیندهای مرتبط با مدیریت رستوران، فودکورت، کافی‌شاپ، کترینگ و
              مجموعه‌های خدماتی تهیه و توزیع غذا را به صورت یکپارچه و هوشمند
              دربرمی‌گیرد. هدف اصلی ما افزایش بهره‌وری، سرعت و دقت در عملیات
              روزانه و تسهیل فرآیندهای مدیریتی است تا کسب‌وکارهای فعال در این
              حوزه بتوانند با اطمینان و تمرکز بیشتر، مسیر رشد و توسعه خود را
              هموار کنند.
              <br /> سول به عنوان نرم‌افزاری منعطف و کاربرپسند، به دو صورت
              ویندوزی و تحت وب ارائه می‌شود و قابلیت سفارشی‌سازی دارد تا بتواند
              متناسب با نیازهای خاص هر مجموعه، بهترین عملکرد را ارائه دهد. این
              انعطاف‌پذیری، در کنار رابط کاربری ساده و یکپارچگی کامل سیستم‌ها،
              باعث شده تا پس از تجربه دمو و آشنایی با امکانات آن، سول به انتخاب
              اول و همیشگی بسیاری از کسب‌وکارهای رستورانی تبدیل شود.
              <br /> در کنار نرم‌افزار رستورانی، سامانه اتوماسیون تغذیه سول
              راهکاری تخصصی و هوشمند برای مدیریت تهیه و توزیع غذا در سازمان‌ها،
              شرکت‌ها، دانشگاه‌ها و مجموعه‌های بزرگ خدماتی و پیمانکاری است. این
              سیستم امکان رزرو غذا و سفارشات را برای کارکنان و مراجعان فراهم
              کرده، همراه با پنل مدیریتی پیشرفته برای کنترل انبار، مدیریت
              سفارشات، زمان‌بندی منوها و گزارش‌گیری دقیق. همچنین با تمرکز ویژه
              روی امنیت داده‌ها و سهولت در ارتباط با سیستم‌های مالی و حسابداری،
              اتوماسیون تغذیه سول کمک می‌کند هزینه‌ها کاهش یابند، بهره‌وری
              افزایش پیدا کند و رضایت نهایی مشتریان و کاربران به طور چشمگیری
              بهبود یابد.
              <br /> اگرچه نقطه شروع ما در مسیر توسعه سول به همکاری نزدیک و
              هم‌افزایی با شرکت نرم‌افزاری آدا بازمی‌گردد، اما امروز سول به
              عنوان یک برند مستقل و پیشرو در بازار نرم‌افزارهای رستورانی ایران،
              با تمرکز ویژه بر نوآوری و ارتقای کیفیت خدمات، مسیر خود را با قدرت
              و استحکام ادامه می‌دهد.
              <br /> ما در سول همواره در کنار مشتریانمان هستیم تا با بهره‌گیری
              از فناوری‌های روز و دانش تخصصی، راهکارهای هوشمندانه و کارآمدی
              ارائه دهیم که به آن‌ها کمک کند در رقابت سخت بازار، پیشرو باشند و
              تجربه مشتریان خود را به بهترین شکل ممکن ارتقا دهند. دعوت می‌کنیم
              شما نیز با انتخاب سول، آینده‌ای موفق‌تر و کارآمدتر در صنعت
              رستوران‌داری و خدمات غذایی بسازید.
            </p>
          </Container>
        </section>

        <section className="mt-44">
          <Container>
            <StateSection />
            <p className="text-center text-xl px-44 pt-24 leading-loose ">
              با سول، از هرجایی می‌تونی همه سفارش‌های حضوری و آنلاین رو مدیریت
              کنی و با کنترل راحت سالن، آشپزخونه، انبار،سفارش‌های آنلاین و حضوری
              کاری کنی همه‌چی خودکار و بی‌دردسر انجام بشه.
            </p>
          </Container>
        </section>

        <section className="mt-24 xl:mt-44">
          <Container>
            <h2 className=" mx-auto  extrabold-fanum-font text-center text-2xl xl:text-[48px] lg:leading-[70px] tracking-[0] max-w-4xl  text-[#0A2745] ">
              سول چه خدماتی ارائه می دهد؟
            </h2>

            <div className="w-full grid xl:grid-cols-2 grid-cols-1 xl:h-[50vh] h-auto gap-3  translate-y-14">
              {/* right part */}
              <div className="w-full h-full  ">
                <div className="w-full xl:h-1/3 h-auto xl:py-0 py-5 flex">
                  <div className="w-30 h-full  flex items-center justify-center">
                    {/* <div className="w-16 h-6 bg-[#FF4C00] rounded-md text-center ">
                    NEW
                  </div> */}
                    <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                  </div>
                  {/* text-container */}
                  <div className="w-full h-full  flex flex-col items-start justify-center text-right">
                    <p className="text-[#0A2745] bold-fanum-font text-xl mb-2">
                      توسعه و ارائه نرم‌افزارهای رستورانی
                    </p>
                    <p className="text-gray-600 fanum-font max-w-xl">
                      طراحی و ارائه نرم‌افزارهای تخصصی در نسخه‌های ویندوزی، تحت
                      وب و اپلیکیشن اندروید برای مدیریت فروش، سفارش‌گیری و
                      عملیات رستوران‌ها و مجموعه‌های غذایی.
                    </p>
                  </div>
                </div>

                <div className="w-full xl:h-1/3 h-auto xl:py-0 py-5  flex">
                  <div className="w-30 h-full  flex items-center justify-center">
                    {/* <div className="w-16 h-6 bg-[#FF4C00] rounded-md text-center ">
                    NEW
                  </div> */}
                    <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                  </div>
                  {/* text-container */}
                  <div className="w-full h-full  flex flex-col items-start justify-center text-right">
                    <p className="text-[#0A2745] bold-fanum-font text-xl mb-2">
                      ارائه سامانه‌های اتوماسیون تغذیه
                    </p>
                    <p className="text-gray-600 fanum-font max-w-xl">
                      پیاده‌سازی سامانه‌های تحت وب برای رزرو غذا و مدیریت تغذیه
                      سازمانی و صنعتی.
                    </p>
                  </div>
                </div>

                <div className="w-full xl:h-1/3 h-auto xl:py-0 py-5 flex">
                  <div className="w-30 h-full  flex items-center justify-center">
                    {/* <div className="w-16 h-6 bg-[#FF4C00] rounded-md text-center ">
                    NEW
                  </div> */}
                    <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                  </div>
                  {/* text-container */}
                  <div className="w-full h-full  flex flex-col items-start justify-center text-right">
                    <p className="text-[#0A2745] bold-fanum-font text-xl mb-2">
                      توسعه ماژول‌ها و راهکارهای اختصاصی
                    </p>
                    <p className="text-gray-600 fanum-font max-w-xl">
                      طراحی ماژول‌ها و قابلیت‌های سفارشی متناسب با نیاز هر
                      مجموعه.
                    </p>
                  </div>
                </div>
              </div>

              {/* left part */}
              <div className="w-full h-full ">
                <div className="w-full xl:h-1/3 h-auto xl:py-0 py-5 flex">
                  <div className="w-30 h-full  flex items-center justify-center">
                    {/* <div className="w-16 h-6 bg-[#FF4C00] rounded-md text-center ">
                    NEW
                  </div> */}
                    <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                  </div>
                  {/* text-container */}
                  <div className="w-full h-full  flex flex-col items-start justify-center text-right">
                    <p className="text-[#0A2745] bold-fanum-font text-xl mb-2">
                      پیاده‌سازی سامانه‌های سفارش‌گیری هوشمند
                    </p>
                    <p className="text-gray-600 fanum-font max-w-xl">
                      راهکارهای دیجیتال سفارش‌گیری شامل گارسون، کیوسک و ثبت
                      سفارش خودکار مشتری.
                    </p>
                  </div>
                </div>

                <div className="w-full xl:h-1/3 h-auto xl:py-0 py-5  flex">
                  <div className="w-30 h-full  flex items-center justify-center">
                    {/* <div className="w-16 h-6 bg-[#FF4C00] rounded-md text-center ">
                    NEW
                  </div> */}
                    <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                  </div>
                  {/* text-container */}
                  <div className="w-full h-full  flex flex-col items-start justify-center text-right">
                    <p className="text-[#0A2745] bold-fanum-font text-xl mb-2">
                      تأمین تجهیزات و سخت‌افزارهای رستورانی
                    </p>
                    <p className="text-gray-600 fanum-font max-w-xl">
                      عرضه و یکپارچه‌سازی سخت‌افزارهای موردنیاز رستوران‌ها و
                      مراکز غذایی.
                    </p>
                  </div>
                </div>

                <div className="w-full xl:h-1/3 h-auto xl:py-0 py-5  flex">
                  <div className="w-30 h-full  flex items-center justify-center">
                    {/* <div className="w-16 h-6 bg-[#FF4C00] rounded-md text-center ">
                    NEW
                  </div> */}
                    <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                  </div>
                  {/* text-container */}
                  <div className="w-full h-full  flex flex-col items-start justify-center text-right">
                    <p className="text-[#0A2745] bold-fanum-font text-xl mb-2">
                      استقرار، آموزش و پشتیبانی تخصصی
                    </p>
                    <p className="text-gray-600 fanum-font max-w-xl">
                      راه‌اندازی سیستم، آموزش کاربران و پشتیبانی حرفه‌ای در کنار
                      مشتریان.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto flex items-center justify-center mt-24">
              <Link href={"/demo"} className={BUTTON_SOLID_HERO_CLASSES}>
                دموی اختصاصی سول
              </Link>
            </div>
          </Container>
        </section>

        <section className="mt-24 xl:mt-44">
          <Container>
            <h2 className="extrabold-fanum-font text-2xl sm:text-3xl xl:text-[48px] lg:leading-[70px] w-full text-[#0A2745] text-right">
              افتخارات و ارزش‌های ما
            </h2>

            <div className="w-full h-full flex flex-col-reverse xl:flex-row justify-end gap-12 xl:gap-24 ">
              {/* Cards */}
              <div className="w-full xl:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6 xl:pt-16">
                <ValueCard
                  title="تمرکز بر حل مسائل عملیاتی"
                  description="در سول، توسعه محصولات بر اساس نیازهای واقعی و چالش‌های عملیاتی کسب‌وکارهای غذایی انجام می‌شود تا راهکارها بیشترین اثربخشی را در اجرا داشته باشند."
                />
                <ValueCard
                  title="توسعه مبتنی بر بهره‌وری"
                  description="فناوری در سول با هدف ساده‌سازی فرآیندها و افزایش بهره‌وری طراحی می‌شود، نه افزایش پیچیدگی‌های غیرضروری."
                />
                <ValueCard
                  title="قابلیت اتکا و پایداری سیستم‌ها"
                  description="پایداری، امنیت و دقت عملکرد، اصول بنیادین محصولات سول است تا سازمان‌ها بتوانند با اطمینان کامل بر سیستم‌های خود تکیه کنند."
                />
                <ValueCard
                  title="تعهد به همراهی و پشتیبانی مستمر"
                  description="سول خود را متعهد به همراهی بلندمدت با مشتریان می‌داند و پشتیبانی را بخشی جدایی‌ناپذیر از ارائه راهکار می‌شمارد."
                />
              </div>

              {/* Image */}
              <div className="w-full xl:w-[30%] h-72 sm:h-96 xl:h-auto relative md:flex hidden">
                <Image
                  src="/hero/phone-template.svg"
                  alt="Hero image"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </Container>
        </section>

        <section id="reviews" className="mt-24 xl:mt-44">
          <ConsultingAndDemo />
        </section>

        <section id="reviews" className="mt-24 xl:mt-44">
          <h2 className="extrabold-fanum-font text-2xl sm:text-3xl xl:text-[48px] lg:leading-[70px] w-full text-[#0A2745] text-center">
            گواهینامه‌ها، جوایز و افتخارات
          </h2>
          <SolLicanceCs />
        </section>

        <section id="reviews" className="mt-24 xl:mt-44">
          <SolBrands />
        </section>
      </div>
    </div>
  );
};

export default About;

// px-4 sm:px-4 md:px-12 lg:px-12 xl:px-16
