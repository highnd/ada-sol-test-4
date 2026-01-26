
import React from "react";
import AboutSol from "@/components/aboutSol/AboutSol";
import ConsultingAndDemo from "@/components/ConsultingAndDemo/ConsultingAndDemo";
import FAQAccordion from "@/components/FaqAccordian/FaqAccordian";
import SolBrands from "@/components/carousels/solBrands/SolBrands";
import { SolModuleCarousel } from "@/components/carousels/solModuleCS/SolModuleCarousel";
import { PlanCard } from "@/components/ui/cards";
import { features } from "@/data/features";
import { NEW_FEATURES } from "@/data/newFeatures";
import { FAQ_ITEMS } from "@/data/faq";
import { OTHER_PRODUCTS } from "@/data/otherProducts";
import Image from "next/image";

import { FaRegPlayCircle } from "react-icons/fa";
import PageHeader from "@/components/ui/templates/(restaurant-software)/PageHeader";
import Container from "@/components/ui/container";
import PageMobileNav from "@/components/ui/templates/(restaurant-software)/PageMobileNav";
import PageViewImages from "@/components/ui/templates/(restaurant-software)/PageViewImages";
import PageFeatures from "@/components/ui/templates/(restaurant-software)/PageFeatures";
import PageFeaturePro from "@/components/ui/templates/(restaurant-software)/PageFeaturePro";
import PageNewFeatures from "@/components/ui/templates/(restaurant-software)/PageNewFeatures";
import PageOtherProduct from "@/components/ui/templates/(restaurant-software)/PageOtherProduct";
import { EXAMPLE_COMMENTS } from "@/data/comments";
import PageCommentSection from "@/components/ui/templates/(restaurant-software)/PageCommentSection";

