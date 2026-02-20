import Navbar from "@/components/landing/Navbar";
import CrmHeroSection from "@/components/crm/CrmHeroSection";
import CrmProblemSection from "@/components/crm/CrmProblemSection";
import CrmAISection from "@/components/crm/CrmAISection";
import CrmBenefitsSection from "@/components/crm/CrmBenefitsSection";
import CrmModulesSection from "@/components/crm/CrmModulesSection";
import CrmIndustriesSection from "@/components/crm/CrmIndustriesSection";
import CrmWhyScalifySection from "@/components/crm/CrmWhyScalifySection";
import CrmSaasSection from "@/components/crm/CrmSaasSection";
import CrmProcessSection from "@/components/crm/CrmProcessSection";
import BottomLeadForm from "@/components/landing/BottomLeadForm";
import TrustSection from "@/components/landing/TrustSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const CrmDevelopment = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* ACT 1: Hook — We understand your pain */}
    <CrmHeroSection />
    <CrmProblemSection />
    {/* ACT 2: The Solution — AI does everything for you */}
    <CrmAISection />
    <CrmBenefitsSection />
    <CrmModulesSection />
    {/* ACT 3: Proof — We've done this before */}
    <CrmIndustriesSection />
    <CrmWhyScalifySection />
    <CrmSaasSection />
    {/* ACT 4: Action — Let's build yours */}
    <CrmProcessSection />
    <TrustSection
      testimonial={{
        quote:
          "We were losing leads due to follow-up chaos. Scalify helped us streamline the pipeline, automate reminders, and finally get clarity in sales.",
        author: "A sales team lead",
      }}
    />
    <BottomLeadForm
      title="Ready to Let AI"
      highlight="Run Your Sales?"
      ctaText="Show Me What AI Can Do 🤖"
    />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default CrmDevelopment;
