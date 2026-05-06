"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroScrollDownIndicator, { defaultHeroScrollDownOnClick } from "../../icomat1/HeroScrollDownIndicator";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioHeroSection({ screenshotSrc = "/hrchitect-screenshot.png" }) {
  const headingRef = useRef(null);
  const bodyRef    = useRef(null);
  const mockupRef  = useRef(null);
  const metaBarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(headingRef.current,
        { opacity: 0, x: -32 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 88%", once: true },
        }
      );

      gsap.fromTo(bodyRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.75, ease: "power3.out", delay: 0.15,
          scrollTrigger: { trigger: bodyRef.current, start: "top 88%", once: true },
        }
      );

      gsap.fromTo(mockupRef.current,
        { opacity: 0, x: 40, scale: 0.97 },
        {
          opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "power3.out", delay: 0.1,
          scrollTrigger: { trigger: mockupRef.current, start: "top 88%", once: true },
        }
      );

      gsap.fromTo(metaBarRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.25,
          scrollTrigger: { trigger: metaBarRef.current, start: "top 95%", once: true },
        }
      );

    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        fontFamily: "inherit",
        backgroundColor: "#162D24",
        paddingBottom: "clamp(28px, 4vw, 52px)",
      }}
    >

      {/* ══════════════════════════════════════════
          TOP HALF — lavender background
      ══════════════════════════════════════════ */}
      <section
        style={{
          width: "100%",
          backgroundColor: "#162D24",
          boxSizing: "border-box",
          padding: "clamp(64px, 8vw, 112px) clamp(24px, 6vw, 96px) clamp(96px, 12vw, 148px)",
          overflow: "visible",
          position: "relative",
          zIndex: 0,
        }}
      >
        <div
          style={{
            maxWidth: "1400px",           // ← wider max-width to use more screen
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "clamp(40px, 5vw, 72px)",
          }}
          className="hrchitect-hero-inner"
        >

          {/* ── Left: text — slightly narrower so mockup gets more room ── */}
          <div
            style={{
              flex: "0 0 40%",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(24px, 2.8vw, 40px)",
            }}
          >
            <h1
              ref={headingRef}
              style={{
                opacity: 0,
                fontWeight: 800,
                fontSize: "clamp(3.2rem, 6.5vw, 6.5rem)", // ← bigger
                lineHeight: 1.0,
                letterSpacing: "-0.035em",
                color: "rgba(255,255,255,0.96)",
                margin: 0,
              }}
            >
              Acertus
            </h1>

            <p
              ref={bodyRef}
              style={{
                opacity: 0,
                fontWeight: 400,
                fontSize: "clamp(1.1rem, 1.5vw, 1.35rem)", // ← bigger
                color: "rgba(255,255,255,0.78)",
                lineHeight: 1.82,
                margin: 0,
                maxWidth: "540px",
              }}
            >
              When ACERTUS came to Eyrion they were looking for a partner for
              web design and development, and strategies for site optimization.
              After reviewing their existing site and hosting platform, Eyrion
              ran a full website migration. This included moving the site and
              all of its assets to Eyrion's premium hosting platform and tools.
            </p>
          </div>

          {/* ── Right: browser mockup — bigger flex share ── */}
          <div
            ref={mockupRef}
            style={{
              opacity: 0,
              flex: "1 1 0",    // ← takes all remaining space
              minWidth: 0,
            }}
          >
            <div
              style={{
                backgroundColor: "#1E3A30",
                borderRadius: "clamp(22px, 2.8vw, 36px)",
                padding: "clamp(22px, 2.8vw, 36px)",  // ← bigger padding = thicker purple frame
                boxShadow: "0 32px 80px rgba(0, 0, 0, 0.32)",
              }}
            >
              {/* Browser chrome */}
              <div
                style={{
                  backgroundColor: "#f0ede8",
                  borderRadius: "12px 12px 0 0",
                  padding: "12px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                }}
              >
                {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                  <span
                    key={i}
                    style={{
                      width: "13px",
                      height: "13px",
                      borderRadius: "50%",
                      backgroundColor: c,
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                ))}
                <div
                  style={{
                    flex: 1,
                    marginLeft: "10px",
                    backgroundColor: "#ffffff",
                    borderRadius: "6px",
                    height: "26px",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "12px",
                  }}
                >
                  <span style={{
                    fontSize: "12px",
                    color: "#888",
                    fontFamily: "monospace",
                    letterSpacing: "0.02em",
                  }}>
                    acertus.com
                  </span>
                </div>
              </div>

              {/* Screenshot — taller aspect ratio so it feels bigger */}
              <div
                style={{
                  borderRadius: "0 0 10px 10px",
                  overflow: "hidden",
                  lineHeight: 0,
                  aspectRatio: "16 / 9",   // ← 16/9 instead of 16/10 = taller
                  backgroundColor: "#e8edf5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {screenshotSrc ? (
                  <img
                    src={screenshotSrc}
                    alt="Acertus website screenshot"
                    width="960"
                    height="540"
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      display: "block",
                    }}
                  />
                ) : (
                  <MockupPlaceholder />
                )}
              </div>
            </div>
          </div>

        </div>

        <HeroScrollDownIndicator onClick={defaultHeroScrollDownOnClick} />
      </section>

      {/* ══════════════════════════════════════════
          META BAR — 80% wide, centered,
          pulled up into hero, fully rounded
      ══════════════════════════════════════════ */}
      <div
        style={{
          width: "80%",                         // ← 80%
          minWidth: "320px",
          margin: "clamp(-60px, -5.5vw, -76px) auto 0",
          position: "relative",
          zIndex: 2,
          boxSizing: "border-box",
        }}
        className="hrchitect-meta-wrapper"
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
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "clamp(20px, 3vw, 40px)",
            }}
            className="hrchitect-meta-grid"
          >
            <MetaColumn
              label="Industry"
              items={["Automotive", "Technology"]}
            />
            <MetaColumn
              label="Services"
              items={[
                "Migration",
                "Retained services",
                "Speed optimization",
                "Website infrastructure optimization",
              ]}
            />
            <MetaColumn
              label="Milestones"
              items={[
                "Migration",
                "Website infrastructure optimization",
                "Speed optimization",
                "Ongoing support",
              ]}
            />
            <MetaColumn
              label="Timeline"
              items={["Ongoing support since June 2022"]}
            />
          </div>
        </div>
      </div>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 900px) {
          .hrchitect-hero-inner {
            flex-direction: column !important;
          }
          .hrchitect-hero-inner > div:first-child {
            flex: none !important;
            width: 100% !important;
          }
        }
        @media (max-width: 900px) {
          .hrchitect-meta-wrapper {
            width: 90% !important;
          }
        }
        @media (max-width: 620px) {
          .hrchitect-meta-wrapper {
            width: calc(100% - 48px) !important;
          }
          .hrchitect-meta-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 380px) {
          .hrchitect-meta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

// ─── Meta Column ─────────────────────────────────────────────────────────────
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
      {items.map((item, i) => (
        <p
          key={i}
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

// ─── Mockup Placeholder ───────────────────────────────────────────────────────
function MockupPlaceholder() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #e8edf5 0%, #d0d8ee 100%)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <div style={{ width: "80px", height: "14px", borderRadius: "4px", background: "#b0bcd8" }} />
        {[1, 2, 3, 4].map((i) => (
          <div key={i} style={{ width: "60px", height: "10px", borderRadius: "4px", background: "#c8d0e4" }} />
        ))}
      </div>
      <div
        style={{
          flex: 1,
          borderRadius: "8px",
          background: "#c0ccdf",
          display: "flex",
          alignItems: "flex-end",
          padding: "16px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div style={{ width: "180px", height: "14px", borderRadius: "4px", background: "rgba(255,255,255,0.7)" }} />
          <div style={{ width: "140px", height: "10px", borderRadius: "4px", background: "rgba(255,255,255,0.5)" }} />
          <div style={{ width: "60px", height: "22px", borderRadius: "6px", background: "#4caf50", marginTop: "4px" }} />
        </div>
      </div>
    </div>
  );
}