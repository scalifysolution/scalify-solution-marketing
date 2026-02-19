import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CrmDevelopment from "./pages/CrmDevelopment";
import AiPlatform from "./pages/AiPlatform";
import WebDevelopment from "./pages/WebDevelopment";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/app-development" element={<Index />} />
          <Route path="/crm-development" element={<CrmDevelopment />} />
          <Route path="/ai-platform" element={<AiPlatform />} />
          <Route path="/website-development" element={<WebDevelopment />} />
          <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
