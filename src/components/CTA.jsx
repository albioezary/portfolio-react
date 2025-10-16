import React from "react";
import { motion } from "framer-motion";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <motion.h2
          className="cta-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
        >
          Let's <span>Build</span> Something Wild Together
        </motion.h2>

        <motion.p
          className="cta-subtext"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Got a project, collab idea, or just wanna vibe about design?
          <br />
          Hit me up — let's make something that hits <b>different</b>.
        </motion.p>

        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.02,  rotate: -1 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={() => (window.location.href = "/contact")}
        >
          Hit Me Up
        </motion.button>
      </div>

    </section>
  );
}

export default CTA;
