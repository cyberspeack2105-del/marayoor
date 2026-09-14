import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JeepSafariClient from "@/components/JeepSafariClient";

export const metadata: Metadata = {
  title: "Jeep Safari — Off-Road Mountain Adventures & Packages",
  description:
    "Book an unforgettable Jeep Safari in Kanthalloor and Marayoor with Sasikumar. Explore rugged mountain trails, waterfalls, viewpoints, sandalwood forests, and tea valleys.",
  alternates: {
    canonical: "https://www.ilovekanthalloor.com/jeep-safari",
  },
  openGraph: {
    title: "Kanthalloor Jeep Safari | Off-Road Mountain Adventure & Packages",
    description:
      "Book an unforgettable Jeep Safari in Kanthalloor and Marayoor with Sasikumar. Explore rugged mountain trails, waterfalls, viewpoints, sandalwood forests, and tea valleys.",
    url: "https://www.ilovekanthalloor.com/jeep-safari",
    siteName: "Kanthalloor Safari & Stay",
    type: "website",
    images: [
      {
        url: "https://www.ilovekanthalloor.com/jeep/jeep0.png",
        width: 1200,
        height: 630,
        alt: "Kanthalloor Jeep Safari Off-Road Mountain Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanthalloor Jeep Safari | Off-Road Mountain Adventure",
    description:
      "Off-road Jeep Safari in Kanthalloor, Kerala. Mountain viewpoints, waterfalls, and forest trails.",
    images: ["https://www.ilovekanthalloor.com/jeep/jeep0.png"],
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
      "name": "Jeep Safari",
      "item": "https://www.ilovekanthalloor.com/jeep-safari",
    },
  ],
};

export default function JeepSafariPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="bg-[#fafbf9] text-gray-800 font-sans antialiased">
        <JeepSafariClient />
      </main>
      <Footer />
    </>
  );
}
