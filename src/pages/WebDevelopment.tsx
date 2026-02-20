import Navbar from "@/components/landing/Navbar";
import WebHeroSection from "@/components/website/WebHeroSection";
import WebProblemSection from "@/components/website/WebProblemSection";
import WebWhyScalifySection from "@/components/website/WebWhyScalifySection";
import WebPackagesSection from "@/components/website/WebPackagesSection";
import WebProcessSection from "@/components/website/WebProcessSection";
import BottomLeadForm from "@/components/landing/BottomLeadForm";
import TrustSection from "@/components/landing/TrustSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const WebDevelopment = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* ACT 1: Hook */}
    <WebHeroSection />
    <WebProblemSection />
    {/* ACT 2: Solution */}
    <WebWhyScalifySection />
    <WebPackagesSection />
    {/* ACT 3: Proof & Action */}
    <WebProcessSection />
    <TrustSection
      testimonial={{
        quote:
          "Our old website looked fine but didn’t convert. Scalify rebuilt it with a clear message, faster performance, and a lead flow that actually works.",
        author: "A business owner who needed leads",
      }}
    />
    <BottomLeadForm title="Ready to" highlight="Grow Your Business?" ctaText="🚀 Let's Build Your Growth Website" />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default WebDevelopment;
