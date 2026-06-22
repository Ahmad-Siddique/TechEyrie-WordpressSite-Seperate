"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SYNTAXSTUDIOS_CASE_STUDY as CS } from "../../../lib/caseStudies/syntaxstudiosData";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioShowcaseSection() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: card, start: "top 88%", once: true },
          },
        );
      });
    });
    return () => ctx.revert();
  }, []);

  const cards = [
    {
      label: "Desktop experience",
      image: CS.images.desktop,
      bg: "#1E3A30",
    },
    {
      label: "Laptop & tablet views",
      image: CS.images.laptop,
      bg: "#1F4638",
    },
    {
      label: "Mobile-first layouts",
      image: CS.images.mobileWhite,
      bg: "#1F4638",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#162D24",
        padding: "clamp(64px, 8vw, 112px) clamp(24px, 6vw, 96px)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(32px, 4vw, 48px)", maxWidth: "640px" }}>
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(197, 233, 56, 0.85)",
            }}
          >
            Responsive delivery
          </p>
          <h2
            style={{
              margin: 0,
              color: "#ffffff",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            Built to look sharp on every screen
          </h2>
        </div>

        <div
          className="syntax-showcase-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 0.85fr",
            gap: "clamp(16px, 1.8vw, 24px)",
            alignItems: "stretch",
          }}
        >
          {cards.map((card, i) => (
            <article
              key={card.label}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={{
                opacity: 0,
                backgroundColor: card.bg,
                borderRadius: "clamp(20px, 2.5vw, 32px)",
                padding: "clamp(20px, 2.4vw, 32px)",
                display: "flex",
                flexDirection: "column",
                gap: "clamp(14px, 1.6vw, 18px)",
                minHeight: i === 0 ? "clamp(420px, 48vw, 620px)" : "auto",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {card.label}
              </p>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  borderRadius: "clamp(12px, 1.4vw, 18px)",
                }}
              >
                <img
                  src={card.image}
                  alt={card.label}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .syntax-showcase-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
