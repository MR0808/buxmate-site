import { FinalCtaSection } from "@/components/marketing/final-cta-section";
import { FeaturesSection } from "@/components/marketing/features-section";
import { GuestExperienceSection } from "@/components/marketing/guest-experience-section";
import { HeroSection } from "@/components/marketing/hero-section";
import { HomeJsonLd } from "@/components/marketing/home-json-ld";
import { HowItWorksSection } from "@/components/marketing/how-it-works-section";
import { PrivacySection } from "@/components/marketing/privacy-section";
import { ProblemSection } from "@/components/marketing/problem-section";
import {
  createPageMetadata,
  HOME_META_DESCRIPTION,
  HOME_OG_DESCRIPTION,
  HOME_TITLE,
} from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: HOME_TITLE,
  description: HOME_META_DESCRIPTION,
  socialDescription: HOME_OG_DESCRIPTION,
  path: "/",
  ogImageAlt:
    "Buxmate — plan bucks, hens and group weekends with RSVPs, shared costs and photos",
});

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <GuestExperienceSection />
      <PrivacySection />
      <FinalCtaSection />
    </>
  );
}
