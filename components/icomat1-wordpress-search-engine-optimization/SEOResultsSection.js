"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
const ITEMS = [
  {
    number: "1",
    title: "Strategic direction & analysis",
    body: "The first phase of our process is Strategic Direction & Analysis. In this phase we will learn all about your goals and objectives, discuss target audience, and possible keywords. This will help us get an overall picture of your company, goals, and the direction to lead in.",
  },
  {
    number: "2",
    title: "Keyword research & development",
    body: "In the keyword research & development stage we will take all of our notes and discussions to determine what keywords will be best to use for your site. We will use keyword research tools to provide statistics and numbers on certain keywords and find which words could be best for your business to rank for. With your approval of the keywords we will be ready to move to the next stage.",
  },
  {
    number: "3",
    title: "Total on-page website optimization",
    body: "Our expert consultants implement best practices for each website. We configure meta titles, alt tags, robots.txt, sitemap.xml, and more — to ensure your site benefits from professional SEO services, with ongoing support to maintain optimal performance.",
  },
  {
    number: "4",
    title: "Tracking & reporting configuration",
    body: "We set up Google Analytics and tracking as part of our SEO support services, allowing you to see every visitor, every metric, every conversion, and make better-informed decisions about your website, marketing, and business or organization.",
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
      style={{ opacity: 0 }} // GSAP animates to 1
    >
      {/* Number badge */}
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
          marginBottom: "clamp(18px, 2.5vw, 28px)",
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

      {/* Title */}
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

      {/* Body */}
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
            fontSize: "clamp(2.4rem, 4.2vw, 4.2rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "rgba(255,255,255,0.96)",
            margin: 0,
          }}
        >
          WordPress SEO optimization results you can see and track
        </h2>
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