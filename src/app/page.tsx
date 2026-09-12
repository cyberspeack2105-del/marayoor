import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import JeepSafariFeature from "@/components/JeepSafariFeature";
import RoomsSection from "@/components/RoomsSection";
import RoomsGallery from "@/components/RoomsGallery";
import AttractionsSection from "@/components/AttractionsSection";
import GalleryPreview from "@/components/GalleryPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";

export const metadata: Metadata = {
  title: "Kanthalloor Safari & Stay | Jeep Safari, Rooms & Nature Experiences",
  description:
    "Explore Kanthalloor with exciting Jeep Safari adventures, comfortable rooms and unforgettable nature experiences. Enquire for your Kanthalloor trip today.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fafbf9] text-gray-800 font-sans antialiased relative z-10">
        {/* 1. Hero */}
        <HeroSection />
        {/* 2. Introduction — 3 cards */}
        <IntroSection />
        {/* 3. Jeep Safari Feature */}
        <JeepSafariFeature />
        {/* 4. Rooms & Stay */}
        <RoomsSection />
        {/* 4b. Full photo gallery below rooms */}
        <RoomsGallery />
        {/* 5. Explore Kanthalloor Attractions */}
        <AttractionsSection />
        {/* 6. Gallery Preview */}
        <GalleryPreview />
        {/* 7. Why Choose Us */}
        <WhyChooseUs />
        {/* 8. Testimonials */}
        <TestimonialsSection />
        {/* 9. Blog / Travel Guide */}
        <BlogSection />
        {/* 10. Final CTA */}
        <CtaBanner />
      </main>
      <Footer />
      <VideoModal />
    </>
  );
}
