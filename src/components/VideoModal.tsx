"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoModal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const closeModal = () => {
    const modal = modalRef.current;
    if (!modal) return;
    modal.classList.add("opacity-0");
    setTimeout(() => {
      modal.classList.add("hidden");
      // clear src only after fade-out so iframe stops playing
      setVideoSrc(null);
    }, 300);
  };

  useEffect(() => {
    // Allow HeroSection to open the modal by setting the iframe src via dataset
    const handler = (e: MouseEvent) => {
      if (e.target === modalRef.current) closeModal();
    };
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    // Expose open function on the modal element so HeroSection can trigger it
    const modal = document.getElementById("video-modal") as HTMLElement & {
      openWithSrc?: (src: string) => void;
    };
    if (modal) {
      modal.openWithSrc = (src: string) => {
        setVideoSrc(src);
        modal.classList.remove("hidden");
        // small delay to allow display:block before triggering transition
        requestAnimationFrame(() => {
          requestAnimationFrame(() => modal.classList.remove("opacity-0"));
        });
      };
    }

    document.addEventListener("click", handler);
    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("click", handler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, []);

  return (
    <div
      id="video-modal"
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300 p-4"
    >
      <div className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
          aria-label="Close video"
        >
          <i className="fas fa-times text-lg" />
        </button>
        <div className="aspect-video w-full">
          {/* Only render iframe when we have a real src — avoids empty-src browser warning */}
          {videoSrc ? (
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              src={videoSrc}
              title="Marayoor Experience Video"
            />
          ) : (
            <div className="w-full h-full bg-black" />
          )}
        </div>
      </div>
    </div>
  );
}
