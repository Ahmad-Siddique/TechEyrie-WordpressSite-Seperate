"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Add-on Data ──────────────────────────────────────────────────────────────
const ADDONS = [
  {
    id: "technical-maintenance",
    icon: (
      // Settings/gear with checkmark — matches screenshot
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M18 23a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M29.1 22.1a2.4 2.4 0 0 0 .48 2.65l.09.09a2.91 2.91 0 1 1-4.12 4.12l-.09-.09a2.4 2.4 0 0 0-2.65-.48 2.4 2.4 0 0 0-1.46 2.2V31a2.91 2.91 0 0 1-5.82 0v-.12a2.4 2.4 0 0 0-1.57-2.2 2.4 2.4 0 0 0-2.65.48l-.09.09a2.91 2.91 0 1 1-4.12-4.12l.09-.09a2.4 2.4 0 0 0 .48-2.65 2.4 2.4 0 0 0-2.2-1.46H5a2.91 2.91 0 0 1 0-5.82h.12a2.4 2.4 0 0 0 2.2-1.57 2.4 2.4 0 0 0-.48-2.65l-.09-.09a2.91 2.91 0 1 1 4.12-4.12l.09.09a2.4 2.4 0 0 0 2.65.48h.12A2.4 2.4 0 0 0 15.09 5V4.91a2.91 2.91 0 0 1 5.82 0V5a2.4 2.4 0 0 0 1.46 2.2 2.4 2.4 0 0 0 2.65-.48l.09-.09a2.91 2.91 0 1 1 4.12 4.12l-.09.09a2.4 2.4 0 0 0-.48 2.65v.12a2.4 2.4 0 0 0 2.2 1.46H31a2.91 2.91 0 0 1 0 5.82h-.12a2.4 2.4 0 0 0-2.2 1.46Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="27" cy="27" r="5" fill="rgba(255,255,255,0.16)" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M25 27l1.3 1.5L29 25.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Add on: Technical maintenance",
    body: "This is a quarterly review of your SEO optimized WordPress site. We will make changes and updates as needed to the backend of your website as well as the front facing portion. Our SEO agency will ensure that the proper keywords are integrated into your site on a quarterly basis. As a reliable SEO company, we provide ongoing support to keep your site performing at its best.",
  },
  {
    id: "keyword-content",
    icon: (
      // Magnifying glass with bar chart — matches screenshot
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="10" y="18" width="3" height="7" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="15" y="13" width="3" height="12" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="20" y="16" width="3" height="9" rx="1" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="16.5" cy="16.5" r="10" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M24 24l7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Add on: Keyword-focused content strategy, development, & optimization",
    body: "Our WordPress SEO agency will create a keyword-focused landing page, blog, or other strategic content. This will help your website rank for a specific keyword or location. We will ensure that this page is fully optimized for SEO with the proper structure, headings, and permalinks.",
  },
  {
    id: "local-seo",
    icon: (
      // Map pin / location with browser frame — matches screenshot
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 11h24" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="7.5" cy="8.5" r="1" fill="currentColor"/>
        <circle cx="11" cy="8.5" r="1" fill="currentColor"/>
        <path d="M16 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M16 22v5M13 27h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M28 14l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Add on: Local SEO",
    body: "Our local SEO services help your business rank in local search results and Google Maps. We optimize your Google Business Profile, build local citations, and create location-specific content to ensure customers in your area can find you easily.",
  },
  {
    id: "external-link",
    icon: (
      // External link / share icon — matches screenshot
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 6h10v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 6L16 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M26 20v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Add on: Link building & outreach",
    body: "Quality backlinks remain one of the strongest ranking signals. Our link building service focuses on earning high-authority, relevant links through strategic outreach, content partnerships, and digital PR — strengthening your domain authority and search rankings.",
  },
];

// ─── Single Card ──────────────────────────────────────────────────────────────
function AddonCard({ addon, index }) {
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
        delay: (index % 2) * 0.13,
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
      style={{ opacity: 0 }}
    >
      {/* Lime icon box */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "clamp(68px, 6vw, 88px)",
          height: "clamp(68px, 6vw, 88px)",
          borderRadius: "16px",
          backgroundColor: "rgba(255,255,255,0.14)",
          border: "1px solid rgba(255,255,255,0.26)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          marginBottom: "clamp(20px, 2.5vw, 30px)",
          flexShrink: 0,
          color: "#ffffff",
        }}
      >
        {addon.icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontWeight: 700,
          fontSize: "clamp(1.45rem, 2vw, 1.95rem)",
          color: "rgba(255,255,255,0.95)",
          lineHeight: 1.25,
          letterSpacing: "-0.01em",
          margin: "0 0 clamp(12px, 1.4vw, 18px) 0",
        }}
      >
        {addon.title}
      </h3>

      {/* Body */}
      <p
        style={{
          fontWeight: 400,
          fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
          color: "rgba(255,255,255,0.74)",
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {addon.body}
      </p>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function SEOAddonsSection() {
  const headingRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    [headingRef, subRef].forEach((ref, i) => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          delay: i * 0.12,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#162D24",
        boxSizing: "border-box",
        padding: "clamp(64px, 8vw, 112px) clamp(24px, 6vw, 100px)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* ── Content wrapper ── */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── Centered heading block ── */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "980px",
            margin: "0 auto clamp(52px, 7vw, 88px)",
          }}
        >
          <h2
            ref={headingRef}
            style={{
              opacity: 0,
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 4.2vw, 4.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "rgba(255,255,255,0.96)",
              margin: "0 0 clamp(16px, 2vw, 24px) 0",
            }}
          >
            WordPress SEO add-ons
          </h2>

          <p
            ref={subRef}
            style={{
              opacity: 0,
              fontWeight: 400,
              fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
              color: "rgba(255,255,255,0.74)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Our SEO services agency offers tailored solutions in a variety of
            different add-ons. Sometimes basic WordPress SEO services may not be
            all you need. We've got you covered with additional professional
            WordPress SEO packages to bring your WordPress website to the next
            level and help your business stand out from the rest.
          </p>
        </div>

        {/* ── 2-column card grid ── */}
        <div
          className="addons-grid"
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "clamp(44px, 5.5vw, 80px) clamp(40px, 6vw, 96px)",
          }}
        >
          {ADDONS.map((addon, i) => (
            <AddonCard key={addon.id} addon={addon} index={i} />
          ))}
        </div>

        <div
          style={{
            maxWidth: "980px",
            margin: "clamp(56px, 7vw, 92px) auto 0",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontWeight: 500,
              fontSize: "clamp(1.12rem, 1.35vw, 1.35rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.86)",
            }}
          >
            We tailor our WordPress and WooCommerce SEO services to match your current
            goals and support your long-term growth. Whether you need flexible monthly
            WordPress SEO packages or a complete, full-service solution from an
            experienced SEO agency, we&apos;re here to support your success every step
            of the way.
          </p>
        </div>
      </div>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 680px) {
          .addons-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}