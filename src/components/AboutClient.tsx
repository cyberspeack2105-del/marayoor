"use client";

import { useEffect, useRef } from "react";

const WA  = "https://wa.me/919188211822?text=Hi%20Sasikumar%2C%20I%20would%20like%20to%20plan%20a%20Kanthalloor%20trip!";
const GMB = "https://share.google/ShdDhwTH7GiITUdiw";

/* ── Scroll-reveal hook ──────────────────────────────────────────────── */
function useReveal(selector: string, threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(selector);
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity    = "1";
          (e.target as HTMLElement).style.transform  = "translateY(0) scale(1)";
          io.unobserve(e.target);
        }
      }),
      { threshold }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
  return ref;
}

const SERVICES = [
  { icon: "fa-truck-monster", title: "Jeep Safari",      desc: "Off-road mountain trails, forest routes and scenic viewpoints across Kanthalloor and Marayoor." },
  { icon: "fa-house",         title: "Rooms & Stay",     desc: "Comfortable, clean rooms surrounded by nature for a peaceful and relaxing stay." },
  { icon: "fa-route",         title: "Local Tours",      desc: "Guided tours to waterfalls, apple orchards, local farms and heritage spots around the region." },
  { icon: "fa-users",         title: "Group Packages",   desc: "Custom packages for families, couples, friends and corporate groups with personalized service." },
];

const VALUES = [
  { icon: "fa-map-marked-alt", title: "Local Knowledge",    desc: "Born and raised in Kanthalloor, Sasikumar knows every trail, viewpoint and hidden gem in the region." },
  { icon: "fa-handshake",      title: "Personal Service",   desc: "Every trip is planned personally — not a package tour, but a real local experience tailored to you." },
  { icon: "fa-shield-alt",     title: "Safe & Reliable",    desc: "Well-maintained jeeps, responsible driving, and transparent communication for every booking." },
  { icon: "fa-leaf",           title: "Nature Respect",     desc: "Eco-conscious operations that preserve the natural beauty of Kanthalloor for future generations." },
];

const STATS = [
  { value: "500+",   label: "Happy Guests",     icon: "fa-users" },
  { value: "5.0 ★",  label: "Google Rating",    icon: "fa-star" },
  { value: "10+",    label: "Safari Routes",     icon: "fa-route" },
  { value: "Kanthalloor", label: "Base Location", icon: "fa-map-marker-alt" },
];

