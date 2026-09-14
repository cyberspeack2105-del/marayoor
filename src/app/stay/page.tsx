import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StayCard } from "@/components/StayCard";
import { STAYS_DATA } from "@/lib/staysData";

export const metadata: Metadata = {
  title: "Rooms & Stay — Resorts, Homestays & Cottages in Kanthalloor",
  description:
    "Discover peaceful rooms, scenic resorts, and cozy homestays in Kanthalloor and Marayoor, Idukki, Kerala. Relax amidst nature and picturesque mountain views.",
  alternates: {
    canonical: "https://www.ilovekanthalloor.com/stay",
  },
  openGraph: {
    title: "Rooms & Stay in Kanthalloor | Resorts, Homestays & Cottages",
    description:
      "Discover peaceful rooms, scenic resorts, and cozy homestays in Kanthalloor and Marayoor, Idukki, Kerala. Relax amidst nature and picturesque mountain views.",
    url: "https://www.ilovekanthalloor.com/stay",
    siteName: "Kanthalloor Safari & Stay",
    type: "website",
    images: [
      {
        url: "https://www.ilovekanthalloor.com/stays/res1.jpeg",
        width: 1200,
        height: 800,
        alt: "Comfortable rooms and stay in Kanthalloor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooms & Stay in Kanthalloor | Resorts, Homestays & Cottages",
    description:
      "Peaceful mountain stays, homestays, and comfortable cottages in Kanthalloor, Kerala.",
    images: ["https://www.ilovekanthalloor.com/stays/res1.jpeg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.ilovekanthalloor.com/",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Rooms & Stay",
      "item": "https://www.ilovekanthalloor.com/stay",
    },
  ],
};

export default function StayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="bg-[#fafbf9] text-gray-800 font-sans antialiased">

        {/* Hero */}
        <section className="relative min-h-[55vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/stays/res1.jpeg"
              alt="Peaceful rooms and stays in Kanthalloor"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#112918]/80" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <div className="inline-flex items-center gap-2 text-[#4ade80] font-bold text-xs tracking-[0.2em] uppercase mb-3">
              <span>🌿</span><span>Highland Accommodation</span><span>🌿</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight mb-4">
              Rooms &amp; Stay
            </h1>
            <p className="text-gray-200 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Comfortable and relaxing stays amidst nature — from cozy homestays to scenic mountain resorts in Kanthalloor.
            </p>
          </div>
        </section>

        {/* Stay Cards */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#2e7d32] font-bold text-xs tracking-[0.2em] uppercase mb-2">
              <span>🌿</span><span>Featured Stays</span><span>🌿</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#112918]">
              Handpicked Places to Stay
            </h2>
            <div className="w-16 h-1 bg-[#4ade80] rounded-full mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STAYS_DATA.map((stay) => (
              <StayCard key={stay.id} stay={stay} />
            ))}
          </div>
        </section>

        {/* Inquiry Banner */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl text-center py-14 px-6 sm:px-12">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKkYse9aOTQwlEsHd9SMjTBx5MixGx0JPiosWBGR5Lg_eX5IulV5lJYcqHUcyRJNNa2X-rOchZ134P9X45thiess2OZQjOnzF2NJCnAtUgzZVooXzSZqZWJH5EvLZQ1w6NMiN80IdNbKODmeP2meyDobtlJ5AQLEO9bXNTAAEdH3RpxyML5o1vqqRXPMCBu5Ym_0QCffKmQwN6dC4YWI6_-SR7UxlO0f6f--cANqDwgRinq-dXtb7J"
              alt="Scenic Kanthalloor landscape background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#122e1b]/85 backdrop-blur-[2px]" />
            <div className="relative z-10 max-w-xl mx-auto">
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
                Need Help Choosing a Stay? <span className="text-[#4ade80]">🌿</span>
              </h3>
              <p className="text-gray-200 text-sm mb-8">
                Connect with our local team for customised stay packages, family rooms and group offers.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="https://wa.me/919188211822?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20a%20stay%20in%20Kanthalloor!" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#22c55e] hover:bg-green-600 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95">
                  <i className="fab fa-whatsapp text-xl" />WhatsApp Direct
                </a>
                <a href="tel:+918281141813"
                  className="inline-flex items-center gap-2.5 bg-[#112918]/80 hover:bg-black text-white border border-white/20 font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95">
                  <i className="fa-solid fa-phone text-[#4ade80]" />Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
