"use client";

import { useEffect, useRef } from "react";

const WA  = "https://wa.me/919188211822?text=Hi%20Sasikumar%2C%20I%20would%20like%20to%20book%20a%20Jeep%20Safari%20in%20Kanthalloor!";
const GMB = "https://share.google/ShdDhwTH7GiITUdiw";

/* ── scroll reveal ── */
function useReveal(sel: string, threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(sel);
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity   = "1";
          (e.target as HTMLElement).style.transform = "translateY(0) scale(1)";
          io.unobserve(e.target);
        }
      }),
      { threshold }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sel]);
  return ref;
}

const TRAILS = [
  {
    img: "/jeep/jeep 9.png",
    title: "Full Day Jeep Safari",
    duration: "8 Hours",
    timing: "Full Day",
    group: "6–8 passengers per jeep",
    highlights: [
      "Aadivayal + Irachal Para Waterfalls",
      "Bramaram Viewpoint & Honey Rock",
      "Sandal Forest & Strawberry Farm",
      "Jaggery Point & Murugan Malai",
      "Professional driver-guide",
      "6–8 passengers per jeep",
    ],
    badge: "Most Popular",
    badgeColor: "#7c3aed",
    cta: "Enquire Full Day Safari",
  },
  {
    img: "/jeep/jeep0.png",
    title: "Half Day Morning Safari",
    duration: "5 Hours",
    timing: "6am – 11am",
    group: "6–8 passengers per jeep",
    highlights: [
      "Sunrise at Bramaram Viewpoint",
      "Aadivayal Waterfall",
      "Strawberry Farm visit",
      "Honey Rock & local farms",
      "6am–11am timings",
    ],
    badge: "Morning Sunrise",
    badgeColor: "#b45309",
    cta: "Enquire Morning Safari",
  },
  {
    img: "/jeep/jeep2.jpeg",
    title: "Evening Adventure Safari",
    duration: "5 Hours",
    timing: "2pm – 7pm",
    group: "6–8 passengers per jeep",
    highlights: [
      "Sunset at Murugan Malai",
      "Irachal Para Waterfall",
      "Sandal Forest trails",
      "Jaggery Point experience",
      "2pm–7pm timings",
    ],
    badge: "Evening Sunset",
    badgeColor: "#0f766e",
    cta: "Enquire Evening Safari",
  },
  {
    img: "/jeep/jeep3.jpeg",
    title: "Custom Private Safari",
    duration: "Your Choice",
    timing: "Any time",
    group: "6–8 passengers per jeep",
    highlights: [
      "Fully customized route",
      "Choose your stops",
      "Any timing — sunrise to sunset",
      "Perfect for families & groups",
      "Professional local guide",
    ],
    badge: "Custom",
    badgeColor: "#1a4329",
    cta: "Plan Custom Safari",
  },
];

const FEATURES = [
  { icon: "fa-user-shield",   title: "Local Expert Guide",    desc: "Sasikumar is a native of Kanthalloor with years of trail knowledge and local insights." },
  { icon: "fa-truck-monster", title: "4×4 Private Jeep",      desc: "Well-maintained jeeps reserved exclusively for your group — no shared rides." },
  { icon: "fa-mountain",      title: "Scenic Trails",         desc: "Routes through mountain passes, forest roads and valley overlooks not accessible by car." },
  { icon: "fa-camera",        title: "Photo Opportunities",   desc: "Generous stops at every viewpoint, waterfall and scenic location along the route." },
  { icon: "fa-clock",         title: "Flexible Timing",       desc: "Morning, afternoon and sunrise slots available. Custom timings on request." },
  { icon: "fa-leaf",          title: "Eco-Conscious",         desc: "Responsible trail practices that respect nature and preserve Kanthalloor's beauty." },
];

const GALLERY = [
  { src: "/jeep/jeep 9.png",  alt: "Two jeeps at Kanthalloor mountain viewpoint", span: true },
  { src: "/jeep/jeep0.png",   alt: "Jeep Safari trail Kanthalloor" },
  { src: "/jeep/jeep2.jpeg",  alt: "Jeep on mountain road Kanthalloor" },
  { src: "/jeep/jeep3.jpeg",  alt: "Off-road Jeep forest trail" },
  { src: "/jeep/jeep4.jpeg",  alt: "Jeep Safari adventure Kanthalloor" },
  { src: "/jeep/jeep5.jpeg",  alt: "Scenic jeep trail Marayoor" },
];

