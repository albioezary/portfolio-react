import React from "react";
import { motion } from "framer-motion";
import CTA from "../components/CTA";
import "./About.css";

function About() {
  const textBlocks = [
    "Sup, I’m <span class='highlight'>Albioezary</span> — but most folks just call me <span class='highlight'>Binyo</span>. I’m a graphic designer from <span class='highlight'>Madura</span> with a thing for <span class='highlight'>visuals</span> that hit loud and feel alive. My work’s all about havin’ fun — tryna build <span class='highlight'>dope</span> stuff, play with ideas, and keep things <span class='highlight'>movin’</span>.",
    "I love makin’ <span class='highlight'>stuff that just feels fun</span> — anything <span class='highlight'>visual</span> where I can <span class='highlight'>mess around</span>, <span class='highlight'>try new things</span>, and <span class='highlight'>tell stories</span> my own way. <span class='highlight'>Design’s kinda like my playground</span>, a space to throw ideas around and see what sticks. Sometimes it ends up <span class='highlight'>clean</span>, sometimes it’s <span class='highlight'>loud and chaotic</span>. I like when a <span class='highlight'>visual</span> got that <span class='highlight'>attitude</span>, y’know? Like it speaks even when it ain’t sayin’ nothin’.",
    "It ain’t just about pretty <span class='highlight'>visuals</span>. Whatever I’m <span class='highlight'>cookin’</span> up — art, ideas, or just pure <span class='highlight'>vibes</span> — I’m tryna make somethin’ that hits <span class='highlight'>different</span>, that stays <span class='highlight'>stuck</span> in your mind, not just scroll past your <span class='highlight'>screen</span>.",
  ];

  return (
    <>
      {/* ===== ABOUT SECTION ===== */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            {textBlocks.map((text, i) => (
              <motion.p
                key={i}
                className="about-line"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: i * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT I DO SECTION ===== */}
      <section className="whatido-section">
        <div className="whatido-container">
          <div className="whatido-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="whatido-title">STUFF I MESS WITH ???</h2>
            </motion.div>

            <motion.div
              className="focus-stack"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="focus-line">
                <span className="focus-label"> VISUAL DESIGN</span>
                <span className="focus-sub">
                  (posters, layouts, loud visuals)
                </span>
              </p>

              <p className="focus-line">
                <span className="focus-label"> FRONTEND</span>
                <span className="focus-sub">
                  (makin’ pixels move, makin’ sites breathe.)
                </span>
              </p>

              <p className="focus-line">
                <span className="focus-label"> MOTION</span>
                <span className="focus-sub">
                  (energy, rhythm, chaos that flows.)
                </span>
              </p>

              <p className="focus-line">
                <span className="focus-label"> DIGITAL ART</span>
                <span className="focus-sub">(space to bend the unreal.)</span>
              </p>

              <p className="focus-line">
                <span className="focus-label"> CONTENT</span>
                <span className="focus-sub">
                  (stories, noise, and vibe drops.)
                </span>
              </p>

              <p className="focus-line">
                <span className="focus-label"> BRAND & DIRECTION</span>
                <span className="focus-sub">(moods, shapes, and soul.)</span>
              </p>
            </motion.div>
          </div>

          {/* Parallax image */}
          <motion.div
            className="whatido-right parallax-wrap"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.img
              src="/images/nkokko2.jpg"
              alt="Binyo creative visual"
              className="whatido-image parallax"
              transition={{ type: "spring", stiffness: 120 }}
            />
          </motion.div>
        </div>
      </section>











      {/* ===== CTA SECTION ===== */}
<CTA />
    </>
  );
}

export default About;
