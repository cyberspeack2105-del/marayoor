import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationsClient from "@/components/DestinationsClient";

export const metadata: Metadata = {
  title: "Destinations & Attractions — Sightseeing Guide",
  description:
    "Discover the best attractions in Kanthalloor and Marayoor: sandalwood forests, Muniyara dolmens, scenic mountain viewpoints, cascading waterfalls, and jaggery farms.",
  alternates: {
    canonical: "https://ilovekanthalloor.com/destinations",
  },
  openGraph: {
    title: "Top Destinations & Attractions in Kanthalloor & Marayoor",
    description:
      "Discover the best attractions in Kanthalloor and Marayoor: sandalwood forests, Muniyara dolmens, scenic mountain viewpoints, cascading waterfalls, and jaggery farms.",
    url: "https://ilovekanthalloor.com/destinations",
    siteName: "Kanthalloor Safari & Stay",
    type: "website",
    images: [
      {
        url: "https://ilovekanthalloor.com/kanthal.png",
        width: 1200,
        height: 1200,
        alt: "Kanthalloor Destinations and Sightseeing Attractions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Destinations & Attractions in Kanthalloor & Marayoor",
    description:
      "Guide to top sightseeing spots and nature attractions in Kanthalloor and Marayoor.",
    images: ["https://ilovekanthalloor.com/kanthal.png"],
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
      "item": "https://ilovekanthalloor.com/",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Destinations",
      "item": "https://ilovekanthalloor.com/destinations",
    },
  ],
};

export default function DestinationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="bg-[#fafbf9] text-gray-800 font-sans antialiased">
        <DestinationsClient />
      </main>
      <Footer />
    </>
  );
}
