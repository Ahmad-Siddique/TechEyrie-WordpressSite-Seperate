"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
const ITEMS = [
  {
    number: "1",
    title: "Regular automated updates",
    body: "Keep your WordPress website fully up to date with scheduled core, plugin, and theme updates included in our comprehensive WordPress support packages.",
  },
  {
    number: "2",
    title: "24/7 security and vulnerability protection",
    body: "Your site stays protected around the clock with proactive monitoring and defense against hackers, malware, and other security threats through our expert WordPress technical support services.",
  },
  {
    number: "3",
    title: "Secure cloud backups",
    body: "Every WordPress support plan includes automated, secure cloud backups, ensuring your data can be quickly restored in case of any issue or unexpected failure.",
  },
  {
    number: "4",
    title: "Ongoing performance optimization",
    body: "We continuously optimize your WordPress website for speed and efficiency, helping ensure fast load times and a smooth user experience handled by experienced WP support specialists.",
  },
  {
    number: "5",
    title: "Continuous uptime monitoring",
    body: "Our round-the-clock monitoring helps detect and prevent downtime before it impacts your users—an essential part of our proactive WordPress support strategy.",
  },
  {
    number: "6",
    title: "Dedicated WordPress experts",
    body: "You get access to real, experienced WordPress professionals who provide hands-on website support, ensuring your site receives consistent attention and expert care.",
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
          Benefits of Eyrion WordPress Support Services
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
          There are many advantages to having reliable USA-based WordPress and WooCommerce
          support. As a trusted partner for businesses, Eyrion delivers complete website care
          designed to keep your WordPress site secure, fast, and consistently online.
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
          From updates and backups to performance tuning and continuous monitoring, Eyrion
          combines everything into one reliable WordPress support service—keeping your
          website fast, secure, and ready for growth.
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