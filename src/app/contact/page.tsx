import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Book Jeep Safari & Rooms",
  description:
    "Get in touch with Kanthalloor Safari & Stay. Book Jeep Safari tours, reserve room stays, or contact our team directly via phone (+91 82811 41813) or WhatsApp.",
  alternates: {
    canonical: "https://www.ilovekanthalloor.com/contact",
  },
  openGraph: {
    title: "Contact Us | Kanthalloor Safari & Stay — Book Jeep Safari & Rooms",
    description:
      "Get in touch with Kanthalloor Safari & Stay. Book Jeep Safari tours, reserve room stays, or contact our team directly via phone (+91 82811 41813) or WhatsApp.",
    url: "https://www.ilovekanthalloor.com/contact",
    siteName: "Kanthalloor Safari & Stay",
    type: "website",
    images: [
      {
        url: "https://www.ilovekanthalloor.com/kanthal.png",
        width: 1200,
        height: 1200,
        alt: "Contact Kanthalloor Safari & Stay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Kanthalloor Safari & Stay",
    description:
      "Book Jeep Safari and rooms in Kanthalloor, Kerala. Call +91 82811 41813 or WhatsApp.",
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
      "name": "Contact Us",
      "item": "https://www.ilovekanthalloor.com/contact",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="bg-[#fafbf9] text-gray-800 font-sans antialiased">
        <ContactClient />
      </main>
      <Footer />
    </>
  );
}
