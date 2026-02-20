import Navbar from "@/components/landing/Navbar";
import AiHeroSection from "@/components/ai-platform/AiHeroSection";
import AiProblemSection from "@/components/ai-platform/AiProblemSection";
import AiConceptSection from "@/components/ai-platform/AiConceptSection";
import AiFeaturesSection from "@/components/ai-platform/AiFeaturesSection";
import AiUseCasesSection from "@/components/ai-platform/AiUseCasesSection";
import AiBenefitsSection from "@/components/ai-platform/AiBenefitsSection";
import AiPositioningSection from "@/components/ai-platform/AiPositioningSection";
import AiPackagesSection from "@/components/ai-platform/AiPackagesSection";
import AiProcessSection from "@/components/ai-platform/AiProcessSection";
import BottomLeadForm from "@/components/landing/BottomLeadForm";
import TrustSection from "@/components/landing/TrustSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const AiPlatform = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* ACT 1: Hook — The future is conversational */}
    <AiHeroSection />
    <AiProblemSection />
    {/* ACT 2: The Concept — Show them the shift */}
    <AiConceptSection />
    {/* ACT 3: The Brain — 6 layers of intelligence */}
    <AiFeaturesSection />
    {/* ACT 4: Proof — Works for any domain */}
    <AiUseCasesSection />
    <AiBenefitsSection />
    {/* ACT 5: Positioning & Action */}
    <AiPositioningSection />
    <AiPackagesSection />
    <AiProcessSection />
    <TrustSection
      testimonial={{
        quote:
          "Scalify made AI feel practical for us. We automated repetitive work, improved response time, and our team finally had space to focus on what matters.",
        author: "An operations manager",
      }}
    />
    <BottomLeadForm
      title="Ready to Build Your"
      highlight="AI Operations Platform?"
      ctaText="Show Me the AI Future 🤖"
    />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default AiPlatform;
