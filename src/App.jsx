import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { LenisProvider } from "./context/LenisContext";
import ScrollToTop from "./components/ScrollToTop";
import { TransitionProvider } from "./context/TransitionContext";

function App() {
  return (
    <LenisProvider>
      <TransitionProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </TransitionProvider>
    </LenisProvider>
  );
}

export default App;
