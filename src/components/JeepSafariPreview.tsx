import Link from "next/link";
import { ArrowRight, Clock, MapPin, Shield, Star } from "lucide-react";

const ROUTES = [
  { name: "Apple Orchard Trail",   duration: "3 hrs",  icon: "🍎" },
  { name: "Marayoor Jaggery Farm", duration: "4 hrs",  icon: "🌿" },
  { name: "Sandalwood Forest",     duration: "5 hrs",  icon: "🌲" },
  { name: "Chinnar Full Day",      duration: "8 hrs",  icon: "🐘" },
];

export default function JeepSafariPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image side */}
          <div className="relative rounded-3xl overflow-hidden h-[480px] img-zoom">
            <img src="/stays/res5.jpeg" alt="Jeep safari through Kanthalur forests"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-950/20 to-transparent" />
            {/* Floating badge */}
            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-card">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <span className="text-xs font-bold text-slate-700">4.9 · 200+ safaris</span>
              </div>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-white/70 text-sm mb-1">Best time for safari</p>
              <p className="text-white font-bold text-lg">October – February</p>
            </div>
          </div>

          {/* Content side */}
          <div>
            <p className="section-label mb-4">Jeep Safari</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Explore the Wild<br />
              <span className="gradient-text">Beyond the Road</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Venture deep into mountain passes, sandalwood forests, jaggery farms and tribal
              villages on a thrilling off-road jeep safari with expert local guides.
            </p>

            {/* Routes */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {ROUTES.map((r) => (
                <div key={r.name} className="flex items-center gap-3 bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                  <span className="text-2xl">{r.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 leading-tight">{r.name}</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />{r.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Info pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                <MapPin className="w-3 h-3" /> Kanthalur to Chinnar
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                <Shield className="w-3 h-3" /> Safety equipment included
              </span>
            </div>

            <Link href="/jeep-safari" className="btn-primary text-base px-7 py-3.5">
              Explore Jeep Safari
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
