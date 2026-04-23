import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { AffiliateProvider } from "@/contexts/AffiliateContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BuiltDifferent from "@/pages/BuiltDifferent";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import Calculator from "@/pages/Calculator";
import ThankYou from "@/pages/ThankYou";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/built-different" component={BuiltDifferent} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contact" component={Contact} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/thank-you" component={ThankYou} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AffiliateProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </AffiliateProvider>
    </QueryClientProvider>
  );
}

export default App;
