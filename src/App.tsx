import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Flows from "./pages/Flows";
import Playground from "./pages/Playground";
import ApiKeys from "./pages/ApiKeys";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Enterprise from "./pages/Enterprise";
import Docs from "./pages/Docs";
import About from "./pages/About";
import Tutorials from "./pages/Tutorials";
import Startups from "./pages/Startups";
import Integrations from "./pages/Integrations";
import Community from "./pages/Community";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import GetStarted from "./pages/GetStarted";
import WorkflowTemplate from "./pages/WorkflowTemplate";
import AiMlFlows from "./pages/AiMlFlows";
import DataFlows from "./pages/DataFlows";
import CommunicationFlows from "./pages/CommunicationFlows";
import WorkflowBuilder from "./components/WorkflowBuilder";
import WatchDemo from "./pages/WatchDemo";
import StartFreeTrial from "./pages/StartFreeTrial";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThreeBackground from "./components/ThreeBackground";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="dark">
        <ThreeBackground />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/flows" element={<Flows />} />
              <Route path="/playground" element={<Playground />} />
              <Route path="/api-keys" element={<ApiKeys />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/about" element={<About />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/startups" element={<Startups />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/community" element={<Community />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/template/:id" element={<WorkflowTemplate />} />
              <Route path="/builder" element={<WorkflowBuilder />} />
              <Route path="/builder/:id" element={<WorkflowBuilder />} />
              <Route path="/watch-demo" element={<WatchDemo />} />
              <Route path="/flows/ai-ml" element={<AiMlFlows />} />
              <Route path="/flows/data" element={<DataFlows />} />
              <Route path="/flows/communication" element={<CommunicationFlows />} />
              <Route path="/start-free-trial" element={<StartFreeTrial />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
