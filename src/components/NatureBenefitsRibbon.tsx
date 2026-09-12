"use client";

const BENEFITS = [
  { icon: "fa-tree",       label: "Nature Trails" },
  { icon: "fa-binoculars", label: "Scenic Views" },
  { icon: "fa-wind",       label: "Fresh Air" },
  { icon: "fa-heart",      label: "Lasting Memories" },
];

export default function NatureBenefitsRibbon() {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#153420] text-white rounded-[2.5rem] px-6 py-8 lg:px-12 lg:py-10 relative overflow-hidden shadow-2xl">

        {/* Decorative subtle leaf bg */}
        <div className="absolute right-0 top-0 w-40 h-full opacity-5 pointer-events-none select-none">
          <svg viewBox="0 0 200 300" className="w-full h-full" fill="white">
            <path d="M30,10 C90,20 120,90 100,260 C80,180 50,60 30,10 Z" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">

          {/* Left: nature image */}
          <div className="lg:col-span-3">
            <div className="w-full h-24 lg:h-28 rounded-2xl overflow-hidden border border-white/20 shadow-inner">
              <img
                src="/stays/res4.jpeg"
                alt="Nature scene in Marayoor"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDnQ4IU7N7sq2U_6GiO4srqMhARUDHlWitLzLKxe5eyV09UQ_UEQ6beFg6q-03WYeqTy6INbEPkZCxN90RkmFadAReRwaJdHbo3YH52U6TZ6OYcyY3O4om2mE5lEe3GeRGCPzSBtfhO3JUMHBCg_PStX_KTTJZy1NM1I52JXT6BQOXrIE136RzVG_NuyJBjTeVxN-vwcrsorg8KlKgpsrveKEDPANgh2BQEozWGYrjkurrQUQHl7Zgt";
                }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center: 4 benefit icons */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-5 text-center">
            {BENEFITS.map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-2.5 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#4ade80] text-xl group-hover:bg-white group-hover:text-[#112918] transition-all duration-200">
                  <i className={`fas ${b.icon}`} />
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-wide leading-tight text-white/90">
                  {b.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right: script text */}
          <div className="lg:col-span-3 text-center lg:text-right border-t lg:border-t-0 lg:border-l border-white/20 pt-5 lg:pt-0 lg:pl-6">
            <p className="font-script text-[2rem] sm:text-[2.5rem] text-[#4ade80] leading-tight">
              Nature
            </p>
            <p className="font-script text-[2.2rem] sm:text-[2.8rem] text-white font-bold leading-tight">
              Heals Here
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
