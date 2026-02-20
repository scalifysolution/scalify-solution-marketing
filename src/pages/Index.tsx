import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import DifferentiatorSection from "@/components/landing/DifferentiatorSection";
import WhatWeBuildSection from "@/components/landing/WhatWeBuildSection";
import AISection from "@/components/landing/AISection";
import BugFreeSection from "@/components/landing/BugFreeSection";
import ExecutionSection from "@/components/landing/ExecutionSection";
import ResultsSection from "@/components/landing/ResultsSection";
import TrustSection from "@/components/landing/TrustSection";
import BottomLeadForm from "@/components/landing/BottomLeadForm";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* ACT 1: Hook — We understand you */}
    <HeroSection />
    <ProblemSection />
    {/* ACT 2: The Solution — Here's how we're different */}
    <DifferentiatorSection />
    <WhatWeBuildSection />
    <AISection />
    {/* ACT 3: The Promise — We deliver, for real */}
    <BugFreeSection />
    <ExecutionSection />
    {/* ACT 4: Proof & Action */}
    <ResultsSection />
    <TrustSection
      testimonial={{
        quote:
          "I came to Scalify after 2 bad experiences with other developers. They didn’t just fix my app — they rebuilt my trust in this entire process.",
        author: "A founder who almost gave up",
      }}
    />
    <BottomLeadForm
      title="Your App Story"
      highlight="Starts Here"
      ctaText="Let's Build This Together 🚀"
    />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
