import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JeepSafariClient from "@/components/JeepSafariClient";

export const metadata: Metadata = {
  title: "Jeep Safari Kanthalloor | Off-Road Adventure — Little Kashmir of Kerala",
  description:
    "Book a thrilling Jeep Safari in Kanthalloor and Marayoor with Sasikumar — experienced local guide. Explore mountain trails, forests, viewpoints and hidden gems of Little Kashmir of Kerala.",
};

export default function JeepSafariPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fafbf9] text-gray-800 font-sans antialiased">
        <JeepSafariClient />
      </main>
      <Footer />
    </>
  );
}

