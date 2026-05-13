"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
const ITEMS = [
  {
    number: "1",
    title: "How it works",
    body: "At Freshy, during the website conversion to WordPress, we'll work with you to redesign your old site and make it ready for the WordPress world. We'll do our best to re-create your pages to the smallest detail. We'll also be happy to revamp your pages in order to make them more professional and functional. Just tell us what your WordPress goals are, and we'll make sure you get there.",
  },
  {
    number: "2",
    title: "A little more about us",
    body: "We are a creative team of web designers and developers dedicated to creating beautiful and responsive websites for our clients. We make it our mission to deliver products and services that perfectly meet your needs and expectations as a business owner. Over the years, we've designed websites for a variety of industries and purposes. We've also converted many existing static and HTML websites for clients who wanted to make the move to WordPress. However, that's not all we do!",
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
          Converting websites to WordPress with Freshy
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
          We'll be honest with you: converting an existing site to WordPress is
          no easy task.
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
          While it's possible to transfer some content (such as posts and
          images) by using a dedicated plugin, there are some aspects of your
          site that are not so easily moved over. This includes the design of
          your pages.
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