"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
const ITEMS = [
  {
    number: "1",
    title: "Unsafe themes and plugins",
    body: "Not all WordPress themes and plugins are built with security in mind. Installing poorly coded or unverified extensions without proper checks can expose your website to serious vulnerabilities and attacks.",
  },
  {
    number: "2",
    title: "Outdated software",
    body: "Failing to update WordPress core, plugins, or themes can leave security gaps open for attackers. Regular updates are critical to patch vulnerabilities and keep your WordPress website secure and up to date.",
  },
  {
    number: "3",
    title: "Phishing attacks",
    body: "If a hacker gains access to your website, they can exploit your brand's trust to trick users into clicking malicious links or entering sensitive information. Weak WordPress security makes these phishing attempts easier to execute.",
  },
  {
    number: "4",
    title: "Supply chain attacks",
    body: "Untrusted or compromised plugins can open the door to supply chain attacks, allowing hackers to infiltrate your system and potentially access sensitive user and business data.",
  },
  {
    number: "5",
    title: "Cross-site scripting (XSS) attacks",
    body: "Outdated or insecure plugins can make your site vulnerable to XSS attacks, where attackers inject harmful scripts, fake forms, or malicious links to steal user data and compromise your website.",
  },
  {
    number: "6",
    title: "Outdated PHP versions",
    body: "Running an unsupported version of PHP not only slows down your website but also exposes it to known security vulnerabilities. Since older versions no longer receive updates, they pose a serious risk to WordPress website security.",
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
          Common WordPress Security Issues and Threats
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
          Modern hackers, malware, and cybercriminals are far more advanced than ever
          before. Every website faces potential security risks, and WordPress websites
          are no exception. That&apos;s why strong WordPress protection is essential to
          keep your site safe and reliable.
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
          Below are some of the most common WordPress security threats websites face
          today:
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
          These are only a few of the many threats that WordPress website owners need
          to be aware of. At our WordPress agency, we continuously monitor and prepare
          for these risks to keep your website protected.
        </p>
        <p
          style={{
            margin: 0,
            color: "rgba(255,255,255,0.78)",
            fontSize: "clamp(1.02rem, 1.2vw, 1.2rem)",
            lineHeight: 1.78,
          }}
        >
          Our experienced WordPress security experts understand every layer of
          potential vulnerability and actively safeguard your site against evolving
          threats. With our WordPress security solutions in place, your business can
          operate confidently knowing your website is secure, stable, and protected at
          all times.
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