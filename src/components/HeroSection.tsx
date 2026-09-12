"use client";

import { useEffect, useRef, useCallback, useState } from "react";

const WA = "https://wa.me/919188211822?text=Hi%20Kanthalloor%20Safari%20%26%20Stay%2C%20I%20would%20like%20to%20plan%20a%20trip!";

/* All attraction images — slide show on right side of hero */
const ATTRACTION_SLIDES = [
  { src: "/jeep/jeep 9.png",                        title: "Kanthalloor Mountain Viewpoint" },
  { src: "/attractions/view-point.jpeg",             title: "Bramaram Viewpoint" },
  { src: "/attractions/irachipara-waterfalls.jpeg",  title: "Irachipara Waterfalls" },
  { src: "/attractions/muruga-malai.jpeg",           title: "Murugan Malai" },
  { src: "/attractions/honey-rock.jpeg",             title: "Honey Rock" },
  { src: "/attractions/dandel-forest.jpeg",          title: "Sandal Forest" },
  { src: "/attractions/deer.jpeg",                   title: "Wildlife — Deer" },
  { src: "/attractions/gaor.jpeg",                   title: "Wildlife — Gaur" },
  { src: "/attractions/jeggery.jpeg",                title: "Traditional Jaggery Making" },
  { src: "/attractions/zip-line.jpeg",               title: "Zip Line Adventure" },
  { src: "/attractions/view-point2.jpeg",            title: "Valley Viewpoint" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef    = useRef<HTMLDivElement>(null);
  const imageRef   = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowAref   = useRef<HTMLDivElement>(null);
  const glowBref   = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [activeSlide, setActiveSlide]   = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const listener = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const dx   = ((e.clientX - rect.left)  - rect.width  / 2) / (rect.width  / 2);
    const dy   = ((e.clientY - rect.top)   - rect.height / 2) / (rect.height / 2);

    if (glowRef.current) {
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top  = `${e.clientY}px`;
    }
    if (imageRef.current) {
      imageRef.current.style.transform =
        `perspective(900px) rotateY(${dx * 8}deg) rotateX(${-dy * 5}deg) translateZ(0)`;
    }
    if (contentRef.current) {
      contentRef.current.style.transform = `translate(${dx * -5}px, ${dy * -3}px)`;
    }
    if (glowAref.current) {
      glowAref.current.style.transform = `translate(${dx * -10}px, ${dy * -6}px)`;
    }
    if (glowBref.current) {
      glowBref.current.style.transform = `translate(${dx * 8}px, ${dy * 5}px)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (imageRef.current)
      imageRef.current.style.transform =
        "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0)";
    if (contentRef.current) contentRef.current.style.transform = "translate(0,0)";
    if (glowAref.current)   glowAref.current.style.transform   = "translate(0,0)";
    if (glowBref.current)   glowBref.current.style.transform   = "translate(0,0)";
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reduceMotion) return;
    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, reduceMotion]);

  /* Auto-advance hero slides every 3.5s */
  useEffect(() => {
    const t = setInterval(() => {
      setActiveSlide((s) => (s + 1) % ATTRACTION_SLIDES.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* Cursor glow — desktop only */}
      {!reduceMotion && (
        <div ref={glowRef} className="cursor-glow hidden lg:block" aria-hidden="true" />
      )}

      <section
        ref={sectionRef}
        id="home"
        className="relative bg-[#fafbf9] overflow-hidden py-6 lg:py-0"
        style={{ minHeight: "calc(100vh - 116px)" }}
      >
        {/* Right tint */}
        <div className="absolute inset-y-0 right-0 w-[55%] bg-gradient-to-l from-emerald-50/60 to-transparent pointer-events-none" />

        {/* Leaf decoration */}
        <div className="absolute -top-10 -left-10 w-48 h-48 opacity-[0.07] pointer-events-none select-none">
          <svg viewBox="0 0 200 200" fill="none">
            <path d="M30,10 C90,20 120,90 100,160 C80,110 50,40 30,10 Z" fill="#1a4329" />
            <path d="M60,0 C120,40 140,110 110,180" stroke="#1a4329" strokeWidth="3" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6"
            style={{ minHeight: "calc(100vh - 116px)" }}
          >

            {/* ════════════════════════
                LEFT — Content
            ════════════════════════ */}
            <div
              ref={contentRef}
              className="flex flex-col justify-center py-6 sm:py-10 lg:py-0 order-2 lg:order-1"
              style={{ transition: "transform 0.15s ease-out" }}
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4 animate-fade-up">
                <span className="text-[11px] font-extrabold tracking-[0.32em] uppercase text-[#2e7d32]">
                  Discover Kanthalloor
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#2e7d32]" />
              </div>

              {/* Heading */}
              <h1
                className="font-black tracking-tight leading-[0.9] animate-fade-up-d1"
                style={{ fontSize: "clamp(2.6rem, 5.8vw, 5rem)" }}
              >
                <span className="block text-[#112918]">EXPLORE</span>
                <span className="block animate-shimmer">LITTLE KASHMIR</span>
              </h1>

              {/* Sub-tagline */}
              <p className="mt-4 text-[10px] sm:text-[11px] font-bold tracking-[0.28em] uppercase text-gray-400 animate-fade-up-d2">
                Jeep Safari
                <span className="mx-1.5 text-[#2e7d32]">•</span>
                Rooms
                <span className="mx-1.5 text-[#2e7d32]">•</span>
                Nature
                <span className="mx-1.5 text-[#2e7d32]">•</span>
                Adventure
              </p>

              {/* Description */}
              <p className="mt-5 text-gray-600 text-sm sm:text-[15px] leading-relaxed max-w-[420px] animate-fade-up-d2">
                Experience the beauty of Kanthalloor with exciting Jeep Safari adventures,
                comfortable stays and unforgettable moments close to nature.
              </p>

              {/* Trust signals — Google rating + both phones on ONE line */}
              <div className="mt-5 animate-fade-up-d2">
                <div className="flex items-center gap-3 flex-nowrap">
                  {/* Google rating */}
                  <a
                    href="https://share.google/ShdDhwTH7GiITUdiw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity flex-shrink-0"
                  >
                    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-amber-400 text-[11px] leading-none">★★★★★</span>
                    <span className="text-[12px] font-black text-[#112918]">5.0</span>
                  </a>

                  <div className="h-3.5 w-px bg-gray-200 flex-shrink-0" />

                  {/* Phone 1 */}
                  <a
                    href="tel:+918281141813"
                    className="inline-flex items-center gap-1 hover:text-[#1a4329] transition-colors flex-shrink-0"
                  >
                    <i className="fa-solid fa-phone text-[#2e7d32]" style={{ fontSize: "10px" }} />
                    <span className="text-[12px] font-bold text-[#112918] whitespace-nowrap">82811 41813</span>
                  </a>

                  <div className="h-3.5 w-px bg-gray-200 flex-shrink-0" />

                  {/* Phone 2 / WhatsApp */}
                  <a
                    href="tel:+919188211822"
                    className="inline-flex items-center gap-1 hover:text-[#1a4329] transition-colors flex-shrink-0"
                  >
                    <i className="fab fa-whatsapp text-[#25D366]" style={{ fontSize: "12px" }} />
                    <span className="text-[12px] font-bold text-[#112918] whitespace-nowrap">91882 11822</span>
                  </a>
                </div>

                {/* Location pill — second line */}
                <a
                  href="https://share.google/ShdDhwTH7GiITUdiw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-[11px] text-gray-400 hover:text-[#1a4329] transition-colors font-medium"
                >
                  <i className="fas fa-map-marker-alt text-[#2e7d32]" style={{ fontSize: "10px" }} />
                  <span>Kanthalloor, Idukki, Kerala</span>
                  <i className="fas fa-external-link-alt text-[9px] text-gray-300" />
                </a>
              </div>

              {/* CTA buttons — single row always */}
              <div className="mt-7 flex items-center gap-2.5 animate-fade-up-d3">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1a4329] hover:bg-[#112918] text-white font-bold text-sm px-5 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 whitespace-nowrap flex-1 justify-center sm:flex-none"
                >
                  <i className="fab fa-whatsapp text-base text-[#4ade80]" />
                  Plan Your Trip
                </a>
                <a
                  href="/jeep-safari"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#112918] border-2 border-[#112918] font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:scale-95 whitespace-nowrap flex-1 justify-center sm:flex-none"
                >
                  <i className="fas fa-truck-monster text-[#1a4329] text-xs" />
                  Explore Jeep Safari
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-9 pt-6 border-t border-gray-200/80 grid grid-cols-3 gap-2.5 max-w-[400px] animate-fade-up-d4">
                {[
                  { icon: "fa-truck-monster", title: "Jeep Safari",  sub: "Adventure Trails"    },
                  { icon: "fa-house",          title: "Rooms & Stay", sub: "Comfortable Stay"    },
                  { icon: "fa-leaf",           title: "Kanthalloor",  sub: "Nature Experiences"  },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="flex items-center gap-2 bg-white px-2.5 py-2.5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-50 text-[#1a4329] flex items-center justify-center text-xs flex-shrink-0">
                      <i className={`fas ${b.icon}`} />
                    </div>
                    <div className="leading-tight min-w-0">
                      <span className="block text-[10px] font-extrabold text-[#112918] truncate">{b.title}</span>
                      <span className="block text-[9px] text-gray-400 font-medium leading-snug">{b.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ════════════════════════
                RIGHT — Animated attraction image slider
            ════════════════════════ */}
            <div className="relative order-1 lg:order-2 flex flex-col items-center lg:items-end justify-center animate-fade-up lg:pt-16 lg:pb-10">

              {/* Script — top right */}
              <div className="absolute top-2 right-0 z-20 text-right hero-script-tag hidden md:block">
                <p className="font-script font-bold leading-[1.2] text-[#1e3a24]" style={{ fontSize: "1.85rem" }}>
                  Stay<br />
                  <span className="text-[#2e7d32]">Explore</span><br />
                  Discover
                </p>
                <div className="h-[3px] w-10 bg-[#4ade80] rounded-full ml-auto mt-1" />
              </div>

              {/* ── Image slider card ── */}
              <div
                ref={imageRef}
                className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white mt-4 sm:mt-6 lg:mt-0 mx-auto max-w-[340px] sm:max-w-none hero-img-float"
                style={{ transition: "transform 0.15s ease-out", transformStyle: "preserve-3d" }}
              >
                {/* Slides */}
                {ATTRACTION_SLIDES.map((slide, i) => (
                  <div
                    key={slide.src}
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{ opacity: i === activeSlide ? 1 : 0, zIndex: i === activeSlide ? 1 : 0 }}
                  >
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).src = "/jeep/jeep0.png"; }}
                    />
                  </div>
                ))}

                {/* Spacer to hold height */}
                <img
                  src={ATTRACTION_SLIDES[0].src}
                  alt=""
                  aria-hidden="true"
                  className="w-full block opacity-0 pointer-events-none"
                  style={{ height: "clamp(220px, 42vw, 520px)", objectFit: "cover" }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent z-10" />

                {/* "Little Kashmir" chip */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 text-white text-[11px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-lg"
                    style={{ background: "linear-gradient(90deg,#1a4329,#2e7d32)", boxShadow: "0 2px 14px rgba(26,67,41,0.5)" }}>
                    <i className="fas fa-mountain text-[#4ade80] text-[10px]" />
                    Little Kashmir of Kerala
                  </span>
                </div>

                {/* Current slide title */}
                <div className="absolute bottom-14 left-4 right-4 z-20">
                  <p className="text-white font-bold text-sm drop-shadow-lg truncate">
                    {ATTRACTION_SLIDES[activeSlide].title}
                  </p>
                </div>

                {/* Dot indicators */}
                <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-1.5">
                  {ATTRACTION_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      aria-label={`Slide ${i + 1}`}
                      className="transition-all duration-300 rounded-full"
                      style={{
                        width: i === activeSlide ? 20 : 6,
                        height: 6,
                        backgroundColor: i === activeSlide ? "#4ade80" : "rgba(255,255,255,0.5)",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    />
                  ))}
                </div>

                {/* Prev/Next arrows */}
                <button
                  onClick={() => setActiveSlide((s) => (s - 1 + ATTRACTION_SLIDES.length) % ATTRACTION_SLIDES.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all"
                  aria-label="Previous"
                >
                  <i className="fas fa-chevron-left text-xs" />
                </button>
                <button
                  onClick={() => setActiveSlide((s) => (s + 1) % ATTRACTION_SLIDES.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-all"
                  aria-label="Next"
                >
                  <i className="fas fa-chevron-right text-xs" />
                </button>
              </div>

              {/* Badge BELOW the image */}
              <div className="w-full max-w-[340px] sm:max-w-none mt-3 flex justify-end pr-1">
                <div className="badge-float text-white rounded-2xl inline-block"
                  style={{ backgroundColor: "rgba(17,41,24,0.92)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.18)", padding: "0.65rem 1.1rem", boxShadow: "0 8px 32px rgba(0,0,0,0.22)" }}>
                  <p className="font-script text-[15px] leading-tight" style={{ color: "#4ade80" }}>More than a trip,</p>
                  <p className="font-script text-[19px] font-bold leading-tight text-white">A Kanthalloor experience...</p>
                </div>
              </div>

              {/* Glow orbs */}
              <div ref={glowAref} className="absolute -bottom-8 left-4 w-36 h-36 bg-emerald-100 rounded-full blur-3xl -z-10 opacity-60" style={{ transition: "transform 0.25s ease-out" }} />
              <div ref={glowBref} className="absolute top-6 -right-4 w-20 h-20 bg-green-100 rounded-full blur-2xl -z-10 opacity-40" style={{ transition: "transform 0.25s ease-out" }} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
