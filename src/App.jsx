// src/App.jsx
import React, { useEffect } from "react"; // ✨ Tambahkan useEffect di sini
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Lenis from "@studio-freight/lenis";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: true, // 🟢 ubah dari false ke true
      touchMultiplier: 1.5, // biar responsif tapi nggak terlalu cepat
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer sticky */}
      <Footer />
    </>
  );
}

export default App;
