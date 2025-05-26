import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs";
import Yearbook from "./pages/Yearbook";

// Import LOGO for favicon
const faviconUrl = "/logo.png";

// Update favicon
const setFavicon = () => {
  const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
  link.setAttribute("rel", "shortcut icon");
  link.setAttribute("href", faviconUrl);
  document.getElementsByTagName("head")[0].appendChild(link);
};

setFavicon();

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/yearbook" element={<Yearbook />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
