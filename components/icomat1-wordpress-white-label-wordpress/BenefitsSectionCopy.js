"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Same layout as `BenefitsSection.js` — ADA solutions copy */
const ITEMS = [
  {
    number: "1",
    title: "Manual ADA compliance audit",
    body: "Sequential heading tags — We ensure heading tags are in proper sequential order across your WordPress website to improve structure, accessibility, and screen reader navigation.",
  },
  {
    number: "2",
    title: "Basic contrast audit",
    body: "Contrast review — We ensure proper contrast levels across major design elements to improve readability and accessibility.",
  },
  {
    number: "3",
    title: "Implementation of third-party ADA infrastructure",
    body: "Accessibility tools integration — We implement trusted third-party accessibility solutions to improve overall WordPress ADA compliance.",
  },
  {
    number: "4",
    title: "Image ALT tags implemented",
    body: "ALT text optimization — We add and optimize image ALT tags so screen readers can properly describe visual content.",
  },
  {
    number: "5",
    title: "Skip navigation option enabled",
    body: "Skip link setup — We enable skip navigation features to help users bypass repetitive sections and reach main content faster.",
  },
  {
    number: "6",
    title: "Keyboard navigation optimization",
    body: "Keyboard accessibility — We ensure full website functionality can be accessed using only a keyboard.",
  },
  {
    number: "7",
    title: "Screen reader optimization",
    body: "Screen reader compatibility — We structure and optimize content for smooth performance with assistive technologies.",
  },
  {
    number: "8",
    title: "ARIA (name attributes) added and optimized",
    body: "ARIA enhancements — We implement and refine ARIA attributes to improve how assistive tools interpret website elements.",
  },
  {
    number: "9",
    title: "Additional interface capabilities",
    body: "UI accessibility enhancements — We improve usability with font controls, color adjustments, contrast settings, animation handling, content highlighting, audio controls, and accessibility tools.",
  },
  {
    number: "10",
    title: "Ongoing WordPress ADA compliance support",
    body: "Continuous monitoring — We provide ongoing scans and updates to ensure your website remains compliant as new content is added.",
  },
];

function NumberBadge({ number }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "clamp(58px, 5.5vw, 76px)",
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

/** Text before an em dash (—) is semibold; rest is regular weight */
function BenefitBody({ text }) {
  const parts = text.split(/\s—\s/);
  const baseStyle = {
    fontWeight: 400,
    fontSize: "clamp(1.18rem, 1.35vw, 1.3rem)",
    color: "rgba(255,255,255,0.72)",
    lineHeight: 1.75,
    margin: 0,
    maxWidth: "740px",
  };

  if (parts.length >= 2) {
    const [lead, ...rest] = parts;
    return (
      <p style={baseStyle}>
        <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.88)" }}>{lead.trim()}</span>
        <span> — {rest.join(" — ").trim()}</span>
      </p>
    );
  }

  return <p style={baseStyle}>{text}</p>;
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
        borderBottom: index < ITEMS.length - 1 ? "1px solid rgba(255,255,255,0.14)" : "none",
        marginBottom: index < ITEMS.length - 1 ? "clamp(52px, 7vw, 96px)" : 0,
        opacity: 0,
      }}
    >
      <NumberBadge number={item.number} />

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

      <BenefitBody text={item.body} />
    </div>
  );
}

export default function BenefitsSectionCopy() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

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
            Our ADA Compliance WordPress Solutions
          </h2>
          <p
            style={{
              margin: "16px 0 0",
              color: "rgba(255,255,255,0.78)",
              fontSize: "clamp(1rem, 1.1vw, 1.2rem)",
              lineHeight: 1.7,
              maxWidth: "52ch",
            }}
          >
            We offer the following WordPress accessibility services:
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
