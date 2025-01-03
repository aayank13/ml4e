import CtaSection from "@/components/custom/CtaSection";
import FeaturesSection from "@/components/custom/FeaturesSection";
import HeroSection from "@/components/custom/HeroSection";
import PartnersLogoSection from "@/components/custom/PartnersLogoSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnersLogoSection />
      <FeaturesSection />
      <CtaSection />
    </main>
  );
}
