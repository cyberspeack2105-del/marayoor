"use client";

const REASONS = [
  {
    num: "01",
    icon: "fa-map-marked-alt",
    title: "Local Experience",
    desc: "We know Kanthalloor inside out. Our team provides genuine local guidance to help you explore the destination authentically.",
  },
  {
    num: "02",
    icon: "fa-house",
    title: "Comfortable Stay",
    desc: "Relax in well-maintained rooms surrounded by nature. Clean, comfortable and peaceful — just what you need after a day of adventure.",
  },
  {
    num: "03",
    icon: "fa-whatsapp",
    title: "Easy Enquiry",
    desc: "No complicated booking process. Simply reach us on WhatsApp or phone and we'll arrange everything for your trip.",
    iconClass: "fab",
  },
  {
    num: "04",
    icon: "fa-star",
    title: "Personal Travel Experience",
    desc: "We treat every guest personally. Your trip is planned around your preferences, not a one-size-fits-all package.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-[#fafbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#2e7d32] font-bold text-[11px] tracking-[0.26em] uppercase mb-3">
            <span>🌿</span>
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#112918] tracking-tight leading-tight">
            Why Experience Kanthalloor
            <br />
            <span className="text-[#2e7d32]">With Us?</span>
          </h2>
        </div>

        {/* 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((r) => (
            <div
              key={r.num}
              className="group bg-white rounded-[1.75rem] p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Number */}
              <span className="text-[2.8rem] font-black text-gray-100 leading-none block mb-3 select-none">
                {r.num}
              </span>
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-[#1a4329] flex items-center justify-center mb-4 group-hover:bg-[#1a4329] group-hover:text-[#4ade80] transition-all duration-300">
                <i className={`${r.iconClass ?? "fas"} ${r.icon} text-lg`} />
              </div>
              <h3 className="text-lg font-extrabold text-[#112918] mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
