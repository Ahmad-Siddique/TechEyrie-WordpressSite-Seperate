"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
const ITEMS = [
  {
    number: "1",
    title: "Choosing the right hosting environment",
    body: "We begin by selecting a new server or hosting setup that better fits your performance, security, and scalability needs.",
  },
  {
    number: "2",
    title: "Full website backup",
    body: "A complete backup of your WordPress website is created to ensure all files, content, and databases are safely preserved.",
  },
  {
    number: "3",
    title: "Preparing migration tools",
    body: "We set up the necessary migration method, either through trusted WordPress migration tools or secure FTP access, depending on your website’s requirements.",
  },
  {
    number: "4",
    title: "Exporting files and databases",
    body: "Your full WordPress files and database are carefully exported to ensure nothing is missed during the transfer.",
  },
  {
    number: "5",
    title: "Setting up the new database",
    body: "A fresh SQL database is created on the new hosting environment to properly receive your website data.",
  },
  {
    number: "6",
    title: "Importing website data",
    body: "We securely import your WordPress files and database into the new server, ensuring everything is correctly structured and functional.",
  },
  {
    number: "7",
    title: "Updating configuration files",
    body: "Your WordPress configuration is updated to connect your site to the new database and hosting environment without errors.",
  },
  {
    number: "8",
    title: "Updating DNS settings",
    body: "Finally, your domain’s DNS records are updated so traffic is correctly directed to your new hosting server.",
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
          How Our WordPress Migration Services Work
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
          Migrating a WordPress website is a detailed process that requires careful planning
          and execution. Even experienced users can find it complex, as there are multiple
          technical steps involved to ensure a safe and successful transition without data
          loss or downtime.
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
          At Eyrion, we manage the entire WordPress migration process for you from start to
          finish.
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
        className="migration-faq-split"
        style={{
          maxWidth: "1180px",
          margin: "clamp(52px, 6vw, 84px) auto 0",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
          gap: "clamp(28px, 4vw, 56px)",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h3
            style={{
              margin: "0 0 clamp(16px, 2vw, 22px)",
              fontWeight: 700,
              fontSize: "clamp(1.65rem, 2.8vw, 2.35rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "rgba(255,255,255,0.95)",
            }}
          >
            Is migrating WordPress a lot of work?
          </h3>
          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.78)",
              fontSize: "clamp(1.02rem, 1.2vw, 1.2rem)",
              lineHeight: 1.75,
            }}
          >
            Yes, WordPress migration can be time-consuming and technically complex, especially
            for larger websites. It involves handling databases, files, configurations, and DNS
            settings carefully to avoid downtime or broken functionality.
          </p>
          <p
            style={{
              margin: "clamp(14px, 2vw, 18px) 0 0",
              color: "rgba(255,255,255,0.78)",
              fontSize: "clamp(1.02rem, 1.2vw, 1.2rem)",
              lineHeight: 1.75,
            }}
          >
            The process can take several hours depending on the size and complexity of your
            website. Even small mistakes can lead to accessibility issues or performance problems
            if not handled correctly.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "clamp(22px, 2.5vw, 32px)",
            padding: "clamp(28px, 4vw, 44px) clamp(24px, 3.5vw, 40px)",
            boxShadow: "0 12px 48px rgba(0, 0, 0, 0.28)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "rgba(22, 45, 36, 0.88)",
              fontSize: "clamp(1.05rem, 1.2vw, 1.18rem)",
              lineHeight: 1.78,
              fontWeight: 400,
            }}
          >
            The good news is that you don&apos;t have to manage it yourself. At Eyrion, our
            WordPress migration specialists handle everything for you—ensuring a smooth, secure,
            and stress-free transition with minimal disruption to your website and business.
          </p>
        </div>
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
        @media (max-width: 900px) {
          .migration-faq-split {
            grid-template-columns: 1fr !important;
            align-items: stretch !important;
          }
        }
      `}</style>
    </section>
  );
}