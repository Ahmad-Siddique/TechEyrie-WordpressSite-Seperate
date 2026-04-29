"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingScreen({ onComplete }) {
  const overlayRef = useRef(null);
  const logoRef = useRef(null);
  const blackBaseRef = useRef(null); // Solid black fill
  const blackGlowRef = useRef(null); // Curved dark glow

  useEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    const blackBase = blackBaseRef.current;
    const blackGlow = blackGlowRef.current;

    // ── Initial States ──
    gsap.set(overlay, { opacity: 1, pointerEvents: "all" });
    gsap.set(logo, { opacity: 0, scale: 0.85 });
    
    // Base starts invisible
    gsap.set(blackBase, { opacity: 0 });
    // Glow starts tiny at the bottom center and fully transparent
    gsap.set(blackGlow, { opacity: 0, scale: 0.1, transformOrigin: "50% 100%" });

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
        duration: 0.18,
        ease: "power3.out",
      }, 0.05)

      // Subtle pulse
      .to(logo, {
        scale: 1.06,
        duration: 0.11,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 1,
      }, 0.25)

      .addLabel("waveStart", 0.5)

      // ── Phase 2: Smooth Curved Glow rises and expands ──
      .to(blackGlow, {
        opacity: 1,
        scale: 4, // Scales up 400% to push the curve completely over the top edge
        duration: 0.85,
        ease: "power2.inOut",
      }, "waveStart")
      
      // Solid black base fades in slightly delayed to ensure the glow edge leads the visual
      .to(blackBase, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.in",
      }, "waveStart+=0.25")

      // Logo fades out as the darkness rises over it
      .to(logo, {
        opacity: 0,
        duration: 0.28,
        ease: "power2.in",
      }, "waveStart+=0.2")

      // ── Phase 3: Smooth fade out of the entire loading screen ──
      .to(overlay, {
        opacity: 0,
        duration: 0.75,
        ease: "power1.inOut",
      }, "waveStart+=0.9"); // starts right as the dark wave finishes covering

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
      {/* ── Logo ── */}
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

      {/* ── Solid Black Base ── */}
      <div
        ref={blackBaseRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          backgroundColor: "#111111",
          pointerEvents: "none",
        }}
      />

      {/* ── Black Curved Glow ── */}
      <div
        ref={blackGlowRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 4,
          // Perfect ellipse at bottom center creates the smooth curved dome
          background: `radial-gradient(
            ellipse 100% 100% at 50% 100%,
            #2a2a2a 0%,
            #1a1a1a 45%,
            rgba(17,17,17,0.7) 80%,
            transparent 100%
          )`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}