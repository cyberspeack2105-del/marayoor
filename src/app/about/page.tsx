import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Us — Local Guides & Accommodations",
  description:
    "Meet Sasikumar and the team at Kanthalloor Safari & Stay. Trusted local guides for off-road Jeep Safari adventures, comfortable rooms, and authentic tours in Kanthalloor, Kerala.",
  alternates: {
    canonical: "https://www.ilovekanthalloor.com/about",
  },
  openGraph: {
    title: "About Us | Kanthalloor Safari & Stay — Local Guides & Accommodations",
    description:
      "Meet Sasikumar and the team at Kanthalloor Safari & Stay. Trusted local guides for off-road Jeep Safari adventures, comfortable rooms, and authentic tours in Kanthalloor, Kerala.",
    url: "https://www.ilovekanthalloor.com/about",
    siteName: "Kanthalloor Safari & Stay",
    type: "website",
    images: [
      {
        url: "https://www.ilovekanthalloor.com/logo2.png",
        width: 1200,
        height: 1200,
        alt: "About Kanthalloor Safari & Stay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Kanthalloor Safari & Stay",
    description:
      "Meet Sasikumar and the local team behind Kanthalloor Safari & Stay in Idukki, Kerala.",
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
      "name": "About Us",
      "item": "https://www.ilovekanthalloor.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="bg-[#fafbf9] text-gray-800 font-sans antialiased">
        <AboutClient />
      </main>
      <Footer />
    </>
  );
}

