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
  title: "Kanthalloor Safari & Stay | Jeep Safari, Rooms & Nature Experience",
  description:
    "Discover Kanthalloor in Idukki, Kerala. Book thrilling Jeep Safari adventures, comfortable rooms and homestays, and authentic nature experiences with trusted local guides.",
  alternates: {
    canonical: "https://www.ilovekanthalloor.com/",
  },
  openGraph: {
    title: "Kanthalloor Safari & Stay | Jeep Safari, Rooms & Nature Experience",
    description:
      "Discover Kanthalloor in Idukki, Kerala. Book thrilling Jeep Safari adventures, comfortable rooms and homestays, and authentic nature experiences with trusted local guides.",
    url: "https://www.ilovekanthalloor.com/",
    siteName: "Kanthalloor Safari & Stay",
    type: "website",
    images: [
      {
        url: "https://www.ilovekanthalloor.com/logo2.png",
        width: 1200,
        height: 1200,
        alt: "Kanthalloor Safari & Stay — Jeep Safari and Rooms",
      },
      {
        url: "https://www.ilovekanthalloor.com/jeep/jeep0.png",
        width: 1200,
        height: 630,
        alt: "Kanthalloor Jeep Safari — Little Kashmir of Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanthalloor Safari & Stay | Jeep Safari, Rooms & Nature Experience",
    description:
      "Jeep Safari, comfortable rooms and nature experiences in Kanthalloor, Idukki, Kerala.",
    images: ["https://www.ilovekanthalloor.com/logo2.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <head>
        <link rel="canonical" href="https://www.ilovekanthalloor.com/" />
        <meta property="og:url" content="https://www.ilovekanthalloor.com/" />
      </head>
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

