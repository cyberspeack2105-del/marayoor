import Link from "next/link";

const HIGHLIGHTS = [
  { icon: "ac_unit", text: "Cool mountain climate" },
  { icon: "landscape", text: "Scenic valleys and viewpoints" },
  { icon: "nutrition", text: "Unique fruit and vegetable farms" },
  { icon: "nature_people", text: "Nature and village experiences" },
  { icon: "spa", text: "Peaceful escapes from busy cities" },
];

export default function WhyVisitSection() {
  return (
    <section className="py-20 md:py-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
        <div className="relative">
          <img
            alt="Kanthallur Landscape"
            className="w-full h-full object-cover rounded-xl shadow-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbDYdhUhpGXCNp-5JtmVQAhlmc62Q6S8n8Z7pVteYs4ohC3tGWFsYgjaOpAdOsKLa4u2RV_RGZZx2_VX-Ps0hj5cR5_MNeOo46h49MPWePDrRmBNye473goxDjKGDdAYQduBpt_fA70SC5D3_swvEqdz7zDDQKXPZdB4zF4HZP2ZHEJiFVdNdFwuBGri5Knufi7cbMttR1r4j0aWgwiAEQd-RzVEc4mzx3Zu_c71IZgbNc6jUD-Bsyaw"
          />
        </div>
        <div className="flex flex-col space-y-6">
          <div>
            <span className="font-label-lg text-label-lg tracking-[0.2em] uppercase text-primary mb-4 block">
              WHY KANTHALLUR
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
              A Different Side of Kerala
            </h2>
            <p className="font-body-lg text-body-lg text-secondary mb-8">
              Kanthallur offers a refreshing highland experience away from crowded tourist destinations. Discover cool weather, mountain landscapes, fruit farms, forests, village life and peaceful nature.
            </p>
          </div>
          <ul className="space-y-4">
            {HIGHLIGHTS.map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-primary">
                  {item.icon}
                </span>
                <span className="font-body-md text-body-md text-on-background">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <Link
              className="inline-flex items-center font-label-lg text-label-lg text-primary hover:opacity-80 transition-opacity"
              href="/about"
            >
              Discover Kanthallur{" "}
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
