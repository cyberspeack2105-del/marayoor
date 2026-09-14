import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryPageClient from "@/components/GalleryPageClient";

export const metadata: Metadata = {
  title: "Photo Gallery — Jeep Safaris, Rooms & Nature",
  description:
    "Explore photos of Kanthalloor Jeep Safari trails, mountain viewpoints, comfortable room stays, waterfalls, and scenic nature in the Little Kashmir of Kerala.",
  alternates: {
    canonical: "https://www.ilovekanthalloor.com/gallery",
  },
  openGraph: {
    title: "Photo Gallery | Kanthalloor Safari & Stay — Jeep Safaris, Rooms & Nature",
    description:
      "Explore photos of Kanthalloor Jeep Safari trails, mountain viewpoints, comfortable room stays, waterfalls, and scenic nature in the Little Kashmir of Kerala.",
    url: "https://www.ilovekanthalloor.com/gallery",
    siteName: "Kanthalloor Safari & Stay",
    type: "website",
    images: [
      {
        url: "https://www.ilovekanthalloor.com/kanthal.png",
        width: 1200,
        height: 1200,
        alt: "Kanthalloor Safari & Stay Photo Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Kanthalloor Safari & Stay",
    description:
      "Photos of Jeep Safari adventures, room stays, and waterfalls in Kanthalloor, Kerala.",
    images: ["https://www.ilovekanthalloor.com/kanthal.png"],
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
      "name": "Gallery",
      "item": "https://www.ilovekanthalloor.com/gallery",
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="bg-[#fafbf9] text-gray-800 font-sans antialiased">
        <GalleryPageClient />
      </main>
      <Footer />
    </>
  );
}
