"use client";

import { useState, useEffect, useCallback } from "react";

/* ── Every image from the public folder ─────────────────────────────── */
const ALL_IMAGES = [
  /* Jeep Safari */
  { src: "/jeep/jeep 9.png",  cat: "Safari",      title: "Kanthalloor Mountain Viewpoint" },
  { src: "/jeep/jeep0.png",   cat: "Safari",      title: "Jeep Safari Trail" },
  { src: "/jeep/jeep2.jpeg",  cat: "Safari",      title: "Mountain Road Drive" },
  { src: "/jeep/jeep21.jpeg", cat: "Safari",      title: "Jeep Adventure" },
  { src: "/jeep/jeep3.jpeg",  cat: "Safari",      title: "Forest Trail" },
  { src: "/jeep/jeep4.jpeg",  cat: "Safari",      title: "Scenic Route" },
  { src: "/jeep/jeep5.jpeg",  cat: "Safari",      title: "Valley View Trail" },
  /* Attractions */
  { src: "/attractions/view-point.jpeg",            cat: "Attractions", title: "Bramaram Viewpoint" },
  { src: "/attractions/view-point2.jpeg",           cat: "Attractions", title: "Valley Viewpoint" },
  { src: "/attractions/irachipara-waterfalls.jpeg", cat: "Attractions", title: "Irachipara Waterfalls" },
  { src: "/attractions/dandel-forest.jpeg",         cat: "Attractions", title: "Sandal Forest" },
  { src: "/attractions/honey-rock.jpeg",            cat: "Attractions", title: "Honey Rock" },
  { src: "/attractions/muruga-malai.jpeg",          cat: "Attractions", title: "Murugan Malai" },
  { src: "/attractions/jeggery.jpeg",               cat: "Attractions", title: "Jaggery Making" },
  { src: "/attractions/deer.jpeg",                  cat: "Attractions", title: "Wildlife — Deer" },
  { src: "/attractions/gaor.jpeg",                  cat: "Attractions", title: "Wildlife — Gaur" },
  { src: "/attractions/zip-line.jpeg",              cat: "Attractions", title: "Zip Line" },
  { src: "/attractions/zip-line-2.jpeg",            cat: "Attractions", title: "Zip Line Adventure" },
  /* Waterfall */
  { src: "/waterfals.png",                          cat: "Nature",      title: "Kanthalloor Waterfall" },
  /* Rooms */
  { src: "/stays/res1.jpeg",  cat: "Rooms", title: "Premium Stay Room" },
  { src: "/stays/res2.jpeg",  cat: "Rooms", title: "Standard Room" },
  { src: "/stays/res3.jpeg",  cat: "Rooms", title: "Deluxe Nature Room" },
  { src: "/stays/res4.jpeg",  cat: "Rooms", title: "Family Stay Room" },
  { src: "/stays/res5.jpeg",  cat: "Rooms", title: "Cozy Double Room" },
  { src: "/stays/res6.jpeg",  cat: "Rooms", title: "Hill View Room" },
  { src: "/stays/res7.jpeg",  cat: "Rooms", title: "Group Stay Room" },
  { src: "/stays/res8.jpeg",  cat: "Rooms", title: "Luxury Room" },
];

const CATS = ["All", "Safari", "Attractions", "Nature", "Rooms"];

const CAT_BG: Record<string, string> = {
  Safari:      "#1a4329",
  Attractions: "#166534",
  Nature:      "#0f766e",
  Rooms:       "#b45309",
};

export default function RoomsGallery() {
  const [filter,   setFilter]   = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = filter === "All" ? ALL_IMAGES : ALL_IMAGES.filter((i) => i.cat === filter);

  const close = useCallback(() => setLightbox(null), []);
  const prev  = useCallback(() => setLightbox((i) => i !== null ? (i - 1 + visible.length) % visible.length : null), [visible.length]);
  const next  = useCallback(() => setLightbox((i) => i !== null ? (i + 1) % visible.length : null), [visible.length]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape")     close();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lightbox, close, prev, next]);

  const cur = lightbox !== null ? visible[lightbox] : null;

  return (
    <section className="py-14 bg-[#fafbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-[#2e7d32] font-bold text-[11px] tracking-[0.26em] uppercase mb-3">
            <span>📸</span><span>Photo Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#112918] leading-tight">
            Moments from <span className="text-[#2e7d32]">Kanthalloor</span>
          </h2>
          <p className="mt-3 text-gray-500 text-sm leading-relaxed">
            Safari adventures, comfortable rooms, scenic attractions and the natural beauty
            of Little Kashmir of Kerala.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {CATS.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                filter === cat ? "bg-[#1a4329] text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}>
              {cat}
              <span className={`ml-1.5 text-[10px] ${filter === cat ? "text-[#4ade80]" : "text-gray-400"}`}>
                {cat === "All" ? ALL_IMAGES.length : ALL_IMAGES.filter((i) => i.cat === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {visible.map((img, i) => (
            <div key={img.src + i}
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 break-inside-avoid"
            >
              <img src={img.src} alt={img.title}
                onError={(e) => { (e.target as HTMLImageElement).src = "/jeep/jeep0.png"; }}
                className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300" />
              {/* Info on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="self-start text-white text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full mb-1"
                  style={{ backgroundColor: CAT_BG[img.cat] ?? "#1a4329" }}>
                  {img.cat}
                </span>
                <p className="text-white font-extrabold text-xs sm:text-sm leading-tight drop-shadow">{img.title}</p>
              </div>
              {/* Zoom */}
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#1a4329] shadow-lg opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                <i className="fas fa-expand text-xs" />
              </div>
            </div>
          ))}
        </div>

        {/* View full gallery link */}
        <div className="text-center mt-10">
          <a href="/gallery"
            className="inline-flex items-center gap-2 border-2 border-[#1a4329] text-[#1a4329] hover:bg-[#1a4329] hover:text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all active:scale-95">
            <i className="fas fa-images" />
            View Full Gallery
            <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && cur && (
        <div className="fixed inset-0 z-50 bg-black/93 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={close}>
          {/* Close */}
          <button onClick={close} aria-label="Close"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors z-10">
            <i className="fas fa-times text-lg" />
          </button>
          {/* Counter */}
          <div className="absolute top-4 left-4 bg-black/50 text-white/70 text-xs font-bold px-3 py-1.5 rounded-full">
            {lightbox + 1} / {visible.length}
          </div>
          {/* Prev */}
          <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors z-10">
            <i className="fas fa-chevron-left" />
          </button>
          {/* Next */}
          <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors z-10">
            <i className="fas fa-chevron-right" />
          </button>

          {/* Image + info */}
          <div className="max-w-4xl w-full mx-auto flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={cur.src} alt={cur.title}
              onError={(e) => { (e.target as HTMLImageElement).src = "/jeep/jeep0.png"; }}
              className="max-w-full max-h-[70vh] rounded-2xl shadow-2xl object-contain"
            />
            <div className="mt-4 text-center">
              <span className="text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ backgroundColor: CAT_BG[cur.cat] ?? "#1a4329" }}>
                {cur.cat}
              </span>
              <h3 className="text-white font-extrabold text-lg mt-2">{cur.title}</h3>
            </div>
            {/* Thumb strip */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none max-w-full">
              {visible.map((img, i) => (
                <button key={i} onClick={() => setLightbox(i)}
                  className={`flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${i === lightbox ? "border-[#4ade80] scale-110" : "border-transparent opacity-50 hover:opacity-100"}`}>
                  <img src={img.src} alt={img.title || "Kanthalloor room preview thumbnail"} className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/jeep/jeep0.png"; }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
