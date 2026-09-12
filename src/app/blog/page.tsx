import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPageClient from "@/components/BlogPageClient";

export const metadata: Metadata = {
  title: "Kanthalloor Travel Guide & Blog | Jeep Safari, Attractions & Tips",
  description:
    "Discover travel guides, Jeep Safari tips, destination highlights and the best things to do in Kanthalloor — Little Kashmir of Kerala.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fafbf9] text-gray-800 font-sans antialiased">
        <BlogPageClient />
      </main>
      <Footer />
    </>
  );
}
