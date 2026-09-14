"use client";

import { useState } from "react";
import Link from "next/link";

const DESTINATIONS = [
  {
    id: 1,
    title: "Mountain Viewpoint",
    category: "Viewpoint",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuFFux-I6foQ2Gi1EmajRnV4StVf915Xa4qD26x-CdipCpSPcFzEf6aQIUc_yRKUB5DogE2GPv7g6pzbrGqOlTBK1GAJOEs-haU3sdBbdpHd1TwxnG8vVF5nRBFVpohy1p4hipM6U7KtVqiodvi14gYanU1x7yazTmyJNyRNAIxtEWa9nC-Y-ivFIzqkPsyq3RjrMLGFyZfWtPbEGe4WTRYB5t4XjM9D201Jy-0xNvchj-uzYyzBiv",
    description: "Panoramic 360-degree vistas of rolling mist-covered peaks, deep valleys and terraced farmlands of the Western Ghats.",
    highlights: ["360° Mountain Vistas", "Sunset Viewpoint", "Off-road Jeep Access"],
    bestTime: "6:00 AM – 9:00 AM & 4:30 PM – 6:30 PM",
  },
  {
    id: 2,
    title: "Sandalwood Forest",
    category: "Nature",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuByETeEkLq2Dtee818bYWkXAS7e6TM4NGwWq7f5Xp7NqnDLpKEw8JWrEusoEl1nMlpjafUdc_61Vb_eMSWPnTo-FNflr_GC6sWv11YITE5dfQZZ90Sx7ADK_1ZpUx7m3_BG-5qEjXeTupH2qGxEU2OScx60HPZWwcLqYEuJaKhItqI9LyYlWanQA_3DtMt7jw86RwE8XBnUYQ6VNvvVewHuvrnALxzmfMN-SShaFMgEmfyFXQyM7DEM",
    description: "One of India's last naturally occurring sandalwood reserves — fragrant, protected and utterly beautiful.",
    highlights: ["Protected Reserve", "Guided Forest Walk", "Fragrant Sandalwood Trees"],
    bestTime: "All Year (March–May most fragrant)",
  },
  {
    id: 3,
    title: "Muniyara Dolmens",
    category: "Heritage",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXIpb49dFjFaqIHrZQnFwIjCqzHPI0feEuoOPXSeZTOoO_8DHXirOVOjgramlsd34sNzNtbOFXwFWV-DYizioyv0jgdKUNigJdu6SIx-BAy6RjQWxe9ua-JC24x5QUc_a_zG5tACxX2cOYB3QhEg_0qlT7Rtg4xxeqWrcyWZlLYQnydJsZT-GowijYr43DspT4tHb5f0E4PETkbObBg2vszppa9Tycpsq6CRen2knGR20ZvAsFHRTh",
    description: "Prehistoric megalithic burial chambers (Muniyaras) over 3,000 years old — an archaeological wonder near the Pambar River.",
    highlights: ["3000+ Year Heritage Site", "Massive Stone Dolmens", "Panoramic Valley Views"],
    bestTime: "All Year Round",
  },
  {
    id: 4,
    title: "Jaggery Farm Trail",
    category: "Culture",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuFFux-I6foQ2Gi1EmajRnV4StVf915Xa4qD26x-CdipCpSPcFzEf6aQIUc_yRKUB5DogE2GPv7g6pzbrGqOlTBK1GAJOEs-haU3sdBbdpHd1TwxnG8vVF5nRBFVpohy1p4hipM6U7KtVqiodvi14gYanU1x7yazTmyJNyRNAIxtEWa9nC-Y-ivFIzqkPsyq3RjrMLGFyZfWtPbEGe4WTRYB5t4XjM9D201Jy-0xNvchj-uzYyzBiv",
    description: "Watch traditional Marayoor Sharkara (jaggery) being made over open wood fires from freshly crushed sugarcane — a centuries-old craft.",
    highlights: ["Live Jaggery Making Demo", "Direct Farm Purchase", "Cultural Heritage Experience"],
    bestTime: "December – March (Production Season)",
  },
  {
    id: 5,
    title: "Mountain Waterfall",
    category: "Waterfall",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSpakvm3GH-jhyIpfil1dXiKYhfXHNwkX5-U5ztgVbmIo6hdd2KDVf1oKryDPSvQQUfDaX8SFoNCu8_X4444mAQrWl-mT5eh-dOveL0tFHSkRr3HjeQtIOp1klcWftUw0GCZVT8Djfb2y1KJvLN2r_kQg9grgTJ1SjpOLQ-5_D6Z9Mck6WTIOH0Gpv__yUAhTv6xsX6FKWXxATrK2m7pmCi1xTg7RdDZBQ6E28RrfN0qepqAD4jli9",
    description: "Hidden cascades tucked deep in the forest — crystal-clear mountain streams fall over black granite boulders into natural pools.",
    highlights: ["Natural Pool Bathing", "Forest Canopy Walk", "Photography Spot"],
    bestTime: "September – February",
  },
  {
    id: 6,
    title: "Chinnar Wildlife Border",
    category: "Wildlife",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbhNBUzmCJVZGwV73jcegh_knNP_AOTJB4zDbAJc_LAczN-CYTJS1T0j0QlNUeEwLq2fCAo-Bo1HI-V5fDJK9VmvNwwzQj4GDokDb1oF6D1F36shCFGfzTi4x9uLKES1GMcvwpMtspQtgoRgu6J7dXbpDtTawlBMj8YCZmZlUWKOUlO8Oh86IPQRpX3PGUujTBwXKkeZFF2GwqxymbjOtr-P4zc1Jg8OOALTWgTwz5c9QuOkGRuV8B",
    description: "On the border of one of South India's richest wildlife sanctuaries — spot deer, gaur, peacocks, and occasionally elephants.",
    highlights: ["Guided Wildlife Drive", "Deer & Gaur Sightings", "Tribal Village Nearby"],
    bestTime: "October – March",
  },
];

