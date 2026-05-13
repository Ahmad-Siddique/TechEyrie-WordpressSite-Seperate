"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
const ITEMS = [
  {
    number: "1",
    title: "Accessible and easy to use",
    body: "WordPress is designed for simplicity in day-to-day management, with an intuitive dashboard, familiar editing tools, and a massive ecosystem of plugins and integrations. With Eyrion handling the technical side, your team can confidently manage content while we take care of the complex backend work, updates, and infrastructure.",
  },
  {
    number: "2",
    title: "Built with SEO in mind",
    body: "Strong SEO performance depends on clean structure, fast loading speeds, responsive design, and proper metadata. Through ongoing WordPress support, we help detect and fix issues like broken templates, slow plugins, caching conflicts, and indexing errors—keeping your website aligned with both user experience and search engine requirements.",
  },
  {
    number: "3",
    title: "Secure and reliable for peace of mind",
    body: "Website security requires continuous attention, not one-time fixes. WordPress performs best when updates, configurations, and access controls are properly managed. Eyrion helps reduce risk through regular patching, security monitoring, and safe system configurations, allowing you to focus on your business while your website stays protected.",
  },
  {
    number: "4",
    title: "Highly customizable and scalable",
    body: "WordPress supports everything from simple websites to complex systems like memberships, CRMs, and ecommerce platforms. However, poor plugin choices or unmanaged growth can lead to instability. Our support ensures your setup stays optimized, stable, and aligned with your business workflows as your website evolves.",
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
        delay: (index % 2) * 0.12, // right column slightly staggered
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
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "clamp(16px, 2vw, 24px)",
      }}
    >
      {/* Number badge — left of heading */}
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

      <div style={{ flex: "1 1 0", minWidth: 0 }}>
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
export default function WhySEOResultsSection() {
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
          Why Choose WordPress for Professional Support?
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
          If you want a website platform that is flexible, widely adopted, and built to grow
          over time, WordPress remains one of the strongest choices available. When paired
          with dedicated professional support, it becomes even more powerful—giving you
          structured maintenance, fewer unexpected issues, and long-term stability.
        </p>
        <p
          style={{
            margin: "14px auto 0",
            maxWidth: "920px",
            color: "rgba(255,255,255,0.76)",
            fontSize: "clamp(1.02rem, 1.2vw, 1.2rem)",
            lineHeight: 1.75,
          }}
        >
          Here are key reasons why WordPress support is a smart long-term decision:
        </p>
      </div>

      {/* ── 2-column card grid ── */}
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "clamp(40px, 5vw, 72px) clamp(40px, 6vw, 96px)",
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
        }}
      >
        <p
          style={{
            margin: 0,
            color: "rgba(255,255,255,0.78)",
            fontSize: "clamp(1.02rem, 1.2vw, 1.2rem)",
            lineHeight: 1.78,
          }}
        >
          These are just a few reasons why businesses choose WordPress—and why professional
          support makes such a difference. At Eyrion, we treat your website like a long-term
          product, not a one-time project. That means structured updates, clear priorities, and
          continuous improvement instead of reactive fixes.
        </p>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 700px) {
          .seo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}