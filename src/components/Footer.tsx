const WA  = "https://wa.me/919188211822?text=Hi%20Kanthalloor%20Safari%20%26%20Stay%2C%20I%20would%20like%20to%20enquire!";
const GMB = "https://share.google/ShdDhwTH7GiITUdiw";

const QUICK_LINKS = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about" },
  { label: "Jeep Safari",  href: "/#jeep-safari" },
  { label: "Rooms & Stay", href: "/#rooms" },
  { label: "Gallery",      href: "/#gallery" },
  { label: "Contact",      href: "/#contact" },
];

const EXPLORE_LINKS = [
  { label: "Attractions",  href: "/#attractions" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Blog",         href: "/#blog" },
  { label: "Google Profile", href: GMB },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200/80">

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* ── Col 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="inline-block mb-4 group">
              <img
                src="/logo1.png"
                alt="Kanthalloor Safari & Stay"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-xs">
              Explore • Stay • Experience. Your gateway to the best of Kanthalloor —
              Jeep Safari, comfortable rooms and unforgettable nature experiences.
            </p>
            {/* Social */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { icon: "fab fa-instagram",  label: "@ilovekanthalloor on Instagram", href: "https://www.instagram.com/ilovekanthalloor" },
                { icon: "fab fa-facebook-f", label: "@ilovekanthalloor on Facebook",  href: "https://www.facebook.com/ilovekanthalloor" },
                { icon: "fab fa-youtube",    label: "YouTube",   href: "#" },
                { icon: "fab fa-whatsapp",   label: "WhatsApp",  href: WA  },
                { icon: "fab fa-google",     label: "Google",    href: GMB },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-[#1a4329] hover:text-white text-gray-600 flex items-center justify-center transition-all text-xs"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h3 className="text-sm font-extrabold text-[#112918] uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-500 hover:text-[#1a4329] transition-colors flex items-center gap-2 py-0.5"
                  >
                    <i className="fas fa-chevron-right text-[9px] text-[#2e7d32]" />
                    {l.label}
                  </a>
                </li>
              ))}
              {EXPLORE_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-gray-500 hover:text-[#1a4329] transition-colors flex items-center gap-2 py-0.5"
                  >
                    <i className="fas fa-chevron-right text-[9px] text-[#2e7d32]" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact ── */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-extrabold text-[#112918] uppercase tracking-widest mb-4">
              Contact Sasikumar
            </h3>
            {/* Two phones side-by-side on mobile */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-3 mb-4">
              <a
                href="tel:+918281141813"
                className="flex items-center gap-3 bg-green-50 hover:bg-[#1a4329] hover:text-white text-gray-700 px-4 py-3 rounded-xl transition-all group"
              >
                <span className="w-8 h-8 rounded-full bg-white group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <i className="fa-solid fa-phone text-[#1a4329] group-hover:text-white text-xs" />
                </span>
                <div className="min-w-0">
                  <span className="block text-[10px] font-semibold text-gray-400 group-hover:text-white/60 leading-none mb-0.5">Primary</span>
                  <span className="block text-sm font-bold leading-tight whitespace-nowrap">+91 82811 41813</span>
                </div>
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-50 hover:bg-[#25D366] hover:text-white text-gray-700 px-4 py-3 rounded-xl transition-all group"
              >
                <span className="w-8 h-8 rounded-full bg-white group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <i className="fab fa-whatsapp text-[#25D366] group-hover:text-white text-base" />
                </span>
                <div className="min-w-0">
                  <span className="block text-[10px] font-semibold text-gray-400 group-hover:text-white/60 leading-none mb-0.5">WhatsApp</span>
                  <span className="block text-sm font-bold leading-tight whitespace-nowrap">+91 91882 11822</span>
                </div>
              </a>
            </div>

            {/* Other contact info */}
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:info@ilovekanthalloor.com"
                  className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-[#1a4329] transition-colors"
                >
                  <i className="fas fa-envelope text-[#1a4329] flex-shrink-0" />
                  <span className="truncate">info@ilovekanthalloor.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.ilovekanthalloor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-[#1a4329] transition-colors"
                >
                  <i className="fas fa-globe text-[#1a4329] flex-shrink-0" />
                  <span>www.ilovekanthalloor.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-gray-500">
                  <i className="fas fa-map-marker-alt text-[#1a4329] mt-0.5 flex-shrink-0" />
                  <span>Kanthalloor, Idukki, Kerala, India</span>
                </div>
              </li>
              <li>
                <a
                  href={GMB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-[#1a4329] transition-colors"
                >
                  <i className="fab fa-google text-[#1a4329] flex-shrink-0" />
                  <span>Google My Business Profile</span>
                  <i className="fas fa-external-link-alt text-[9px] text-gray-300" />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <p className="text-xs text-gray-400 order-2 sm:order-1">
              &copy; {new Date().getFullYear()} Kanthalloor Safari &amp; Stay. All rights reserved.
            </p>
            <p className="font-script text-base sm:text-lg text-[#1a4329] order-1 sm:order-2">
              More Than a Trip. A Kanthalloor Experience.
            </p>
            <a
              href="https://www.ilovekanthalloor.com"
              className="text-xs text-gray-400 hover:text-[#1a4329] transition-colors order-3"
            >
              www.ilovekanthalloor.com
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
