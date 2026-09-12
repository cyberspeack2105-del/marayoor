"use client";

const POSTS = [
  {
    cat: "Destination Guide",
    date: "Sep 1, 2026",
    title: "Best Places to Visit in Kanthalloor",
    excerpt: "Discover the top scenic spots, viewpoints and natural attractions that make Kanthalloor a must-visit destination.",
    img: "/attractions/view-point.jpeg",
    alt: "Bramaram Viewpoint — best places to visit in Kanthalloor",
  },
  {
    cat: "Safari Guide",
    date: "Aug 25, 2026",
    title: "Kanthalloor Jeep Safari Guide",
    excerpt: "Everything you need to know about planning a Jeep Safari in Kanthalloor — trails, tips and what to expect.",
    img: "/attractions/muruga-malai.jpeg",
    alt: "Murugan Malai viewpoint Kanthalloor Jeep Safari guide",
  },
  {
    cat: "Travel Tips",
    date: "Aug 18, 2026",
    title: "Things to Do in Kanthalloor",
    excerpt: "From Irachipara Waterfalls to zip line adventures, explore the diverse range of activities in Kanthalloor.",
    img: "/attractions/irachipara-waterfalls.jpeg",
    alt: "Irachipara Waterfalls — things to do in Kanthalloor",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-20 bg-[#fafbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 text-[#2e7d32] font-bold text-[11px] tracking-[0.26em] uppercase mb-3">
              <span>📖</span>
              <span>Travel Guide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#112918] leading-tight mb-4">
              Travel. Discover.
              <br />
              <span className="text-[#2e7d32]">Learn.</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed mb-7">
              Useful travel information, destination guides and tips to help you plan your
              Kanthalloor experience.
            </p>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#1a4329] hover:bg-[#112918] text-white font-bold text-sm px-6 py-3 rounded-full transition-all shadow hover:shadow-lg active:scale-95"
            >
              <i className="fas fa-book-open text-[#4ade80]" />
              Read Our Travel Guide
              <i className="fas fa-arrow-right text-xs" />
            </a>
          </div>

          {/* Right — article cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {POSTS.map((post) => (
              <article
                key={post.title}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.alt}
                    onError={(e) => { (e.target as HTMLImageElement).src = "/attractions/view-point.jpeg"; }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Body */}
                <div className="flex flex-col flex-1 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-[#2e7d32] bg-green-50 px-2.5 py-0.5 rounded-full border border-green-100">
                      {post.cat}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium">{post.date}</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-[#112918] leading-snug group-hover:text-[#2e7d32] transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-[12px] leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-3 pt-3 border-t border-gray-50">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a4329] group-hover:text-[#2e7d32] transition-colors cursor-pointer">
                      Read More
                      <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
