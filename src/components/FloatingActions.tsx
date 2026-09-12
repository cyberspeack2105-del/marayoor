"use client";

import { useState } from "react";
import AiChatWidget from "./AiChatWidget";

const WA    = "https://wa.me/919188211822?text=Hi%20Kanthalloor%20Safari%20%26%20Stay%2C%20I%20would%20like%20to%20plan%20a%20trip!";
const PHONE = "tel:+918281141813";
const WA2   = "tel:+919188211822";

export default function FloatingActions() {
  const [showCallMenu, setShowCallMenu] = useState(false);
  const [aiChatOpen,   setAiChatOpen]   = useState(false);

  return (
    <>
      {/* ── Fixed column — bottom-right ── */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-3">

        {/* 1. WhatsApp */}
        <div className="relative group">
          <span className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 hidden sm:block px-3 py-1 bg-[#112918]/90 text-white text-xs font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            WhatsApp Us
          </span>
          <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
            className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200 border-2 border-white">
            <i className="fab fa-whatsapp text-[28px]" />
          </a>
        </div>

        {/* 2. AI Trip Planner */}
        <div className="relative group">
          <span className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 hidden sm:block px-3 py-1 bg-[#1a4329]/95 text-[#4ade80] text-xs font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-[#4ade80]/30">
            ✨ Trip Planner AI
          </span>
          <button onClick={() => setAiChatOpen(!aiChatOpen)} aria-label="Open Trip Planner AI"
            className="relative w-14 h-14 rounded-full bg-[#1a4329] text-[#4ade80] shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200 border-2 border-[#4ade80]/50">
            <i className={`fas ${aiChatOpen ? "fa-times" : "fa-leaf"} text-2xl`} />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white animate-ping" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white" />
          </button>
        </div>

        {/* 3. Phone — direct call to primary number */}
        <div className="relative group">
          <span className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 hidden sm:block px-3 py-1 bg-[#112918]/90 text-white text-xs font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            +91 82811 41813
          </span>

          {/* Call menu — two numbers */}
          {showCallMenu && (
            <div className="absolute bottom-[calc(100%+12px)] right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 w-62 z-50">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest px-2 pb-2 font-bold border-b border-gray-100 mb-2">
                📞 Call Kanthalloor Safari
              </p>
              {/* Primary phone — direct call */}
              <a href={PHONE}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#f0faf4] hover:bg-[#1a4329] hover:text-white text-sm font-bold transition-all text-gray-800 mb-1.5 group/p">
                <span className="w-9 h-9 rounded-full bg-green-100 group-hover/p:bg-white/20 flex items-center justify-center flex-shrink-0 transition-all">
                  <i className="fa-solid fa-phone text-[#1a4329] group-hover/p:text-white text-sm" />
                </span>
                <div className="leading-tight">
                  <span className="block text-xs text-gray-400 group-hover/p:text-white/60 font-normal">Call — Primary</span>
                  +91 82811 41813
                </div>
              </a>
              {/* Second number — also a direct call */}
              <a href="tel:+919188211822"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#f0faf4] hover:bg-[#1a4329] hover:text-white text-sm font-bold transition-all text-gray-800 group/s">
                <span className="w-9 h-9 rounded-full bg-green-100 group-hover/s:bg-white/20 flex items-center justify-center flex-shrink-0 transition-all">
                  <i className="fa-solid fa-phone text-[#1a4329] group-hover/s:text-white text-sm" />
                </span>
                <div className="leading-tight">
                  <span className="block text-xs text-gray-400 group-hover/s:text-white/60 font-normal">Call — Secondary</span>
                  +91 91882 11822
                </div>
              </a>
            </div>
          )}

          <button onClick={() => setShowCallMenu(!showCallMenu)} aria-label="Call us"
            className={`w-12 h-12 rounded-full text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-[#4ade80]/40 ${showCallMenu ? "bg-[#112918]" : "bg-[#1a4329]"}`}>
            <i className={`fa-solid ${showCallMenu ? "fa-xmark" : "fa-phone"} text-base`} />
          </button>
        </div>

      </div>

      <AiChatWidget isOpen={aiChatOpen} setIsOpen={setAiChatOpen} />
    </>
  );
}
