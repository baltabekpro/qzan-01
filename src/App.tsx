
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";

import { AppSidebar } from "./components/AppSidebar";
import { Header } from "./components/Header";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AIChatPage from "./pages/AIChatPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import RequestsPage from "./pages/RequestsPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <div className="flex h-screen overflow-hidden bg-[#F7F8FA]">
            <AppSidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
              <Header />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/ai-chat" element={<AIChatPage />} />
                <Route path="/subscriptions" element={<SubscriptionsPage />} />
                <Route path="/requests" element={<RequestsPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
