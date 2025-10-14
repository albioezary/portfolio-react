// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroBackground3D from "../components/HeroBackground3D";
import "./Home.css";

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
    const bg3D = document.querySelector(".hero-bg"); // pastikan HeroBackground3D ada class ini

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

    tl.to(title, {
      opacity: 0.2,
      filter: "blur(20px)",
      y: 130, // turun 100px
      duration: 1,
      ease: "none",
    }).to(
      subtitle,
      {
        opacity: 0,
        filter: "blur(20px)",
        y: 120, // turun 80px
        duration: 1,
        ease: "none",
      },
      "<"
    );
  }, []);

  return (
    <div className="home">
      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <HeroBackground3D />

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
{/* ===== ABOUT PREVIEW SECTION ===== */}
<section className="about-preview minimal">
  <motion.div
    className="about-inner"
    initial={{ opacity: 0, y: 80, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <motion.h1
      className="about-title"
      initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1.1,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
    >
      A LITTLE ABOUT ME
    </motion.h1>

    {/* Paragraf 1 */}
    <motion.p
      className="about-minimal-text"
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1.2,
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
    >
      So yeah — I’m <span>Albioezary</span>, but most people just call me{" "}
      <span>Binyo</span>.
    </motion.p>

    {/* Paragraf 2 */}
    <motion.p
      className="about-minimal-text"
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1.2,
        delay: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
    >
      I create digital visuals that live somewhere between{" "}
      <span>design</span>, <span>motion</span>, and <span>code even though it's rare</span>.
    </motion.p>

    {/* Paragraf 3 */}
    <motion.p
      className="about-minimal-text"
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1.2,
        delay: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
    >
      I enjoy experimenting with ideas, turning them into visuals that feel
      modern but still have soul.
    </motion.p>

    {/* Paragraf 4 */}
    <motion.p
      className="about-minimal-text"
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1.2,
        delay: 1.0,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
    >
      For me, design isn’t just about how it looks — it’s about how it{" "}
      <span>feels</span> when someone experiences it.
    </motion.p>

    {/* Paragraf 5 */}
    <motion.p
      className="about-minimal-text"
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 1.2,
        delay: 1.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
    >
      I like keeping things <span>clean</span>, <span>functional</span>, and a
      little bit <span>poetic</span> in their own way.
    </motion.p>

    {/* Button */}
    <motion.div
      className="about-btn-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 1.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
    >
      <motion.button
        className="about-btn"
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          } else {
            window.location.href = "/about";
          }
        }}
        whileHover={{ scale: 1.07, backgroundColor: "#fff", color: "#000" }}
        whileTap={{ scale: 0.97 }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 16,
        }}
      >
        More About Me →
      </motion.button>
    </motion.div>
  </motion.div>
</section>


















 {/* ===== SELECTED WORKS SECTION - EDITORIAL GRUNGE ===== */}
<section className="selected-works rock-elegance">
  <div className="grain-overlay"></div>

  <motion.div
    className="works-inner"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
    viewport={{ once: true, amount: 0.1 }}
  >
    {/* Main Title */}
    <motion.div
      className="title-container"
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
      viewport={{ once: true }}
    >
      <h1 className="works-title-rock">Selected Work</h1>
      <div className="title-underline"></div>
    </motion.div>

    {/* Projects */}
    {[
      {
        name: "PROJECT AURORA",
        year: "2024",
        description: "Interactive 3D experience exploring light and motion through WebGL. A rebellion against static design—where light becomes the primary medium of expression.",
        tags: ["WEBGL", "THREE.JS", "MOTION", "REBELLION"],
        image: "/images/chelsea copy.jpg",
        overlayText: "EXPLORE →",
      },
      {
        name: "NEXUS IDENTITY",
        year: "2024",
        description: "Visual identity that breaks corporate mold. Crafting a brand language that screams innovation while maintaining sophisticated elegance.",
        tags: ["BRANDING", "UI/UX", "REBEL", "DESIGN"],
        image: "/images/3477b9e673d6acc0bb063e58535edb40.jpg",
        overlayText: "VIEW CASE →",
      },
      {
        name: "APAKEK",
        year: "2024",
        description: "anjay apa ria cok",
        tags: ["WEBGL", "THREE.JS", "MOTION", "REBELLION"],
        image: "/images/f66c17d1bc000edb60130f2531b3d07f.jpg",
        overlayText: "EXPLORE →",
      },
      {
        name: "PROJECT AURORA",
        year: "2024",
        description: "Interactive 3D experience exploring light and motion through WebGL. A rebellion against static design—where light becomes the primary medium of expression.",
        tags: ["WEBGL", "THREE.JS", "MOTION", "REBELLION"],
        image: "/images/chelsea copy.jpg",
        overlayText: "EXPLORE →",
      },
    ].map((project, idx) => (
      <motion.div
        className="work-item-rock"
        key={idx}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.7,
          delay: idx * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="work-content-rock">
          <div className="work-header">
            <h3 className="work-name-rock">{project.name}</h3>
            <div className="work-year">{project.year}</div>
          </div>
          <p className="work-description-rock">{project.description}</p>
          <div className="work-tags-rock">
            {project.tags.map((tag, i) => (
              <span className="work-tag-rock" key={i}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="work-image-rock">
          <img
            src={project.image}
            alt={project.name}
            className="work-image-real-rock"
          />
          <div className="image-overlay-rock">
            <span className="overlay-text">{project.overlayText}</span>
            <div className="overlay-line"></div>
          </div>
        </div>
      </motion.div>
    ))}

    {/* View All Button */}
    <motion.div
      className="works-btn-wrapper-rock"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
    >
      <motion.button
        className="works-btn-rock"
        onClick={() => window.location.href = "/projects"}
        whileHover={{ backgroundColor: "#fff", color: "#000" }}
      >
        See All Projects
        <span className="btn-arrow">⟶</span>
      </motion.button>
    </motion.div>
  </motion.div>
</section>





{/* ===== CTA / CONNECT SECTION ===== */}
<section className="cta-section">
  <motion.div
    className="cta-inner"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true, amount: 0.3 }}
    style={{ textAlign: "center", padding: "3em 1rem" }}
  >
    <motion.h2
      className="cta-title"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ fontSize: "5rem", marginBottom: "1rem" }}
    >
      Let’s Create Something Together
    </motion.h2>

    <motion.p
      className="cta-subtitle"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 0.2 }}
      style={{ fontSize: "1.rem", color: "#0e0e0eff", marginBottom: "2.5rem" }}
    >
      Have an idea, project, or just want to say hi? My inbox is always open.
    </motion.p>

    <motion.a
      onClick={() => window.location.href = "/contact"}
      className="cta-btn"
      whileHover={{ backgroundColor: "#000000ff", color: "#ffffffff" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      style={{
        display: "inline-block",
        padding: "1rem 2rem",
        fontSize: "1.05rem",
        fontWeight: "600",
        border: "1px solid #000000ff",
        color: "#0a0a0aff",
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
      Say Hello →
    </motion.a>

  </motion.div>
</section>




























    </div>
  );
}

export default Home;
