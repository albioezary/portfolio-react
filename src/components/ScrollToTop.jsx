// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll halus ke atas setiap kali pathname berubah
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
