import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import BrowsePage from "./pages/BrowsePage";
import MintingPage from "./pages/MintingPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/mint" element={<MintingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
