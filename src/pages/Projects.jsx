import React, { useState, useEffect, useRef } from "react";
import "./Project.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      img: "/images/984dd15192c1d8ce1d2811da637166ea739d8139_s2_n3_y1.png",
      title: "Landing Page",
      category: "Web",
    },
    {
      id: 2,
      img: "/images/ceicedo copy6.jpg",
      title: "Portfolio Design",
      category: "Design",
    },
    {
      id: 3,
      img: "/images/f8f3c2cbd25dcd11ceaf2c19b0dada3e.jpg",
      title: "E-Commerce UI",
      category: "Web",
    },
    {
      id: 4,
      img: "/images/isak copy5.jpg",
      title: "Dashboard Admin",
      category: "UI/UX",
    },
    {
      id: 5,
      img: "/images/neymar copy.jpg",
      title: "Travel Website",
      category: "Web",
    },
    {
      id: 6,
      img: "/images/orikijmkalambi3 copy.jpg",
      title: "Brand Identity",
      category: "Design",
    },
  ];

  const categories = ["All", "Web", "Design", "UI/UX"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastDistance = useRef(null);
  const lastTap = useRef(0);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // 🔒 Disable scroll pas modal aktif
  useEffect(() => {
    if (selectedImage) {
      setIsVisible(true);
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const timeout = setTimeout(() => setIsVisible(false), 300);
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      setZoom(1);
      setPosition({ x: 0, y: 0 });
      return () => clearTimeout(timeout);
    }
  }, [selectedImage]);

  // 🖱️ Zoom pakai scroll
  const handleWheel = (e) => {
    if (!selectedImage) return;
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    setZoom((prev) => Math.min(Math.max(prev + delta, 1), 3));
  };

  // 🖱️ Drag (desktop)
  const handleMouseDown = (e) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setPosition((prev) => {
      const newX = Math.max(Math.min(prev.x + dx, 300), -300);
      const newY = Math.max(Math.min(prev.y + dy, 300), -300);
      return { x: newX, y: newY };
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // 📱 Touch gesture (mobile)
  const handleTouchStart = (e) => {
    const now = Date.now();
    const timeSince = now - lastTap.current;

    // double tap to zoom
    if (timeSince < 300 && timeSince > 0) {
      setZoom((prev) => (prev > 1 ? 1 : 2));
      setPosition({ x: 0, y: 0 });
    }
    lastTap.current = now;

    if (e.touches.length === 1) {
      lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastDistance.current = Math.sqrt(dx * dx + dy * dy);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && zoom > 1) {
      const dx = e.touches[0].clientX - lastPos.current.x;
      const dy = e.touches[0].clientY - lastPos.current.y;
      lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setPosition((prev) => {
        const newX = Math.max(Math.min(prev.x + dx, 300), -300);
        const newY = Math.max(Math.min(prev.y + dy, 300), -300);
        return { x: newX, y: newY };
      });
    } else if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const newDistance = Math.sqrt(dx * dx + dy * dy);
      const delta = (newDistance - lastDistance.current) * 0.005;
      setZoom((prev) => Math.min(Math.max(prev + delta, 1), 3));
      lastDistance.current = newDistance;
    }
  };

  const handleTouchEnd = () => {
    lastDistance.current = null;
  };

  return (
    <div className="projects-container">
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="masonry-grid">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="masonry-item"
            onClick={() => setSelectedImage(p.img)}
          >
            <img src={p.img} alt={p.title} loading="lazy" />
            <div className="overlay">
              <h3>{p.title}</h3>
              <span>{p.category}</span>
            </div>
          </div>
        ))}
      </div>

      {(selectedImage || isVisible) && (
        <div
          className={`modal-overlay ${selectedImage ? "fade-in" : "fade-out"}`}
          onClick={() => setSelectedImage(null)}
          onWheel={handleWheel}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Tombol Zoom Control */}
          <div className="zoom-controls" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoom((z) => Math.min(z + 0.2, 3));
              }}
            >
              ＋
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoom((z) => Math.max(z - 0.2, 1));
              }}
            >
              －
            </button>
          </div>

          <button
            className="close-btn fixed-close"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
              transition: isDragging
                ? "none"
                : "transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)",
              cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
              touchAction: "none",
            }}
          >
            <img src={selectedImage} alt="Preview" draggable="false" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
