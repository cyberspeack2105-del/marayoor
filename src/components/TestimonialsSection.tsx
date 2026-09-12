"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const GMB = "https://share.google/ShdDhwTH7GiITUdiw";

const TESTIMONIALS = [
  {
    name: "Vishnu Raj",
    location: "Ernakulam, Kerala",
    stars: 5,
    review:
      "Best jeep safari experience in Kerala! The views of Kanthalloor — the Little Kashmir — were breathtaking. The driver was knowledgeable and the whole trip felt very personal. Highly recommend!",
    initial: "V",
    color: "#1a4329",
  },
  {
    name: "Akhil Krishnan",
    location: "Thrissur, Kerala",
    stars: 5,
    review:
      "Visited with my friends and it was an unforgettable trip. The jeep went through amazing mountain trails and we could see the entire valley. The stay was peaceful and the hosts were very welcoming.",
    initial: "A",
    color: "#2e7d32",
  },
  {
    name: "Priya Suresh",
    location: "Bangalore, Karnataka",
    stars: 5,
    review:
      "Kanthalloor is truly Kerala's hidden gem. The safari was thrilling and the mountain scenery was stunning. The accommodation was clean and comfortable. Will definitely come back with family!",
    initial: "P",
    color: "#166534",
  },
  {
    name: "Mohammed Rafi",
    location: "Kozhikode, Kerala",
    stars: 5,
    review:
      "Amazing experience in Kanthalloor. The jeep safari through the forest trails was exciting. The cold weather, fresh air and beautiful views made it a perfect weekend getaway. Very well organized!",
    initial: "M",
    color: "#15803d",
  },
  {
    name: "Divya Mohan",
    location: "Chennai, Tamil Nadu",
    stars: 5,
    review:
      "Such a beautiful place! We did the jeep safari in the morning and the misty mountain views were absolutely magical. The rooms were cozy and the hosts treated us like family. Wonderful memories!",
    initial: "D",
    color: "#1a4329",
  },
  {
    name: "Sanjay Thomas",
    location: "Kottayam, Kerala",
    stars: 5,
    review:
      "Perfect destination for nature lovers. The Jeep Safari covered scenic spots that you can't reach otherwise. Kanthalloor truly deserves the name Little Kashmir of Kerala. 10/10 experience!",
    initial: "S",
    color: "#2e7d32",
  },
];

/* ─── Infinite scroll marquee ─────────────────────────────────────────────
   Duplicates the card list so the strip loops seamlessly.
   Speed: controlled via CSS animation duration.
──────────────────────────────────────────────────────────────────────────── */
function InfiniteSlider() {
  const [paused, setPaused] = useState(false);
  // Duplicate cards for seamless loop
  const cards = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left / right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #ffffff, transparent)" }} />

      {/* Sliding track — CSS animation, no JS interval */}
      <div
        className="flex gap-5 py-3"
        style={{
          width: "max-content",
          animation: `testimonial-scroll 32s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {cards.map((t, i) => (
          <div key={i} className="flex-shrink-0 w-[300px] sm:w-[340px]">
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Controlled slider (mobile + desktop secondary) ──────────────────── */
function ControlledSlider() {
  const [idx, setIdx]         = useState(0);
  const [animDir, setAnimDir] = useState<"left" | "right">("left");
  const [visible, setVisible] = useState(true);

  const go = useCallback((dir: "left" | "right") => {
    setAnimDir(dir);
    setVisible(false);
    setTimeout(() => {
      setIdx((i) =>
        dir === "left"
          ? (i + 1) % TESTIMONIALS.length
          : (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
      );
      setVisible(true);
    }, 220);
  }, []);

  /* Auto-advance */
  useEffect(() => {
    const t = setInterval(() => go("left"), 5000);
    return () => clearInterval(t);
  }, [go]);

  return (
    <div>
      {/* Card with slide-in animation */}
      <div
        className="transition-all duration-200"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateX(0)"
            : animDir === "left"
            ? "translateX(-24px)"
            : "translateX(24px)",
        }}
      >
        <TestimonialCard t={TESTIMONIALS[idx]} />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => go("right")}
          aria-label="Previous"
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1a4329] hover:text-white flex items-center justify-center transition-all text-sm text-gray-600"
        >
          <i className="fas fa-arrow-left" />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-1.5">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setAnimDir(i > idx ? "left" : "right");
                setVisible(false);
                setTimeout(() => { setIdx(i); setVisible(true); }, 220);
              }}
              aria-label={`Review ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === idx ? "w-6 bg-[#1a4329]" : "w-2 bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => go("left")}
          aria-label="Next"
          className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1a4329] hover:text-white flex items-center justify-center transition-all text-sm text-gray-600"
        >
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#2e7d32] font-bold text-[11px] tracking-[0.26em] uppercase mb-3">
            <span>⭐</span>
            <span>Traveler Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#112918] leading-tight mb-4">
            What Our <span className="text-[#2e7d32]">Guests Say</span>
          </h2>
          {/* GMB badge */}
          <div className="inline-flex items-center gap-3 bg-[#f0faf4] border border-green-100 px-5 py-2.5 rounded-full">
            <div className="flex gap-0.5 text-amber-400 text-sm">
              {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star" />)}
            </div>
            <span className="text-sm font-black text-[#112918]">5.0</span>
            <span className="text-xs text-gray-500 font-medium">Google Reviews</span>
            <a
              href={GMB} target="_blank" rel="noopener noreferrer"
              className="text-[11px] font-bold text-[#1a4329] hover:text-[#2e7d32] transition-colors underline underline-offset-2"
            >
              View Profile →
            </a>
          </div>
        </div>

        {/* Desktop — infinite left-to-right scroll marquee */}
        <div className="hidden sm:block">
          <InfiniteSlider />
        </div>

        {/* Mobile — slide one card at a time */}
        <div className="sm:hidden">
          <ControlledSlider />
        </div>

        {/* Google CTA */}
        <div className="text-center mt-10">
          <a
            href={GMB} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1a4329] hover:bg-[#112918] text-white font-bold text-sm px-7 py-3 rounded-full transition-all shadow hover:shadow-lg active:scale-95"
          >
            <i className="fab fa-google text-white text-sm" />
            Read All Reviews on Google
            <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>

      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div className="bg-[#f9faf8] rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-default select-none">
      {/* Stars */}
      <div className="flex gap-1 text-amber-400 text-xs mb-3">
        {[...Array(t.stars)].map((_, i) => <i key={i} className="fas fa-star" />)}
      </div>
      {/* Quote */}
      <div className="text-[#2e7d32] text-4xl leading-none font-serif mb-1 select-none">&ldquo;</div>
      {/* Review */}
      <p className="text-gray-700 text-sm leading-relaxed italic flex-1 min-h-[80px]">{t.review}</p>
      {/* Author */}
      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0 border-2 border-white shadow"
          style={{ backgroundColor: t.color }}
        >
          {t.initial}
        </div>
        <div>
          <h4 className="font-extrabold text-sm text-[#112918]">{t.name}</h4>
          <span className="text-[11px] text-gray-400 font-medium flex items-center gap-1">
            <i className="fas fa-map-marker-alt text-[9px] text-[#2e7d32]" />
            {t.location}
          </span>
        </div>
        <div className="ml-auto">
          <i className="fab fa-google text-gray-300 text-lg" />
        </div>
      </div>
    </div>
  );
}
