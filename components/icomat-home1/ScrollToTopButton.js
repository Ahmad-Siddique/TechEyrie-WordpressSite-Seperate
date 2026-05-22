"use client";

import { useCallback, useEffect, useState } from "react";

const SHOW_AFTER = 380;

/** Same chrome as HeroSection scroll indicator (bottom-right), arrow points up for scroll-to-top */
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setVisible(y > SHOW_AFTER);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={[
        "fixed z-[135] w-20 h-12 rounded-[10px]",
        "flex items-center justify-center",
        "bg-white/10 backdrop-blur-sm cursor-pointer",
        "hover:bg-white/20",
        "bottom-8 right-2 sm:right-4 md:right-8 lg:right-10",
        "border-0 p-0",
        "transition duration-300",
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </button>
  );
}
