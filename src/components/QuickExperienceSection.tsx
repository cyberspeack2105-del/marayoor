const EXPERIENCES = [
  {
    icon: "landscape",
    title: "Mountain Views",
    description: "Breathtaking vistas of rolling hills and deep valleys wrapped in mist.",
  },
  {
    icon: "nutrition",
    title: "Fruit Farms",
    description: "Wander through orchards of apples, oranges, strawberries, and passion fruit.",
  },
  {
    icon: "directions_car",
    title: "Jeep Safari",
    description: "Thrilling off-road adventures to hidden waterfalls and remote tribal villages.",
  },
  {
    icon: "cottage",
    title: "Peaceful Stays",
    description: "Cozy homestays and boutique resorts offering serene nature escapes.",
  },
];

export default function QuickExperienceSection() {
  return (
    <section className="py-20 md:py-[120px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
          Experience Kanthallur
        </h2>
        <div className="w-16 h-1 bg-tertiary-fixed mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {EXPERIENCES.map((item, index) => (
          <div
            key={index}
            className="border border-secondary-container rounded p-8 flex flex-col items-center text-center hover:editorial-shadow transition-shadow duration-300 bg-surface"
          >
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary-container mb-6">
              <span
                className="material-symbols-outlined text-[32px]"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                {item.icon}
              </span>
            </div>
            <h3 className="font-headline-md text-[20px] md:text-[24px] text-primary mb-3">
              {item.title}
            </h3>
            <p className="font-body-md text-body-md text-secondary">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
