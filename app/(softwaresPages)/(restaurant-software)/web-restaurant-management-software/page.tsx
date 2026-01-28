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

import { FaRegPlayCircle } from "react-icons/fa";
import PageHeader from "@/components/ui/templates/(restaurant-software)/PageHeader";
import Container from "@/components/ui/container";
import PageMobileNav from "@/components/ui/templates/(restaurant-software)/PageMobileNav";
import PageViewImages from "@/components/ui/templates/(restaurant-software)/PageViewImages";
import PageFeatures from "@/components/ui/templates/(restaurant-software)/PageFeatures";
import PageFeaturePro from "@/components/ui/templates/(restaurant-software)/PageFeaturePro";
import PageNewFeatures from "@/components/ui/templates/(restaurant-software)/PageNewFeatures";
import PageOtherProduct from "@/components/ui/templates/(restaurant-software)/PageOtherProduct";
import PageHardware from "@/components/ui/templates/(restaurant-software)/PageHardware";
import { EXAMPLE_COMMENTS } from "@/data/comments";
import PageCommentSection from "@/components/ui/templates/(restaurant-software)/PageCommentSection";
import { HARDWARE_ITEMS } from "@/data/hardware";

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
          <div className="w-full h-full flex flex-col items-center justify-center translate-y-[-57%]">
            <div className="w-full h-50 md:h-70 xl:h-122 2xl:h-130 bg-[#F0F5F7] rounded-4xl flex items-center justify-center  border-2 border-black">
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
        <section id="pro-features">
          <PageFeaturePro title="با امکانات حرفه‌ای نرم‌افزار بیشتر آشنا شوید" />
        </section>

        {/* packages */}
        <section id="packages" className="w-full h-full mt-24   bg-accent">
          <h2 className=" mx-auto lg:mt-52 pt-20 mt-24 mb-8 px-4 extrabold-fanum-font text-center text-2xl xl:text-[48px] lg:leading-17.5 tracking-[0] max-w-4xl  text-[#0A2745] ">
            پکیج‌های نرم افزار رستورانی تحت وب سُول
          </h2>

          <div className="w-full  h-auto  flex lg:flex-row flex-col items-center justify-center gap-14   py-12 px-8 ">
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
              planName="پلن پیشرفته"
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

        {/* new features */}
        <section>
          <PageNewFeatures
            title="ویژگی‌های جدید آخرین نسخه نرم‌ افزار مدیریت رستوران سول"
            features={NEW_FEATURES}
          />
        </section>

        {/* demo */}
        <section id="demo" className="mt-24">
          <ConsultingAndDemo />
        </section>

        {/* modules */}
        <section id="modules" className="lg:mt-40 mt-24">
          <div className="w-full h-full py-6 xl:py-12 bg-accent">
            <h2 className=" mx-auto  mb-8 extrabold-fanum-font text-center text-2xl xl:text-[48px] lg:leading-17.5 tracking-[0] max-w-4xl  text-[#0A2745] ">
              لیست ماژول های تخصصی نرم افزار سول
            </h2>
            <SolModuleCarousel />
          </div>
        </section>

        {/* hardware */}
        <PageHardware
          title="یکپارچه با تجهیزات سخت افزاری فروشگاهی"
          hardwareItems={HARDWARE_ITEMS}
          buttonHref="/hardware" // Optional - button will show
          buttonText="خرید تجهیزات" // Optional - defaults to "خرید تجهیزات"
        />

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

        {/*  about sol */}
        <section>
          <AboutSol text={INITIAL_TEXT} collapsedLength={400} />
        </section>

        {/* faq */}
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
