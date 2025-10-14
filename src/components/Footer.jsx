// src/components/Footer.jsx
import React, { useState, useEffect } from "react";
import "./Footer.css";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      // Konversi ke WIB (UTC+7)
      const wibTime = new Date(now.getTime() + 7 * 60 * 60 * 1000 - now.getTimezoneOffset() * 60000);

      const hours = String(wibTime.getHours()).padStart(2, "0");
      const minutes = String(wibTime.getMinutes()).padStart(2, "0");
      const seconds = String(wibTime.getSeconds()).padStart(2, "0");

      setTime(`${hours}:${minutes}:${seconds}`);
    }

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer-sticky">
      <div className="footer-left">AVAILABLE FOR FREELANCE & FULLTIME</div>

      <div className="footer-center">{time} WIB</div>

      <div className="footer-right">
        <a href="mailto:aoezary@gmail.com">aoezary@gmail.com</a>
        <span className="footer-divider">|</span>
        <a href="tel:+6281807881170">+62 818-0788-1170</a>
      </div>
    </footer>
  );
}
