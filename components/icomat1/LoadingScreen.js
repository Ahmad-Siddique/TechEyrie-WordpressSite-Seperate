"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingScreen({ onComplete }) {
  const overlayRef = useRef(null);
  const blackRef = useRef(null);
  const logoRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const black = blackRef.current;
    const logo = logoRef.current;

    gsap.set(overlay, { opacity: 1, pointerEvents: "all" });
    gsap.set(black, { yPercent: 110, opacity: 0.08 }); // ← starts nearly invisible
    gsap.set(logo, { opacity: 0, scale: 0.85 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(overlay, { display: "none", pointerEvents: "none" });
        onComplete?.();
      },
    });

    tl
      // ── Phase 1: Logo appears ──
      .to(logo, {
        opacity: 1,
        scale: 1,
        duration: 0.28,       // was 0.4 → −30%
        ease: "power3.out",
      }, 0.08)

      // Subtle pulse
      .to(logo, {
        scale: 1.06,
        duration: 0.17,       // was 0.25 → −30%
        ease: "power1.inOut",
        yoyo: true,
        repeat: 1,
      }, 0.38)               // tighter offset

      .addLabel("waveStart", 0.78)  // was 1.15 → compressed

      // ── Phase 2: Black rises + opacity builds from near-zero to full ──
      .to(black, {
        yPercent: 0,
        opacity: 1,           // fades from 0.08 → 1 as it rises
        duration: 0.9,
        ease: "power4.inOut",
      }, "waveStart")

      // Logo fades out mid-rise
      .to(logo, {
        opacity: 0,
        duration: 0.28,
        ease: "power2.in",
      }, "waveStart+=0.2")

      // ── Phase 3: Smooth fade out ──
      .to(overlay, {
        opacity: 0,
        duration: 0.75,
        ease: "power1.inOut",
      }, "waveStart+=0.8");

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at center, #ffffff 30%, #e8e8e8 100%)",
      }}
    >
      {/* Logo */}
      <div
        ref={logoRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <circle cx="36" cy="52" r="3.5" fill="#1a1a1a" />
          <path d="M24 46 Q36 34 48 46" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M18 38 Q36 22 54 38" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M12 30 Q36 10 60 30" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M6 22 Q36 -2 66 22" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* Black + Wave COMBINED */}
      <div
        ref={blackRef}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "130%",
          zIndex: 3,
        }}
      >
        {/* Wave (top edge) */}
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: "-119px",
            width: "100%",
            height: "120px",
            display: "block",
          }}
        >
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#111111" stopOpacity="0" />
              <stop offset="55%" stopColor="#111111" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#111111" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C200,110 400,10 600,60 C800,110 1000,10 1200,60 C1300,85 1380,50 1440,60 L1440,120 L0,120 Z"
            fill="url(#waveGrad)"
          />
        </svg>

        {/* Black body */}
        <div
          ref={gradientRef}
          style={{
            width: "100%",
            height: "100%",
            background: "radial-gradient(ellipse at center, #2a2a2a 0%, #111111 70%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 6%, black 18%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 6%, black 18%)",
          }}
        />
      </div>
    </div>
  );
}