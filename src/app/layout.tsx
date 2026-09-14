import type { Metadata, Viewport } from "next";
import "./globals.css";
import BackgroundParticles from "@/components/BackgroundParticles";
import GlobalFloating from "@/components/GlobalFloating";

const SITE_URL  = "https://www.ilovekanthalloor.com";
const SITE_NAME = "Kanthalloor Safari & Stay";
const OG_IMAGE  = `${SITE_URL}/kanthal.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:  "Kanthalloor Safari & Stay | Jeep Safari, Rooms & Nature Experience",
    template: "%s | Kanthalloor Safari & Stay",
  },

  description:
    "Discover Kanthalloor — the Little Kashmir of Kerala. Book thrilling Jeep Safari adventures, comfortable rooms and homestays, and authentic nature experiences in Idukki, Kerala with trusted local guides.",

  keywords: [
    "Kanthalloor Jeep Safari",
    "Kanthalloor rooms stay",
    "Kanthalloor tourism",
    "Little Kashmir of Kerala",
    "Kanthalloor travel guide",
    "things to do in Kanthalloor",
    "Kanthalloor nature experiences",
    "Idukki hill station",
    "Western Ghats tourism Kerala",
    "Marayoor Kanthalloor safari",
  ],

  /* ── Canonical / robots ── */
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  robots: {
    index:                    true,
    follow:                   true,
    googleBot: {
      index:                  true,
      follow:                 true,
      "max-video-preview":    -1,
      "max-image-preview":    "large",
      "max-snippet":          -1,
    },
  },

  /* ── Open Graph ── */
  openGraph: {
    type:        "website",
    locale:      "en_IN",
    url:         `${SITE_URL}/`,
    siteName:    SITE_NAME,
    title:       "Kanthalloor Safari & Stay | Jeep Safari, Rooms & Nature Experience",
    description:
      "Explore Kanthalloor with thrilling Jeep Safari, comfortable rooms and unforgettable nature experiences in Idukki, Kerala.",
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 1200,
        alt:    "Kanthalloor Safari & Stay — Jeep Safari and Rooms Emblem",
      },
      {
        url:    `${SITE_URL}/jeep/jeep0.png`,
        width:  1200,
        height: 630,
        alt:    "Kanthalloor Jeep Safari — Little Kashmir of Kerala",
      },
    ],
  },

  /* ── Twitter/X card ── */
  twitter: {
    card:        "summary_large_image",
    title:       "Kanthalloor Safari & Stay | Jeep Safari, Rooms & Nature Experience",
    description:
      "Jeep Safari, comfortable rooms and nature experiences in Kanthalloor, Idukki, Kerala.",
    images:      [OG_IMAGE],
  },

  /* ── Favicon / icons ── */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },

  other: {
    "msapplication-TileColor": "#112918",
    "msapplication-TileImage": "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  themeColor:   "#112918",
};

/* ── JSON-LD structured data — Schema.org Graph ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "LodgingBusiness", "TouristAttraction"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: [
        "Kanthalloor Jeep Safari and Rooms",
        "Kanthalloor Safari",
        "I Love Kanthalloor",
      ],
      url: SITE_URL,
      description:
        "Kanthalloor Safari & Stay offers guided off-road Jeep Safari adventures, comfortable mountain room stays, and authentic nature experiences in Kanthalloor and Marayoor, Idukki, Kerala.",
      logo: `${SITE_URL}/kanthal.png`,
      image: [
        `${SITE_URL}/kanthal.png`,
        `${SITE_URL}/jeep/jeep0.png`,
      ],
      telephone: "+91-82811-41813",
      email: "info@ilovekanthalloor.com",
      address: {
        "@type":           "PostalAddress",
        addressLocality:   "Kanthalloor",
        addressRegion:     "Kerala",
        addressCountry:    "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
      },
      areaServed: [
        { "@type": "Place", name: "Kanthalloor" },
        { "@type": "Place", name: "Marayoor" },
        { "@type": "Place", name: "Idukki" },
      ],
      hasMap: "https://maps.google.com/?q=Kanthalloor+Idukki+Kerala",
      touristType: ["Adventure tourist", "Nature tourist", "Eco tourist"],
      availableLanguage: [
        { "@type": "Language", name: "English" },
        { "@type": "Language", name: "Malayalam" },
        { "@type": "Language", name: "Tamil" },
      ],
      sameAs: [
        "https://share.google/ShdDhwTH7GiITUdiw",
        "https://wa.me/919188211822",
      ],
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: "Official website of Kanthalloor Safari & Stay — Jeep Safari, Rooms & Nature Experiences in Idukki, Kerala.",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en",
    },
  ],
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
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
