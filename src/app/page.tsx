import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { TrustSection } from "@/components/trust-section";
import { Footer } from "@/components/footer";
import dynamic from "next/dynamic";
import { HireBanner } from "@/components/banner";
import { DevelopmentApproachSection } from "@/components/development-approch-section";
import { GreatSoftwareSection } from "@/components/great-software-section";

// Dynamic imports for below-the-fold components
const ClientsSection = dynamic(
  () =>
    import("@/components/client-section").then((mod) => ({
      default: mod.ClientsSection,
    })),
  {
    loading: () => (
      <div className="h-48 flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    ),
  }
);

const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section"),
  {
    loading: () => (
      <div className="h-48 flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    ),
  }
);

const CaseStudySection = dynamic(
  () =>
    import("@/components/case-studies").then((mod) => ({
      default: mod.CaseStudySection,
    })),
  {
    loading: () => (
      <div className="h-48 flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    ),
  }
);

const TechStackTabs = dynamic(() => import("@/components/tech-section"), {
  loading: () => (
    <div className="h-48 flex items-center justify-center">
      <div className="animate-pulse">Loading...</div>
    </div>
  ),
});

const DevelopmentProcess = dynamic(
  () => import("@/components/development-process-section"),
  {
    loading: () => (
      <div className="h-48 flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    ),
  }
);

const FeaturedResources = dynamic(
  () => import("@/components/featured-resources-section"),
  {
    loading: () => (
      <div className="h-48 flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    ),
  }
);

export const metadata = {
  title: "My Awesome Site",
  description:
    "Welcome to My Awesome Site — explore features, blogs, and resources for developers.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" role="main">
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
