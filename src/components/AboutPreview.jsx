import React from "react";
import { motion } from "framer-motion";
import "./AboutPreview.css";

function AboutPreview() {
  const textBlocks = [
    [
[
  "A mind that plays where <span class='highlight'>visuals</span> meet <span class='highlight'>vibes</span>.",
  "Not about trends or fancy rules — just makin’ things that <span class='highlight'>feel right</span>.",
  "Sometimes loud, sometimes quiet, always with a lil’ <span class='highlight'>chaos</span> tucked inside.",
  "At the end of the day, it’s simple — if it <span class='highlight'>hits</span>, it hits."
]


    ],
  ];

  return (
    <section className="about-preview raw">
      <motion.div
        className="about-inner"
        initial={{ opacity: 0, y: 80, rotate: 1 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h1
          className="about-title raw-title"
          initial={{ opacity: 0, y: 40, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          WHO’S BINYO ???
        </motion.h1>

        {/* Text Lines */}
        <div className="about-text-stack">
          {textBlocks.map((text, i) => (
            <motion.p
              key={i}
              className="about-raw-line"
              dangerouslySetInnerHTML={{ __html: text }}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 1,
                delay: 0.4 + i * 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
            />
          ))}
        </div>

        {/* Button */}
        <motion.div
          className="about-btn-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
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
            whileHover={{
              scale: 1.02,
              rotate: -1.4, // dikit biar ada “rebel tilt” kayak CTA lu
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span>More About Me →</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default AboutPreview;
