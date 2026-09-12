"use client";

import { useState, useEffect, useCallback } from "react";

const WA = "https://wa.me/919188211822?text=Hi%20Kanthalloor%20Safari%20%26%20Stay%2C%20I%20would%20like%20to%20plan%20a%20trip!";

/* ── All gallery images from public folder ─────────────────────────── */
const IMAGES = [
  /* ── Jeep Safari ── */
  { src: "/jeep/jeep 9.png",  cat: "Safari",      title: "Kanthalloor Mountain Viewpoint",    desc: "Two jeeps at the iconic Kanthalloor viewpoint — the Little Kashmir of Kerala." },
  { src: "/jeep/jeep0.png",   cat: "Safari",      title: "Jeep Safari Trail",                 desc: "Off-road Jeep Safari through the mountain trails of Kanthalloor." },
  { src: "/jeep/jeep2.jpeg",  cat: "Safari",      title: "Mountain Road Drive",               desc: "Navigating the scenic mountain roads during a Kanthalloor Jeep Safari." },
  { src: "/jeep/jeep21.jpeg", cat: "Safari",      title: "Jeep Adventure",                    desc: "Exciting Jeep Safari adventure through rugged terrain in Kanthalloor." },
  { src: "/jeep/jeep3.jpeg",  cat: "Safari",      title: "Forest Trail",                      desc: "Jeep trail through the lush green forests around Kanthalloor." },
  { src: "/jeep/jeep4.jpeg",  cat: "Safari",      title: "Scenic Route",                      desc: "Beautiful scenic route through the hills of Kanthalloor and Marayoor." },
  { src: "/jeep/jeep5.jpeg",  cat: "Safari",      title: "Valley View Trail",                 desc: "Panoramic valley views along the Kanthalloor Jeep Safari route." },

  /* ── Attractions ── */
  { src: "/attractions/dandel-forest.jpeg",         cat: "Attractions", title: "Sandal Forest",                     desc: "The protected sandalwood forest reserve — one of the most fragrant forests in Kerala." },
  { src: "/attractions/deer.jpeg",                  cat: "Attractions", title: "Wildlife — Deer",                   desc: "Spotted deer in their natural habitat near the Kanthalloor forest region." },
  { src: "/attractions/gaor.jpeg",                  cat: "Attractions", title: "Wildlife — Gaur",                   desc: "Indian Gaur (bison) spotted during a Jeep Safari near Chinnar Wildlife Border." },
  { src: "/attractions/irachipara-waterfalls.jpeg", cat: "Attractions", title: "Irachipara Waterfalls",             desc: "The stunning Irachipara Waterfalls — one of the highlights of the Morning Safari route." },
  { src: "/attractions/jeggery.jpeg",               cat: "Attractions", title: "Traditional Jaggery Making",        desc: "Witness the centuries-old tradition of making Marayoor Sharkara (jaggery) from sugarcane." },
  { src: "/attractions/honey-rock.jpeg",            cat: "Attractions", title: "Honey Rock",                        desc: "The iconic Honey Rock — a famous landmark and photography spot on the safari trail." },
  { src: "/attractions/muruga-malai.jpeg",          cat: "Attractions", title: "Murugan Malai",                     desc: "Murugan Malai viewpoint — a stunning elevated spot with panoramic valley views." },
  { src: "/attractions/view-point.jpeg",            cat: "Attractions", title: "Bramaram Viewpoint",                desc: "Bramaram Viewpoint — the most popular sunrise spot on the Kanthalloor safari route." },
  { src: "/attractions/view-point2.jpeg",           cat: "Attractions", title: "Valley Viewpoint",                  desc: "A breathtaking valley viewpoint accessible only by Jeep Safari through mountain trails." },
  { src: "/attractions/zip-line.jpeg",              cat: "Attractions", title: "Zip Line Adventure",                desc: "Exciting zip line activity — an adventurous addition to your Kanthalloor experience." },
  { src: "/attractions/zip-line-2.jpeg",            cat: "Attractions", title: "Zip Line Experience",               desc: "Soar through the treetops on the Kanthalloor zip line — a thrilling outdoor activity." },

  /* ── Waterfalls ── */
  { src: "/waterfals.png",                          cat: "Nature",      title: "Kanthalloor Waterfall",             desc: "A breathtaking waterfall cascading through the Western Ghats near Kanthalloor." },

  /* ── Rooms & Stay ── */
  { src: "/stays/res1.jpeg",  cat: "Rooms",       title: "Comfortable Stay Room",             desc: "Clean and cozy room with a peaceful atmosphere for a relaxing stay in Kanthalloor." },
  { src: "/stays/res2.jpeg",  cat: "Rooms",       title: "Nature Stay Room",                  desc: "Comfortable accommodation surrounded by the serene natural beauty of Kanthalloor." },
  { src: "/stays/res3.jpeg",  cat: "Rooms",       title: "Premium Room",                      desc: "Well-appointed room offering a peaceful retreat after a day of Jeep Safari adventures." },
  { src: "/stays/res4.jpeg",  cat: "Rooms",       title: "Guest Room",                        desc: "Spacious and well-maintained room for families and groups visiting Kanthalloor." },
  { src: "/stays/res5.jpeg",  cat: "Rooms",       title: "Stay Accommodation",                desc: "Comfortable rooms with all essential amenities for your Kanthalloor stay." },
  { src: "/stays/res6.jpeg",  cat: "Rooms",       title: "Relaxing Room Stay",                desc: "A peaceful room stay experience surrounded by the hills and nature of Kanthalloor." },
  { src: "/stays/res7.jpeg",  cat: "Rooms",       title: "Garden View Room",                  desc: "Enjoy the fresh mountain air and green surroundings from your room in Kanthalloor." },
  { src: "/stays/res8.jpeg",  cat: "Rooms",       title: "Hillside Accommodation",            desc: "Experience the charm of staying in the hills — comfortable, clean and close to nature." },
];

