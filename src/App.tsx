import React, { useState } from "react";
import Signup from "./pages/Signup";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import { LandingPage } from "./pages/LandingPage";
import { FreelancerProvider, useFreelancer } from "./context/FreelancerContext";

function AppContent() {
  const { isAuthenticated, freelancer } = useFreelancer();
  const [currentPage, setCurrentPage] = useState<"landing" | "signup">("landing");

  if (isAuthenticated) {
    if (freelancer?.role === "client") {
      return <ClientDashboard />;
    }
    return <FreelancerDashboard />;
  }

  if (currentPage === "signup") {
    return <Signup onBack={() => setCurrentPage("landing")} />;
  }

  return <LandingPage onSignup={() => setCurrentPage("signup")} />;
}

function App() {
  return (
    <FreelancerProvider>
      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
      <AppContent />
    </FreelancerProvider>
  );
}

export default App;