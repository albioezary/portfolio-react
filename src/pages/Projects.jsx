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
    {
      id: 7,
      img: "/images/WhatsApp Image 2024-04-02 at 00.37.26 (1).jpeg",
      title: "Poster Study Aboard",
      category: "Design",
    },
    {
      id: 8,
      img: "/images/WhatsApp Image 2024-04-02 at 00.37.26.jpeg",
      title: "Poster Study Aboard",
      category: "Design",
    },
    {
      id: 9,
      img: "/images/tfjvgbnk.jpg",
      title: "Chillin With Godzilla",
      category: "Design",
    },
    {
      id: 10,
      img: "/images/kaka.png",
      title: "KAKA",
      category: "Design",
    },
    {
      id: 11,
      img: "/images/kaka2.png",
      title: "KAKA AGAIN",
      category: "Design",
    },
    {
      id: 12,
      img: "/images/kakaa.png",
      title: "KAKA AGAIN AGAIN",
      category: "Design",
    },
    {
      id: 13,
      img: "/images/ozil.png",
      title: "Mesut Ozil",
      category: "Design",
    },
    {
      id: 14,
      img: "/images/thewitch.jpg",
      title: "The Witch",
      category: "Design",
    },
    {
      id: 16,
      img: "/images/dewa19.png",
      title: "Dewa 19",
      category: "Design",
    },
    {
      id: 17,
      img: "/images/yd.png",
      title: "T-SHIRT DESIGN",
      category: "Design",
    },
    {
      id: 18,
      img: "/images/yzrasem2.png",
      title: "T-SHIRT DESIGN",
      category: "Design",
    },
    {
      id: 19,
      img: "/images/rnld.png",
      title: "CR7 TRACKRECORD",
      category: "Design",
    },
    {
      id: 20,
      img: "/images/judeb.png",
      title: "Jude Bellingham",
      category: "Design",
    },
    {
      id: 22,
      img: "/images/lamine.png",
      title: "Lamine Yamal",
      category: "Design",
    },
    {
      id: 23,
      img: "/images/batmobile.png",
      title: "Batmobile",
      category: "Design",
    },
    {
      id: 24,
      img: "/images/king.png",
      title: "King Movie Poster Grunge ",
      category: "Design",
    },
    {
      id: 25,
      img: "/images/batman poster (1).jpg",
      title: "Batman Poster",
      category: "Design",
    },
    {
      id: 26,
      img: "/images/geralt.png",
      title: "Geralt of Rivia",
      category: "Design",
    },
    {
      id: 27,
      img: "/images/whatusee.png",
      title: "WHATUSEE??",
      category: "Design",
    },
    {
      id: 28,
      img: "/images/bgdodo.png",
      title: "The Red Devil",
      category: "Design",
    },
    {
      id: 29,
      img: "/images/utrdufg.png",
      title: "Responsibility",
      category: "Design",
    },
    {
      id: 30,
      img: "/images/taktaola.png",
      title: "Faith ??",
      category: "Design",
    },
    {
      id: 31,
      img: "/images/imperial.jpg",
      title: "Wing Imperial",
      category: "Design",
    },
    {
      id: 32,
      img: "/images/homesick.png",
      title: "HomeSick",
      category: "Design",
    },
    {
      id: 33,
      img: "/images/sorry.png",
      title: "Suck in",
      category: "Design",
    },
    {
      id: 34,
      img: "/images/smoke.png",
      title: "addicted",
      category: "Design",
    },
    {
      id: 35,
      img: "/images/drogba.jpg",
      title: "Dider Drogba",
      category: "Design",
    },
    {
      id: 36,
      img: "/images/jwhvnzsx.jpg",
      title: "Koruptor Bangsat",
      category: "Design",
    },
    {
      id: 37,
      img: "/images/boring.jpg",
      title: "Boringgg....",
      category: "Design",
    },
    {
      id: 38,
      img: "/images/notallowedtofall.jpg",
      title: "i' a MAN",
      category: "Design",
    },
    {
      id: 39,
      img: "/images/smoker.jpg",
      title: "smoker",
      category: "Design",
    },
    {
      id: 40,
      img: "/images/chelsea copy.jpg",
      title: "Chelsea 2021",
      category: "Design",
    },
    {
      id: 41,
      img: "/images/lampard copy.png",
      title: "Frank Lampard",
      category: "Design",
    },
    {
      id: 42,
      img: "/images/joaofelix copy.png",
      title: "Joao felix",
      category: "Design",
    },
    {
      id: 43,
      img: "/images/dani-Recovered.png",
      title: "Dani Mabrur",
      category: "Design",
    },
    {
      id: 44,
      img: "/images/imal2 copy.png",
      title: "Imal Mabrur",
      category: "Design",
    },
    {
      id: 45,
      img: "/images/vespa copy.png",
      title: "Vespa Event Poster",
      category: "Design",
    },
    {
      id: 46,
      img: "/images/savinho copy.jpg",
      title: "Savinho",
      category: "Design",
    },
    {
      id: 47,
      img: "/images/colepalmer copy.jpg",
      title: "Cole Palmer",
      category: "Design",
    },
    {
      id: 48,
      img: "/images/supercopa copy.jpg",
      title: "Barca Super Copa Winner",
      category: "Design",
    },
    {
      id: 49,
      img: "/images/download (3).jpg",
      title: "Just Me And My Friends",
      category: "Design",
    },
    {
      id: 50,
      img: "/images/hazard copy.jpg",
      title: "Eden Hazard",
      category: "Design",
    },
    {
      id: 51,
      img: "/images/problem copy.jpg",
      title: "Everybody Have Their Own Problem",
      category: "Design",
    },
    {
      id: 52,
      img: "/images/mesutozil .png",
      title: "Mesut Ozil",
      category: "Design",
    },
    {
      id: 53,
      img: "/images/screaminskull2 copy.jpg",
      title: "just pray",
      category: "Design",
    },
    {
      id: 54,
      img: "/images/tababo copy.jpg",
      title: "Tababo",
      category: "Design",
    },
    {
      id: 55,
      img: "/images/gossip .jpg",
      title: "Gossip",
      category: "Design",
    },
    {
      id: 56,
      img: "/images/thiago copy.jpg",
      title: "Thiago silva",
      category: "Design",
    },
    {
      id: 57,
      img: "/images/fallin.jpg",
      title: "fallin",
      category: "Design",
    },
    {
      id: 58,
      img: "/images/griezmanmatchday copy.jpg",
      title: "Matchday Griezman",
      category: "Design",
    },
    {
      id: 59,
      img: "/images/rumor.jpg",
      title: "rumor",
      category: "Design",
    },
    {
      id: 60,
      img: "/images/curiosity2.jpg",
      title: "Curious",
      category: "Design",
    },
    {
      id: 61,
      img: "/images/drown.jpg",
      title: "Drown",
      category: "Design",
    },
    {
      id: 62,
      img: "/images/chelseabrighton (1).jpg",
      title: "Chelsea vs Brighton",
      category: "Design",
    },
    {
      id: 63,
      img: "/images/punk copy.jpg",
      title: "Bendinn",
      category: "Design",
    },
    {
      id: 64,
      img: "/images/alvaresmadrid.jpg",
      title: "Real Madrid VS Atletico",
      category: "Design",
    },
    {
      id: 65,
      img: "/images/griezmanvsvalverde copyy.jpg",
      title: "Real Madrid VS Atletico",
      category: "Design",
    },
    {
      id: 66,
      img: "/images/oscarandneymar.jpg",
      title: "Oscar and Neymar Back",
      category: "Design",
    },
    {
      id: 67,
      img: "/images/k-tv design5.png",
      title: "Intern Design",
      category: "Design",
    },
    {
      id: 68,
      img: "/images/k-tv design4.png",
      title: "Intern Design",
      category: "Design",
    },
    {
      id: 69,
      img: "/images/k-tv design7.png",
      title: "Intern Design",
      category: "Design",
    },
    {
      id: 70,
      img: "/images/k-tv design9.png",
      title: "Intern Design",
      category: "Design",
    },
    {
      id: 71,
      img: "/images/Untitled-12.jpg",
      title: "Intern Design",
      category: "Design",
    },
    {
      id: 72,
      img: "/images/pedri.jpg",
      title: "Pedri",
      category: "Design",
    },
    {
      id: 73,
      img: "/images/dembele copy.jpg",
      title: "Dembele Matchday",
      category: "Design",
    },
    {
      id: 74,
      img: "/images/magnuscarlsen .jpg",
      title: "magnus carlsen ",
      category: "Design",
    },
    {
      id: 75,
      img: "/images/COFFEE .jpg",
      title: "Coffee Poster ",
      category: "Design",
    },
    {
      id: 76,
      img: "/images/syaban.jpg",
      title: "Syaban Night",
      category: "Design",
    },
    {
      id: 77,
      img: "/images/mabrurdiduladha.jpg",
      title: "Syaban Night",
      category: "Design",
    },
    {
      id: 78,
      img: "/images/jeterlebaraninstastory.jpg",
      title: "Promo Lebaran",
      category: "Design",
    },
    {
      id: 79,
      img: "/images/bmw poster.jpg",
      title: "bmw poster",
      category: "Design",
    },
    {
      id: 80,
      img: "/images/lost.jpg",
      title: "Lost??",
      category: "Design",
    },
    {
      id: 81,
      img: "/images/palmerspurs.jpg",
      title: "Chelsea vs Spurs",
      category: "Design",
    },
    {
      id: 82,
      img: "/images/indo.jpg",
      title: "Indonesia vs Bahrain",
      category: "Design",
    },
    {
      id: 83,
      img: "/images/psg copy.jpg",
      title: "PSG vs Barcelona",
      category: "Design",
    },
    {
      id: 84,
      img: "/images/yamal classico copy2.png",
      title: "Lamine Yamal El Classico",
      category: "Design",
    },
    {
      id: 85,
      img: "/images/palmerrr copy.png",
      title: "Cold Palmer",
      category: "Design",
    },
    {
      id: 86,
      img: "/images/zentrip6.3.png.png",
      title: "Gili Ketapang Trip",
      category: "Design",
    },
    {
      id: 87,
      img: "/images/doue.png",
      title: "Desire Doue",
      category: "Design",
    },
    {
      id: 88,
      img: "/images/indojapan.png",
      title: "indonesia vs japan",
      category: "Design",
    },
    {
      id: 89,
      img: "/images/caramel copy.jpg",
      title: "Caramel Machiato",
      category: "Design",
    },
    {
      id: 90,
      img: "/images/IMG_20250718_180834_669 (1) copy.jpg",
      title: "PreOrder Design",
      category: "Design",
    },
    {
      id: 91,
      img: "/images/Espresso based copy.jpg",
      title: "Menu",
      category: "Design",
    },
    {
      id: 92,
      img: "/images/joaopedro copy.jpg",
      title: "joaopedro",
      category: "Design",
    },
    {
      id: 93,
      img: "/images/kanka4.jpg",
      title: "Pesuny Shirt Design",
      category: "Design",
    },
    {
      id: 94,
      img: "/images/kanka2.jpg",
      title: "Pesuny Shirt Design",
      category: "Design",
    },
    {
      id: 95,
      img: "/images/gibrancard12.jpg",
      title: "Card Pesuny Travel",
      category: "Design",
    },
    {
      id: 96,
      img: "/images/pesuny trans22 copy.jpg",
      title: "Card Pesuny Travel",
      category: "Design",
    },
    {
      id: 97,
      img: "/images/f8f3c2cbd25dcd11ceaf2c19b0dada3e.jpg",
      title: "just me and ma culture",
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
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  // 🧭 Scroll to Top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        >
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
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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

      {/* 🚀 Scroll To Top Button */}
      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Projects;
