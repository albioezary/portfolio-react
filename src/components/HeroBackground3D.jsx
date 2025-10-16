import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ url }) {
  const { scene } = useGLTF(url);
  const modelRef = useRef();
  const targetRotation = useRef(new THREE.Vector2(0, 0));
  const [fadeProgress, setFadeProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // === Fade-in saat pertama muncul ===
  useEffect(() => {
    let frame;
    const start = performance.now();
    const duration = 2000;

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      setFadeProgress(eased);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // === Parallax scroll ===
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === Mouse rotation ===
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      targetRotation.current.x = x * Math.PI * 0.35;
      targetRotation.current.y = y * Math.PI * 0.20;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // === Frame update (animasi utama) ===
  useFrame(() => {
    if (!modelRef.current) return;

    // Rotasi mouse
    modelRef.current.rotation.y = THREE.MathUtils.lerp(
      modelRef.current.rotation.y,
      targetRotation.current.x,
      0.03
    );
    modelRef.current.rotation.x = THREE.MathUtils.lerp(
      modelRef.current.rotation.x,
      targetRotation.current.y,
      0.04
    );

    // Efek parallax scroll (naik-turun + depth)
    const offset = scrollY * 0.0002; // Semakin kecil semakin lembut
    modelRef.current.position.y = -offset * 3; // geser vertikal
    modelRef.current.rotation.x += offset * 0.1; // sedikit rotasi vertikal
    modelRef.current.position.z = -0.3 + offset * 8.5; // depth efek

    // Fade-in material
    if (scene && fadeProgress < 1) {
      scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.transparent = true;
          child.material.opacity = fadeProgress;
        }
      });
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1.5}
      position={[0, 0, -0.3]}
    />
  );
}

function HeroBackground3D() {
  return (
    <Canvas
      className="hero-canvas"
      camera={{ position: [0, 0, 3.2], fov: 45 }}
      gl={{
        toneMappingExposure: 2.8,
        alpha: true,
      }}
      style={{ background: "transparent" }}
    >
      {/* === Bright Studio Lighting (Enhanced 2.5) === */}
      <spotLight
        position={[0, 4, 3]}
        angle={0.4}
        penumbra={0.7}
        intensity={15}
        color="#ffffff"
      />
      <directionalLight position={[-3, 1, -2]} intensity={7} color="#f5f7ff" />
      <directionalLight position={[3, 1, -2]} intensity={19} color="#f5f7ff" />
      <directionalLight position={[0, 1, -4]} intensity={10} color="#ffffff" />
      <directionalLight position={[0, 3, 1]} intensity={3.5} color="#ffffff" />
      <ambientLight intensity={0.8} color="#3a3a3a" />

      <Suspense fallback={null}>
        <Model url="/models/koceng.glb" />
      </Suspense>

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

export default HeroBackground3D;
