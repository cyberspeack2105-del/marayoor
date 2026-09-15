import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Kanthalloor Safari & Stay | Plan Your Trip",
  description:
    "Contact Sasikumar at Kanthalloor Safari & Stay to plan your Jeep Safari, room booking or local experience. Call +91 82811 41813 or WhatsApp us.",
  alternates: { canonical: "https://www.ilovekanthalloor.com/contact" },
  openGraph: {
    title:       "Contact Kanthalloor Safari & Stay",
    description: "Get in touch to plan your Kanthalloor Jeep Safari trip, room stay or local experience.",
    url:         "https://www.ilovekanthalloor.com/contact",
    images:      [{ url: "https://www.ilovekanthalloor.com/jeep/jeep0.png", alt: "Contact Kanthalloor Safari" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fafbf9] text-gray-800 font-sans antialiased">
        <ContactClient />
      </main>
      <Footer />
    </>
  );
}
