"use client";

import Link from "next/link";

const WA  = "https://wa.me/919188211822?text=Hi%20Sasikumar%2C%20I%20would%20like%20to%20plan%20a%20Kanthalloor%20trip!";

const BLOG_POSTS = [
  {
    id: "top-places-kanthalloor",
    title: "Top Places to Visit in Kanthalloor",
    excerpt: "From Bramaram Viewpoint to Irachipara Waterfalls and Murugan Malai — discover the most scenic spots in Kanthalloor, the Little Kashmir of Kerala.",
    date: "Sep 1, 2026",
    readTime: "5 min read",
    category: "Destinations",
    image: "/attractions/view-point.jpeg",
    alt: "Bramaram Viewpoint — top places in Kanthalloor",
  },
  {
    id: "kanthalloor-jeep-safari-guide",
    title: "Kanthalloor Jeep Safari Guide",
    excerpt: "Everything you need to know before booking a Jeep Safari in Kanthalloor — trails, timings, what to expect and how to prepare.",
    date: "Aug 25, 2026",
    readTime: "6 min read",
    category: "Safari Guide",
    image: "/attractions/muruga-malai.jpeg",
    alt: "Murugan Malai — Kanthalloor Jeep Safari viewpoint",
  },
  {
    id: "irachipara-waterfalls",
    title: "Irachipara Waterfalls — A Hidden Gem",
    excerpt: "One of the most stunning waterfalls in the region, Irachipara is a key stop on the Kanthalloor Morning Jeep Safari route.",
    date: "Aug 20, 2026",
    readTime: "4 min read",
    category: "Nature",
    image: "/attractions/irachipara-waterfalls.jpeg",
    alt: "Irachipara Waterfalls Kanthalloor",
  },
  {
    id: "sandal-forest-kanthalloor",
    title: "Sandal Forest — Walk Through Nature",
    excerpt: "Kanthalloor and Marayoor are home to one of Kerala's last protected sandalwood forests. Here's what to expect on a forest trail.",
    date: "Aug 15, 2026",
    readTime: "5 min read",
    category: "Nature",
    image: "/attractions/dandel-forest.jpeg",
    alt: "Sandal Forest Kanthalloor Marayoor",
  },
  {
    id: "honey-rock-kanthalloor",
    title: "Honey Rock — Kanthalloor's Famous Landmark",
    excerpt: "Honey Rock is an iconic natural rock formation and photography spot on the Kanthalloor Jeep Safari trail.",
    date: "Aug 10, 2026",
    readTime: "4 min read",
    category: "Attractions",
    image: "/attractions/honey-rock.jpeg",
    alt: "Honey Rock landmark Kanthalloor safari",
  },
  {
    id: "jaggery-making-marayoor",
    title: "Marayoor Jaggery — A Sweet Local Tradition",
    excerpt: "Follow the traditional jaggery-making trail from sugarcane farm to open fire to golden Marayoor Sharkara — a centuries-old craft.",
    date: "Aug 5, 2026",
    readTime: "5 min read",
    category: "Culture",
    image: "/attractions/jeggery.jpeg",
    alt: "Traditional jaggery making Marayoor Kanthalloor",
  },
  {
    id: "wildlife-kanthalloor",
    title: "Wildlife Encounters in Kanthalloor",
    excerpt: "Spotted deer, Indian Gaur and more — the forests around Kanthalloor and Chinnar are rich with wildlife.",
    date: "Jul 28, 2026",
    readTime: "4 min read",
    category: "Wildlife",
    image: "/attractions/deer.jpeg",
    alt: "Spotted deer wildlife Kanthalloor forest",
  },
  {
    id: "zip-line-adventure",
    title: "Zip Line in Kanthalloor — Try It!",
    excerpt: "Add an extra thrill to your Kanthalloor trip with the zip line experience — soar over the treetops with stunning valley views below.",
    date: "Jul 20, 2026",
    readTime: "3 min read",
    category: "Adventure",
    image: "/attractions/zip-line.jpeg",
    alt: "Zip line adventure activity Kanthalloor",
  },
];

const CAT_COLOR: Record<string, string> = {
  Destinations:   "bg-[#1a4329] text-white",
  "Safari Guide": "bg-emerald-700 text-white",
  Nature:         "bg-teal-700 text-white",
  Attractions:    "bg-[#166534] text-white",
  Culture:        "bg-amber-700 text-white",
  Wildlife:       "bg-orange-700 text-white",
  Adventure:      "bg-red-700 text-white",
};

const fallback = "/attractions/view-point.jpeg";

