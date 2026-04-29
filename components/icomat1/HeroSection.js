"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

function HeroQuoteButton({ onClick }) {
  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const cloneRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const text = textRef.current;
    const clone = cloneRef.current;
    if (!wrap || !text || !clone) return;

    const H = wrap.offsetHeight;
    gsap.set(clone, { y: H, opacity: 1 });
    gsap.set(text, { y: 0, opacity: 1 });

    const onEnter = () => {
      tlRef.current?.kill();
      gsap.to(wrap, {
        backgroundColor: "rgba(255,255,255,0.96)",
        borderColor: "rgba(255,255,255,1)",
        duration: 0.35,
        ease: "power2.out",
      });
      tlRef.current = gsap.timeline({
        defaults: { duration: 0.52, ease: "power3.inOut" },
      });
      tlRef.current.to(text, { y: -H }, 0).to(clone, { y: 0 }, 0);
    };

    const onLeave = () => {
      tlRef.current?.kill();
      gsap.to(wrap, {
        backgroundColor: "rgba(255,255,255,0.12)",
        borderColor: "rgba(255,255,255,0.34)",
        duration: 0.35,
        ease: "power2.out",
      });
      tlRef.current = gsap.timeline({
        defaults: { duration: 0.48, ease: "power3.inOut" },
      });
      tlRef.current.to(clone, { y: H }, 0).to(text, { y: 0 }, 0);
    };

    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mouseleave", onLeave);

    return () => {
      wrap.removeEventListener("mouseenter", onEnter);
      wrap.removeEventListener("mouseleave", onLeave);
      tlRef.current?.kill();
    };
  }, []);

  return (
    <button
      ref={wrapRef}
      type="button"
      onClick={onClick}
      className="mt-6 inline-flex items-center justify-center text-[14px] sm:text-[15px] tracking-[0.09em] font-semibold uppercase"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "15px 60px",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.34)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }}
    >
      <span
        ref={textRef}
        style={{
          display: "block",
          lineHeight: 1,
          color: "#ffffff",
          whiteSpace: "nowrap",
        }}
      >
        Get a Quote
      </span>
      <span
        ref={cloneRef}
        aria-hidden="true"
        style={{
          display: "block",
          lineHeight: 1,
          color: "#101010",
          whiteSpace: "nowrap",
          position: "absolute",
        }}
      >
        Get a Quote
      </span>
    </button>
  );
}

export default function HeroSection({ onQuoteClick }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const headingRef = useRef(null);
  const badgeRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Set hard initial states so scroll-out never conflicts ──────
      gsap.set(videoRef.current, { opacity: 0 });
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(badgeRef.current, { opacity: 0, y: 20 });
      gsap.set(scrollIndicatorRef.current, { opacity: 0 });

      // ── Entrance timeline ──────────────────────────────────────────
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(
        videoRef.current,
        { opacity: 1, duration: 1.8, ease: "power2.inOut" },
        0
      );

      tl.to(
        overlayRef.current,
        { opacity: 1, duration: 1.5, ease: "power2.inOut" },
        0.2
      );

      tl.to(
        badgeRef.current,
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        0.6
      );

      if (headingRef.current) {
        const split = new SplitText(headingRef.current, {
          type: "lines,words",
        });
        gsap.set(split.words, { opacity: 0, y: 60, skewY: 4 });
        tl.to(
          split.words,
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration: 1.1,
            ease: "power4.out",
            stagger: 0.08,
          },
          0.8
        );
      }

      tl.to(
        scrollIndicatorRef.current,
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        1.8
      );

      // Scroll indicator bounce
      gsap.to(scrollIndicatorRef.current, {
        y: 8,
        duration: 1.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2.6,
      });

      // ── Scroll-out: heading ────────────────────────────────────────
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "50% top",
        end: "bottom top",
        scrub: 1.2,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(headingRef.current, {
            y: -100 * p,
            opacity: 1 - p,
          });
        },
        onLeaveBack: () => {
          gsap.to(headingRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            overwrite: true,
          });
        },
      });

      // ── Scroll-out: badge ──────────────────────────────────────────
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "30% top",
        end: "60% top",
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(badgeRef.current, {
            y: -50 * p,
            opacity: 1 - p,
          });
        },
        onLeaveBack: () => {
          gsap.to(badgeRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            overwrite: true,
          });
        },
      });

      // ── Video parallax ─────────────────────────────────────────────
      gsap.to(videoRef.current, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] bg-[#162D24]"
      style={{ overflow: "clip" }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="https://icomat.cdn.prismic.io/icomat/aWZQUwIvOtkhBcXM_ICOMAT-HOMEPAGE_1.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Gradient Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(0,0,0,0.55))",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 md:px-16 lg:px-10 pt-84 pb-16 md:pb-20">

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom-left heading */}
        <div>
          <h1
            ref={headingRef}
            className="text-white font-extrabold tracking-tight leading-[0.95]"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              fontWeight: 600,
            }}
          >
            The WordPress
            <br />
            agency you've been looking for.
            <sup
              style={{
                fontSize: "0.22em",
                verticalAlign: "super",
                fontWeight: 400,
                letterSpacing: "0.05em",
                marginLeft: "0.3em",
              }}
            >
              ™
            </sup>
          </h1>

          <div
            ref={badgeRef}
            className="mt-4 max-w-[760px]"
          >
            <p
              className="text-[14px] sm:text-[15px] lg:text-[17px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              US-based firm | Web design & development | WP hosting, maintenance, & support | Search engine optimization
            </p>

            <HeroQuoteButton onClick={onQuoteClick} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 right-2 sm:right-4 md:right-8 lg:right-10 z-20"
      >
        <div className="w-20 h-12 rounded-[10px] flex items-center justify-center bg-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-colors duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5v14M6 13l6 6 6-6"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}