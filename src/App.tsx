
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
