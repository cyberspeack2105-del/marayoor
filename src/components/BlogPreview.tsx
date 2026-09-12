import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";

const CAT_COLORS: Record<string, string> = {
  Culture: "bg-emerald-900/60 text-emerald-300 border-emerald-500/30",
  Adventure: "bg-amber-900/60 text-amber-300 border-amber-500/30",
  Heritage: "bg-indigo-900/60 text-indigo-300 border-indigo-500/30",
};

export default function BlogPreview() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-10 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700 dark:text-emerald-400 mb-2">
              Travel Journal & Insider Guides
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Latest from the Blog
            </h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm max-w-md">
              Expert travel tips, harvest schedules, jeep safari routes, and mud house living stories from local guides.
            </p>
          </div>
          <Link
            href="/blog"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 border-2 border-emerald-700 dark:border-emerald-500 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-700 hover:text-white text-sm font-bold rounded-xl transition-all"
          >
            View All Articles
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/60 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <span
                  className={`absolute top-3 left-3 text-[11px] font-bold px-3 py-1 rounded-full border backdrop-blur-sm ${
                    CAT_COLORS[post.category] ?? "bg-slate-800/70 text-slate-200 border-slate-600/40"
                  }`}
                >
                  {post.category}
                </span>
                <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded">
                  {post.readTime}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs text-slate-400 dark:text-slate-500 mb-2 font-medium">
                  {post.date}
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60">
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 text-sm font-bold hover:gap-3 transition-all"
                  >
                    Read Full Guide
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
            Plan your perfect Kanthalloor getaway with insider tips and on-ground knowledge.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/blog"
              className="px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl shadow-md transition-all"
            >
              Browse All Travel Guides
            </Link>
            <a
              href="https://wa.me/917012402897?text=Hi%20Kanthalloor%20Tourism,%20I%20read%20your%20blog%20and%20want%20to%20plan%20a%20visit!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              WhatsApp Local Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
