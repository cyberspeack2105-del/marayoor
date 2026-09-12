"use client";

const WA    = "https://wa.me/919188211822?text=Hi%20Kanthalloor%20Safari%20%26%20Stay%2C%20I%20would%20like%20to%20plan%20my%20Kanthalloor%20trip!";
const PHONE1 = "tel:+918281141813";
const PHONE2 = "tel:+919188211822";
const GMB    = "https://share.google/ShdDhwTH7GiITUdiw";

export default function CtaBanner() {
  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl text-center py-20 px-6 sm:px-12">

        {/* Background */}
        <img
          src="/stays/res8.jpeg"
          alt="Kanthalloor mountain landscape"
          onError={(e) => { (e.target as HTMLImageElement).src = "/jeep/jeep 9.png"; }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#071a0f]/88" />

        {/* Leaf decor */}
        <div className="absolute top-6 left-6 w-24 h-24 opacity-10 pointer-events-none select-none">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            <path d="M30,10 C90,20 120,90 100,160 C80,110 50,40 30,10 Z" fill="#4ade80" />
          </svg>
        </div>
        <div className="absolute bottom-6 right-6 w-20 h-20 opacity-10 pointer-events-none select-none">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            <path d="M30,10 C90,20 120,90 100,160 C80,110 50,40 30,10 Z" fill="#4ade80" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block text-[11px] font-black tracking-[0.28em] text-[#4ade80] uppercase mb-4">
            Ready For Your Next Adventure?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            Let&apos;s Plan Your
            <br />
            <span className="text-[#4ade80]">Kanthalloor Trip</span> 🌿
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
            Get in touch for Jeep Safari enquiries, stay availability and travel information.
          </p>

          {/* ── Contact buttons ── */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {/* WhatsApp */}
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#22c55e] hover:bg-green-500 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
              style={{ boxShadow: "0 4px 24px rgba(34,197,94,0.35)" }}>
              <i className="fab fa-whatsapp text-xl" />
              Chat on WhatsApp
            </a>
            {/* Primary phone */}
            <a href={PHONE1}
              className="inline-flex items-center gap-2.5 bg-white/12 hover:bg-white/20 backdrop-blur-sm text-white border border-white/25 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95">
              <i className="fa-solid fa-phone text-[#4ade80]" />
              Call Now
            </a>
          </div>

          {/* ── Both phone numbers prominently displayed ── */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href={PHONE1}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-2 rounded-full border border-white/20 transition-all group">
              <span className="w-7 h-7 rounded-full bg-[#4ade80]/20 flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-phone text-[#4ade80] text-xs" />
              </span>
              <span className="text-sm font-bold tracking-wide">+91 82811 41813</span>
            </a>
            <a href={PHONE2}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-2 rounded-full border border-white/20 transition-all group">
              <span className="w-7 h-7 rounded-full bg-[#25D366]/30 flex items-center justify-center flex-shrink-0">
                <i className="fab fa-whatsapp text-[#25D366] text-sm" />
              </span>
              <span className="text-sm font-bold tracking-wide">+91 91882 11822</span>
            </a>
          </div>

          {/* GMB link */}
          <a href={GMB} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-semibold transition-colors">
            <i className="fab fa-google text-sm" />
            View us on Google My Business
            <i className="fas fa-external-link-alt text-[10px]" />
          </a>

          <p className="font-script text-[1.5rem] text-white/40 mt-8 leading-tight">
            Explore • Stay • Experience
          </p>
        </div>

      </div>
    </section>
  );
}
