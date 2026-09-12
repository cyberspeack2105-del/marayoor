import type { Metadata, Viewport } from "next";
import "./globals.css";
import BackgroundParticles from "@/components/BackgroundParticles";
import GlobalFloating from "@/components/GlobalFloating";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ilovekanthalloor.com"),
  title: {
    default: "Kanthalloor Safari & Stay | Jeep Safari, Rooms & Nature Experiences",
    template: "%s | Kanthalloor Safari & Stay",
  },
  description:
    "Explore Kanthalloor with exciting Jeep Safari adventures, comfortable rooms and unforgettable nature experiences. Book your Kanthalloor trip today.",
  keywords: [
    "Kanthalloor Jeep Safari",
    "Kanthalloor rooms stay",
    "Kanthalloor tourism",
    "Kanthalloor travel guide",
    "things to do in Kanthalloor",
    "Kanthalloor nature experiences",
    "Kanthalloor safari",
    "Kerala hill station",
    "Western Ghats tourism",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.ilovekanthalloor.com",
    siteName: "Kanthalloor Safari & Stay",
    title: "Kanthalloor Safari & Stay | Explore • Stay • Experience",
    description:
      "Jeep Safari, comfortable rooms and nature experiences in Kanthalloor.",
    images: [{ url: "/jeep/jeep0.png", width: 1200, height: 630, alt: "Kanthalloor scenic view" }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.ilovekanthalloor.com" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#112918",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="bg-background text-gray-800 font-sans antialiased">
        <BackgroundParticles />
        {children}
        <GlobalFloating />
      </body>
    </html>
  );
}
