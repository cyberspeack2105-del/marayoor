import Link from "next/link";
import { ArrowRight } from "lucide-react";

const EXPERIENCES = [
  { title: "Apple Orchard Visit", tag: "Agri-Tourism", image: "/stays/res5.jpeg",   desc: "Pick apples directly from Kerala's only orchards during harvest season." },
  { title: "Strawberry Farm",     tag: "Farm",         image: "/stays/res5.jpeg",          desc: "Hand-pick sweet strawberries from expansive highland fields." },
  { title: "Village Walk",        tag: "Culture",      image: "/stays/res4.jpeg",            desc: "Explore Anju Nadu villages, temples and Muthuvan tribal heritage." },
  { title: "Nature Walk",         tag: "Nature",       image: "/stays/res5.jpeg",   desc: "Trek through shola forests, sandalwood reserves and highland meadows." },
  { title: "Photography Trail",   tag: "Creative",     image: "/jeep/jeep 9.png", desc: "Golden hour over misty valleys — every direction is a perfect frame." },
  { title: "Camping",             tag: "Adventure",    image: "/stays/res8.jpeg",       desc: "Camp under crystal-clear starry skies with a campfire in the highlands." },
];

const TAG_STYLE: Record<string, string> = {
  "Agri-Tourism": "tag-green",
  "Farm":         "bg-lime-100 text-lime-800",
  "Culture":      "bg-purple-100 text-purple-800",
  "Nature":       "bg-teal-100 text-teal-800",
  "Creative":     "bg-blue-100 text-blue-800",
  "Adventure":    "bg-orange-100 text-orange-800",
};

export default function LocalExperiences() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-10 bg-white">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-3">Experiences</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-slate-900">
              Local Experiences
            </h2>
          </div>
          <Link href="/destinations" className="btn-outline shrink-0">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((e) => (
            <article key={e.title} className="card group overflow-hidden flex flex-col">
              <div className="img-zoom relative h-48">
                <img src={e.image} alt={e.title} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                <span className={`tag absolute top-3 left-3 ${TAG_STYLE[e.tag] ?? "tag-green"}`}>{e.tag}</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2 group-hover:text-green-700 transition-colors">
                  {e.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{e.desc}</p>
                <Link href="/contact"
                  className="inline-flex items-center gap-1.5 text-green-700 text-sm font-semibold mt-4 hover:gap-2.5 transition-all">
                  Book Experience <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