const CATEGORIES = ["All", "Viewpoint", "Nature", "Heritage", "Culture", "Waterfall", "Wildlife"];

export default function DestinationsClient() {
  const [selected, setSelected] = useState("All");
  const filtered = selected === "All" ? DESTINATIONS : DESTINATIONS.filter((d) => d.category === selected);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKkYse9aOTQwlEsHd9SMjTBx5MixGx0JPiosWBGR5Lg_eX5IulV5lJYcqHUcyRJNNa2X-rOchZ134P9X45thiess2OZQjOnzF2NJCnAtUgzZVooXzSZqZWJH5EvLZQ1w6NMiN80IdNbKODmeP2meyDobtlJ5AQLEO9bXNTAAEdH3RpxyML5o1vqqRXPMCBu5Ym_0QCffKmQwN6dC4YWI6_-SR7UxlO0f6f--cANqDwgRinq-dXtb7J"
            alt="Scenic view of Kanthalloor and Marayoor destinations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#112918]/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <div className="inline-flex items-center gap-2 text-[#4ade80] font-bold text-xs tracking-[0.2em] uppercase mb-3">
            <span>🌿</span><span>Explore Kanthalloor &amp; Marayoor</span><span>🌿</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight mb-4">
            Destinations &amp; Attractions
          </h1>
          <p className="text-gray-200 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            From mountain viewpoints and sandalwood forests to ancient dolmens and roaring waterfalls.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                selected === cat
                  ? "bg-[#1a4329] text-white shadow-md"
                  : "bg-[#f9faf8] text-gray-600 border border-gray-200 hover:bg-green-50 hover:text-[#1a4329]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="relative h-60 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#112918]/80 backdrop-blur text-[#4ade80] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-extrabold text-[#112918] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">{item.description}</p>
                <div className="space-y-2 mb-5 pt-4 border-t border-gray-100">
                  {item.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-gray-600">
                      <i className="fas fa-check-circle text-[#1a4329] text-xs" />{h}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 font-medium">📅 {item.bestTime}</span>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-[#1a4329] font-bold text-sm hover:gap-2 transition-all">
                    Book Tour <i className="fas fa-arrow-right text-xs" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#153420] rounded-[2.5rem] py-14 px-6 sm:px-12 text-center text-white shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-black mb-3">
            Ready to Explore Kanthalloor &amp; Marayoor? <span className="text-[#4ade80]">🌿</span>
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-8">
            Contact our local guides to arrange Jeep Safari transportation and comfortable stays.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#112918] font-bold text-sm px-8 py-3.5 rounded-full transition-all hover:bg-gray-100 shadow-md active:scale-95">
              Plan Your Trip Now
            </Link>
            <a href="https://wa.me/919188211822?text=Hi%2C%20I%20want%20to%20enquire%20about%20destinations%20tour!" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold text-sm px-8 py-3.5 rounded-full transition-all hover:bg-white/25 active:scale-95">
              <i className="fab fa-whatsapp text-[#4ade80]" />WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
