"use client";

const ATTRACTIONS = [
  {
    icon: "fa-mountain",
    img: "/attractions/view-point.jpeg",
    alt: "Bramaram Viewpoint scenic view in Kanthalloor",
    title: "Bramaram Viewpoint",
    desc: "Iconic mountain viewpoint with panoramic sunrise views over the valley — most popular safari stop.",
  },
  {
    icon: "fa-water",
    img: "/attractions/irachipara-waterfalls.jpeg",
    alt: "Irachipara Waterfalls Kanthalloor",
    title: "Irachipara Waterfalls",
    desc: "Stunning waterfall cascading through the forest — a highlight on the Morning Safari route.",
  },
  {
    icon: "fa-tree",
    img: "/attractions/dandel-forest.jpeg",
    alt: "Sandalwood forest Kanthalloor Marayoor",
    title: "Sandal Forest",
    desc: "Walk through one of Kerala's last protected sandalwood reserves — fragrant and breathtaking.",
  },
  {
    icon: "fa-hill-rockslide",
    img: "/attractions/honey-rock.jpeg",
    alt: "Honey Rock landmark Kanthalloor safari",
    title: "Honey Rock",
    desc: "Famous natural rock landmark and photography spot on the Jeep Safari trail.",
  },
  {
    icon: "fa-flag",
    img: "/attractions/muruga-malai.jpeg",
    alt: "Murugan Malai viewpoint Kanthalloor",
    title: "Murugan Malai",
    desc: "Elevated hilltop spot with sweeping valley views — perfect for sunset and golden hour photography.",
  },
  {
    icon: "fa-industry",
    img: "/attractions/jeggery.jpeg",
    alt: "Traditional jaggery making Marayoor Kanthalloor",
    title: "Jaggery Experience",
    desc: "Watch the centuries-old craft of making Marayoor Sharkara jaggery from freshly crushed sugarcane.",
  },
  {
    icon: "fa-paw",
    img: "/attractions/deer.jpeg",
    alt: "Spotted deer wildlife Kanthalloor",
    title: "Wildlife — Deer",
    desc: "Spotted deer in their natural habitat — commonly seen on the forest trails during safari.",
  },
  {
    icon: "fa-hippo",
    img: "/attractions/gaor.jpeg",
    alt: "Gaur Indian bison wildlife Kanthalloor",
    title: "Wildlife — Gaur",
    desc: "Indian Gaur (bison) near the Chinnar Wildlife Border — a thrilling wildlife encounter.",
  },
  {
    icon: "fa-person-falling",
    img: "/attractions/zip-line.jpeg",
    alt: "Zip line adventure activity Kanthalloor",
    title: "Zip Line Adventure",
    desc: "Soar through the treetops on the Kanthalloor zip line — an exciting outdoor adventure activity.",
  },
];

export default function AttractionsSection() {
  return (
    <section id="attractions" className="py-16 sm:py-20 bg-[#fafbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-[#2e7d32] font-bold text-[11px] tracking-[0.26em] uppercase mb-3">
            <span>🗺️</span>
            <span>Discover the Destination</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#112918] tracking-tight leading-tight">
            Explore What Kanthalloor
            <br />
            <span className="text-[#2e7d32]">Has to Offer</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-[15px] leading-relaxed">
            From misty mountain views to hidden waterfalls — Kanthalloor is full of
            experiences waiting to be discovered.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ATTRACTIONS.map((a) => (
            <div key={a.title}
              className="group bg-white rounded-[1.75rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img src={a.img} alt={a.alt}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/attractions/view-point.jpeg";
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow text-[#1a4329]">
                  <i className={`fas ${a.icon} text-sm`} />
                </div>
              </div>
              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[17px] font-extrabold text-[#112918] mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{a.desc}</p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <a href="/gallery"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1a4329] group-hover:text-[#2e7d32] transition-colors">
                    View Photos
                    <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a href="/gallery"
            className="inline-flex items-center gap-2 bg-[#1a4329] hover:bg-[#112918] text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-xl active:scale-95">
            View Full Gallery
            <i className="fas fa-arrow-right text-xs" />
          </a>
        </div>

      </div>
    </section>
  );
}
