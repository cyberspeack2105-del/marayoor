import Link from "next/link";

const DESTINATIONS = [
  {
    category: "Scenic Viewpoint",
    title: "Bramaram View Point",
    description:
      "Experience breathtaking 360-degree views of the mist-covered Western Ghats and lush green valleys.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcjn2wsVTMu59XeJ-y9Zb628fPefF3hMB7CLoImxQVevmsLwEvv67_LbYXZxz_Y5G7l2ihDHpghQ-u43SqlclgEkiNXBm3FevuD78U7raD7GEnFUSWzwsqjXG6nx5nsm9DNjytXZPxiDAqG6nNxELzE0rXCMhdzuDhU5g0_X9QCATnRp4CwmNePMaqMOqVwJ4kQkKxeSk2iPae01a46FPvpNpSCTbl3NvEik-1EjvWPjR8Ja5MfPoD_A",
    href: "/destinations",
  },
  {
    category: "Farm Experience",
    title: "Kanthallur Fruits Garden",
    description:
      "Wander through diverse orchards blooming with apples, plums, and oranges in a serene highland setting.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDy8DhwtYxIf0mhXgUjyOa8MIfqZxSV3k83aI7u2WV1qBoiYa1bn7FXcPv6_8N9wmC7yBaO_H6Klha_MHrLhaCmmgZN3uvYgdtdhEm78LpD6jwhlGL5SK_vrWc4PWtS8UMMR6cxam0W32bcIdDgBDY1I_NXt6K_wxFZYJ58kattq01uovLLZPTy2SidF_tiFoY9GskuJ8jsbM9JTJtTkWCxh0N9iXdTrjXFmw141bVpJK58IsQy8QKE_w",
    href: "/destinations",
  },
  {
    category: "Farm Experience",
    title: "Kanthallur Strawberry Farm",
    description:
      "Pick fresh, sun-ripened strawberries from terraced farms overlooking the beautiful Kerala mountains.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAr5jrKhtLZ2sfaG-OImdu1yFBSBZKEfAb3zQ8F8aM71lNwUVDUmuGDaigQB6Se6qtFBrJKWQpNVHs9ZhC0Jwo2-03frxXSd5Oj5ZxDvdc_1p927GO2yertRpnHwuffZ7tIvv3vqP9uwYNhQS9HjdnhVWUBamkq6-Xs90Y8YobF1durOLvzVskSAyRTdh1ipEbFmt_EHck7NwH0gDkEfcqduKA0xkph4DdFMyzUJq9Frxz8NYEUav_B9g",
    href: "/destinations",
  },
  {
    category: "Waterfall",
    title: "Audivayal Waterfalls",
    description:
      "Discover a hidden gem where crystal clear mountain water cascades through dense forests and ancient rocks.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA--SBa31eVi7MNzit5rk8B6_yGpKzSY2quU904gb_R0lms963nrAdb0sdqCsEY4o5CrMgeqjetBmg5yU0q-7uwLTgU8hqw6JYlGAfKopJcljxC3Eg7KH2T0CBT4yyvzv04CCY38C2lvU6gUgTl6RsmLrg3nTlNFtvGWeaYT9_cSyPfmiCWVTrmd_Xyz6QjYEVSkcz_XTrAhZEe_Dfa1zYPVFRNha9OWfeISOsixFbLciFTgDwszZI7QA",
    href: "/destinations",
  },
  {
    category: "Nature",
    title: "Irachilppara Waterfall",
    description:
      "Witness the raw power of nature at this magnificent waterfall surrounded by mist and wild greenery.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXh6ZHFO8hmzZHpVpPv6wDvqVdOY7daL3IqnnNABnV1Ekpe9et5K2YXzFkM1eNVsq7Udsc3IeJw9xVN-gZRioSXGWKUzhWKP6OrjDKOd7NH52vLbqvAEqbJj6MjQ7VDTv6wJ35KOpGxmTQ3Ylx_j-jGNHu1mRxJELaoj7TYpsbPAnYbXTR1sRpsixW9OfkxHGwioQxk-STW7W5nhJ99X4DWwZDmHpY9bUySPR-ma9exkX1nak9uFiGag",
    href: "/destinations",
  },
  {
    category: "Heritage",
    title: "Muniyara – Ancient Dolmens",
    description:
      "Step back in time at this prehistoric site featuring megalithic burial chambers and breathtaking mountain vistas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQt9FXKZb2HbSRZiJuKxr3vBOl20ZyVGuk_d5-BZPst2ELzyKrTrO7FHSaR8-coWyO0UYphrGCZyYh39t1sn9qSVioBVum9Nd0k5eCHA1dORrHhfAPRcio3QA7Yf88_-D8zPLOWopm-Nd5QCAQZJukkJCCbY2As14ad-9xWJqgRSQH_YJSOlPiW01VUrKuL7pR0tiM5PCQhv8wL5bWXeM6TnKcJHjVuXsJlNOBhHF6liEB9LwKRNvhUQ",
    href: "/destinations",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-20 md:py-[120px] bg-surface-container-low px-margin-mobile md:px-margin-desktop full-width">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="font-label-lg text-label-lg tracking-[0.2em] uppercase text-primary mb-4">
            EXPLORE
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
            Places to Discover in Kanthallur
          </h2>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
            Explore scenic viewpoints, fruit farms, waterfalls and ancient heritage sites around Kanthallur.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {DESTINATIONS.map((item, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl overflow-hidden hover:editorial-shadow transition-shadow duration-300 flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  src={item.image}
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h3 className="font-headline-md text-[24px] text-primary mb-3">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary mb-6 flex-grow">
                  {item.description}
                </p>
                <Link
                  className="text-primary font-label-lg text-label-lg hover:underline inline-flex items-center"
                  href={item.href}
                >
                  Explore &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
