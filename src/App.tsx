import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// The share build is a single-page preview hosted at a path we don't control, so it skips routing.
const isShare = import.meta.env.MODE === "share";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    {isShare ? (
      <Index />
    ) : (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    )}
  </QueryClientProvider>
);

export default App;
