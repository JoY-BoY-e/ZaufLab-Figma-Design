import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { TrustSection } from "@/components/trust-section";
import { ClientsSection } from "@/components/client-section";
import { DevelopmentApproachSection } from "@/components/development-approch-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";
import { CaseStudySection } from "@/components/case-studies";
import { GreatSoftwareSection } from "@/components/great-software-section";
import TechStackTabs from "@/components/tech-section";
import DevelopmentProcess from "@/components/development-process-section";
import FeaturedResources from "@/components/featured-resources-section";
import { HireBanner } from "@/components/banner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <ClientsSection />
        {/* <WorkSection /> */}
        <TestimonialsSection />
        <CaseStudySection />
        <GreatSoftwareSection />
        <DevelopmentApproachSection />
        <TechStackTabs />
        <DevelopmentProcess />
        <FeaturedResources />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-24">
          <HireBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}
