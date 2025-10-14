import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ url }) {
  const { scene } = useGLTF(url);
  const ref = useRef();
  const [scrollY, setScrollY] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const idleRotation = useRef(0); // rotasi idle yang terus jalan

  // Animasi masuk (fade + spin)
  useEffect(() => {
    let animationFrame;
    const startTime = Date.now();
    const duration = 2000;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimationProgress(eased);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Scroll parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if (!ref.current) return;

    // Efek masuk (scale, rotasi, posisi)
    if (isAnimating) {
      const spinRotation = animationProgress * Math.PI * 3; // putar 1.5x
      const scale = THREE.MathUtils.lerp(0, 1.5, animationProgress);
      const floatOffset = Math.sin(animationProgress * Math.PI) * 0.3;

      ref.current.rotation.y = spinRotation;
      ref.current.rotation.x = Math.sin(animationProgress * Math.PI) * 0.15;
      ref.current.scale.set(scale, scale, scale);
      ref.current.position.y = floatOffset * 0.3;

      // simpan rotasi terakhir agar idle lanjut dari posisi ini
      idleRotation.current = spinRotation;
    } 
    else {
      // Setelah animasi selesai → terus muter otomatis dari posisi terakhir
      idleRotation.current += 0.005;
      ref.current.rotation.y = idleRotation.current;

      // efek parallax halus
      const offset = scrollY * 0.0005;
      ref.current.position.y = -offset * 3;
      ref.current.rotation.x = offset * 1.5;
      ref.current.position.z = -0.4 + offset * 2;
    }
  });

  // Material Fade-in & Tone
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        const material = child.material;
        material.metalness = 1.0;
        material.roughness = 0.4;
        material.color = new THREE.Color("#262626");
        material.transparent = true;
        material.opacity = Math.min(animationProgress * 1.5, 1);

        if (material.map) {
          material.onBeforeCompile = (shader) => {
            shader.uniforms.tintColor = { value: new THREE.Color("#1a1a1aff") };
            shader.fragmentShader = `uniform vec3 tintColor;\n` + shader.fragmentShader;
            shader.fragmentShader = shader.fragmentShader.replace(
              "#include <dithering_fragment>",
              `
              gl_FragColor.rgb *= tintColor;
              #include <dithering_fragment>
              `
            );
          };
        }

        material.envMapIntensity = animationProgress * 1.5;
        material.needsUpdate = true;
      }
    });
  }, [animationProgress, scene]);

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0}
      position={[0, -0.2, -0.4]}
    />
  );
}

function StaticLights() {
  const [lightsProgress, setLightsProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1200;
    let frame;
    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setLightsProgress(eased);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <ambientLight intensity={2.5 * lightsProgress} />
      <directionalLight position={[5, 5, 5]} intensity={15 * lightsProgress} castShadow />
      <spotLight position={[-5, 5, 5]} intensity={12 * lightsProgress} angle={0.4} penumbra={0.5} />
      <pointLight position={[0, 2, -5]} intensity={8 * lightsProgress} />
      <rectAreaLight width={10} height={10} intensity={6 * lightsProgress} position={[-3, 2, 2]} />
      <pointLight position={[3, 5, -3]} intensity={4 * lightsProgress} color="#ff7700" />
    </>
  );
}

function HeroBackground3D() {
  return (
    <Canvas
      className="hero-canvas"
      camera={{ position: [0, 0, 1.9], fov: 50 }}
      gl={{ alpha: true }}
      style={{ background: "transparent" }}
    >
      <StaticLights />
      <Suspense fallback={null}>
        <Model url="/models/catcoin.glb" />
      </Suspense>
      <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
    </Canvas>
  );
}

export default HeroBackground3D;
