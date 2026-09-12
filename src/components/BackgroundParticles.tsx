// No "use client" needed — purely decorative static markup, no interactivity

const LEAF_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
  </svg>
);

export default function BackgroundParticles() {
  return (
    <div className="bg-particles" aria-hidden="true">

      {/* ── Soft glowing orbs ── */}
      <div className="particle-orb orb-1" />
      <div className="particle-orb orb-2" />
      <div className="particle-orb orb-3" />
      <div className="particle-orb orb-4" />

      {/* ── Floating leaf particles ── */}
      <div className="particle-leaf leaf-1" style={{ color: "#16a34a" }}>{LEAF_SVG}</div>
      <div className="particle-leaf leaf-2" style={{ color: "#4ade80" }}>{LEAF_SVG}</div>
      <div className="particle-leaf leaf-3" style={{ color: "#15803d" }}>{LEAF_SVG}</div>
      <div className="particle-leaf leaf-4" style={{ color: "#4ade80" }}>{LEAF_SVG}</div>
      <div className="particle-leaf leaf-5" style={{ color: "#16a34a" }}>{LEAF_SVG}</div>
      <div className="particle-leaf leaf-6" style={{ color: "#bbf7d0" }}>{LEAF_SVG}</div>
      <div className="particle-leaf leaf-7" style={{ color: "#15803d" }}>{LEAF_SVG}</div>
      <div className="particle-leaf leaf-8" style={{ color: "#4ade80" }}>{LEAF_SVG}</div>

    </div>
  );
}
