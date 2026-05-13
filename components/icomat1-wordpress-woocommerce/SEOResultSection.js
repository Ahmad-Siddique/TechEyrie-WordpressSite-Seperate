"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
const ITEMS = [
  {
    number: "1",
    title: "Brief",
    body: 'We start by understanding your goals, priorities, and what a "healthy" WordPress website means for your business. Our team reviews your current plugins, themes, hosting setup, existing issues, and backlog items. From there, we define scope, urgency, and expected outcomes clearly before any work begins.',
  },
  {
    number: "2",
    title: "Planning & Design",
    body: "Once the brief is finalized, Eyrion creates a structured implementation plan. This includes task sequencing, priorities, testing approach, and any staging or rollback strategies. You get full visibility into the plan before any changes are made to your live WordPress site.",
  },
  {
    number: "3",
    title: "Development & Implementation",
    body: "After approval, our engineers begin executing updates, fixes, and improvements using WordPress best practices. Work is typically carried out in a controlled or staged environment to ensure your live website remains stable, with minimal disruption to users or business operations.",
  },
  {
    number: "4",
    title: "Launch & Monitoring",
    body: "Once updates are complete, we deploy changes to your live site, verify everything is working correctly, and monitor for any issues or regressions. After launch, Eyrion continues to provide support, refinements, and ongoing care to ensure your WordPress website keeps improving over time.",
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
          How Does WordPress Support Work?
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
          When you choose Eyrion as your WordPress support partner, you get a skilled team
          experienced in handling thousands of real-world WordPress issues, updates, and
          complex edge cases. Our process is designed to make support predictable, structured,
          and stress-free—not chaotic.
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
          From the initial discussion to deployment and ongoing maintenance, here&apos;s how
          our WordPress support workflow operates:
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
            margin: "0 0 14px",
            color: "rgba(255,255,255,0.78)",
            fontSize: "clamp(1.02rem, 1.2vw, 1.2rem)",
            lineHeight: 1.78,
          }}
        >
          Every WordPress website is different, which is why we don&apos;t rely on
          guesswork. Eyrion combines a structured process with experienced WordPress engineers
          to ensure safe execution and clear communication at every stage.
        </p>
        <p
          style={{
            margin: 0,
            color: "rgba(255,255,255,0.78)",
            fontSize: "clamp(1.02rem, 1.2vw, 1.2rem)",
            lineHeight: 1.78,
          }}
        >
          Our WordPress support specialists work closely with developers and designers when
          needed, so you&apos;re never stuck coordinating multiple vendors. With Eyrion, you
          get a long-term support team that stays with your website—ready for updates,
          improvements, and ongoing growth.
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