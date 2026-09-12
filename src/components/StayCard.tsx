"use client";

export interface StayItem {
  id: string;
  title: string;
  category: string;
  image: string;
  rating: string;
  reviews: string;
  description: string;
  amenities: string[];
}

export function StayCard({ stay }: { stay: StayItem }) {
  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={stay.image}
          alt={stay.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute top-3.5 left-3.5 bg-[#1a4329]/90 backdrop-blur text-[#4ade80] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#4ade80]/30">
          {stay.category}
        </span>
        <div className="absolute bottom-3.5 right-3.5 flex items-center gap-1.5 bg-[#112918]/90 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-bold border border-white/20">
          <i className="fas fa-star text-amber-400 text-[10px]" />
          <span>{stay.rating}</span>
          <span className="text-[10px] text-gray-300 font-normal">({stay.reviews})</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-extrabold text-[#112918] text-base mb-2 group-hover:text-[#2e7d32] transition-colors line-clamp-1">
          {stay.title}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1 line-clamp-3">
          {stay.description}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-gray-100">
          {stay.amenities.map((a) => (
            <span key={a} className="bg-green-50 text-[#1a4329] text-[10px] font-semibold px-2 py-0.5 rounded border border-green-200/60">
              {a}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/?text=Hi%20Marayoor%20Tourism,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(stay.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-[#1a4329] hover:bg-[#112918] text-white text-xs font-bold py-3 px-4 rounded-full shadow-md transition-all hover:shadow-xl active:scale-95"
        >
          Check Availability &amp; Book
          <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
