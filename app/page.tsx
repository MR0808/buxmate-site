import { FinalCtaSection } from "@/components/marketing/final-cta-section";
import { FeaturesSection } from "@/components/marketing/features-section";
import { HeroSection } from "@/components/marketing/hero-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { PreviewSection } from "@/components/marketing/preview-section";
import { PrivacySection } from "@/components/marketing/privacy-section";
import { ProblemSection } from "@/components/marketing/problem-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PrivacySection />
      <PreviewSection />
      <FinalCtaSection />
    </>
  );
}
