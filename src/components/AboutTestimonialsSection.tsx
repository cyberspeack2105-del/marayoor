"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "An amazing experience! The Jeep Safari was thrilling and the stay was so peaceful. Highly recommended for anyone visiting Marayoor!",
    name: "Arun Kumar",
    role: "Happy Traveler",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote:
      "The sandalwood forests and sunrise viewpoints through the off-road safari were breathtaking. Exceptional local guides!",
    name: "Sneha Menon",
    role: "Nature Photographer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    quote:
      "Best mountain retreat we've experienced. Pure fresh air, delicious local food, and memorable Jeep trails.",
    name: "David Wilson",
    role: "Adventure Enthusiast",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
];

export default function AboutTestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#fafbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ── Left: About block ── */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 text-[#2e7d32] font-extrabold text-[11px] tracking-[0.26em] uppercase mb-3">
              <span>About Marayoor</span>
              <span>🌿</span>
            </div>
            <h2 className="text-3xl sm:text-[2.4rem] font-black text-[#112918] leading-tight mb-5">
              Where Nature
              <br />
              Tells a Story
            </h2>
            <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-7">
              We are dedicated to providing authentic travel experiences with Jeep Safari,
              comfortable stays and local guidance to help you explore the real beauty of Marayoor.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-[#1a4329] hover:bg-[#112918] text-white text-sm font-bold px-6 py-3 rounded-full transition-all shadow hover:shadow-lg active:scale-95"
            >
              <span>Know More About Us</span>
              <i className="fas fa-arrow-right text-xs" />
            </a>
          </div>

          {/* ── Middle: blob image ── */}
          <div className="lg:col-span-4 flex justify-center">
            <div
              className="relative w-72 h-80 sm:w-80 sm:h-96 overflow-hidden border-4 border-white shadow-2xl group"
              style={{ borderRadius: "48% 52% 68% 32% / 42% 38% 62% 58%" }}
            >
              <img
                src="/jeep/jeep 9.png"
                alt="Scenic mountains of Marayoor"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCbhNBUzmCJVZGwV73jcegh_knNP_AOTJB4zDbAJc_LAczN-CYTJS1T0j0QlNUeEwLq2fCAo-Bo1HI-V5fDJK9VmvNwwzQj4GDokDb1oF6D1F36shCFGfzTi4x9uLKES1GMcvwpMtspQtgoRgu6J7dXbpDtTawlBMj8YCZmZlUWKOUlO8Oh86IPQRpX3PGUujTBwXKkeZFF2GwqxymbjOtr-P4zc1Jg8OOALTWgTwz5c9QuOkGRuV8B";
                }}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/35" />
              {/* Overlay script text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <p className="font-script text-white text-3xl sm:text-4xl font-bold leading-snug drop-shadow-lg">
                  Good
                  <br />
                  <span className="text-[#4ade80]">Places</span>
                  <br />
                  Good People
                  <br />
                  <span className="text-yellow-300">Great Memories</span>
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Testimonials card ── */}
          <div id="testimonials" className="lg:col-span-4">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-xl">

              {/* Header row */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-black tracking-[0.22em] text-gray-500 uppercase">
                  Testimonials
                </span>
                <div className="flex items-center gap-2">
                  <button
                    aria-label="Previous testimonial"
                    onClick={prev}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#1a4329] hover:text-white flex items-center justify-center transition-colors text-xs text-gray-600"
                  >
                    <i className="fas fa-arrow-left" />
                  </button>
                  <button
                    aria-label="Next testimonial"
                    onClick={next}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#1a4329] hover:text-white flex items-center justify-center transition-colors text-xs text-gray-600"
                  >
                    <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </div>

              {/* Big quote mark */}
              <div className="text-[#2e7d32] text-5xl leading-none font-serif mb-1 select-none">
                &ldquo;
              </div>

              {/* Quote body */}
              <div className="min-h-[120px] transition-all duration-300">
                <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed italic">
                  {t.quote}
                </p>
              </div>

              {/* Author row */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#2e7d32]"
                  />
                  <div>
                    <h4 className="font-extrabold text-sm text-[#112918]">{t.name}</h4>
                    <span className="text-[11px] text-gray-400 font-medium">{t.role}</span>
                  </div>
                </div>
                {/* Stars */}
                <div className="text-amber-400 text-xs flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star" />
                  ))}
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex items-center justify-center gap-1.5 mt-4">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      i === idx ? "bg-[#1a4329] w-4" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
