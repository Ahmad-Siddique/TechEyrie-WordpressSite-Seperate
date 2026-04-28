"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Props ────────────────────────────────────────────────────────────────────
// Pass your actual screenshot URLs via props.
// Falls back to placeholder UI when not provided.
export default function PortfolioShowcaseSection({
  desktopScreenshot1 = null,  // large desktop mockup (left card, background)
  mobileScreenshot1  = null,  // mobile mockup (left card, foreground)
  desktopScreenshot2 = null,  // about page screenshot (top-right card)
  // logos: array of { src, alt } — shown in bottom-right card
  logos = [],
}) {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];
      cards.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#162D24",
        boxSizing: "border-box",
        padding: "clamp(64px, 8vw, 112px) clamp(24px, 6vw, 96px)",
      }}
    >
      <div
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr", // left card slightly wider
          gridTemplateRows: "auto auto",
          gap: "clamp(16px, 1.8vw, 24px)",
        }}
        className="showcase-grid"
      >

        {/* ═══════════════════════════════════════════
            CARD 1 — Large purple, spans 2 rows
            Desktop + mobile overlapping mockups
        ═══════════════════════════════════════════ */}
        <div
          ref={card1Ref}
          style={{
            opacity: 0,
            gridRow: "1 / 3",       // spans both rows
            backgroundColor: "#1E3A30",
            borderRadius: "clamp(20px, 2.5vw, 32px)",
            padding: "clamp(28px, 3vw, 44px)",
            position: "relative",
            overflow: "hidden",
            minHeight: "clamp(480px, 55vw, 720px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          {/* ── Desktop browser mockup (background, larger) ── */}
          <div
            style={{
              position: "absolute",
              top: "clamp(24px, 3vw, 44px)",
              left: "clamp(24px, 3vw, 44px)",
              right: "clamp(80px, 10vw, 160px)", // leave room for mobile mockup
              bottom: "clamp(80px, 10vw, 160px)",
            }}
          >
            <BrowserMockup
              url="hrchitect.com"
              screenshot={desktopScreenshot1}
              bgColor="#e8f0fa"
              borderRadius="12px"
              showContent="desktop-hrchitect"
            />
          </div>

          {/* ── Mobile browser mockup (foreground, smaller, offset) ── */}
          <div
            style={{
              position: "absolute",
              bottom: "clamp(24px, 3vw, 44px)",
              right: "clamp(16px, 2vw, 28px)",
              width: "clamp(160px, 18vw, 260px)",
              zIndex: 2,
              filter: "drop-shadow(0 16px 40px rgba(30,0,80,0.35))",
            }}
          >
            <BrowserMockup
              url="hrchitect.com"
              screenshot={mobileScreenshot1}
              bgColor="#dce8f8"
              borderRadius="10px"
              showContent="mobile-hrchitect"
              isMobile
            />
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            CARD 2 — Top right, lavender
            About HRchitect page screenshot
        ═══════════════════════════════════════════ */}
        <div
          ref={card2Ref}
          style={{
            opacity: 0,
            backgroundColor: "#1F4638",
            borderRadius: "clamp(20px, 2.5vw, 32px)",
            padding: "clamp(22px, 2.5vw, 36px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <BrowserMockup
            url="hrchitect.com/about"
            screenshot={desktopScreenshot2}
            bgColor="#dce8f8"
            borderRadius="10px"
            showContent="about-hrchitect"
          />
        </div>

        {/* ═══════════════════════════════════════════
            CARD 3 — Bottom right, lavender
            Brand logos scattered/tilted
        ═══════════════════════════════════════════ */}
        <div
          ref={card3Ref}
          style={{
            opacity: 0,
            backgroundColor: "#1F4638",
            borderRadius: "clamp(20px, 2.5vw, 32px)",
            padding: "clamp(22px, 2.5vw, 36px)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <LogoScatterGrid logos={logos} />
        </div>

      </div>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 768px) {
          .showcase-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .showcase-grid > div:first-child {
            grid-row: auto !important;
            min-height: 420px !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─── Browser Mockup ───────────────────────────────────────────────────────────
function BrowserMockup({ url, screenshot, bgColor, borderRadius, showContent, isMobile = false }) {
  return (
    <div
      style={{
        width: "100%",
        borderRadius,
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(20,0,60,0.18)",
        backgroundColor: bgColor,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Chrome bar */}
      <div
        style={{
          backgroundColor: "#f2f0ec",
          padding: isMobile ? "7px 10px" : "9px 14px",
          display: "flex",
          alignItems: "center",
          gap: isMobile ? "4px" : "6px",
          flexShrink: 0,
        }}
      >
        {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
          <span
            key={i}
            style={{
              width: isMobile ? "8px" : "11px",
              height: isMobile ? "8px" : "11px",
              borderRadius: "50%",
              backgroundColor: c,
              display: "inline-block",
              flexShrink: 0,
            }}
          />
        ))}
        {!isMobile && (
          <div
            style={{
              flex: 1,
              marginLeft: "8px",
              backgroundColor: "#fff",
              borderRadius: "4px",
              height: "20px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "8px",
            }}
          >
            <span style={{ fontSize: "10px", color: "#999", fontFamily: "monospace" }}>
              {url}
            </span>
          </div>
        )}
      </div>

      {/* Screenshot or placeholder */}
      <div
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          aspectRatio: isMobile ? "9 / 16" : "16 / 10",
          backgroundColor: bgColor,
        }}
      >
        {screenshot ? (
          <img
            src={screenshot}
            alt={`${url} screenshot`}
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
          <MockupContent type={showContent} isMobile={isMobile} />
        )}
      </div>
    </div>
  );
}

// ─── Mockup Content Placeholders ─────────────────────────────────────────────
function MockupContent({ type, isMobile }) {
  if (type === "about-hrchitect") {
    return (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Blue header band */}
        <div
          style={{
            background: "linear-gradient(135deg, #2a6cb0 0%, #1a4f8a 100%)",
            padding: "clamp(14px, 3vw, 28px) clamp(16px, 3vw, 24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {/* HRchitect logo row */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", position: "absolute", top: "12px", left: "16px" }}>
            <div style={{ width: "20px", height: "20px", borderRadius: "4px", background: "#4fc3f7" }} />
            <div style={{ width: "72px", height: "10px", borderRadius: "3px", background: "rgba(255,255,255,0.85)" }} />
            <div style={{ marginLeft: "auto", width: "70px", height: "20px", borderRadius: "4px", background: "#2196f3" }} />
          </div>
          <p style={{ color: "#fff", fontWeight: 600, fontSize: "clamp(0.7rem, 1.2vw, 1rem)", margin: "24px 0 0", textAlign: "center" }}>
            About HRchitect
          </p>
        </div>

        {/* Tab bar */}
        <div
          style={{
            backgroundColor: "#fff",
            display: "flex",
            gap: "0",
            borderBottom: "2px solid #eee",
            padding: "0 16px",
            flexShrink: 0,
          }}
        >
          {["Why Use an Expert?", "About HRchitect", "Careers", "Leadership", "News"].map((tab, i) => (
            <div
              key={i}
              style={{
                padding: "8px 10px",
                fontSize: "8px",
                color: i === 1 ? "#2196f3" : "#555",
                borderBottom: i === 1 ? "2px solid #2196f3" : "none",
                marginBottom: "-2px",
                whiteSpace: "nowrap",
                fontWeight: i === 1 ? 600 : 400,
              }}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Content */}
        <div style={{ padding: "16px", background: "#fff", flex: 1 }}>
          <div style={{ width: "120px", height: "12px", borderRadius: "3px", background: "#222", marginBottom: "10px" }} />
          <div style={{ width: "100%", height: "7px", borderRadius: "3px", background: "#ddd", marginBottom: "5px" }} />
          <div style={{ width: "95%", height: "7px", borderRadius: "3px", background: "#ddd", marginBottom: "5px" }} />
          <div style={{ width: "80%", height: "7px", borderRadius: "3px", background: "#ddd" }} />
        </div>
      </div>
    );
  }

  if (type === "desktop-hrchitect") {
    return (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Nav */}
        <div style={{ backgroundColor: "#fff", padding: "8px 16px", display: "flex", gap: "8px", alignItems: "center", borderBottom: "1px solid #eee", flexShrink: 0 }}>
          <div style={{ width: "80px", height: "12px", borderRadius: "3px", background: "#2196f3" }} />
          <div style={{ flex: 1, display: "flex", gap: "6px", justifyContent: "flex-end" }}>
            {[60, 72, 80, 60, 52, 48].map((w, i) => (
              <div key={i} style={{ width: `${w}px`, height: "8px", borderRadius: "2px", background: "#ccc" }} />
            ))}
          </div>
          <div style={{ width: "90px", height: "20px", borderRadius: "4px", background: "#2196f3" }} />
        </div>
        {/* Hero image with overlay */}
        <div
          style={{
            flex: 1,
            background: "linear-gradient(rgba(30,60,120,0.55), rgba(20,40,100,0.7)), url('https://picsum.photos/seed/hrchitect/800/450') center/cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div style={{ width: "220px", height: "14px", borderRadius: "3px", background: "rgba(255,255,255,0.9)", marginBottom: "8px" }} />
          <div style={{ width: "180px", height: "14px", borderRadius: "3px", background: "rgba(255,255,255,0.9)", marginBottom: "12px" }} />
          <div style={{ width: "140px", height: "10px", borderRadius: "3px", background: "rgba(255,255,255,0.6)", marginBottom: "16px" }} />
          <div style={{ width: "80px", height: "24px", borderRadius: "5px", background: "#4caf50" }} />
        </div>
        {/* Service tabs */}
        <div style={{ backgroundColor: "#fff", padding: "0 16px", display: "flex", gap: "0", borderBottom: "2px solid #eee", flexShrink: 0 }}>
          {["Strategic Planning", "Evaluation & Selection", "Project Management", "Implementation", "Change Management"].map((t, i) => (
            <div key={i} style={{ padding: "8px 10px", fontSize: "7px", color: i === 1 ? "#222" : "#777", borderBottom: i === 1 ? "2px solid #ffd600" : "none", marginBottom: "-2px", whiteSpace: "nowrap" }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "mobile-hrchitect") {
    return (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Mobile nav */}
        <div style={{ backgroundColor: "#1565c0", padding: "8px 10px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div style={{ width: "60px", height: "10px", borderRadius: "2px", background: "rgba(255,255,255,0.9)" }} />
          <div style={{ display: "flex", gap: "3px" }}>
            {[1,2,3].map(i => <div key={i} style={{ width: "14px", height: "2px", borderRadius: "1px", background: "rgba(255,255,255,0.9)" }} />)}
          </div>
        </div>
        {/* CTA button */}
        <div style={{ backgroundColor: "#1976d2", padding: "6px 10px", textAlign: "center", flexShrink: 0 }}>
          <div style={{ display: "inline-block", width: "90px", height: "14px", borderRadius: "3px", background: "rgba(255,255,255,0.85)" }} />
        </div>
        {/* Hero */}
        <div style={{ flex: 1, background: "linear-gradient(rgba(20,50,100,0.6), rgba(20,50,100,0.7)), url('https://picsum.photos/seed/mobile/400/600') center/cover", padding: "10px" }}>
          <div style={{ width: "90%", height: "8px", borderRadius: "2px", background: "rgba(255,255,255,0.85)", marginBottom: "5px" }} />
          <div style={{ width: "70%", height: "8px", borderRadius: "2px", background: "rgba(255,255,255,0.85)", marginBottom: "10px" }} />
          <div style={{ width: "60px", height: "18px", borderRadius: "4px", background: "#4caf50" }} />
        </div>
        {/* Tabs */}
        <div style={{ backgroundColor: "#fff", padding: "4px 8px", flexShrink: 0 }}>
          {["Strategic Planning", "Evaluation & Selection"].map((t, i) => (
            <div key={i} style={{ padding: "5px 0", fontSize: "7px", color: "#333", borderBottom: "1px solid #eee" }}>{t}</div>
          ))}
        </div>
      </div>
    );
  }

  return <div style={{ width: "100%", height: "100%", background: "#dce8f8" }} />;
}

// ─── Logo Scatter Grid ────────────────────────────────────────────────────────
// Renders real logos if provided, otherwise shows the placeholder grid
// matching the screenshot's scattered brand logos layout
const PLACEHOLDER_LOGOS = [
  { name: "Essilor",          color: "#003087" },
  { name: "L.L.Bean",         color: "#cc0000" },
  { name: "T-Mobile",         color: "#e20074" },
  { name: "Total Quality",    color: "#1a6b3c" },
  { name: "Booz Allen",       color: "#002244" },
  { name: "Northrop Grumman", color: "#003a70" },
  { name: "Newmont",          color: "#b8962e" },
  { name: "Mayo Clinic",      color: "#003087" },
  { name: "Raytheon",         color: "#003087" },
  { name: "OfficeMax",        color: "#cc0000" },
  { name: "Southwest",        color: "#304cb2" },
  { name: "UNC",              color: "#4b9cd3" },
  { name: "Texas Health",     color: "#005eb8" },
  { name: "Wells Fargo",      color: "#d71e28" },
  { name: "NASCAR",           color: "#ffd700" },
  { name: "World Vision",     color: "#00539b" },
  { name: "Capital One",      color: "#004977" },
  { name: "3M",               color: "#cc0000" },
  { name: "The Andersons",    color: "#003087" },
  { name: "Bristol-Myers",    color: "#0033a0" },
];

// Deterministic rotation/position so SSR and client match
const ROTATIONS = [-8, 5, -3, 7, -5, 4, -6, 3, -4, 8, -7, 2, -9, 6, -2, 9, -1, 5, -6, 3];

function LogoScatterGrid({ logos }) {
  const items = logos.length > 0 ? logos : PLACEHOLDER_LOGOS;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Decorative purple blob in bottom-right — matches screenshot */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-40px",
          right: "-40px",
          width: "clamp(100px, 14vw, 180px)",
          height: "clamp(100px, 14vw, 180px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(51,128,96,0.35) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Scattered logo grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "clamp(10px, 1.5vw, 18px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {items.slice(0, 20).map((logo, i) => (
          <div
            key={i}
            style={{
              transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              padding: "clamp(6px, 0.8vw, 10px) clamp(8px, 1vw, 14px)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              minHeight: "clamp(32px, 3.5vw, 46px)",
              overflow: "hidden",
            }}
          >
            {logo.src ? (
              <img
                src={logo.src}
                alt={logo.alt || logo.name}
                loading="lazy"
                decoding="async"
                style={{
                  maxWidth: "100%",
                  maxHeight: "clamp(18px, 2.2vw, 28px)",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            ) : (
              <span
                style={{
                  fontSize: "clamp(7px, 0.75vw, 9px)",
                  fontWeight: 700,
                  color: logo.color || "#333",
                  textAlign: "center",
                  lineHeight: 1.2,
                  letterSpacing: "0.01em",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: "100%",
                }}
              >
                {logo.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}