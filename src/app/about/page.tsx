import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Sasikumar — Kanthalloor Safari & Stay | Jeep Safari & Rooms",
  description:
    "Meet Sasikumar, your local guide for Jeep Safari and comfortable room stays in Kanthalloor and Marayoor. Experience the Little Kashmir of Kerala with a trusted local operator.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fafbf9] text-gray-800 font-sans antialiased">
        <AboutClient />
      </main>
      <Footer />
    </>
  );
}

