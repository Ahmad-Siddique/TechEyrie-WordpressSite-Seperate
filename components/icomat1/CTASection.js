"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection({ onQuoteOpen }) {
  const sectionRef    = useRef(null);
  const greenBaseRef  = useRef(null);
  const greenGlowRef  = useRef(null);
  const greenLinesRef = useRef(null);
  const whiteBaseRef  = useRef(null);
  const whiteGlowRef  = useRef(null);
  const whiteLinesRef = useRef(null);
  const contentRef    = useRef(null);
  const textRef       = useRef(null);
  const btnRef        = useRef(null);
  const btnTextRef    = useRef(null);
  const btnCloneRef   = useRef(null);
  const btnTlRef      = useRef(null);

  // ── Helpers ───────────────────────────────────────────────────
  const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const trianglePulse = (t, start, end) => {
    if (t < start || t > end) return 0;
    const mid = (start + end) / 2;
    return t < mid
      ? (t - start) / (mid - start)
      : 1 - (t - mid) / (end - mid);
  };

  const lerpColor = (a, b, t) => [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];

  const greenGradient = (w, h) => `
    radial-gradient(
      ellipse ${w}% ${h}% at 50% 100%,
      #7ab855 0%,
      #4e6e35 30%,
      #2d4a1e 55%,
      rgba(20,34,12,0.7) 75%,
      transparent 100%
    )
  `;

  const whiteGradient = (w, h) => `
    radial-gradient(
      ellipse ${w}% ${h}% at 50% 100%,
      #ffffff 0%,
      #f0ede6 25%,
      #dedad2 50%,
      rgba(238,235,228,0.8) 72%,
      transparent 100%
    )
  `;

  // ── Button hover ──────────────────────────────────────────────
  useEffect(() => {
    const btn   = btnRef.current;
    const text  = btnTextRef.current;
    const clone = btnCloneRef.current;
    if (!btn || !text || !clone) return;

    const H = btn.offsetHeight;
    gsap.set(clone, { y: H, opacity: 1 });
    gsap.set(text,  { y: 0,  opacity: 1 });

    const onEnter = () => {
      btnTlRef.current?.kill();
      gsap.to(btn, {
        backgroundColor: "rgba(255,255,255,0.96)",
        borderColor:     "rgba(255,255,255,1)",
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
        borderColor:     "rgba(255,255,255,0.34)",
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

      gsap.set(greenBaseRef.current,  { opacity: 0 });
      gsap.set(greenGlowRef.current,  { opacity: 0 });
      gsap.set(greenLinesRef.current, { opacity: 0, scale: 0.1, transformOrigin: "50% 100%" });
      gsap.set(whiteBaseRef.current,  { opacity: 0 });
      gsap.set(whiteGlowRef.current,  { opacity: 0 });
      gsap.set(whiteLinesRef.current, { opacity: 0, scale: 0.1, transformOrigin: "50% 100%" });

      greenGlowRef.current.style.background = greenGradient(10, 10);
      whiteGlowRef.current.style.background = whiteGradient(10, 10);

      gsap.set(textRef.current, { color: "#f8f8f4" });
      gsap.set(btnRef.current, {
        backgroundColor: "rgba(255,255,255,0.12)",
        borderColor:     "rgba(255,255,255,0.34)",
      });
      gsap.set(btnTextRef.current,  { color: "#ffffff" });
      gsap.set(btnCloneRef.current, { color: "#101010" });

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 48 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once:  true,
          },
        }
      );

      ScrollTrigger.create({
        trigger:       sectionRef.current,
        start:         "top top",
        end:           "+=150%",
        pin:           true,
        pinSpacing:    true,
        anticipatePin: 1,
        scrub:         2.5,

        onUpdate: (self) => {
          const p = self.progress;

          // ── STAGE 1: black → #3A502A (p: 0 → 0.5) ──
          const s1  = Math.min(p / 0.5, 1);
          const s1e = ease(s1);

          const gW = 10 + s1e * 240;
          const gH = 10 + s1e * 210;

          greenGlowRef.current.style.background = greenGradient(gW, gH);
          gsap.set(greenGlowRef.current, { opacity: Math.min(s1e * 1.2, 1) });
          gsap.set(greenBaseRef.current, {
            opacity: s1 > 0.3 ? Math.min((s1 - 0.3) / 0.3, 1) : 0,
          });

          // Arcs: wide pulse window, full opacity on wrapper
          const lw1 = trianglePulse(s1, 0.04, 0.62);
          gsap.set(greenLinesRef.current, {
            opacity: lw1 * 1.0,
            scale:   0.1 + s1e * 3.9,
            transformOrigin: "50% 100%",
          });

          // ── STAGE 2: #3A502A → white (p: 0.52 → 1.0) ──
          const s2Raw = (p - 0.52) / 0.48;
          const s2    = Math.max(0, Math.min(s2Raw, 1));
          const s2e   = ease(s2);

          const wW = 10 + s2e * 240;
          const wH = 10 + s2e * 210;

          whiteGlowRef.current.style.background = whiteGradient(wW, wH);
          gsap.set(whiteGlowRef.current, { opacity: Math.min(s2e * 1.2, 1) });
          gsap.set(whiteBaseRef.current, {
            opacity: s2 > 0.3 ? Math.min((s2 - 0.3) / 0.3, 1) : 0,
          });

          // Fade green out as white rises
          gsap.set(greenGlowRef.current, {
            opacity: s2 > 0
              ? Math.max(Math.min(s1e * 1.2, 1) - s2e * 1.5, 0)
              : Math.min(s1e * 1.2, 1),
          });
          gsap.set(greenBaseRef.current, {
            opacity: s2 > 0.1
              ? Math.max(1 - (s2 - 0.1) / 0.25, 0)
              : (s1 > 0.3 ? Math.min((s1 - 0.3) / 0.3, 1) : 0),
          });

          const lw2 = trianglePulse(s2, 0.04, 0.62);
          gsap.set(whiteLinesRef.current, {
            opacity: lw2 * 1.0,
            scale:   0.1 + s2e * 3.9,
            transformOrigin: "50% 100%",
          });

          // Text smooth lerp
          const textFlip = Math.max(0, Math.min((s2 - 0.55) / 0.12, 1));
          const tc = lerpColor([248, 248, 244], [10, 10, 9], textFlip);
          textRef.current.style.color = `rgb(${tc[0]},${tc[1]},${tc[2]})`;

          if (textFlip > 0.5) {
            gsap.set(btnRef.current, {
              backgroundColor: "rgba(0,0,0,0.08)",
              borderColor:     "rgba(0,0,0,0.25)",
            });
            gsap.set(btnTextRef.current, { color: "#0a0a09" });
          } else {
            gsap.set(btnRef.current, {
              backgroundColor: "rgba(255,255,255,0.12)",
              borderColor:     "rgba(255,255,255,0.34)",
            });
            gsap.set(btnTextRef.current, { color: "#ffffff" });
          }
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Arc definitions ───────────────────────────────────────────
  const innerArcs = [60, 100, 145, 192, 242, 294, 348, 405, 464, 525];
  const outerArcs = [590, 660, 735, 815, 900, 990, 1085, 1185];

  const renderArcs = (color) => (
    <>
      {innerArcs.map((ry, i) => (
        <ellipse
          key={`inner-${i}`}
          cx="720"
          cy="970"
          rx={ry * 3.5}
          ry={ry}
          fill="none"
          stroke={`${color},${Math.max(0.15, 0.55 - i * 0.038)})`}
          strokeWidth={i < 2 ? "1.8" : i < 5 ? "1.3" : "1"}
        />
      ))}
      {outerArcs.map((ry, i) => (
        <ellipse
          key={`outer-${i}`}
          cx="720"
          cy="970"
          rx={ry * 3.5}
          ry={ry}
          fill="none"
          stroke={`${color},${Math.max(0.08, 0.28 - i * 0.025)})`}
          strokeWidth="0.9"
        />
      ))}
    </>
  );

  return (
    <section
      ref={sectionRef}
      style={{
        position:        "relative",
        width:           "100%",
        height:          "100vh",
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        overflow:        "hidden",
        backgroundColor: "#000000",
      }}
    >
      {/* ── Solid #3A502A base ── */}
      <div
        ref={greenBaseRef}
        style={{
          position:        "absolute",
          inset:           0,
          zIndex:          1,
          backgroundColor: "#3A502A",
          pointerEvents:   "none",
        }}
      />

      {/* ── Green radial glow ── */}
      <div
        ref={greenGlowRef}
        style={{
          position:      "absolute",
          inset:         0,
          zIndex:        2,
          pointerEvents: "none",
        }}
      />

      {/* ── Green arc lines ── */}
      <div
        ref={greenLinesRef}
        style={{
          position:      "absolute",
          inset:         0,
          zIndex:        3,
          pointerEvents: "none",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {renderArcs("rgba(180,230,130,")}
        </svg>
      </div>

      {/* ── Solid white base ── */}
      <div
        ref={whiteBaseRef}
        style={{
          position:        "absolute",
          inset:           0,
          zIndex:          4,
          backgroundColor: "#f7f6f2",
          pointerEvents:   "none",
        }}
      />

      {/* ── White radial glow ── */}
      <div
        ref={whiteGlowRef}
        style={{
          position:      "absolute",
          inset:         0,
          zIndex:        5,
          pointerEvents: "none",
        }}
      />

      {/* ── White arc lines ── */}
      <div
        ref={whiteLinesRef}
        style={{
          position:      "absolute",
          inset:         0,
          zIndex:        6,
          pointerEvents: "none",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {renderArcs("rgba(255,255,255,")}
        </svg>
      </div>

      {/* ── Content ── */}
      <div
        ref={contentRef}
        style={{
          position:      "relative",
          zIndex:        7,
          display:       "flex",
          flexDirection: "column",
          alignItems:    "center",
          textAlign:     "center",
          maxWidth:      "880px",
          width:         "100%",
          padding:       "0 clamp(24px, 5vw, 80px)",
          gap:           "clamp(36px, 5vw, 56px)",
          opacity:       0,
        }}
      >
        <h2
          ref={textRef}
          style={{
            fontFamily:    "'Satoshi', 'Helvetica Neue', sans-serif",
            fontWeight:    300,
            fontSize:      "clamp(2.2rem, 4.8vw, 5rem)",
            lineHeight:    1.02,
            letterSpacing: "-0.035em",
            color:         "#f8f8f4",
            margin:        0,
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
            position:             "relative",
            overflow:             "hidden",
            display:              "inline-flex",
            alignItems:           "center",
            justifyContent:       "center",
            padding:              "clamp(20px,2.5vw,36px) clamp(36px,4vw,56px)",
            background:           "rgba(255,255,255,0.12)",
            border:               "1px solid rgba(255,255,255,0.34)",
            borderRadius:         "38px",
            backdropFilter:       "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow:            "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.3)",
            cursor:               "pointer",
            fontSize:             "clamp(13px, 0.95vw, 15px)",
            fontWeight:           600,
            letterSpacing:        "0.09em",
            textTransform:        "uppercase",
            lineHeight:           1,
          }}
        >
          <span
            ref={btnTextRef}
            style={{
              display:    "block",
              color:      "#ffffff",
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
              display:    "block",
              color:      "#101010",
              whiteSpace: "nowrap",
              position:   "absolute",
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