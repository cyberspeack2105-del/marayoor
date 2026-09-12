"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 20,    suffix: "+",  label: "Tourist Attractions",  desc: "National parks, waterfalls, viewpoints & heritage" },
  { value: 120,   suffix: "+",  label: "Homestays & Resorts",  desc: "From heritage mud houses to luxury resorts" },
  { value: 8,     suffix: "",   label: "Jeep Safari Routes",   desc: "Through forests, farms and tribal villages" },
  { value: 50000, suffix: "+",  label: "Happy Visitors",       desc: "Travellers who discovered Kanthalur" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const display = count >= 1000 ? (count / 1000).toFixed(0) + "k" : count.toString();
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 bg-green-950">
      <div className="max-w-8xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl sm:text-5xl font-bold text-green-300 mb-2">
              <Counter target={s.value} suffix={s.suffix} />
            </p>
            <p className="text-white font-semibold text-sm mb-1">{s.label}</p>
            <p className="text-green-300/60 text-xs leading-relaxed hidden sm:block">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
