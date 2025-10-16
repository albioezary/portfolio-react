import React from "react";
import { motion } from "framer-motion";
import "./SelectedWorks.css";

const projects = [
  {
    id: 1,
    img: "/images/chelsea copy.jpg",
    title: "Poster Design",
    year: "2024",
    genre: "Graphic Design",
  },
  {
    id: 2,
    img: "/images/3477b9e673d6acc0bb063e58535edb40.jpg",
    title: "Album Cover",
    year: "2023",
    genre: "Music Art",
  },
  {
    id: 3,
    img: "/images/neymar copy.jpg",
    title: "Branding Concept",
    year: "2022",
    genre: "Brand Identity",
  },
  {
    id: 4,
    img: "/images/nkokko2.jpg",
    title: "UI Visual Exploration",
    year: "2024",
    genre: "UI/UX",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotate: -4,
    scale: 0.95,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1], // smooth but punchy
    },
  },
};

function SelectedWork() {
  return (
    <section className="selected-work-section">
      <motion.h2
        className="selected-title"
        initial={{ opacity: 0, y: 60, skewX: -8, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, skewX: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Selected <span className="anjay">Projects</span>
      </motion.h2>

      <motion.div
        className="work-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((work) => (
          <motion.div
            className="work-item"
            key={work.id}
            variants={itemVariants}
            whileHover={{ scale: 1.03, rotate: -0.5 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <motion.img
              src={work.img}
              alt={work.title}
              className="work-image"
              whileHover={{ filter: "brightness(1.2) contrast(1.2)" }}
              transition={{ duration: 0.4 }}
            />

            <motion.div
              className="work-info-inline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="work-title">{work.title}</p>
              <div className="work-meta-inline">
                <span className="work-genre">{work.genre}</span>
                <span className="dot-separator">•</span>
                <span className="work-year">{work.year}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <div className="work-button-container">
        <motion.button
          className="work-cta-button"
          whileHover={{ scale: 1.05, rotate: 1.2 }}
          transition={{ type: "spring", stiffness: 180 }}
          onClick={() => (window.location.href = "/contact")}
        >
          <span>-- See All Work --</span>
        </motion.button>
      </div>
    </section>
  );
}

export default SelectedWork;
