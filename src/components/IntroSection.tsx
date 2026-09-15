"use client";

import { useEffect, useRef, useState } from "react";

const JEEP_SLIDES = [
  "/jeep/jeep0.png",
  "/jeep/jeep2.jpeg",
  "/jeep/jeep3.jpeg",
  "/jeep/jeep4.jpeg",
  "/jeep/jeep5.jpeg",
  "/jeep/jeep 9.png",
  "/jeep/jeep21.jpeg",
];

const CARDS = [
  {
    icon: "fa-truck-monster",
    img: "/jeep/jeep0.png",
    slides: JEEP_SLIDES,
    alt: "Kanthalloor Jeep Safari adventure trails",
    title: "Jeep Safari",
    desc: "Explore scenic trails, forests and beautiful landscapes with a local Jeep Safari experience.",
    link: "#jeep-safari",
    cta: "View Safari",
    delay: "0ms",
  },
  {
    icon: "fa-house",
    img: "/stays/res3.jpeg",
    alt: "Comfortable rooms and stay in Kanthalloor",
    title: "Rooms & Stay",
    desc: "Enjoy a comfortable stay surrounded by the peaceful beauty of Kanthalloor.",
    link: "#rooms",
    cta: "Explore Rooms",
    delay: "120ms",
  },
  {
    icon: "fa-leaf",
    img: "/waterfals.png",
    alt: "Kanthalloor waterfalls and nature experiences",
    title: "Local Experiences",
    desc: "Discover the natural beauty, attractions and unique experiences around Kanthalloor.",
    link: "#attractions",
    cta: "Explore Kanthalloor",
    delay: "240ms",
  },
];

export default function IntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [jeepIndex, setJeepIndex] = useState(0);

  // Auto-slide jeep images every 3.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setJeepIndex((prev) => (prev + 1) % JEEP_SLIDES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".reveal-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-16 sm:py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#2e7d32] font-bold text-[11px] tracking-[0.26em] uppercase mb-3">
            <span>🌿</span>
            <span>Welcome to Kanthalloor</span>
            <span>🌿</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#112918] tracking-tight leading-tight">
            More Than a Trip.
            <br />
            <span className="text-[#2e7d32]">A Complete Experience.</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-[15px] leading-relaxed">
            Discover Kanthalloor through adventure, nature and comfortable stays. Explore scenic
            trails by Jeep, relax in peaceful surroundings and experience the beauty of the
            destination at your own pace.
          </p>
        </div>

        {/* 3 cards — scroll reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="reveal-card group bg-[#f9faf8] rounded-[1.75rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
              style={{
                opacity: 0,
                transform: "translateY(36px)",
                transition: `opacity 0.65s ease ${c.delay}, transform 0.65s ease ${c.delay}, box-shadow 0.3s ease, translate 0.3s ease`,
              }}
            >
              {/* Image / Animated Slideshow */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {c.slides ? (
                  <>
                    {/* All Jeep slides */}
                    {c.slides.map((slideSrc, sIndex) => (
                      <div
                        key={slideSrc}
                        className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                        style={{
                          opacity: sIndex === jeepIndex ? 1 : 0,
                          zIndex: sIndex === jeepIndex ? 2 : 1,
                        }}
                      >
                        <img
                          src={slideSrc}
                          alt={`${c.alt} — Slide ${sIndex + 1}`}
                          className={`w-full h-full object-cover transition-transform duration-700 ${
                            sIndex === jeepIndex ? "scale-105" : "scale-100"
                          } group-hover:scale-110`}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/jeep/jeep0.png";
                          }}
                        />
                      </div>
                    ))}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10 pointer-events-none" />

                    {/* Slide counter chip — top right */}
                    <div className="absolute top-3 right-3 z-20">
                      <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                        <i className="fa-solid fa-camera text-[10px] text-[#4ade80]" />
                        <span>{jeepIndex + 1} / {c.slides.length}</span>
                      </span>
                    </div>

                    {/* Manual Prev / Next arrows */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setJeepIndex((prev) => (prev - 1 + c.slides!.length) % c.slides!.length);
                      }}
                      aria-label="Previous jeep photo"
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110"
                    >
                      <i className="fa-solid fa-chevron-left text-xs" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setJeepIndex((prev) => (prev + 1) % c.slides!.length);
                      }}
                      aria-label="Next jeep photo"
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-110"
                    >
                      <i className="fa-solid fa-chevron-right text-xs" />
                    </button>

                    {/* Slide indicator dots — bottom right */}
                    <div className="absolute bottom-3.5 right-4 z-20 flex items-center gap-1">
                      {c.slides.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={(e) => {
                            e.stopPropagation();
                            setJeepIndex(dotIndex);
                          }}
                          aria-label={`Go to jeep photo ${dotIndex + 1}`}
                          className="h-1.5 rounded-full transition-all duration-300"
                          style={{
                            width: dotIndex === jeepIndex ? "16px" : "5px",
                            backgroundColor: dotIndex === jeepIndex ? "#4ade80" : "rgba(255,255,255,0.6)",
                          }}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={c.img}
                      alt={c.alt}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/jeep/jeep 9.png";
                      }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  </>
                )}

                {/* Animated icon badge */}
                <div
                  className="absolute bottom-3 left-4 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:bg-[#1a4329] group-hover:scale-110 transition-all duration-300 z-20"
                  style={{ color: "#1a4329" }}
                >
                  <i
                    className={`fas ${c.icon} text-base group-hover:text-white`}
                    style={{ transition: "color 0.3s" }}
                  />
                </div>

                {/* Hover overlay label */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                  <span className="bg-[#1a4329]/80 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide">
                    {c.title}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-xl font-extrabold text-[#112918] mb-2 group-hover:text-[#1a4329] transition-colors">
                  {c.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{c.desc}</p>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <a
                    href={c.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#1a4329] group-hover:text-[#2e7d32] transition-colors"
                  >
                    {c.cta}
                    <i className="fas fa-arrow-right text-xs group-hover:translate-x-1.5 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