const FAQS = [
  { q: "Is the price per person or per jeep?",            a: "Pricing is per jeep, not per person. Each jeep carries up to 6 guests, so the cost is shared across your group." },
  { q: "Do you share jeeps with other groups?",           a: "No. Every booking is a private jeep exclusively for your group. No sharing with strangers." },
  { q: "What is the best time for the safari?",          a: "Early morning (6–9 AM) is best for mist, cool weather and sunrise views. Evenings also offer beautiful golden light." },
  { q: "Is it safe for children and elderly guests?",    a: "Yes. Trails are chosen based on your group's comfort level. Sasikumar will customize the route accordingly." },
  { q: "Do I need to book in advance?",                  a: "Advance booking via WhatsApp is recommended, especially for sunrise slots and weekends. Same-day bookings subject to availability." },
  { q: "What should I carry for the safari?",            a: "Comfortable clothes, a light jacket (mornings are cold), water, sunscreen and your camera. Everything else is arranged." },
];

export default function JeepSafariClient() {
  const trailRef   = useReveal(".trail-reveal");
  const featRef    = useReveal(".feat-reveal");
  const galRef     = useReveal(".gal-reveal");
  const faqRef     = useReveal(".faq-reveal");

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <img src="/jeep/jeep 9.png" alt="Kanthalloor Jeep Safari" className="absolute inset-0 w-full h-full object-cover object-center" />
        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(110deg,rgba(5,18,10,0.95) 0%,rgba(7,24,12,0.85) 42%,rgba(7,24,12,0.40) 68%,rgba(3,12,6,0.10) 100%)" }} />
        <div className="absolute top-0 inset-x-0 h-24" style={{ background: "linear-gradient(to bottom,rgba(0,0,0,0.3),transparent)" }} />
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#fafbf9] to-transparent" />

        {/* Leaf decor */}
        <div className="absolute top-8 left-6 w-36 h-36 opacity-10 pointer-events-none select-none">
          <svg viewBox="0 0 200 200" fill="none"><path d="M30,10 C90,20 120,90 100,160 C80,110 50,40 30,10 Z" fill="#4ade80"/></svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5 animate-fade-up">
              <span className="w-8 h-[2px] bg-[#4ade80]" />
              <span className="text-[11px] font-extrabold tracking-[0.32em] uppercase text-[#4ade80]">
                Kanthalloor • Marayoor
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-black text-white tracking-tight leading-[0.88] mb-6 animate-fade-up-d1"
              style={{ fontSize: "clamp(3rem, 9vw, 6rem)", textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}
            >
              JEEP SAFARI
              <br />
              <span style={{ color: "#4ade80" }}>ADVENTURE</span>
            </h1>

            {/* Sub */}
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.28em] uppercase text-white/50 mb-5 animate-fade-up-d2">
              Mountains <span className="mx-2 text-[#4ade80]">•</span>
              Forests <span className="mx-2 text-[#4ade80]">•</span>
              Valleys <span className="mx-2 text-[#4ade80]">•</span>
              Heritage
            </p>

            <p className="text-white/80 text-sm sm:text-[16px] leading-relaxed max-w-md mb-8 animate-fade-up-d2">
              Explore the untouched trails of Kanthalloor and Marayoor — the Little Kashmir of
              Kerala — with Sasikumar, your expert local guide.
            </p>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 animate-fade-up-d2">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5 text-amber-400 text-sm">★★★★★</div>
                <span className="text-white text-sm font-bold">5.0</span>
                <span className="text-white/50 text-xs">Google</span>
              </div>
              <div className="h-3.5 w-px bg-white/20" />
              <div className="flex items-center gap-1.5 text-white/70 text-xs font-medium">
                <i className="fas fa-users text-[#4ade80]" />
                500+ Happy Guests
              </div>
              <div className="h-3.5 w-px bg-white/20" />
              <div className="flex items-center gap-1.5 text-white/70 text-xs font-medium">
                <i className="fas fa-route text-[#4ade80]" />
                10+ Trail Routes
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 animate-fade-up-d3">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#22c55e] hover:bg-green-500 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
                style={{ boxShadow: "0 4px 20px rgba(34,197,94,0.4)" }}>
                <i className="fab fa-whatsapp text-xl" />
                Enquire on WhatsApp
              </a>
              <a href="tel:+918281141813"
                className="inline-flex items-center gap-2 bg-white/12 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all active:scale-95">
                <i className="fa-solid fa-phone text-[#4ade80]" />
                +91 82811 41813
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INTRO STRIP
      ══════════════════════════════════════ */}
      <section className="py-10 bg-[#112918]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            {[
              { icon: "fa-map-marker-alt", label: "Kanthalloor, Idukki" },
              { icon: "fa-truck-monster",  label: "Private 4×4 Jeep" },
              { icon: "fa-users",          label: "Up to 6 Per Jeep" },
              { icon: "fa-ban",            label: "No Pricing Shown" },
              { icon: "fa-check-circle",   label: "Enquiry Based Booking" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2.5 text-white/80">
                <i className={`fas ${s.icon} text-[#4ade80] text-base`} />
                <span className="text-sm font-semibold">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SAFARI TRAILS
      ══════════════════════════════════════ */}
      <section
        ref={trailRef as React.RefObject<HTMLElement>}
        className="py-20 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-[#2e7d32] font-bold text-[11px] tracking-[0.26em] uppercase mb-3">
              <span>🚙</span><span>Safari Trails</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#112918] leading-tight">
              Choose Your <span className="text-[#2e7d32]">Adventure</span>
            </h2>
            <p className="mt-3 text-gray-500 text-sm sm:text-[15px] leading-relaxed">
              All trails are private, guided and customizable. Contact us to enquire about
              availability — no prices listed, honest direct quotes provided.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRAILS.map((t, i) => (
              <div
                key={t.title}
                className={`trail-reveal group bg-white rounded-[1.75rem] overflow-hidden border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 flex flex-col ${
                  t.badge === "Most Popular"
                    ? "border-[#7c3aed]/40 ring-2 ring-[#7c3aed]/20"
                    : "border-gray-100"
                }`}
                style={{ opacity: 0, transform: "translateY(36px) scale(0.97)", transition: `all 0.65s ${i * 0.1}s ease` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.title}
                    onError={(e) => { (e.target as HTMLImageElement).src = "/jeep/jeep0.png"; }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  {/* Badge */}
                  <span
                    className="absolute top-3 left-3 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-lg"
                    style={{ backgroundColor: t.badgeColor }}
                  >
                    {t.badge}
                  </span>
                  {/* Duration + timing */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                    <div className="bg-black/60 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                      <i className="fas fa-clock text-[#4ade80] text-[10px]" />
                      {t.duration}
                    </div>
                    <div className="bg-black/60 backdrop-blur-sm text-white/80 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                      {t.timing}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-[17px] font-extrabold text-[#112918] mb-1">{t.title}</h3>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium mb-4">
                    <i className="fas fa-users text-[10px]" />
                    {t.group}
                  </div>
                  <ul className="flex flex-col gap-2 mb-5 flex-1">
                    {t.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                        <i className="fas fa-check text-[#2e7d32] text-[10px] flex-shrink-0 mt-1" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/919188211822?text=Hi%20Sasikumar%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(t.title)}!`}
                    target="_blank" rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 text-white font-bold text-sm py-3 rounded-full transition-all shadow hover:shadow-lg active:scale-95 hover:opacity-90"
                    style={{ backgroundColor: t.badgeColor }}
                  >
                    <i className="fab fa-whatsapp text-white text-base" />
                    {t.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing note */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-800 text-xs font-semibold px-5 py-2.5 rounded-full">
              <i className="fas fa-info-circle text-amber-500" />
              Pricing is not listed online. Contact Sasikumar directly for honest, fair quotes.
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURES DARK SECTION
      ══════════════════════════════════════ */}
      <section
        ref={featRef as React.RefObject<HTMLElement>}
        className="py-16 sm:py-20 bg-[#0e2118] relative overflow-hidden"
      >
        {/* BG orb */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4ade80]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#4ade80]/4 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-[#4ade80] font-bold text-[11px] tracking-[0.26em] uppercase mb-3">
              <span>🌿</span><span>Why Book With Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              The Kanthalloor Safari
              <span className="text-[#4ade80]"> Difference</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="feat-reveal group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-[1.75rem] p-6 border border-white/10 hover:border-[#4ade80]/30 transition-all duration-400 hover:-translate-y-1"
                style={{ opacity: 0, transform: "translateY(32px)", transition: `all 0.6s ${i * 0.1}s ease` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#4ade80]/15 text-[#4ade80] flex items-center justify-center text-xl mb-4 group-hover:bg-[#4ade80]/25 transition-all duration-300">
                  <i className={`fas ${f.icon}`} />
                </div>
                <h3 className="text-base font-extrabold text-white mb-2">{f.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GALLERY
      ══════════════════════════════════════ */}
      <section
        ref={galRef as React.RefObject<HTMLElement>}
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-[#2e7d32] font-bold text-[11px] tracking-[0.26em] uppercase mb-3">
              <span>📸</span><span>Safari Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#112918] leading-tight">
              The Trails <span className="text-[#2e7d32]">We Ride</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {GALLERY.map((img, i) => (
              <div
                key={i}
                className={`gal-reveal group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl cursor-pointer transition-all duration-400 ${img.span ? "col-span-2 row-span-2" : ""}`}
                style={{
                  aspectRatio: img.span ? "auto" : "1/1",
                  minHeight: img.span ? "280px" : "150px",
                  opacity: 0, transform: "translateY(24px) scale(0.97)",
                  transition: `all 0.6s ${i * 0.08}s ease`,
                }}
              >
                <img src={img.src} alt={img.alt}
                  onError={(e) => { (e.target as HTMLImageElement).src = "/jeep/jeep0.png"; }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ minHeight: "inherit" }} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-[#1a4329] shadow-lg">
                    <i className="fas fa-search-plus text-sm" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section
        ref={faqRef as React.RefObject<HTMLElement>}
        className="py-16 sm:py-20 bg-[#fafbf9]"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#2e7d32] font-bold text-[11px] tracking-[0.26em] uppercase mb-3">
              <span>❓</span><span>Common Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#112918]">
              Frequently Asked <span className="text-[#2e7d32]">Questions</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((f, i) => (
              <div
                key={i}
                className="faq-reveal bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-5 sm:p-6"
                style={{ opacity: 0, transform: "translateY(24px)", transition: `all 0.55s ${i * 0.08}s ease` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-green-50 text-[#1a4329] flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                    <i className="fas fa-question text-[10px]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#112918] text-sm sm:text-base mb-1.5">{f.q}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl text-center py-20 px-6 sm:px-12">
          <img src="/jeep/jeep 9.png" alt="Kanthalloor Jeep Safari"
            className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#071a0f]/88" />

          {/* Leaf decor */}
          <div className="absolute top-6 left-6 w-20 h-20 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" fill="none"><path d="M30,10 C90,20 120,90 100,160 C80,110 50,40 30,10 Z" fill="#4ade80"/></svg>
          </div>
          <div className="absolute bottom-6 right-6 w-16 h-16 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" fill="none"><path d="M30,10 C90,20 120,90 100,160 C80,110 50,40 30,10 Z" fill="#4ade80"/></svg>
          </div>

          <div className="relative z-10 max-w-xl mx-auto">
            <span className="inline-block text-[11px] font-black tracking-[0.28em] text-[#4ade80] uppercase mb-4">
              Book Your Safari Today
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
              Ready to Explore
              <br />
              <span className="text-[#4ade80]">Little Kashmir?</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
              Contact Sasikumar directly for safari availability, trail recommendations
              and honest pricing — no middlemen, no hidden charges.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#22c55e] hover:bg-green-500 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
                style={{ boxShadow: "0 4px 24px rgba(34,197,94,0.40)" }}>
                <i className="fab fa-whatsapp text-xl" />
                Chat on WhatsApp
              </a>
              <a href="tel:+918281141813"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/25 font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95">
                <i className="fa-solid fa-phone text-[#4ade80]" />
                +91 82811 41813
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+918281141813" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors">
                <i className="fa-solid fa-phone text-[#4ade80] text-xs" />+91 82811 41813
              </a>
              <span className="text-white/20">|</span>
              <a href="tel:+919188211822" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors">
                <i className="fab fa-whatsapp text-[#4ade80] text-sm" />+91 91882 11822
              </a>
              <span className="text-white/20">|</span>
              <a href={GMB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors">
                <i className="fab fa-google text-[#4ade80] text-xs" />Google Reviews
              </a>
            </div>

            <p className="font-script text-[1.4rem] text-white/35 mt-8">
              Explore • Stay • Experience
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
