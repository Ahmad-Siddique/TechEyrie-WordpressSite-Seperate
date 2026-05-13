"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
const ITEMS = [
  {
    number: "1",
    title: "Divi Classic Backend Builder",
    body: "The Divi Builder includes a flexible drag-and-drop backend editor within WordPress, making it easy to arrange modules, sections, and content exactly where you want them. Whether you're making small edits or building entire pages from scratch, the interface keeps the process simple and efficient.",
  },
  {
    number: "2",
    title: "Divi Frontend Visual Page Builder",
    body: "Divi's Visual Builder allows you to edit pages directly on the frontend, giving you a real-time view of how your website will appear to visitors. This visual editing experience makes Divi intuitive for both beginners and experienced WordPress users.",
  },
  {
    number: "3",
    title: "Divi Theme Builder",
    body: "Advanced tools like the Divi Theme Builder, global styles, reusable layouts, and keyboard shortcuts make large-scale website management faster and more efficient. Instead of working within rigid templates, Divi gives you full control over your design workflow and website structure.",
  },
];

// ─── Single Card ──────────────────────────────────────────────────────────────
function SEOCard({ item, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        delay: (index % 3) * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "clamp(18px, 2.2vw, 24px)",
      }}
    >
      {/* Number badge — top center */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "clamp(60px, 5.8vw, 82px)",
          height: "clamp(60px, 5.8vw, 82px)",
          borderRadius: "14px",
          backgroundColor: "rgba(255,255,255,0.14)",
          border: "1px solid rgba(255,255,255,0.26)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "clamp(1.65rem, 2.3vw, 2.2rem)",
            color: "rgba(255,255,255,0.96)",
            lineHeight: 1,
          }}
        >
          {item.number}
        </span>
      </div>

      <div style={{ width: "100%", minWidth: 0, textAlign: "center" }}>
        {item.title ? (
          <h3
            style={{
              fontWeight: 700,
              fontSize: "clamp(1.45rem, 2vw, 1.95rem)",
              color: "rgba(255,255,255,0.95)",
              lineHeight: 1.22,
              letterSpacing: "-0.01em",
              margin: "0 0 clamp(10px, 1.2vw, 16px) 0",
            }}
          >
            {item.title}
          </h3>
        ) : null}

        <p
          style={{
            fontWeight: 400,
            fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
            color: "rgba(255,255,255,0.74)",
            lineHeight: 1.72,
            margin: 0,
          }}
        >
          {item.body}
        </p>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function SEOResultsSection() {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
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
      style={{
        width: "100%",
        backgroundColor: "#162D24",
        boxSizing: "border-box",
        padding: "clamp(64px, 8vw, 112px) clamp(24px, 6vw, 100px)",
      }}
    >
      {/* ── Centered heading ── */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "980px",
          margin: "0 auto clamp(56px, 7vw, 96px)",
        }}
      >
        <h2
          ref={headingRef}
          style={{
            opacity: 0, // GSAP animates to 1
            fontWeight: 700,
            fontSize: "54px",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "rgba(255,255,255,0.96)",
            margin: 0,
          }}
        >
          Effective Divi Features with a User-Friendly Interface
        </h2>
        <p
          style={{
            margin: "18px auto 0",
            maxWidth: "920px",
            color: "rgba(255,255,255,0.76)",
            fontSize: "clamp(1.02rem, 1.2vw, 1.2rem)",
            lineHeight: 1.75,
          }}
        >
          Elegant Themes positions Divi as a complete WordPress design system—and for good reason.
          While the platform offers extensive customization and powerful functionality, it remains one
          of the most user-friendly WordPress themes available today.
        </p>
      </div>

      {/* ── 3-column card grid ── */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "clamp(28px, 3.5vw, 48px) clamp(24px, 4vw, 40px)",
        }}
        className="seo-grid"
      >
        {ITEMS.map((item, i) => (
          <SEOCard key={item.number} item={item} index={i} />
        ))}
      </div>

      <div
        style={{
          maxWidth: "1120px",
          margin: "clamp(52px, 6vw, 84px) auto 0",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "rgba(255,255,255,0.78)",
            fontSize: "clamp(1.02rem, 1.2vw, 1.2rem)",
            lineHeight: 1.78,
            textAlign: "center",
          }}
        >
          At Eyrion, we build and manage Divi websites with long-term usability in mind. Our Divi
          developers avoid unnecessary complexity and ensure your website remains easy to edit,
          maintain, and scale over time. Every project is optimized to take full advantage of the
          Divi website builder while maintaining strong performance, responsiveness, and user
          experience.
        </p>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 1100px) {
          .seo-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 700px) {
          .seo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}