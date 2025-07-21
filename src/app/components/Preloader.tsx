"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const preloaderRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 900); // Shorter duration
    if (loaded && preloaderRef.current) {
      gsap.to(preloaderRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => {
          if (preloaderRef.current) preloaderRef.current.style.display = "none";
        },
      });
    }
    return () => clearTimeout(timer);
  }, [loaded]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary-100 via-accent-100 to-secondary-100 transition-all duration-700"
    >
      <div className="flex flex-col items-center gap-3">
        {/* Animated AP logo with shimmer */}
        <div className="relative flex items-center justify-center mb-2">
          <span className="text-4xl font-extrabold bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 bg-clip-text text-transparent animate-pulse drop-shadow-lg select-none">
            AP
          </span>
          {/* Subtle spinner ring */}
          <span className="absolute animate-spin rounded-full border-2 border-primary-300 border-t-transparent h-10 w-10"></span>
        </div>
        <span className="text-base font-semibold text-primary-600 tracking-wide">Loading...</span>
      </div>
    </div>
  );
} 