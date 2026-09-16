import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPageClient from "@/components/BlogPageClient";

export const metadata: Metadata = {
  title: "Travel Guide & Blog — Safari Tips, Sightseeing & Stays",
  description:
    "Expert travel guides, off-road Jeep Safari tips, seasonal advice, and sightseeing itineraries for visiting Kanthalloor and Marayoor in Idukki, Kerala.",
  alternates: {
    canonical: "https://www.ilovekanthalloor.com/blog",
  },
  openGraph: {
    title: "Kanthalloor Travel Guide & Blog | Safari Tips, Sightseeing & Stays",
    description:
      "Expert travel guides, off-road Jeep Safari tips, seasonal advice, and sightseeing itineraries for visiting Kanthalloor and Marayoor in Idukki, Kerala.",
    url: "https://www.ilovekanthalloor.com/blog",
    siteName: "Kanthalloor Safari & Stay",
    type: "website",
    images: [
      {
        url: "https://www.ilovekanthalloor.com/logo2.png",
        width: 1200,
        height: 1200,
        alt: "Kanthalloor Travel Guide & Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanthalloor Travel Guide & Blog",
    description:
      "Travel tips, Jeep Safari advice and destination guides for Kanthalloor, Kerala.",
    images: ["https://www.ilovekanthalloor.com/logo2.png"],
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
      "name": "Blog",
      "item": "https://www.ilovekanthalloor.com/blog",
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="bg-[#fafbf9] text-gray-800 font-sans antialiased">
        <BlogPageClient />
      </main>
      <Footer />
    </>
  );
}

