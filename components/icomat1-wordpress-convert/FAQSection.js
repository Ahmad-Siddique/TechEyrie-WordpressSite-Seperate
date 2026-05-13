"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQS = [
  {
    id: 1,
    question: "Guaranteed security for your WordPress website",
    answer:
      "Think of this as having a safety shield around your site. We run layered checks, verify backups, and keep restore points healthy so your content remains protected if something unexpected happens.",
  },
  {
    id: 2,
    question: "Zero impact on your site's performance",
    answer:
      "Backups are scheduled and optimized to run quietly in the background. Visitors keep getting a smooth browsing experience while your backup routine continues without creating a bottleneck.",
  },
  {
    id: 3,
    question: "WordPress backups become effortless",
    answer:
      "No spreadsheets, no reminders, no manual exports. Once configured, the process is automatic and predictable, so your team can focus on product, marketing, and growth work instead.",
  },
  {
    id: 4,
    question: "Stress-free site restoration",
    answer:
      "If a rollback is needed, recovery is direct and fast. You can return to a known-good version without rebuilding pages one by one or spending hours troubleshooting broken changes.",
  },
];

// ── Single FAQ accordion item ─────────────────────────────────
function FAQItem({ faq, index, isOpen, onToggle }) {
  const answerRef   = useRef(null);
  const arrowRef    = useRef(null);
  const itemRef     = useRef(null);
  const isOpenRef   = useRef(false);

  // Entrance animation
  useEffect(() => {
    gsap.fromTo(
      itemRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: index * 0.055,
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 92%",
          once: true,
        },
      }
    );
  }, []);

  // Open / close accordion
  useEffect(() => {
    const el    = answerRef.current;
    const arrow = arrowRef.current;
    if (!el) return;

    if (isOpen && !isOpenRef.current) {
      // Open
      gsap.set(el, { height: "auto", opacity: 1 });
      const h = el.offsetHeight;
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        { height: h, opacity: 1, duration: 0.45, ease: "power3.out" }
      );
      gsap.to(arrow, { rotation: 180, duration: 0.38, ease: "power2.inOut" });
      isOpenRef.current = true;
    } else if (!isOpen && isOpenRef.current) {
      // Close
      gsap.to(el,    { height: 0, opacity: 0, duration: 0.38, ease: "power3.inOut" });
      gsap.to(arrow, { rotation: 0,   duration: 0.38, ease: "power2.inOut" });
      isOpenRef.current = false;
    }
  }, [isOpen]);

  return (
    <div
      ref={itemRef}
      style={{ opacity: 0 }}
    >
      {/* ── Question row ── */}
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "clamp(22px, 2.8vw, 32px) 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontWeight: 500,
            fontSize: "clamp(1.15rem, 1.4vw, 1.3rem)",
            color: "rgba(255,255,255,0.95)",
            lineHeight: 1.4,
            flex: 1,
          }}
        >
          {faq.question}
        </span>

        {/* Lime-green circle arrow button */}
        <div
          style={{
            flexShrink: 0,
            width:  "clamp(36px, 3vw, 46px)",
            height: "clamp(36px, 3vw, 46px)",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.14)",
            border: "1px solid rgba(255,255,255,0.28)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            ref={arrowRef}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ display: "block" }}
          >
            <path
              d="M8 3v10M3 8l5 5 5-5"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* ── Answer panel ── */}
      <div
        ref={answerRef}
        style={{
          height: 0,
          overflow: "hidden",
          opacity: 0,
        }}
      >
        <p
          style={{
            fontWeight: 400,
            fontSize: "clamp(1.08rem, 1.2vw, 1.18rem)",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.78,
            margin: 0,
            paddingBottom: "clamp(20px, 2.5vw, 30px)",
            maxWidth: "820px",
          }}
        >
          {faq.answer}
        </p>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(255,255,255,0.14)",
        }}
      />
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────
export default function FAQSection() {
  const [openId, setOpenId] = useState(null);
  const headingRef  = useRef(null);
  const subtitleRef = useRef(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  // Header entrance
  useEffect(() => {
    gsap.fromTo(
      [headingRef.current, subtitleRef.current],
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: headingRef.current,
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
        padding: "clamp(72px, 9vw, 120px) clamp(80px, 12vw, 200px)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(48px, 6vw, 80px)",
            maxWidth: "920px",
          }}
        >
          <h2
            ref={headingRef}
            style={{
              fontWeight: 600,
              fontSize: "clamp(2.3rem, 3.9vw, 3.9rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              margin: "0 0 clamp(16px, 2vw, 22px)",
              opacity: 0,
            }}
          >
            Can't I just use a WordPress backup plugin?
          </h2>
          <p
            ref={subtitleRef}
            style={{
              fontWeight: 400,
              fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.72,
              margin: 0,
              opacity: 0,
            }}
          >
            Benefits of a true WordPress backup solution vs plugin options
            <br />
            <br />
            It's true that there are dozens of WordPress backup plugins to
            choose from. This includes free plugins, premium options, and
            everything in between. At Eyrion, we've helped thousands of clients
            migrate away from WordPress backup plugins. When you consider the
            benefits, it's easy to see why!
          </p>
        </div>

        {/* ── FAQ list ── */}
        <div style={{ width: "100%" }}>
          {/* Top divider */}
          <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.14)" }} />

          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={i}
              isOpen={openId === faq.id}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}