const WebRestaurantManagementSoftware = () => {
  const INITIAL_TEXT = `نرم افزار مدیریت رستوران سول، یک راهکار جامع و هوشمند برای مدیریت رستوران‌ها، فودکورت‌ها و کسب‌وکارهای حوزه مواد غذایی و رستورانی است. این نرم‌افزار امکان پیاده‌سازی به‌دو شکل تحت وب و ویندوزی را دارد، سول با ارائه طیف گسترده‌ای از امکانات، به شما کمک می‌کند تا تمامی فرایندهای رستوران خود را به صورت یکپارچه و کارآمد مدیریت کنید. از مدیریت منو و موجودی انبار گرفته تا ثبت سفارش، پرداخت و گزارش‌گیری، سول تمامی نیازهای شما را برطرف می‌کند. با استفاده از این نرم‌افزار، می‌توانید بهره‌وری کسب‌وکار خود را افزایش داده، هزینه‌ها را کاهش داده و رضایت مشتریان را به حداکثر برسانید. نرم‌ افزار مدیریت رستوران سول با ارائه مجموعه‌ای کامل از قابلیت‌ها و ویژگی‌ها، به شما کمک می‌کند تا کسب‌وکار خود را به صورت حرفه‌ای مدیریت کنید. این نرم‌افزار با رابط کاربری ساده و امکانات متنوع، انتخابی مناسب برای رستوران‌داران و صاحبان فودکورت‌ها است.`;
  const navigationItems = [
    { label: "نظرات", href: "#reviews" },
    { label: "سوالات متداول", href: "#faq" },
    { label: "سایر محصولات", href: "#products" },
    { label: "مشتری‌ها", href: "#customers" },
    { label: "سخت افزارها", href: "#hardware" },
    { label: "ماژول‌ها", href: "#modules" },
    { label: "دمو", href: "#demo" },
    { label: "ویژگی‌های جدید", href: "#features" },
    { label: "پکیج‌ها", href: "#packages" },
    { label: "امکانات حرفه ای", href: "#pro-features" },
    { label: "امکانات", href: "#features-list" },
    { label: "تصاویر", href: "#images" },
  ];

  const buttons = [
    { label: "داشبورد مدیریت رستوران" },
    { label: "فروش غذا" },
    { label: "گزارشات رستوران" },
    { label: "مدیریت اشخاص رستوران" },
    { label: "دریافت و پرداخت" },
    { label: "خرید و فروش (مواد اولیه)" },
    { label: "مدیریت انبار رستوران" },
    { label: "فرمول تولید و بهای تمام شده" },
    { label: "مدیریت کالا (مواد اولیه)" },
    { label: "مدیریت بانک و حساب‌های بانکی" },
  ];

  return (
    <div className="bg-white w-full h-full pb-40">
      {/* header titles + video */}
      <PageHeader
        title={
          <>
            نرم افزار مدیریت و حسابداری{" "}
            <span className="text-[#FF4C00]">تحت وب سول</span>
          </>
        }
        subtitle="کامل‌ترین ابزار برای مدیریت و حسابداری رستوران شما"
        description="نرم افزار رستوران آنلاین (ابری) سول محصولی از شرکت نرم افزاری آدا با تکنولوژی به روز، جهت ساده‌سازی فرایند‌های مدیریتی و حسابداری در رستوران شما"
        buttons={[
          { type: "solid", label: "دمو | مشاوره", href: "/demo" },
          { type: "outline", label: "پلن ها | قیمت ها", href: "/price" },
        ]}
      />

      <article className="w-full h-full ">
        <Container>
          {/*  video container */}
          <div className="w-full h-full flex flex-col items-center justify-center translate-y-[-48%]">
            <div className="w-full h-50 md:h-100 xl:h-132 2xl:h-140 bg-[#F0F5F7] rounded-4xl flex items-center justify-center  border-2 border-black">
              <FaRegPlayCircle className="text-black text-xl sm:text-3xl md:text-4xl lg:text-6xl cursor-pointer hover:opacity-80 transition-opacity" />
            </div>
          </div>
          {/* navigation list menu (fast reach) */}
          <PageMobileNav navigationItems={navigationItems} />

        </Container>
        {/* images section */}
        <section id="images">
          <Container>
            <PageViewImages
              title="نمایی از محیط کاربری نرم‌افزار رستورانی سول (نسخه تحت وب)"
              buttons={buttons}
            />
          </Container>
        </section>
        {/* features-list */}
        <section id="features-list">
          <Container>
            {/* <FeatureSection /> */}
            <PageFeatures
              title="امکانات نرم افزار مدیریت رستورانی سول"
              subtitle="قابلیت‌های ویژه"
              description="مجموعه‌ای کامل و یکپارچه از ابزارهای مدیریتی برای موفقیت در کسب‌وکار رستوران‌داری"
              features={features}
            />
          </Container>
        </section>

        {/* pro-features */}
        <PageFeaturePro
          title="توضیح بیشتر درباره امکانات و قابلیت های نرم افزار رستورانی تحت وب سول"
        />

        {/* packages */}
        <section id="packages" className="w-full h-full   ">
          <h2 className=" mx-auto lg:mt-52 mt-24 mb-8 extrabold-fanum-font text-center text-2xl xl:text-[48px] lg:leading-17.5 tracking-[0] max-w-4xl  text-[#0A2745] ">
            پکیج های نرم افزار رستورانی تحت وب سول
          </h2>

          <div className="w-full  h-auto  flex lg:flex-row flex-col items-center justify-center gap-14 mt-20 bg-accent py-12 px-8 ">
            <PlanCard
              planName="پلن پایه"
              description="راهکار ساده و مقرون‌به‌صرفه برای کسب‌وکارهای کوچک و نوپا"
              features=" این بسته پایه‌ای‌ترین راهکار مدیریت فروش و عملیات صندوق برای
                کسب‌وکارهای کوچک و نوپا است. اگر رستوران، فست‌فود یا کافی‌شاپ
                شما تازه شروع به کار کرده و به دنبال ابزاری ساده، مقرون‌به‌صرفه
                و کاربردی برای مکانیزه کردن فرآیند فروش هستید، این پلن انتخاب
                مناسبی برای شماست. امکانات پایه‌ای جهت مدیریت فروش، صدور فاکتور
                و گزارش‌گیری‌های ضروری را در اختیار خواهید داشت تا با کمترین
                هزینه، گام‌های نخست دیجیتالی شدن را بردارید."
              priceInquiryText=" استعلام قیمت و مشاوره"
              selected={false}
            />

            <PlanCard
              planName="پلن متوسط"
              description="مدیریت یکپارچه فروش و مالی برای کسب‌وکارهای در حال رشد"
              features="این پلن برای کسب‌وکارهای رو به رشد طراحی شده که نیازمند ابزارهای
                مدیریت یکپارچه‌تر و کنترل دقیق‌تر فرایندهای فروش و مالی هستند.
                مناسب رستوران‌ها، فست‌فودها و کافی‌شاپ‌هایی که می‌خواهند فراتر
                از عملیات ساده فروش، قابلیت‌هایی مانند کنترل هزینه، گزارش‌های
                تحلیلی و مدیریت پیشرفته‌تر را در یک پلتفرم کامل تجربه کنند. این
                بسته تعادلی عالی بین امکانات و هزینه ارائه می‌دهد تا رشد
                کسب‌وکار را تسریع کند."
              priceInquiryText=" استعلام قیمت و مشاوره"
              selected={true}
            />

            <PlanCard
              planName="پلن جامع"
              description="راهکار جامع و هوشمند برای کسب‌وکارهای حرفه‌ای و زنجیره‌ای"
              features="اگر به دنبال راهکاری جامع و کامل برای مدیریت تمام جوانب کسب‌وکار
                رستورانی خود هستید، این پلن ویژه کسب‌وکارهای حرفه‌ای و زنجیره‌ای
                طراحی شده است. از کنترل دقیق موجودی انبار و مدیریت سفارشات چند
                شعبه گرفته تا گزارش‌گیری‌های لحظه‌ای و اتوماسیون پیشرفته، همه
                امکانات لازم برای افزایش بهره‌وری، بهبود تجربه مشتری و رشد
                پایدار را در اختیار خواهید داشت. این بسته مناسب مدیرانی است که
                به دنبال تحول دیجیتال کامل و بهینه‌سازی تمام فرآیندهای
                کسب‌وکارشان هستند."
              priceInquiryText=" استعلام قیمت و مشاوره"
              selected={false}
            />
          </div>
        </section>

        {/* features */}

        <section>
          <PageNewFeatures
            title="ویژگی های جدید نسخه نرم افزار مدیریت رستوران سول"
            features={NEW_FEATURES}
          />
        </section>


        {/* demo */}
        <section id="demo">
          <ConsultingAndDemo />
        </section>

        {/* modules */}
        <section id="modules">
          <h2 className=" mx-auto lg:mt-52 mt-24 mb-8 extrabold-fanum-font text-center text-2xl xl:text-[48px] lg:leading-17.5 tracking-[0] max-w-4xl  text-[#0A2745] ">
            لیست ماژول های تخصصی نرم افزار سول
          </h2>

          <div className="w-full h-auto">
            <SolModuleCarousel />
          </div>
        </section>

        {/* hardware */}
        <section id="hardware" className="mt-24">
          <h2 className=" mx-auto lg:mt-52 mt-24 mb-16 extrabold-fanum-font text-center text-2xl xl:text-[48px] lg:leading-17.5 tracking-[0] max-w-4xl  text-[#0A2745] ">
            یکپارچه با تجهیزات سخت افزاری فروشگاهی
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10 place-items-center">
            {[
              { title: "کیوسک سفارشگیر", image: "/hardwares/kiosk.jpg" },
              { title: "صندوق فروشگاهی", image: "/hardwares/sandogh.png" },
              {
                title: "کالر آی دی رستورانی",
                image: "/hardwares/callerid.png",
              },
              { title: "فیش پرینتر", image: "/hardwares/fish-printer.png" },
              {
                title: "آل این وان (کامپیوتر بدون کیس)",
                image: "/hardwares/allinone.png",
              },
              {
                title: "میز سفارشگیر لمسی",
                image: "/hardwares/order-table.png",
              },
              {
                title: "استند بارکد و منوی دیجیتال(NFC و QR)",
                image: "/hardwares/stand-barcode.jpg",
              },
              { title: "تبلت سفارشگیر", image: "/hardwares/tablet.jpg" },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center cursor-pointer transition-all duration-300"
              >
                {/* IMAGE CIRCLE */}
                <div
                  className="  relative w-32 h-32 md:w-44 md:h-44 lg:w-72 lg:h-72 rounded-full  border border-[#FF4C00] bg-white  flex items-center justify-center  overflow-hidden  shadow-sm  
                  group-hover:shadow-xl  group-hover:-translate-y-2  transition-all duration-300 "
                >
                  {/* soft glow */}
                  <div className="absolute inset-0 rounded-full  opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

                  {/* image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="  object-contain  p-8  transition-transform duration-300  group-hover:scale-110 "
                  />
                </div>

                {/* TITLE */}
                <p className="mt-5 text-center text-[#0A2745] font-fanum text-sm lg:text-lg font-medium leading-relaxed max-w-44">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* customers */}
        <section id="customers" className="w-full">
          <SolBrands />
        </section>

        {/* products */}
        <section id="products" className="mt-24">
          <PageOtherProduct
            title="سایر محصولات سول"
            description="اگر علاوه بر نرم افزار رستوران تحت وب سول به راهکارهای تخصصی تری نیاز دارید میتوانید از میان سایر محصولات نرم افزار متناسب با کسب و کار خود را انتخاب کنید هر کدام از این راهکارها برای نیازهای مشخص طراحی شده اند و به صورت مستقل قابل استفاده هستند."
            products={OTHER_PRODUCTS}
            ctaButtonText="دریافت مشاوره رایگان"
            ctaButtonHref="/demo"
          />
        </section>

        {/* faq */}
        <section >
          <AboutSol text={INITIAL_TEXT} collapsedLength={400} />
        </section>

        {/* reviews */}
        <section id="faq" className="mt-24">
          <Container>
            <FAQAccordion items={FAQ_ITEMS} />
          </Container>
        </section>

        {/* revies / comments */}
        <section id="reviews" className="lg:mt-44 mt-24">
          <PageCommentSection comments={EXAMPLE_COMMENTS} />
        </section>
      </article>
    </div>
  );
};

export default WebRestaurantManagementSoftware;
