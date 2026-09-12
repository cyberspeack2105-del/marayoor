import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryPageClient from "@/components/GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery — Kanthalloor Safari & Stay | Photos of Jeep Safari, Rooms & Attractions",
  description:
    "Explore photos of Kanthalloor Jeep Safari trails, comfortable room stays, waterfalls, sandal forest, wildlife and local attractions — Little Kashmir of Kerala.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fafbf9] text-gray-800 font-sans antialiased">
        <GalleryPageClient />
      </main>
      <Footer />
    </>
  );
}

