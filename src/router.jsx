import React from "react";
import { createHashRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/About";
import BrowsePage from "./pages/BrowsePage";
import MintingPage from "./pages/MintingPage";

const router = createHashRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/browse", element: <BrowsePage /> },
  { path: "/mint", element: <MintingPage /> },
]);

export default router;
