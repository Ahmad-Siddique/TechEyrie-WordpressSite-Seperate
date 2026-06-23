"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroScrollDownIndicator from "./HeroScrollDownIndicator";
import { getHeroBackgroundPic } from "../../lib/pageImages";

const HERO_BG_IMAGE = getHeroBackgroundPic("home1");

gsap.registerPlugin(SplitText, ScrollTrigger);

export function HeroQuoteButton({ onClick, className }) {
  const wrapRef  = useRef(null);
  const textRef  = useRef(null);
  const cloneRef = useRef(null);
  const tlRef    = useRef(null);

  useEffect(() => {
    const wrap  = wrapRef.current;
    const text  = textRef.current;
    const clone = cloneRef.current;
    if (!wrap || !text || !clone) return;

    const H = wrap.offsetHeight;
    gsap.set(clone, { y: H, opacity: 1 });
    gsap.set(text,  { y: 0, opacity: 1 });

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
      className={
        className ??
        "mt-6 inline-flex items-center justify-center text-[14px] sm:text-[15px] tracking-[0.09em] font-semibold uppercase"
      }
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "15px 60px",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.34)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }}
    >
      <span
        ref={textRef}
        style={{ display: "block", lineHeight: 1, color: "#ffffff", whiteSpace: "nowrap" }}
      >
        Get a Quote
      </span>
      <span
        ref={cloneRef}
        aria-hidden="true"
        style={{ display: "block", lineHeight: 1, color: "#101010", whiteSpace: "nowrap", position: "absolute" }}
      >
        Get a Quote
      </span>
    </button>
  );
}

export default function HeroSection({ onQuoteClick }) {
  const containerRef       = useRef(null);
  const mediaRef           = useRef(null);
  const overlayRef         = useRef(null);
  const headingRef         = useRef(null);
  const badgeRef           = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const contentRef         = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Hard initial states ──
      gsap.set(mediaRef.current,           { opacity: 0 });
      gsap.set(overlayRef.current,         { opacity: 0 });
      gsap.set(badgeRef.current,           { opacity: 0, y: 20 });
      gsap.set(scrollIndicatorRef.current, { opacity: 0 });

      // ── Entrance timeline ──
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(mediaRef.current,
        { opacity: 1, duration: 1.8, ease: "power2.inOut" }, 0);

      tl.to(overlayRef.current,
        { opacity: 1, duration: 1.5, ease: "power2.inOut" }, 0.2);

      tl.to(badgeRef.current,
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 0.6);

      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "lines,words" });
        gsap.set(split.words, { opacity: 0, y: 60, skewY: 4 });
        tl.to(split.words, {
          opacity: 1, y: 0, skewY: 0,
          duration: 1.1, ease: "power4.out",
          stagger: 0.08,
        }, 0.8);
      }

      tl.to(scrollIndicatorRef.current,
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 1.8);

      // Scroll indicator bounce
      gsap.to(scrollIndicatorRef.current, {
        y: 8, duration: 1.2, ease: "sine.inOut",
        repeat: -1, yoyo: true, delay: 2.6,
      });

      // ── Depth recession on scroll ──
      // Scales back (recedes), drifts DOWN, no fade
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.4,
        onUpdate: (self) => {
          const p = self.progress;

          gsap.set(contentRef.current, {
            scale:           1 - (0.18 * p),   // recedes backward
            y:               380 * p,           // drifts down
            transformOrigin: "50% 60%",
          });
        },
        onLeaveBack: () => {
          gsap.to(contentRef.current, {
            scale: 1, y: 0,
            duration: 0.5, ease: "power2.out",
            overwrite: true,
          });
        },
      });

      // ── Hero image parallax ──
      gsap.to(mediaRef.current, {
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
      className="icomat-fullscreen-hero relative w-full h-screen min-h-[600px] bg-[#162D24]"
      style={{
        overflow: "clip",
        overflowX: "clip",
        width: "100%",
        maxWidth: "100%",
        perspective: "1200px",
      }}
    >
      {/* Background image — /home1 uses eyrion pics, not hero video */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <img
          ref={mediaRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ minWidth: "100%", minHeight: "100%" }}
          src={HERO_BG_IMAGE}
          alt=""
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.55))" }}
      />

      {/* Main Content */}
      <div className="icomat-fullscreen-hero-content relative z-10 h-full flex flex-col px-6 sm:px-10 md:px-16 lg:px-10 pb-6 md:pb-8">

        <div className="flex-1" />

        {/* contentRef wraps heading + badge — recedes together as one unit */}
        <div
          ref={contentRef}
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          <h1
            ref={headingRef}
            className="text-white tracking-tight leading-[0.95]"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              fontWeight: 600,
              fontFamily: "Inter, Arial, sans-serif",
            }}
          >
            The WordPress
            <br />
            agency you've been looking for
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

          <div ref={badgeRef} className="mt-4 max-w-[760px]">
            <p
              className="text-[14px] sm:text-[15px] lg:text-[17px] leading-relaxed break-words"
              style={{ color: "rgba(255,255,255,0.72)", maxWidth: "100%" }}
            >
              Middle East Based Firm | Web design & development | WP hosting, maintenance, & support | Search engine optimization
            </p>

            <HeroQuoteButton onClick={onQuoteClick} />
          </div>
        </div>

      </div>

      <HeroScrollDownIndicator scrollIndicatorRef={scrollIndicatorRef} />
    </section>
  );
}