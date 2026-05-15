"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    number: "1",
    title: "User login security review",
    body: "Weak or compromised login credentials are one of the biggest threats to WordPress websites. We thoroughly assess user accounts, passwords, and access permissions to reduce unauthorized access risks.",
  },
  {
    number: "2",
    title: "Software and core updates check",
    body: "Outdated WordPress core files, plugins, and themes can expose your site to security issues. We ensure your website is running the latest versions for improved performance and stronger protection.",
  },
  {
    number: "3",
    title: "Website analytics and behavior analysis",
    body: "Unusual traffic patterns can signal security concerns. We review your analytics data to detect anomalies that may indicate attacks or performance-related issues.",
  },
  {
    number: "4",
    title: "Backup system verification",
    body: "Reliable backups are essential for strong WordPress security. We ensure your backup system is properly configured so your website can be quickly restored in any emergency.",
  },
  {
    number: "5",
    title: "Full security vulnerability scan",
    body: "We perform a complete WordPress security scan to detect malware, vulnerabilities, and hidden threats, allowing us to resolve issues before they impact your website.",
  },
  {
    number: "6",
    title: "Firewall setup and configuration",
    body: "A web application firewall (WAF) adds a powerful layer of defense by filtering malicious traffic, blocking brute-force attempts, and protecting your site from DDoS attacks and other threats.",
  },
];

function NumberBadge({ number }) {
  return (
    <div
            style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width:  "clamp(58px, 5.5vw, 76px)",
        height: "clamp(58px, 5.5vw, 76px)",
        borderRadius: "16px",
        backgroundColor: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.28)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontWeight: 600,
          fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
          color: "#ffffff",
          lineHeight: 1,
        }}
      >
        {number}
      </span>
    </div>
  );
}

function BenefitItem({ item, index }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(16px, 2vw, 24px)",
        paddingBottom: "clamp(52px, 7vw, 96px)",
        borderBottom:
          index < ITEMS.length - 1
            ? "1px solid rgba(255,255,255,0.14)"
            : "none",
        marginBottom:
          index < ITEMS.length - 1 ? "clamp(52px, 7vw, 96px)" : 0,
        opacity: 0,
      }}
    >
      <NumberBadge number={item.number} />

      {/* ── Fix 2 + 3: item title — bigger, semi-bold ── */}
      <h3
        style={{
          fontWeight: 600,
          fontSize: "clamp(1.82rem, 2.6vw, 2.4rem)",
          color: "rgba(255,255,255,0.95)",
          margin: 0,
          lineHeight: 1.18,
          letterSpacing: "-0.01em",
        }}
      >
        {item.title}
      </h3>

      {/* ── Fix 2: body text — bigger ── */}
      <p
        style={{
          fontWeight: 400,
          fontSize: "clamp(1.18rem, 1.35vw, 1.3rem)",
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.75,
          margin: 0,
          maxWidth: "740px",
        }}
      >
        {item.body}
      </p>
    </div>
  );
}

export default function BenefitsSection() {
  const sectionRef = useRef(null);
  const titleRef   = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -24 },
      {
        opacity: 1,
        x: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef} className="benefits-section"
      style={{
        width: "100%",
        backgroundColor: "#162D24",
        boxSizing: "border-box",
        padding: "clamp(48px, 10vw, 120px) clamp(16px, 4vw, 24px)",
      }}
    >
      <div
        className="benefits-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "clamp(48px, 7vw, 112px)",
        }}
      >
        <div
          className="benefits-sidebar"
          style={{
            flex: "0 0 clamp(300px, 44%, 560px)",
            alignSelf: "flex-start",
          }}
        >
          <h2
            ref={titleRef}
            className="benefits-title"
            style={{
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              margin: 0,
              opacity: 0,
            }}
          >
            Comprehensive WordPress Security Audit Service
          </h2>
          <p
            style={{
              margin: "16px 0 0",
              color: "rgba(255,255,255,0.78)",
              fontSize: "clamp(1rem, 1.1vw, 1.2rem)",
              lineHeight: 1.7,
              maxWidth: "46ch",
            }}
          >
            Worried about the security of your WordPress website?
          </p>
          <p
            style={{
              margin: "14px 0 0",
              color: "rgba(255,255,255,0.62)",
              fontSize: "clamp(0.95rem, 1.05vw, 1.15rem)",
              lineHeight: 1.75,
              maxWidth: "52ch",
            }}
          >
            Our in-depth WordPress security audit service evaluates every critical area
            of your site to ensure it remains protected, stable, and fully secure. Using
            a detailed security checklist, we identify risks, fix vulnerabilities, and
            strengthen your overall WordPress security posture.
          </p>
          <p
            style={{
              margin: "14px 0 0",
              color: "rgba(255,255,255,0.62)",
              fontSize: "clamp(0.95rem, 1.05vw, 1.15rem)",
              lineHeight: 1.75,
              maxWidth: "52ch",
              fontWeight: 500,
            }}
          >
            What our WordPress security audit includes:
          </p>
        </div>

        <div
          className="benefits-content"
          style={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {ITEMS.map((item, i) => (
            <BenefitItem key={item.number} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}