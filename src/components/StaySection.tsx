import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StayCard } from "@/components/StayCard";
import { STAYS_DATA } from "@/lib/staysData";

export default function StaySection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-10 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest mb-2">
              ACCOMMODATION &amp; COTTAGES
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Where to Stay in Kanthalur
            </h2>
          </div>
          <Link
            href="/stay"
            className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md transition-all shrink-0"
          >
            <span>View All 8 Stays</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Aligned Stays Grid on homepage — View All links to /stay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAYS_DATA.slice(0, 4).map((stay) => (
            <StayCard key={stay.id} stay={stay} />
          ))}
        </div>
      </div>
    </section>
  );
}
