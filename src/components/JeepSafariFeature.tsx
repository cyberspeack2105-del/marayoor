"use client";

import { useState, useEffect } from "react";

const WA = "https://wa.me/919188211822?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20the%20Jeep%20Safari%20in%20Kanthalloor!";

const JEEP_IMAGES = [
  "/jeep/jeep0.png",
  "/jeep/jeep2.jpeg",
  "/jeep/jeep3.jpeg",
  "/jeep/jeep4.jpeg",
  "/jeep/jeep5.jpeg",
  "/jeep/jeep 9.png",
  "/jeep/jeep21.jpeg",
];

const FEATURES = [
  { icon: "fa-compass",        label: "Guided Jeep Experience" },
  { icon: "fa-mountain",       label: "Scenic Mountain Trails" },
  { icon: "fa-tree",           label: "Nature & Forest Views" },
  { icon: "fa-camera",         label: "Memorable Experiences" },
];

export default function JeepSafariFeature() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % JEEP_IMAGES.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="jeep-safari" className="py-16 sm:py-20 bg-[#fafbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left — image slideshow */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white h-[360px] sm:h-[460px]">
              {JEEP_IMAGES.map((src, i) => (
                <div
                  key={src}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                  style={{
                    opacity: i === activeSlide ? 1 : 0,
                    zIndex: i === activeSlide ? 2 : 1,
                  }}
                >
                  <img
                    src={src}
                    alt={`Kanthalloor Jeep Safari trail photo ${i + 1}`}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      i === activeSlide ? "scale-105" : "scale-100"
                    }`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/jeep/jeep0.png";
                    }}
                  />
                </div>
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 pointer-events-none" />

              {/* Prev / Next controls */}
              <button
                onClick={() => setActiveSlide((prev) => (prev - 1 + JEEP_IMAGES.length) % JEEP_IMAGES.length)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110"
              >
                <i className="fa-solid fa-chevron-left text-xs" />
              </button>
              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % JEEP_IMAGES.length)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110"
              >
                <i className="fa-solid fa-chevron-right text-xs" />
              </button>

              {/* Dot indicators */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                {JEEP_IMAGES.map((_, dotI) => (
                  <button
                    key={dotI}
                    onClick={() => setActiveSlide(dotI)}
                    aria-label={`Go to slide ${dotI + 1}`}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: dotI === activeSlide ? "16px" : "5px",
                      backgroundColor: dotI === activeSlide ? "#4ade80" : "rgba(255,255,255,0.6)",
                    }}
                  />
                ))}
              </div>

              {/* Badge */}
              <div className="absolute bottom-5 left-5 z-20 bg-[#163821]/90 backdrop-blur-sm text-white px-4 py-3 rounded-2xl border border-white/20 shadow-lg">
                <p className="font-script text-[15px] text-[#4ade80] leading-tight">Adventure awaits,</p>
                <p className="font-script text-[19px] font-bold text-white leading-tight">Explore by Jeep</p>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full blur-3xl -z-10 opacity-60" />
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-[#2e7d32] font-bold text-[11px] tracking-[0.26em] uppercase mb-3">
              <i className="fas fa-truck-monster text-xs" />
              <span>Jeep Safari Kanthalloor</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-black text-[#112918] leading-tight mb-2">
              Adventure
              <br />
              <span className="text-[#2e7d32]">Starts Here</span>
            </h2>
            <p className="text-lg font-semibold text-gray-500 mb-4">
              Explore Kanthalloor by Jeep
            </p>
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-8 max-w-md">
              Get closer to nature and discover the scenic beauty of Kanthalloor through an
              exciting Jeep Safari experience. Every trail tells a new story.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {FEATURES.map((f) => (
                <div key={f.label}
                  className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-green-50 text-[#1a4329] flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${f.icon} text-sm`} />
                  </div>
                  <span className="text-sm font-semibold text-[#112918]">{f.label}</span>
                </div>
              ))}
            </div>

            {/* Enquiry note */}
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 px-4 py-2.5 rounded-xl mb-6 text-sm text-amber-800 font-medium">
              <i className="fas fa-info-circle text-amber-500" />
              Enquire for Safari Details — no price displayed
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a href="#jeep-safari"
                className="inline-flex items-center gap-2 bg-[#1a4329] hover:bg-[#112918] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow-md hover:shadow-xl active:scale-95">
                <i className="fas fa-truck-monster text-[#4ade80]" />
                Explore Jeep Safari
                <i className="fas fa-arrow-right text-xs" />
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-green-600 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow active:scale-95">
                <i className="fab fa-whatsapp text-xl" />
                Enquire on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
