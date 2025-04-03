import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import { useScrollReveal } from "./utils/ScrollReveal";
import "./Portfolio.css";

// Lazy load pages for better performance with minimal visual delay
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage/ProjectsPage"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail/ProjectDetail"));
const BlogPage = lazy(() => import("./pages/BlogPage/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const TokenReducerPage = lazy(() =>
  import("./pages/TokenReducerPage/TokenReducerPage")
);
const EnergyExplorerPage = lazy(() =>
  import("./pages/EnergyExplorerPage/EnergyExplorerPage")
);
const TokenReducer = lazy(() =>
  import("./components/ProjectItems/TokenReducer/TokenReducer")
);
const Energyexplorer = lazy(() => import("../Components/Energyexplorer"));

// Simple fallback that doesn't feel like a loading state
const MinimalFallback = () => <div style={{ minHeight: "100vh" }}></div>;

const Portfolio = () => {
  // Initialize scroll reveal animations
  useScrollReveal();

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Component-only routes - no layout */}
        <Route
          path="/token-reducer-component"
          element={
            <Suspense fallback={<MinimalFallback />}>
              <TokenReducer />
            </Suspense>
          }
        />

        {/* Standard portfolio routes with layout */}
        <Route
          path="/*"
          element={
            <div className="portfolio-container">
              <Header />
              <main className="main-content">
                <Suspense fallback={<MinimalFallback />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    <Route
                      path="/demo/token-reducer"
                      element={<TokenReducerPage />}
                    />
                    {/* <Route
                      path="/demo/energy-explorer"
                      element={<EnergyExplorerPage />}
                    /> */}
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default Portfolio;
