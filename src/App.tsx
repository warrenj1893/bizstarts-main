import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Entrepreneurs from "./pages/Entrepreneurs";
import Programming from "./pages/Programming";
import Events from "./pages/Events";
import NewsAndResources from "./pages/NewsAndResources";
import Contact from "./pages/Contact";
import InstitutoLatino from "./pages/InstitutoLatino";
import AnnualEvent from "./pages/AnnualEvent";
import Scholarship from "./pages/Scholarship";
import FirstLaunch from "./pages/FirstLaunch";
import CapitalCatalyst from "./pages/CapitalCatalyst";
import Coaching from "./pages/Coaching";
import Membership from "./pages/Membership";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
  <ScrollToTop />
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/entrepreneurs" element={<Entrepreneurs />} />
      <Route path="/programming" element={<Programming />} />
      <Route path="/events" element={<Events />} />
      <Route path="/news-and-resources" element={<NewsAndResources />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/instituto-latino" element={<InstitutoLatino />} />
      <Route path="/capital-catalyst" element={<CapitalCatalyst />} />
      <Route path="/coaching" element={<Coaching />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/annual-event" element={<AnnualEvent />} />
      <Route path="/scholarship" element={<Scholarship />} />
      <Route path="/first-launch" element={<FirstLaunch />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
