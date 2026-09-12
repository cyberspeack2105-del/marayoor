"use client";

const EXPERIENCES = [
  {
    title: "Jeep Safari",
    description: "Explore the hidden gems of Marayoor with guided Jeep Safari experiences.",
    linkLabel: "View Details",
    href: "/jeep-safari",
    icon: "fa-truck-monster",
    img: "/jeep/jeep0.png",
    fallback:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuFFux-I6foQ2Gi1EmajRnV4StVf915Xa4qD26x-CdipCpSPcFzEf6aQIUc_yRKUB5DogE2GPv7g6pzbrGqOlTBK1GAJOEs-haU3sdBbdpHd1TwxnG8vVF5nRBFVpohy1p4hipM6U7KtVqiodvi14gYanU1x7yazTmyJNyRNAIxtEWa9nC-Y-ivFIzqkPsyq3RjrMLGFyZfWtPbEGe4WTRYB5t4XjM9D201Jy-0xNvchj-uzYyzBiv",
    alt: "Jeep Safari in Marayoor",
  },
  {
    title: "Rooms & Stay",
    description: "Comfortable and relaxing stays amidst nature for a peaceful experience.",
    linkLabel: "View Details",
    href: "/stay",
    icon: "fa-bed",
    img: "/stays/res3.jpeg",
    fallback:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0_IYecfor56bfTRKBVg2hAorU7dD1wQDTraGy06HygOS8KcHWweoJgA5fBlWz_OTk6A2a6zoXDhIj8VHOvEMfi9JEzOzYSUrWQns5LKKYgXB6grR-3vokF10FMGjSX3RZG8DnJTw8LQfKnR_fNmw3NPQyl-PWQXTwQ7cLVhrpBDPREW1c8UxjG5-7EPEQDEwoMQzRBugwpVzYKfG90om7zUi6B_bMiC90guT86xpMy0Orsl7aHixP",
    alt: "Homestay in Marayoor",
  },
  {
    title: "Gallery",
    description: "A glimpse of our safari, stays and the breathtaking beauty of Marayoor.",
    linkLabel: "View Gallery",
    href: "/destinations",
    icon: "fa-camera-retro",
    img: "/jeep/jeep 9.png",
    fallback:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByETeEkLq2Dtee818bYWkXAS7e6TM4NGwWq7f5Xp7NqnDLpKEw8JWrEusoEl1nMlpjafUdc_61Vb_eMSWPnTo-FNflr_GC6sWv11YITE5dfQZZ90Sx7ADK_1ZpUx7m3_BG-5qEjXeTupH2qGxEU2OScx60HPZWwcLqYEuJaKhItqI9LyYlWanQA_3DtMt7jw86RwE8XBnUYQ6VNvvVewHuvrnALxzmfMN-SShaFMgEmfyFXQyM7DEM",
    alt: "Marayoor Mountain Views",
  },
  {
    title: "Attractions",
    description: "Explore top tourist places and unique attractions around Marayoor.",
    linkLabel: "View Places",
    href: "/destinations",
    icon: "fa-map-marker-alt",
    img: "/stays/res6.jpeg",
    fallback:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXIpb49dFjFaqIHrZQnFwIjCqzHPI0feEuoOPXSeZTOoO_8DHXirOVOjgramlsd34sNzNtbOFXwFWV-DYizioyv0jgdKUNigJdu6SIx-BAy6RjQWxe9ua-JC24x5QUc_a_zG5tACxX2cOYB3QhEg_0qlT7Rtg4xxeqWrcyWZlLYQnydJsZT-GowijYr43DspT4tHb5f0E4PETkbObBg2vszppa9Tycpsq6CRen2knGR20ZvAsFHRTh",
    alt: "Muniyara Dolmens Rock Viewpoints",
  },
];

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#2e7d32] font-bold text-[11px] tracking-[0.24em] uppercase mb-2.5">
            <span>🌿</span>
            <span>Explore Our Experiences</span>
            <span>🌿</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#112918] tracking-tight leading-tight">
            Adventure. Stay. Explore.
          </h2>
          <p className="mt-3 text-gray-500 text-sm sm:text-[15px] leading-relaxed">
            From thrilling Jeep Safari to peaceful stays, discover the best of Marayoor with us.
          </p>
        </div>

        {/* 4-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.title}
              className="group bg-[#f9faf8] rounded-[1.75rem] p-3.5 pb-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 flex flex-col"
            >
              {/* Image with icon badge */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                <img
                  src={exp.img}
                  alt={exp.alt}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = exp.fallback;
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category icon badge */}
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1a4329] shadow-md">
                  <i className={`fas ${exp.icon} text-sm`} />
                </div>
              </div>

              <div className="flex-1 flex flex-col px-1">
                <h3 className="text-[17px] font-extrabold text-[#112918] mb-1.5">{exp.title}</h3>
                <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed flex-1">
                  {exp.description}
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <a
                    href={exp.href}
                    className="inline-flex items-center text-sm font-bold text-[#112918] group-hover:text-[#2e7d32] transition-colors"
                  >
                    <span>{exp.linkLabel}</span>
                    <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
