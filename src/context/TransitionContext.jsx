// src/context/TransitionContext.jsx
import React, { createContext, useContext, useRef } from "react";
import gsap from "gsap";

const TransitionContext = createContext();

export function TransitionProvider({ children }) {
  const whiteRef = useRef(null);
  const blackRef = useRef(null);

  const playTransition = async (navigate) => {
    const tl = gsap.timeline();

    await tl
      // 🥶 MASUK: putih turun dulu
      .to(whiteRef.current, {
        y: "0%",
        duration: 0.4,
        ease: "power4.inOut",
      })
      // 🖤 disusul hitam turun dari atas
      .to(
        blackRef.current,
        {
          y: "0%",
          duration: 0.45,
          ease: "power4.inOut",
        },
        "-=0.2" // overlap dikit biar nyatu
      )
      .add(() => navigate()) // 🔁 navigasi di tengah
      // 🖤 KELUAR: hitam naik dulu
      .to(blackRef.current, {
        y: "-100%",
        duration: 0.45,
        ease: "power4.inOut",
      })
      // 🤍 lalu putih naik terakhir
      .to(
        whiteRef.current,
        {
          y: "-100%",
          duration: 0.45,
          ease: "power4.inOut",
        },
        "-=0.2"
      );
  };

  return (
    <TransitionContext.Provider value={{ playTransition }}>
      {/* 🤍 LAYER PUTIH */}
      <div
        ref={whiteRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#000000ff",
          transform: "translateY(-100%)",
          zIndex: 50,
          pointerEvents: "none",
        }}
      />

      {/* 🖤 LAYER HITAM */}
      <div
        ref={blackRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffffff",
          transform: "translateY(-100%)",
          zIndex: 51,
          pointerEvents: "none",
        }}
      />

      {children}
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  return useContext(TransitionContext);
}
