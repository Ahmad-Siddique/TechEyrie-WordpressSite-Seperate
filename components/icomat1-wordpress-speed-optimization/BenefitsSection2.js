"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GREEN = "#162D24";
const LIME = "#DFFB85";
const INK = "rgba(255,255,255,0.96)";
const INK_SOFT = "rgba(255,255,255,0.78)";
const INK_MUTED = "rgba(255,255,255,0.72)";

/** Synced with `BenefitsSection` + `SEOResultSection` (ada-compliance) */
const FONT_H2 = "clamp(2rem, 3.8vw, 3.1rem)";
const FONT_LEAD = "clamp(1.15rem, 1.9vw, 1.45rem)";
const FONT_CARD_TITLE = "clamp(1.82rem, 2.6vw, 2.4rem)";
const FONT_CARD_BODY = "clamp(1.18rem, 1.35vw, 1.3rem)";

const HEADING_MAX = "min(920px, 100%)";

const ICON = 48;

function IconPerceivable() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="18" height="13" rx="2" stroke={GREEN} strokeWidth="1.5" />
      <path d="M7 21h10" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 17v4" stroke={GREEN} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="10" r="1.6" fill={GREEN} />
      <path d="M13.5 9h3M13.5 11h2" stroke={GREEN} strokeWidth="1.2" strokeLinecap="round" />
      <path
        d="M15 14l-2-2M14 12h2.5a1 1 0 011 1v.5"
        stroke={GREEN}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconOperable() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="6" width="20" height="12" rx="2" stroke={GREEN} strokeWidth="1.45" />
      <path d="M5 10h2v2H5zm4 0h2v2H9zm4 0h2v2h-2zm4 0h2v2h-2z" fill={GREEN} />
      <path d="M5 14h14" stroke={GREEN} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 2" />
    </svg>
  );
}

function IconUnderstandable() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
        stroke={GREEN}
        strokeWidth="1.45"
      />
      <path d="M8 8h8M8 11h6M8 14h7" stroke={GREEN} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="16" cy="16" r="3.5" stroke={GREEN} strokeWidth="1.35" />
      <path d="M16 14.2v1.6M16 17.2h.01" stroke={GREEN} strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

/** Same glass control as `components/icomat1/HeroSection.js` `HeroQuoteButton` */
function GlassHeroQuoteButton({ onClick }) {
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
      className="mt-1 inline-flex items-center justify-center text-[14px] sm:text-[15px] tracking-[0.09em] font-semibold uppercase"
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
        cursor: onClick ? "pointer" : "default",
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

const PILLARS = [
  {
    id: "perceivable",
    title: "Perceivable",
    body: "Information and UI elements are presented in ways users can clearly understand and interact with.",
    Icon: IconPerceivable,
  },
  {
    id: "operable",
    title: "Operable",
    body: "Website navigation and functionality are accessible through multiple methods, including keyboard navigation and screen readers.",
    Icon: IconOperable,
  },
  {
    id: "understandable",
    title: "Understandable",
    body: "Content and interactions are designed to be clear, consistent, and easy to interpret for all users.",
    Icon: IconUnderstandable,
  },
];

export default function BenefitsSection2({ onQuoteClick }) {
  const blockRef = useRef(null);

  useEffect(() => {
    const el = blockRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      className="ada-benefits2-section benefits-section"
      style={{
        width: "100%",
        backgroundColor: GREEN,
        boxSizing: "border-box",
        padding: "clamp(72px, 9vw, 120px) clamp(24px, 6vw, 80px)",
      }}
    >
      <div
        ref={blockRef}
        style={{
          maxWidth: "min(1320px, 100%)",
          margin: "0 auto",
          textAlign: "center",
          opacity: 0,
        }}
      >
        <h2
          style={{
            margin: "0 auto",
            maxWidth: HEADING_MAX,
            color: INK,
            fontWeight: 700,
            fontSize: FONT_H2,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
          }}
        >
          WordPress Web Accessibility Implementation Is Best Practice
        </h2>

        <p
          style={{
            margin: "clamp(18px, 2.5vw, 26px) auto 0",
            maxWidth: HEADING_MAX,
            color: INK_SOFT,
            fontWeight: 600,
            fontSize: FONT_LEAD,
            lineHeight: 1.45,
            letterSpacing: "-0.015em",
          }}
        >
          We handle the process of improving WordPress website accessibility to support ADA compliance and a
          better user experience.
        </p>

        <div
          style={{
            marginTop: "clamp(28px, 4vw, 40px)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <GlassHeroQuoteButton onClick={onQuoteClick} />
        </div>

        <div
          className="benefits-pillars-grid ada-benefits2-grid"
          style={{
            marginTop: "clamp(52px, 7vw, 80px)",
            display: "grid",
            columnGap: "clamp(36px, 5vw, 72px)",
            rowGap: "clamp(40px, 5vw, 56px)",
            alignItems: "start",
            textAlign: "center",
          }}
        >
          {PILLARS.map((item) => {
            const Icon = item.Icon;
            return (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "clamp(16px, 2.2vw, 22px)",
                  width: "100%",
                  maxWidth: "100%",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    width: "clamp(88px, 9.5vw, 108px)",
                    height: "clamp(88px, 9.5vw, 108px)",
                    borderRadius: "16px",
                    backgroundColor: LIME,
                    border: "1px solid rgba(22, 45, 36, 0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon />
                </div>
                <h3
                  style={{
                    margin: 0,
                    color: INK,
                    fontWeight: 600,
                    fontSize: FONT_CARD_TITLE,
                    lineHeight: 1.18,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: INK_MUTED,
                    fontSize: FONT_CARD_BODY,
                    lineHeight: 1.72,
                    maxWidth: "min(48ch, 100%)",
                  }}
                >
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
