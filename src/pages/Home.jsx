// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroBackground3D from "../components/HeroBackground3D";
import "./Home.css";
import CTA from "../components/CTA";
import AboutPreview from "../components/AboutPreview";
import SelectedWork from "../components/SelectedWork";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const title = "BINYO";

  // Container buat stagger antar huruf (masih tetap pakai framer-motion)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, scale: 0.1, z: -300, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      scale: 1,
      z: 0,
      filter: "blur(0px)",
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const title = document.querySelector(".hero-title");
  const subtitle = document.querySelector(".hero-subtitle");
  const bg3D = document.querySelector(".hero-bg-container"); // 🆕 ambil container background 3D

  const heroHeight = window.innerHeight * 0.3;

  // timeline utama: blur + parallax
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-section",
      start: `top+=${heroHeight} top`,
      end: "bottom top",
      scrub: true,
      markers: false,
    },
  });

  // Judul dan subtitle fade + turun
  tl.to(title, {
    opacity: 0.2,
    filter: "blur(20px)",
    y: 130,
    duration: 1,
    ease: "none",
  }).to(
    subtitle,
    {
      opacity: 0,
      filter: "blur(20px)",
      y: 130,
      duration: 1,
      ease: "none",
    },
    "<"
  );

  // 🆕 Tambahan: Background 3D ikut fade dan turun
  tl.to(
    bg3D,
    {
      opacity: 0, 
      ease: "power2.out",
      duration: 1,
    },
    "<" // jalan bareng animasi di atas
  );
}, []);


  return (
    <div className="home">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-bg-container">
          <HeroBackground3D />
        </div>

        <div className="hero-content">
          <motion.h1
            className="hero-title"
            ref={titleRef}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                style={{
                  display: "inline-block",
                  transformOrigin: "center center",
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            ref={subtitleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            DIGITAL ARTISAN
          </motion.p>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW SECTION ===== */}
      <AboutPreview />

      {/* ===== Selected Work SECTION ===== */}
      <SelectedWork />

      {/* ===== CTA SECTION ===== */}
      <CTA />
    </div>
  );
}

export default Home;
