import Navbar from "@/components/landing/Navbar";
import SocialHeroSection from "@/components/social/SocialHeroSection";
import SocialProblemSection from "@/components/social/SocialProblemSection";
import SocialWhyScalifySection from "@/components/social/SocialWhyScalifySection";
import SocialContentSection from "@/components/social/SocialContentSection";
import SocialStrategySection from "@/components/social/SocialStrategySection";
import SocialPackagesSection from "@/components/social/SocialPackagesSection";
import BottomLeadForm from "@/components/landing/BottomLeadForm";
import TrustSection from "@/components/landing/TrustSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const SocialMediaMarketing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* ACT 1: Hook */}
    <SocialHeroSection />
    <SocialProblemSection />
    {/* ACT 2: Solution */}
    <SocialWhyScalifySection />
    <SocialContentSection />
    <SocialStrategySection />
    {/* ACT 3: Proof & Action */}
    <SocialPackagesSection />
    <BottomLeadForm title="Ready to" highlight="Scale Your Brand?" ctaText="🚀 Let's Grow Together" />
    <TrustSection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default SocialMediaMarketing;