const CATS = ["All", "Safari", "Attractions", "Nature", "Rooms"];

const CAT_COLORS: Record<string, string> = {
  Safari:      "#1a4329",
  Attractions: "#166534",
  Nature:      "#0f766e",
  Rooms:       "#b45309",
};

export default function GalleryPageClient() {
  const [filter,      setFilter]      = useState("All");
  const [lightbox,    setLightbox]    = useState<number | null>(null);
  const [imgLoading,  setImgLoading]  = useState(true);

  const visible = filter === "All" ? IMAGES : IMAGES.filter((i) => i.cat === filter);

  /* Lightbox keyboard nav */
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevImg = useCallback(() => setLightbox((i) => i !== null ? (i - 1 + visible.length) % visible.length : null), [visible.length]);
  const nextImg = useCallback(() => setLightbox((i) => i !== null ? (i + 1) % visible.length : null), [visible.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape")     closeLightbox();
      if (e.key === "ArrowLeft")  prevImg();
      if (e.key === "ArrowRight") nextImg();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, closeLightbox, prevImg, nextImg]);

  /* Reset loading state on image change */
  useEffect(() => { setImgLoading(true); }, [lightbox]);

  const currentImg = lightbox !== null ? visible[lightbox] : null;

  return (
    <>
      {/* ═══════════════════════════
          HERO
      ═══════════════════════════ */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <img src="/jeep/jeep 9.png" alt="Kanthalloor Gallery" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(110deg,rgba(5,18,10,0.94) 0%,rgba(7,24,12,0.82) 45%,rgba(7,24,12,0.35) 100%)" }} />
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#fafbf9] to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="inline-flex items-center gap-2 mb-4 animate-fade-up">
            <span className="w-8 h-[2px] bg-[#4ade80]" />
            <span className="text-[11px] font-extrabold tracking-[0.32em] uppercase text-[#4ade80]">
              Photo Gallery
            </span>
          </div>
          <h1
            className="font-black text-white tracking-tight leading-[0.88] mb-5 animate-fade-up-d1"
            style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)", textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}
          >
            MOMENTS FROM
            <br />
            <span style={{ color: "#4ade80" }}>KANTHALLOOR</span>
          </h1>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-md animate-fade-up-d2">
            Jeep Safari trails, comfortable stays, wildlife encounters and the natural beauty
            of Little Kashmir of Kerala — captured in every frame.
          </p>
          {/* Counts */}
          <div className="mt-6 flex flex-wrap gap-4 animate-fade-up-d3">
            {CATS.filter(c => c !== "All").map((cat) => (
              <div key={cat} className="flex items-center gap-1.5 text-white/60 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: CAT_COLORS[cat] ?? "#4ade80" }} />
                {IMAGES.filter(i => i.cat === cat).length} {cat} photos
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          FILTER TABS
      ═══════════════════════════ */}
      <div className="sticky top-[80px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                filter === cat
                  ? "bg-[#1a4329] text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
              <span className={`ml-1.5 text-[10px] font-semibold ${filter === cat ? "text-[#4ade80]" : "text-gray-400"}`}>
                {cat === "All" ? IMAGES.length : IMAGES.filter(i => i.cat === cat).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════
          GRID
      ═══════════════════════════ */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
            {visible.map((img, i) => (
              <div
                key={img.src + i}
                onClick={() => setLightbox(i)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  onError={(e) => { (e.target as HTMLImageElement).src = "/jeep/jeep0.png"; }}
                  className="w-full h-auto block object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />

                {/* Info on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Category chip */}
                  <span
                    className="self-start text-white text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full mb-1.5"
                    style={{ backgroundColor: CAT_COLORS[img.cat] ?? "#1a4329" }}
                  >
                    {img.cat}
                  </span>
                  <h3 className="text-white font-extrabold text-xs sm:text-sm leading-tight drop-shadow-md">
                    {img.title}
                  </h3>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#1a4329] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                  <i className="fas fa-expand text-xs" />
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {visible.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <i className="fas fa-images text-5xl mb-4 block" />
              <p className="text-lg font-semibold">No photos in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════
          CTA
      ═══════════════════════════ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl text-center py-16 px-6 sm:px-12">
          <img src="/jeep/jeep 9.png" alt="Kanthalloor Safari"
            className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#071a0f]/88" />
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">
              Ready to Create Your Own
              <br />
              <span className="text-[#4ade80]">Kanthalloor Moments?</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-8">
              Book a Jeep Safari or room stay with Sasikumar and explore Little Kashmir of Kerala.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#22c55e] hover:bg-green-500 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
                style={{ boxShadow: "0 4px 24px rgba(34,197,94,0.38)" }}>
                <i className="fab fa-whatsapp text-xl" />
                Plan Your Trip
              </a>
              <a href="/jeep-safari"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/25 font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95">
                <i className="fas fa-truck-monster text-[#4ade80]" />
                View Jeep Safari
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════
          LIGHTBOX
      ═══════════════════════════ */}
      {lightbox !== null && currentImg && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors z-10"
            aria-label="Close"
          >
            <i className="fas fa-times text-lg" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 bg-black/50 text-white/70 text-xs font-bold px-3 py-1.5 rounded-full">
            {lightbox + 1} / {visible.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImg(); }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors z-10"
            aria-label="Previous"
          >
            <i className="fas fa-chevron-left" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImg(); }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/15 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors z-10"
            aria-label="Next"
          >
            <i className="fas fa-chevron-right" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl w-full mx-auto flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {imgLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-[#4ade80] border-t-transparent animate-spin" />
              </div>
            )}
            <img
              src={currentImg.src}
              alt={currentImg.title}
              onLoad={() => setImgLoading(false)}
              onError={(e) => { (e.target as HTMLImageElement).src = "/jeep/jeep0.png"; setImgLoading(false); }}
              className={`max-w-full max-h-[70vh] rounded-2xl shadow-2xl object-contain transition-opacity duration-300 ${imgLoading ? "opacity-0" : "opacity-100"}`}
            />

            {/* Info below image */}
            <div className="mt-4 text-center max-w-lg mx-auto px-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span
                  className="text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ backgroundColor: CAT_COLORS[currentImg.cat] ?? "#1a4329" }}
                >
                  {currentImg.cat}
                </span>
              </div>
              <h3 className="text-white font-extrabold text-lg sm:text-xl mb-1">
                {currentImg.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {currentImg.desc}
              </p>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
              {visible.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className={`flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${i === lightbox ? "border-[#4ade80] scale-110" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/jeep/jeep0.png"; }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
