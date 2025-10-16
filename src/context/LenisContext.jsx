import React, { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext(null);

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // ✅ Inisialisasi Lenis
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
      direction: "vertical",
      touchMultiplier: 1.5,
      gestureDirection: "vertical",
    });

    lenisRef.current = lenis;
    window.lenis = lenis; // supaya bisa diakses global (kayak di SelectedWork)

    // ✅ Sync GSAP ScrollTrigger dengan Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // biar ScrollTrigger update posisi
    lenis.on("scroll", ScrollTrigger.update);

    // smooth connection GSAP ticker ke Lenis
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(() => lenis.raf());
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);
