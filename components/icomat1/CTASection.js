"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection({ onQuoteOpen }) {
  const sectionRef = useRef(null);
  const greenBaseRef = useRef(null); // solid green fill
  const greenGlowRef = useRef(null); // green curved glow
  const whiteBaseRef = useRef(null); // solid white fill
  const whiteGlowRef = useRef(null); // white curved glow
  const contentRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const btnTextRef = useRef(null);
  const btnCloneRef = useRef(null);
  const btnTlRef = useRef(null);

  // ── Button hover ──────────────────────────────────────────────
  useEffect(() => {
    const btn = btnRef.current;
    const text = btnTextRef.current;
    const clone = btnCloneRef.current;
    if (!btn || !text || !clone) return;

    const H = btn.offsetHeight;
    gsap.set(clone, { y: H, opacity: 1 });
    gsap.set(text, { y: 0, opacity: 1 });

    const onEnter = () => {
      btnTlRef.current?.kill();
      gsap.to(btn, {
        backgroundColor: "rgba(255,255,255,0.96)",
        borderColor: "rgba(255,255,255,1)",
        duration: 0.35,
        ease: "power2.out",
      });
      btnTlRef.current = gsap.timeline({
        defaults: { duration: 0.52, ease: "power3.inOut" },
      });
      btnTlRef.current.to(text, { y: -H }, 0).to(clone, { y: 0 }, 0);
    };

    const onLeave = () => {
      btnTlRef.current?.kill();
      gsap.to(btn, {
        backgroundColor: "rgba(255,255,255,0.12)",
        borderColor: "rgba(255,255,255,0.34)",
        duration: 0.35,
        ease: "power2.out",
      });
      btnTlRef.current = gsap.timeline({
        defaults: { duration: 0.48, ease: "power3.inOut" },
      });
      btnTlRef.current.to(clone, { y: H }, 0).to(text, { y: 0 }, 0);
    };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);

    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
      btnTlRef.current?.kill();
    };
  }, []);

  // ── Pinned scroll ─────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Base layers start invisible
      gsap.set(greenBaseRef.current, { opacity: 0 });
      gsap.set(whiteBaseRef.current, { opacity: 0 });

      // Glows start tiny (scale 0.1) at the bottom center and fully transparent
      gsap.set(greenGlowRef.current, { opacity: 0, scale: 0.1, transformOrigin: "50% 100%" });
      gsap.set(whiteGlowRef.current, { opacity: 0, scale: 0.1, transformOrigin: "50% 100%" });

      gsap.set(textRef.current, { color: "#f8f8f4" });
      gsap.set(btnRef.current, {
        backgroundColor: "rgba(255,255,255,0.12)",
        borderColor: "rgba(255,255,255,0.34)",
      });
      gsap.set(btnTextRef.current, { color: "#ffffff" });
      gsap.set(btnCloneRef.current, { color: "#101010" });

      // Content entrance
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 2.5,
          anticipatePin: 1,
        },
      });

      tl
        // ── STAGE 1: Green Glow rises and expands ──
        .to(greenGlowRef.current, {
          opacity: 1,
          scale: 4, // Scales up 400% to push the curve completely over the top edge
          duration: 0.5,
          ease: "power2.inOut",
        }, 0)
        // Solid green base fades in slightly delayed, ensuring the glow edge leads
        .to(greenBaseRef.current, {
          opacity: 1,
          duration: 0.35,
          ease: "power2.in",
        }, 0.15)

        // ── HOLD on full green (0.5 → 0.6) ──

        // ── STAGE 2: White Glow rises and expands ──
        .to(whiteGlowRef.current, {
          opacity: 1,
          scale: 4,
          duration: 0.5,
          ease: "power2.inOut",
        }, 0.6)
        // Solid white base fills in behind the glow
        .to(whiteBaseRef.current, {
          opacity: 1,
          duration: 0.35,
          ease: "power2.in",
        }, 0.75)
        
        // Green layers fade out gracefully to avoid muddy colors
        .to([greenBaseRef.current, greenGlowRef.current], {
          opacity: 0,
          duration: 0.3,
          ease: "power1.in",
        }, 0.7)

        // Text + button flip to dark as the white glow swallows the screen
        .to(textRef.current, {
          color: "#0a0a09",
          duration: 0.08,
          ease: "none",
        }, 0.88)
        .to(btnRef.current, {
          backgroundColor: "rgba(0,0,0,0.08)",
          borderColor: "rgba(0,0,0,0.25)",
          duration: 0.08,
          ease: "none",
        }, 0.88)
        .to(btnTextRef.current, {
          color: "#0a0a09",
          duration: 0.08,
          ease: "none",
        }, 0.88);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#000000",
      }}
    >
      {/* ── Solid green base ── */}
      <div
        ref={greenBaseRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          backgroundColor: "#0d2b1e",
          pointerEvents: "none",
        }}
      />

      {/* ── Green Curved Glow ── */}
      <div
        ref={greenGlowRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          // Perfect ellipse at bottom center creates the smooth curved dome
          background: `radial-gradient(
            ellipse 100% 100% at 50% 100%,
            #4ae394 0%,
            #1e5c38 40%,
            rgba(13,43,30,0.5) 75%,
            transparent 100%
          )`,
          pointerEvents: "none",
        }}
      />

      {/* ── Solid white base ── */}
      <div
        ref={whiteBaseRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          backgroundColor: "#f7f6f2",
          pointerEvents: "none",
        }}
      />

      {/* ── White Curved Glow ── */}
      <div
        ref={whiteGlowRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 4,
          background: `radial-gradient(
            ellipse 100% 100% at 50% 100%,
            #ffffff 0%,
            #e8e6e0 45%,
            rgba(247,246,242,0.6) 80%,
            transparent 100%
          )`,
          pointerEvents: "none",
        }}
      />

      {/* ── Content ── */}
      <div
        ref={contentRef}
        style={{
          position: "relative",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "880px",
          width: "100%",
          padding: "0 clamp(24px, 5vw, 80px)",
          gap: "clamp(36px, 5vw, 56px)",
          opacity: 0,
        }}
      >
        <h2
          ref={textRef}
          style={{
            fontFamily: "'Satoshi', 'Helvetica Neue', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(2.2rem, 4.8vw, 5rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.035em",
            color: "#f8f8f4",
            margin: 0,
          }}
        >
          Ready to start your<br />WordPress project?
        </h2>

        <button
          ref={btnRef}
          suppressHydrationWarning
          type="button"
          onClick={() => onQuoteOpen?.()}
          style={{
            position: "relative",
            overflow: "hidden",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(20px,2.5vw,36px) clamp(36px,4vw,56px)",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.34)",
            borderRadius: "38px",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.3)",
            cursor: "pointer",
            fontSize: "clamp(13px, 0.95vw, 15px)",
            fontWeight: 600,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          <span
            ref={btnTextRef}
            style={{
              display: "block",
              color: "#ffffff",
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
          >
            Get a Quote
          </span>
          <span
            ref={btnCloneRef}
            aria-hidden="true"
            style={{
              display: "block",
              color: "#101010",
              whiteSpace: "nowrap",
              position: "absolute",
              lineHeight: 1,
            }}
          >
            Get a Quote
          </span>
        </button>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
}