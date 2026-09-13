"use client";

import { useState, useEffect, useRef } from "react";

const WA_URL = "https://wa.me/919188211822?text=Hi%20Kanthalloor%20Safari%20%26%20Stay%2C%20I%20would%20like%20to%20plan%20a%20trip!";
const PHONE_PRIMARY = "tel:+918281141813";
const PHONE_SECONDARY = "tel:+919188211822";

export default function GlobalFloating() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close when clicked outside
  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  if (!mounted) return null;

  return (
    <aside
      ref={menuRef}
      aria-label="Contact quick actions"
      className="fixed z-[99999] flex flex-col items-end gap-3 pointer-events-auto select-none"
      style={{
        bottom: "max(18px, env(safe-area-inset-bottom, 18px))",
        right: "max(16px, env(safe-area-inset-right, 16px))",
      }}
    >
      {/* ── Contact Popup Panel ── */}
      {open && (
        <div
          role="dialog"
          aria-label="Call options"
          className="w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 mb-1 animate-fade-up"
          style={{
            boxShadow: "0 12px 40px -4px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(0, 0, 0, 0.05)",
          }}
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100 px-1">
            <span className="text-[10px] uppercase font-extrabold tracking-wider text-gray-400">
              📞 Call Kanthalloor Safari
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close call options"
              className="text-gray-400 hover:text-gray-700 text-xs p-1"
            >
              <i className="fa-solid fa-xmark text-sm" />
            </button>
          </div>

          <div className="flex flex-col gap-1.5">
            {/* Primary Phone */}
            <a
              href={PHONE_PRIMARY}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f0faf4] hover:bg-[#1a4329] text-gray-800 hover:text-white transition-all duration-200 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#1a4329] text-white group-hover:bg-white group-hover:text-[#1a4329] flex items-center justify-center flex-shrink-0 transition-colors">
                <i className="fa-solid fa-phone text-xs" />
              </div>
              <div className="min-w-0 flex-1 leading-tight">
                <span className="block text-[10px] text-gray-400 group-hover:text-white/70 font-semibold uppercase tracking-wider">
                  Primary Call
                </span>
                <span className="block text-sm font-bold truncate">+91 82811 41813</span>
              </div>
            </a>

            {/* Secondary Phone */}
            <a
              href={PHONE_SECONDARY}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-[#f0faf4] hover:bg-[#1a4329] text-gray-800 hover:text-white transition-all duration-200 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#1a4329] text-white group-hover:bg-white group-hover:text-[#1a4329] flex items-center justify-center flex-shrink-0 transition-colors">
                <i className="fa-solid fa-phone text-xs" />
              </div>
              <div className="min-w-0 flex-1 leading-tight">
                <span className="block text-[10px] text-gray-400 group-hover:text-white/70 font-semibold uppercase tracking-wider">
                  Secondary Call
                </span>
                <span className="block text-sm font-bold truncate">+91 91882 11822</span>
              </div>
            </a>

            {/* WhatsApp option in menu */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-[#eefbf2] hover:bg-[#25D366] text-gray-800 hover:text-white transition-all duration-200 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#25D366] text-white group-hover:bg-white group-hover:text-[#25D366] flex items-center justify-center flex-shrink-0 transition-colors">
                <i className="fab fa-whatsapp text-sm" />
              </div>
              <div className="min-w-0 flex-1 leading-tight">
                <span className="block text-[10px] text-gray-400 group-hover:text-white/70 font-semibold uppercase tracking-wider">
                  WhatsApp Chat
                </span>
                <span className="block text-sm font-bold truncate">+91 91882 11822</span>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* ── 1. WhatsApp Floating Button ── */}
      <div className="relative group">
        <span className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 hidden sm:block px-3 py-1 bg-[#112918]/90 text-white text-xs font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>

        {/* Outer pulse ring — green blink */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        {/* Second ring — slower */}
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366] opacity-20"
          style={{ animation: "ping 2.5s cubic-bezier(0,0,0.2,1) infinite 0.5s" }} />

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200 border-2 border-white"
          style={{
            width: "52px",
            height: "52px",
            boxShadow: "0 6px 24px rgba(37, 211, 102, 0.6)",
          }}
        >
          <i className="fab fa-whatsapp text-[28px] leading-none" />
        </a>
      </div>

      {/* ── 2. Phone Call Floating Button ── */}
      <div className="relative group">
        <span className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 hidden sm:block px-3 py-1 bg-[#112918]/90 text-white text-xs font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {open ? "Close Call Menu" : "Call Us"}
        </span>

        {/* Pulse ring on phone button */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#1a4329] opacity-35 pointer-events-none"
            style={{ animation: "ping 2s cubic-bezier(0,0,0.2,1) infinite 1s" }} />
        )}

        {/* Notification dot — amber blink */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white z-10 pointer-events-none animate-bounce" />
        )}

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close phone options" : "Call Kanthalloor Safari"}
          className={`relative rounded-full text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white ${
            open ? "bg-[#112918]" : "bg-[#1a4329]"
          }`}
          style={{
            width: "48px",
            height: "48px",
            boxShadow: "0 6px 24px rgba(26, 67, 41, 0.6)",
          }}
        >
          {open ? (
            <i className="fa-solid fa-xmark text-lg leading-none" />
          ) : (
            <i className="fa-solid fa-phone text-base leading-none" />
          )}
        </button>
      </div>
    </aside>
  );
}
