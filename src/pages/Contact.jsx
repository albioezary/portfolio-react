import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contactgrunge-section">
      <h2 className="contactgrunge-title">
        LET’S <span className="hihglight">LINK</span> UP
      </h2>

      <div className="contactgrunge-links">
        <a
          href="https://www.instagram.com/binyoezary"
          target="_blank"
          rel="noopener noreferrer"
          className="contactgrunge-item"
        >
          <img
            src="/images/icon/ig.png"
            alt="Instagram"
            className="contactgrunge-icon"
          />
          <span>@albioezary</span>
        </a>

        <a
          href="mailto:albioezary@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contactgrunge-item"
        >
          <img
            src="/images/icon/email.png"
            alt="Email"
            className="contactgrunge-icon"
          />
          <span>albioezary@gmail.com</span>
        </a>

        <a
          href="https://wa.me/6281807881170"
          target="_blank"
          rel="noopener noreferrer"
          className="contactgrunge-item"
        >
          <img
            src="/images/icon/wa.png"
            alt="WhatsApp"
            className="contactgrunge-icon"
          />
          <span>+62 818-0788-1170</span>
        </a>
      </div>

      <div className="contactgrunge-patches">
        <img
          src="/images/icon/oasis.png"
          alt="patch"
          className="patch-item patch-1"
        />
        <img
          src="/images/icon/cv.png"
          alt="patch"
          className="patch-item patch-2"
        />
        <img
          src="public/images/icon/toa.png"
          alt="patch"
          className="patch-item patch-3"
        />

        <img
          src="/images/icon/rambu.png"
          alt="patch"
          className="patch-item patch-4"
        />
      </div>
    </section>
  );
}

export default Contact;
