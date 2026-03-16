import React from "react";
import LeadComponent from "./components/LeadComponent";
import Leads from "./components/Leads";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {

  return (
    <div>

      <h1>CRM Lead Management</h1>

      <LeadComponent />

      <Leads />

      <Dashboard />

    </div>
  );
}

export default App;