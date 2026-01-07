import dynamic from "next/dynamic";
import { TESTIMONIALS } from "@/data/testimonials";

const WhySol = dynamic(() => import("@/components/whySol/whySol"));
const Hero = dynamic(() => import("@/components/hero/Hero"));

const Businesses = dynamic(() => import("@/components/Businesses/Businesses"));
const WebsSol = dynamic(() => import("@/components/webSol/WebsSol"));
const SpecialModule = dynamic(
  () => import("@/components/specialModule/SpecialModule")
);
const SolSoftwares = dynamic(
  () => import("@/components/solSoftwares/SolSoftwares")
);
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
const SolBrands = dynamic(() => import("@/components/solBrands/SolBrands"));
const SolUserExperience = dynamic(() =>
  import("@/components/solUserExperience/SolUserExperience").then(
    (mod) => mod.SolUserExperience
  )
);
const NewsBlogSection = dynamic(() =>
  import("@/components/NewsBlogSection/NewsBlogSection").then(
    (mod) => mod.NewsBlogSection
  )
);
const AboutSol = dynamic(() => import("@/components/aboutSol/AboutSol"));


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
      
      <AboutSol />
      <NewsBlogSection />
    </div>
  );
}
