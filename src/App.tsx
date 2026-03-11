import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Benefits from "./pages/Benefits";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import MarketingLayout from "./components/layout/MarketingLayout";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);
  return null;
};

const App = () => (
  <ErrorBoundary>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<MarketingLayout><Index /></MarketingLayout>} />
          <Route path="/features" element={<MarketingLayout><Features /></MarketingLayout>} />
          <Route path="/benefits" element={<MarketingLayout><Benefits /></MarketingLayout>} />
          <Route path="/pricing" element={<MarketingLayout><Pricing /></MarketingLayout>} />
          <Route path="/faq" element={<MarketingLayout><FAQ /></MarketingLayout>} />
          <Route path="/contact" element={<MarketingLayout><Contact /></MarketingLayout>} />
          <Route path="/privacy" element={<MarketingLayout><Privacy /></MarketingLayout>} />
          <Route path="/terms" element={<MarketingLayout><Terms /></MarketingLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
