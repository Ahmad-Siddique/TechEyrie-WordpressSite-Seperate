"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroScrollDownIndicator, { defaultHeroScrollDownOnClick } from "../../icomat1/HeroScrollDownIndicator";
import { SYNTAXSTUDIOS_CASE_STUDY as CS } from "../../../lib/caseStudies/syntaxstudiosData";

gsap.registerPlugin(ScrollTrigger);

function MetaColumn({ label, items }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <p
        style={{
          fontWeight: 700,
          fontSize: "clamp(0.78rem, 0.95vw, 0.9rem)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
          margin: "0 0 6px 0",
        }}
      >
        {label}
      </p>
      {items.map((item) => (
        <p
          key={item}
          style={{
            fontWeight: 300,
            fontSize: "clamp(0.88rem, 1.02vw, 1rem)",
            color: "rgba(255,255,255,0.92)",
            lineHeight: 1.55,
            margin: 0,
          }}
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default function SyntaxStudiosHeroSection() {
  const headingRef = useRef(null);
  const bodyRef = useRef(null);
  const mockupRef = useRef(null);
  const metaBarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      [headingRef, bodyRef, mockupRef, metaBarRef].forEach((ref, i) => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: i === 0 ? 0 : 24, x: i === 0 ? -32 : 0 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.85,
            ease: "power3.out",
            delay: i * 0.08,
            scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
          },
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#162D24",
        paddingBottom: "clamp(28px, 4vw, 52px)",
      }}
    >
      <section
        style={{
          width: "100%",
          backgroundColor: "#162D24",
          padding:
            "clamp(64px, 8vw, 112px) clamp(24px, 6vw, 96px) clamp(96px, 12vw, 148px)",
          overflow: "visible",
          position: "relative",
        }}
      >
        <div
          className="syntax-hero-inner"
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "clamp(40px, 5vw, 72px)",
          }}
        >
          <div
            style={{
              flex: "0 0 40%",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(20px, 2.4vw, 32px)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(197, 233, 56, 0.85)",
              }}
            >
              Case Study
            </p>
            <h1
              ref={headingRef}
              style={{
                opacity: 0,
                fontWeight: 800,
                fontSize: "clamp(3rem, 6vw, 6rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
                color: "rgba(255,255,255,0.96)",
                margin: 0,
              }}
            >
              {CS.heroTitle}
            </h1>
            <p
              ref={bodyRef}
              style={{
                opacity: 0,
                fontSize: "clamp(1.05rem, 1.4vw, 1.3rem)",
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.82,
                margin: 0,
                maxWidth: "540px",
              }}
            >
              {CS.heroIntro}
            </p>
            <a
              href={CS.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                width: "fit-content",
                padding: "12px 22px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.22)",
                color: "#ffffff",
                fontSize: "0.92rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Visit {CS.domain}
            </a>
          </div>

          <div ref={mockupRef} style={{ opacity: 0, flex: "1 1 0", minWidth: 0 }}>
            <div
              style={{
                backgroundColor: "#1E3A30",
                borderRadius: "clamp(22px, 2.8vw, 36px)",
                padding: "clamp(18px, 2.4vw, 28px)",
                boxShadow: "0 32px 80px rgba(0, 0, 0, 0.32)",
              }}
            >
              <img
                src={CS.images.hero}
                alt="Syntax Studios website responsive mockups"
                loading="eager"
                decoding="async"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "clamp(12px, 1.4vw, 18px)",
                }}
              />
            </div>
          </div>
        </div>

        <HeroScrollDownIndicator onClick={defaultHeroScrollDownOnClick} />
      </section>

      <div
        className="syntax-meta-wrapper"
        style={{
          width: "80%",
          minWidth: "320px",
          margin: "clamp(-60px, -5.5vw, -76px) auto 0",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          ref={metaBarRef}
          style={{
            opacity: 0,
            backgroundColor: "#1F4638",
            borderRadius: "clamp(16px, 2vw, 24px)",
            padding: "clamp(32px, 4vw, 52px) clamp(32px, 4vw, 56px)",
            boxShadow: "0 16px 48px rgba(27, 71, 50, 0.34)",
          }}
        >
          <div
            className="syntax-meta-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "clamp(20px, 3vw, 40px)",
            }}
          >
            <MetaColumn label="Industry" items={CS.meta.industry} />
            <MetaColumn label="Services" items={CS.meta.services} />
            <MetaColumn label="Milestones" items={CS.meta.milestones} />
            <MetaColumn label="Timeline" items={CS.meta.timeline} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .syntax-hero-inner { flex-direction: column !important; }
          .syntax-hero-inner > div:first-child { flex: none !important; width: 100% !important; }
          .syntax-meta-wrapper { width: 90% !important; }
        }
        @media (max-width: 620px) {
          .syntax-meta-wrapper { width: calc(100% - 48px) !important; }
          .syntax-meta-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 380px) {
          .syntax-meta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
