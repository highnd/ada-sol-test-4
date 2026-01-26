import dynamic from "next/dynamic";
import { TESTIMONIALS } from "@/data/testimonials";
import Newslatter from "@/components/newslatter/newslatter";

const Hero = dynamic(() => import("@/components/hero/Hero"));
const WhySol = dynamic(() => import("@/components/whySol/whySol"));
const WebsSol = dynamic(() => import("@/components/webSol/WebsSol"));
const SpecialModule = dynamic(
  () => import("@/components/specialModule/SpecialModule")
);
const SolSoftwares = dynamic(
  () => import("@/components/solSoftwares/SolSoftwares")
);
const Businesses = dynamic(() => import("@/components/Businesses/Businesses"));

const HardwareBanner = dynamic(
  () => import("@/components/HardwareBanner/HardwareBanner")
);
const MapBanner = dynamic(() => import("@/components/MapBanner/MapBanner"));
const WhySolManagement = dynamic(
  () => import("@/components/whySolManagement/WhySolManagement")
);
const ConsultingAndDemo = dynamic(
  () => import("@/components/ConsultingAndDemo/ConsultingAndDemo")
);
const Solsafety = dynamic(() => import("@/components/solsafety/Solsafety"));
const SolBrands = dynamic(
  () => import("@/components/carousels/solBrands/SolBrands")
);
const SolUserExperience = dynamic(() =>
  import("@/components/carousels/solUserExperience/SolUserExperience").then(
    (mod) => mod.SolUserExperience
  )
);
const AboutSol = dynamic(() => import("@/components/aboutSol/AboutSol"));
const NewsBlogSection = dynamic(() =>
  import("@/components/NewsBlogSection/NewsBlogSection").then(
    (mod) => mod.NewsBlogSection
  )
);

const INITIAL_TEXT = `سول؛ قدرتمندترین و کامل‌ترین نرم‌افزار رستورانی است که با هدف یکپارچه‌سازی تمام فرایندهای حیاتی رستوران‌ها، فست‌فودها، فودکورت‌ها و کافی‌شاپ‌ها توسط متخصصان شرکت آدا طراحی شده و توسعه پیدا کرده است. این نرم‌افزار با نیازسنجی دقیق بازار و در ارتباط نزدیک با صاحبان برترین برندها و بهترین رستوران‌های کشور توسعه پیدا کرده و تمام نیازهای نرم‌افزاری یک رستوران یا فود‌کورت را در قالب یک بسته کامل نرم‌افزاری در اختیار آن‌ها قرار می‌دهد.
نرم افزار سول قابلیت استفاده به‌صورت تحت وب، روی ویندوز، اندروید و iOS را دارد. این بدان معناست که شما برای مدیریت رستوران‌تان حتی نیاز به حضور فیزیکی نیز ندارید و می‌توانید فقط با استفاده از یک دستگاه هوشمند متصل به اینترنت، مهم‌ترین فرایندهای کسب‌وکارتان را مدیریت کنید. سول فقط یک نرم افزار مدیریت رستوران نیست، سول ابزاری است برای مدیریت حسابداری رستوران، مدیریت باشگاه مشتریان، مدیریت فرایندها و جریان‌های کاری، مدیریت حقوق و دستمزد کارکنان، انبارگردانی، مدیریت اسناد مالی و ده‌ها قابلیت و ویژگی‌ دیگر که به‌محض پیاده‌سازی این نرم‌افزار در کسب‌وکارتان نتایج و ارزش افزوده‌ای که برای شما ایجاد می‌کنند را احساس خواهید کرد. برای پیاده‌سازی سول در رستوران‌تان کافی است با متخصصان ما تماس بگیرید، برای این‌کار از دکمه زیر استفاده کنید.`;

export default function Home() {
  return (
    <div className=" min-h-screen  w-full bg-white">
      <Hero />
      <WhySol />
      <WebsSol />
      <SpecialModule />
      <SolSoftwares />
      <Businesses />
      <HardwareBanner />
      <MapBanner />
      <WhySolManagement />
      <ConsultingAndDemo />
      <Solsafety />
      <SolBrands />
      <SolUserExperience
        title="تجربه مشتریان ما از نرم‌افزار رستورانی سول"
        testimonials={TESTIMONIALS}
      />
      <AboutSol text={INITIAL_TEXT} collapsedLength={400} />
      <NewsBlogSection />
      <Newslatter />
    </div>
  );
}
