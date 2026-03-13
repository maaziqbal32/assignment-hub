import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PriceCalculator from "@/components/home/PriceCalculator";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SubjectsCountries from "@/components/home/SubjectsCountries";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <Layout>
    <HeroSection />
    <StatsSection />
    <ServicesOverview />
    <WhyChooseUs />
    <HowItWorksSection />
    <PriceCalculator />
    <TestimonialsSection />
    <SubjectsCountries />
    <FAQSection />
    <CTASection />
  </Layout>
);

export default Index;
