import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import AIChatPage from "./pages/AIChatPage";
import TestChatPage from "./pages/TestChatPage";
import NotFound from "./pages/NotFound";
import "./App.css";
import { Layout } from "./components/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Removed "fixed" class to allow proper scrolling and positioning */}
        <div className="min-h-screen w-full bg-[#F5F7FA] overflow-x-hidden">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/subscriptions" element={<SubscriptionsPage />} />
                <Route path="/ai-chat" element={<AIChatPage />} />
                <Route path="/test-chat" element={<TestChatPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
