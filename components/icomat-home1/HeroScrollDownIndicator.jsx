"use client";

/**
 * Scroll-down control — same visual as the main icomat1 home hero (rect glass pill, line + chevron).
 * @param {import("react").RefObject<HTMLDivElement | null>} [scrollIndicatorRef] — optional, for GSAP
 * @param {() => void} [onClick] — e.g. smooth scroll; if omitted, control is non-interactive (main hero)
 */
export default function HeroScrollDownIndicator({ scrollIndicatorRef, onClick }) {
  const interactive = typeof onClick === "function";

  return (
    <div
      ref={scrollIndicatorRef}
      className="absolute bottom-8 right-2 sm:right-4 md:right-8 lg:right-10 z-20"
      aria-hidden={interactive ? undefined : true}
    >
      <div
        className="w-20 h-12 rounded-[10px] flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-colors duration-300"
        {...(interactive
          ? {
              role: "button",
              tabIndex: 0,
              "aria-label": "Scroll down",
              onClick,
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClick();
                }
              },
            }
          : {})}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-white pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}

export function defaultHeroScrollDownOnClick() {
  const y = window.scrollY + Math.min(window.innerHeight * 0.88, 900);
  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  window.scrollTo({ top: Math.min(y, maxY), behavior: "smooth" });
}