export default function BlogPageClient() {
  const featured = BLOG_POSTS[0];
  const rest     = BLOG_POSTS.slice(1);

  return (
    <>
      {/* ── Header ── */}
      <section className="relative overflow-hidden bg-[#0e2118] py-20 px-4 sm:px-6 lg:px-8 text-white text-center">
        <img src="/attractions/view-point2.jpeg" alt="Kanthalloor Travel Guide"
          onError={(e) => { (e.target as HTMLImageElement).src = fallback; }}
          className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e2118]/70 to-[#0e2118]/95" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[#4ade80] font-bold text-[11px] tracking-[0.26em] uppercase mb-4">
            <span>📖</span><span>Travel Guide & Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-3">
            Kanthalloor Travel Guide
          </h1>
          <p className="text-gray-300 text-base leading-relaxed max-w-lg mx-auto">
            Stories, guides and insights about Kanthalloor — the Little Kashmir of Kerala.
          </p>
        </div>
      </section>

      {/* ── Featured Post ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="group bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden">
            <img src={featured.image} alt={featured.alt}
              onError={(e) => { (e.target as HTMLImageElement).src = fallback; }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute top-4 left-4 bg-[#1a4329] text-[#4ade80] text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full">
              ✦ Featured
            </span>
          </div>
          <div className="p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full ${CAT_COLOR[featured.category] ?? "bg-gray-100 text-gray-600"}`}>
                  {featured.category}
                </span>
                <span className="text-[11px] text-gray-400 font-medium">{featured.readTime}</span>
                <span className="text-[11px] text-gray-400">•</span>
                <span className="text-[11px] text-gray-400 font-medium">{featured.date}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#112918] mb-4 leading-tight group-hover:text-[#2e7d32] transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={`/blog/${featured.id}`}
                className="inline-flex items-center gap-2 bg-[#1a4329] hover:bg-[#112918] text-white font-bold text-sm px-6 py-3 rounded-full transition-all shadow hover:shadow-lg active:scale-95">
                Read Full Guide <i className="fas fa-arrow-right text-xs" />
              </Link>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-green-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-all active:scale-95">
                <i className="fab fa-whatsapp text-base" />Plan Your Trip
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── All Articles ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between border-b border-gray-200 pb-5 mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-[#112918]">All Guides & Articles</h2>
          <span className="text-xs font-bold bg-green-50 text-[#1a4329] px-3 py-1.5 rounded-full border border-green-100">
            {BLOG_POSTS.length} Articles
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {rest.map((post) => (
            <article key={post.id}
              className="group bg-white rounded-[1.75rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={post.image} alt={post.alt}
                  onError={(e) => { (e.target as HTMLImageElement).src = fallback; }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className={`absolute top-3 left-3 text-[9px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full ${CAT_COLOR[post.category] ?? "bg-gray-800 text-white"}`}>
                  {post.category}
                </span>
                <span className="absolute bottom-3 right-3 text-white text-[10px] font-semibold bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full">
                  {post.readTime}
                </span>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[10px] text-gray-400 font-medium mb-1.5 block">{post.date}</span>
                <h3 className="font-extrabold text-sm text-[#112918] leading-snug mb-2 group-hover:text-[#2e7d32] transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-[11px] leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-gray-300">Kanthalloor Safari</span>
                  <Link href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-[#1a4329] font-bold text-xs hover:gap-2 transition-all">
                    Read <i className="fas fa-arrow-right text-[9px]" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl text-center py-16 px-6 sm:px-12">
          <img src="/attractions/view-point2.jpeg" alt="Kanthalloor valley viewpoint"
            onError={(e) => { (e.target as HTMLImageElement).src = fallback; }}
            className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#071a0f]/88" />
          <div className="relative z-10 max-w-xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Ready to Explore Kanthalloor?
              <span className="text-[#4ade80]"> 🌿</span>
            </h3>
            <p className="text-gray-300 text-sm mb-8">
              Contact Sasikumar for Jeep Safari bookings, room stays and personalized travel planning.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#22c55e] hover:bg-green-500 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95">
                <i className="fab fa-whatsapp text-xl" />Chat on WhatsApp
              </a>
              <a href="tel:+918281141813"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/25 font-bold text-sm px-8 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95">
                <i className="fa-solid fa-phone text-[#4ade80]" />+91 82811 41813
              </a>
            </div>
            {/* Both numbers */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="tel:+918281141813" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors">
                <i className="fa-solid fa-phone text-[#4ade80] text-xs" />+91 82811 41813
              </a>
              <span className="text-white/25">|</span>
              <a href="tel:+919188211822" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors">
                <i className="fab fa-whatsapp text-[#4ade80] text-sm" />+91 91882 11822
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
