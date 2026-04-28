"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQS = [
  {
    id: 1,
    question: "What are the benefits of professional WordPress SEO packages?",
    answer:
      "Professional SEO packages usually combine technical fixes, content improvements, and tracking setup so your rankings and conversions improve in a more consistent, measurable way.",
  },
  {
    id: 2,
    question: "How long does it take to get a response when submitting new tickets?",
    answer:
      "A strong agency provides clear strategy, transparent reporting, realistic timelines, and execution across technical SEO, on-page optimization, and content growth.",
  },
  {
    id: 3,
    question: "Why should I choose a WordPress SEO firm over a general digital marketing agency?",
    answer:
      "A WordPress-focused SEO firm understands theme/plugin behavior, Core Web Vitals bottlenecks, and CMS-specific technical issues that general agencies may overlook.",
  },
  {
    id: 4,
    question: "How does WordPress SEO consulting improve my website’s performance?",
    answer:
      "Consulting identifies quick wins and structural problems, then applies prioritized fixes that can improve crawlability, loading speed, content relevance, and user engagement.",
  },
  {
    id: 5,
    question: "What’s included in WordPress SEO support?",
    answer:
      "Support often includes audits, on-page updates, metadata improvements, internal linking, keyword tracking, performance tuning, and ongoing recommendations based on results.",
  },
  {
    id: 6,
    question: "How do I get started with a reliable SEO company?",
    answer:
      "Start with a discovery call, share goals and baseline data, review an initial audit, and align on a roadmap with milestones, KPIs, and communication cadence.",
  },
  {
    id: 7,
    question: "Are there affordable WordPress SEO monthly packages available?",
    answer:
      "Yes, many firms offer tiered monthly options so you can start with core optimization and scale into broader SEO campaigns as your budget and goals grow.",
  },
  {
    id: 8,
    question: "What is on-page SEO?",
    answer:
      "On-page SEO is the optimization of pages on your site, including headings, meta tags, internal links, keyword usage, URL structure, and content quality.",
  },
  {
    id: 9,
    question: "What is local SEO?",
    answer:
      "Local SEO focuses on helping your business appear in location-based searches through map listings, local citations, reviews, and geo-targeted content.",
  },
  {
    id: 10,
    question: "Why is my website not ranking well?",
    answer:
      "Common issues include weak content relevance, technical crawl/indexing errors, poor site speed, low authority backlinks, and inconsistent optimization.",
  },
  {
    id: 11,
    question: "What can I do to increase my online visibility?",
    answer:
      "Improve technical health, publish useful keyword-aligned content consistently, strengthen internal linking, and build authority with trusted backlinks.",
  },
  {
    id: 12,
    question: "Why am I not showing up on Google at all?",
    answer:
      "Your site may be blocked from indexing, recently launched, affected by technical errors, or lacking enough relevance and authority for target queries.",
  },
  {
    id: 13,
    question: "I really want to rank better, what can you guys do for me?",
    answer:
      "We can audit your site, prioritize fixes, optimize key pages, implement content and technical improvements, and monitor results with ongoing reporting.",
  },
  {
    id: 14,
    question: "How long after verifying my Google listing do I start ranking well?",
    answer:
      "Verification helps quickly for local presence, but meaningful ranking gains usually take weeks to months depending on competition and optimization quality.",
  },
  {
    id: 15,
    question: "What helps me more: on-page SEO or local SEO?",
    answer:
      "It depends on your business model; service-area and storefront businesses benefit heavily from local SEO, while broader markets need strong on-page SEO too.",
  },
  {
    id: 16,
    question: "What is Google Analytics?",
    answer:
      "Google Analytics is a reporting platform that tracks visitor behavior, traffic sources, conversions, and engagement so you can make data-driven decisions.",
  },
  {
    id: 17,
    question: "How do I navigate Google Analytics?",
    answer:
      "Begin with reports for acquisition, engagement, and conversions, then use filters, date ranges, and segment comparisons to uncover actionable insights.",
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
            maxWidth: "680px",
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
            WordPress SEO FAQs
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