export default function AboutClient() {
  const heroRef     = useReveal(".hero-reveal");
  const statsRef    = useReveal(".stat-reveal");
  const storyRef    = useReveal(".story-reveal");
  const servRef     = useReveal(".serv-reveal");
  const valRef      = useReveal(".val-reveal");

  return (
    <>
      {/* ═══════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════ */}
      <section
        ref={heroRef as React.RefObject<HTMLElement>}
        className="relative min-h-[88vh] flex items-center overflow-hidden"
      >
        {/* Background */}
        <img
          src="/jeep/jeep 9.png"
          alt="Kanthalloor Jeep Safari Little Kashmir of Kerala"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(110deg,rgba(5,20,10,0.93) 0%,rgba(8,26,15,0.82) 42%,rgba(8,26,15,0.40) 70%,rgba(4,14,8,0.12) 100%)"
        }} />
        {/* Top vignette */}
        <div className="absolute top-0 inset-x-0 h-24" style={{ background: "linear-gradient(to bottom,rgba(0,0,0,0.25),transparent)" }} />

        {/* Floating leaf */}
        <div className="absolute top-8 left-6 w-32 h-32 opacity-10 pointer-events-none select-none">
          <svg viewBox="0 0 200 200" fill="none">
            <path d="M30,10 C90,20 120,90 100,160 C80,110 50,40 30,10 Z" fill="#4ade80" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Eyebrow */}
          <div
            className="hero-reveal inline-flex items-center gap-2 mb-5"
            style={{ opacity: 0, transform: "translateY(28px)", transition: "all 0.7s ease" }}
          >
            <span className="text-[11px] font-extrabold tracking-[0.34em] uppercase text-[#4ade80]">
              About Us
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
            <span className="text-[11px] font-extrabold tracking-[0.34em] uppercase text-white/60">
              Kanthalloor Safari & Stay
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="hero-reveal font-black text-white tracking-tight leading-[0.9] mb-6"
            style={{
              fontSize: "clamp(2.8rem, 8vw, 6rem)",
              textShadow: "0 2px 24px rgba(0,0,0,0.5)",
              opacity: 0, transform: "translateY(36px)", transition: "all 0.7s 0.15s ease"
            }}
          >
            Meet <span style={{ color: "#4ade80" }}>Sasikumar</span>
            <br />
            <span className="text-white/90" style={{ fontSize: "0.6em", fontWeight: 800 }}>
              Your Local Guide in Kanthalloor
            </span>
          </h1>

          {/* Description */}
          <p
            className="hero-reveal text-white/80 text-sm sm:text-lg leading-relaxed max-w-xl mb-8"
            style={{ opacity: 0, transform: "translateY(28px)", transition: "all 0.7s 0.3s ease" }}
          >
            Sasikumar is a trusted local Jeep Safari operator and room stay host based in
            Kanthalloor and Marayoor — the Little Kashmir of Kerala. With deep knowledge of
            the land and a passion for sharing its beauty, he creates authentic, memorable
            experiences for every visitor.
          </p>

          {/* CTA */}
          <div
            className="hero-reveal flex flex-wrap gap-3"
            style={{ opacity: 0, transform: "translateY(28px)", transition: "all 0.7s 0.45s ease" }}
          >
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#22c55e] hover:bg-green-500 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
              style={{ boxShadow: "0 4px 20px rgba(34,197,94,0.4)" }}>
              <i className="fab fa-whatsapp text-xl" />
              Chat with Sasikumar
            </a>
            <a href={GMB} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/12 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95">
              <i className="fab fa-google text-white" />
              View on Google
            </a>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#fafbf9] to-transparent" />
      </section>

      {/* ═══════════════════════════════════
          2. STATS BAR
      ═══════════════════════════════════ */}
      <section
        ref={statsRef as React.RefObject<HTMLElement>}
        className="py-10 bg-white border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="stat-reveal text-center"
                style={{ opacity: 0, transform: "translateY(24px) scale(0.95)", transition: `all 0.6s ${i * 0.1}s ease` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#1a4329] flex items-center justify-center text-xl mx-auto mb-3">
                  <i className={`fas ${s.icon}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#112918]">{s.value}</div>
                <div className="text-xs text-gray-500 font-semibold mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          3. STORY SECTION
      ═══════════════════════════════════ */}
      <section
        ref={storyRef as React.RefObject<HTMLElement>}
        className="py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Image side — 3D tilt card */}
            <div
              className="story-reveal relative"
              style={{ opacity: 0, transform: "translateY(40px)", transition: "all 0.8s ease" }}
            >
              {/* 3D floating image */}
              <div
                className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white hero-img-float"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src="/jeep/jeep0.png"
                  alt="Sasikumar Jeep Safari Kanthalloor"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 z-10"
                  style={{ backgroundColor: "rgba(17,41,24,0.92)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.18)", padding: "0.75rem 1.1rem", borderRadius: "1rem", boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}>
                  <p className="font-script text-[15px] leading-tight text-[#4ade80]">Your local guide,</p>
                  <p className="font-script text-[19px] font-bold leading-tight text-white">Sasikumar 🌿</p>
                </div>
              </div>

              {/* Floating info card */}
              <div
                className="absolute -bottom-6 -right-2 sm:right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 max-w-[200px] hidden sm:block"
                style={{ animation: "badge-float 4s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#1a4329] flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-[#4ade80] text-xs" />
                  </div>
                  <span className="text-xs font-bold text-[#112918]">Based In</span>
                </div>
                <p className="text-sm font-extrabold text-[#1a4329]">Kanthalloor</p>
                <p className="text-[11px] text-gray-400 font-medium">Idukki, Kerala</p>
              </div>

              {/* Glow */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-emerald-100 rounded-full blur-3xl -z-10 opacity-60" />
            </div>

            {/* Text side */}
            <div
              className="story-reveal flex flex-col gap-5"
              style={{ opacity: 0, transform: "translateY(40px)", transition: "all 0.8s 0.2s ease" }}
            >
              <div className="inline-flex items-center gap-2 text-[#2e7d32] font-extrabold text-[11px] tracking-[0.26em] uppercase">
                <span>🌿</span>
                <span>Our Story</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#112918] leading-tight">
                Kanthalloor Through
                <br />
                <span className="text-[#2e7d32]">Local Eyes</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                Sasikumar is a local entrepreneur from Kanthalloor — a scenic hill village in
                Idukki district, famously known as the <strong className="text-[#112918]">Little Kashmir of Kerala</strong>.
                With years of experience navigating the mountain trails of Kanthalloor and Marayoor,
                he offers Jeep Safari tours that go beyond ordinary sightseeing.
              </p>

              <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                From misty morning drives through sandalwood forests to riverside viewpoints and
                apple orchards, every safari is a genuine local experience. His comfortable room
                stays provide guests with a peaceful base to explore the region at their own pace.
              </p>

              <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                Sasikumar's approach is simple — <em className="text-[#1a4329] font-semibold">personal, honest, and rooted in love for the land</em>.
                Every guest is treated like family, and every trip is planned around what you
                actually want to experience.
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Local Expert", "Kanthalloor Based", "Jeep Safari", "Rooms & Stay", "Marayoor Tours", "Little Kashmir"].map((tag) => (
                  <span key={tag}
                    className="text-[11px] font-bold bg-green-50 text-[#1a4329] px-3 py-1.5 rounded-full border border-green-100">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Contact */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1a4329] hover:bg-[#112918] text-white font-bold text-sm px-6 py-3 rounded-full transition-all shadow hover:shadow-lg active:scale-95">
                  <i className="fab fa-whatsapp text-[#4ade80] text-base" />
                  Plan Your Trip
                </a>
                <a href="tel:+918281141813"
                  className="inline-flex items-center gap-2 bg-white border-2 border-[#112918] text-[#112918] hover:bg-[#112918] hover:text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all active:scale-95">
                  <i className="fa-solid fa-phone text-sm" />
                  +91 82811 41813
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          4. SERVICES
      ═══════════════════════════════════ */}
      <section
        ref={servRef as React.RefObject<HTMLElement>}
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-[#2e7d32] font-bold text-[11px] tracking-[0.26em] uppercase mb-3">
              <span>🚙</span><span>What We Offer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#112918] leading-tight">
              Services by <span className="text-[#2e7d32]">Sasikumar</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className="serv-reveal group bg-[#f9faf8] rounded-[1.75rem] p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400"
                style={{ opacity: 0, transform: "translateY(32px) scale(0.97)", transition: `all 0.6s ${i * 0.12}s ease` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-green-50 text-[#1a4329] flex items-center justify-center text-2xl mb-5 group-hover:bg-[#1a4329] group-hover:text-[#4ade80] transition-all duration-300">
                  <i className={`fas ${s.icon}`} />
                </div>
                <h3 className="text-lg font-extrabold text-[#112918] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          5. VALUES / WHY SASIKUMAR
      ═══════════════════════════════════ */}
      <section
        ref={valRef as React.RefObject<HTMLElement>}
        className="py-16 sm:py-20 bg-[#112918] relative overflow-hidden"
      >
        {/* Decorative bg */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#4ade80]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#4ade80]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-[#4ade80] font-bold text-[11px] tracking-[0.26em] uppercase mb-3">
              <span>🌿</span><span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Why Travel with <span className="text-[#4ade80]">Sasikumar?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="val-reveal group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[1.75rem] p-6 border border-white/10 hover:border-[#4ade80]/30 transition-all duration-400 hover:-translate-y-1"
                style={{ opacity: 0, transform: "translateY(32px)", transition: `all 0.6s ${i * 0.12}s ease` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#4ade80]/15 text-[#4ade80] flex items-center justify-center text-xl mb-4 group-hover:bg-[#4ade80]/25 transition-all duration-300">
                  <i className={`fas ${v.icon}`} />
                </div>
                <h3 className="text-base font-extrabold text-white mb-2">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          6. CTA
      ═══════════════════════════════════ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl text-center py-20 px-6 sm:px-12">
          <img
            src="/stays/res8.jpeg"
            alt="Kanthalloor mountain view"
            onError={(e) => { (e.target as HTMLImageElement).src = "/jeep/jeep 9.png"; }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#071a0f]/88" />

          <div className="relative z-10 max-w-xl mx-auto">
            <span className="inline-block text-[11px] font-black tracking-[0.28em] text-[#4ade80] uppercase mb-4">
              Ready to Explore?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">
              Book Your Kanthalloor
              <br />
              <span className="text-[#4ade80]">Experience Today</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-8 leading-relaxed max-w-md mx-auto">
              Contact Sasikumar directly for Jeep Safari bookings, room availability
              and personalized travel advice for Kanthalloor and Marayoor.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#22c55e] hover:bg-green-500 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
                style={{ boxShadow: "0 4px 24px rgba(34,197,94,0.38)" }}>
                <i className="fab fa-whatsapp text-xl" />
                Chat on WhatsApp
              </a>
              <a href="tel:+918281141813"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/25 font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95">
                <i className="fa-solid fa-phone text-[#4ade80]" />
                +91 82811 41813
              </a>
            </div>

            {/* Both numbers */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+918281141813" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors">
                <i className="fa-solid fa-phone text-[#4ade80] text-xs" />
                +91 82811 41813
              </a>
              <span className="text-white/30">|</span>
              <a href="tel:+919188211822" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors">
                <i className="fab fa-whatsapp text-[#4ade80] text-sm" />
                +91 91882 11822
              </a>
            </div>

            <p className="font-script text-[1.4rem] text-white/40 mt-8">
              Explore • Stay • Experience
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
