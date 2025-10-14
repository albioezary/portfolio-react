// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["projects", "about", "resume", "contact"];

  return (
    <motion.header 
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="nav-left">
        <Link to="/" className="nav-logo">ALBIOEZARY</Link>
      </div>

      {/* ===== HAMBURGER BUTTON (Mobile) ===== */}
      <button 
        className="hamburger" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
      </button>

      {/* ===== NAV LINKS ===== */}
      <nav className={`nav-right ${menuOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((item, idx) => {
            const text = item === "about" ? "ABOUT" :
                         item === "resume" ? "RÉSUMÉ" :
                         item === "contact" ? "KONTAK" :
                         "PROJECTS";

            return (
              <li key={idx}>
                <NavLink
                  to={`/${item}`}
                  className={({ isActive }) =>
                    !isHome && isActive 
                      ? `nav-item active ${item === "contact" ? "contact-link" : ""}`
                      : `nav-item ${item === "contact" ? "contact-link" : ""}`
                  }
                  onClick={() => setMenuOpen(false)} // close menu on click
                >
                  <FontAwesomeIcon icon={faDiamond} className="diamond-icon" />
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ===== MOBILE OVERLAY (Optional) ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
