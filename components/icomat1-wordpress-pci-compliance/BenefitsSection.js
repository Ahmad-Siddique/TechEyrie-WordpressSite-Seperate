"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PARAGRAPHS = [
  "If you've spent time in the WordPress ecosystem, you've likely come across the Elementor page builder. Today, millions of websites rely on this powerful and flexible tool to create modern, dynamic web experiences.",
  "Elementor's popularity comes from its rich feature set, including a large library of pre-designed templates and a wide range of widgets. These allow users to build everything from simple image sections to advanced forms without writing code.",
  "Its intuitive drag-and-drop editor makes website design visual and accessible, while Elementor Pro also supports custom CSS for deeper control and advanced styling when needed.",
  "Elementor also provides extensive design flexibility, allowing full control over typography, spacing, borders, shadows, and animations. This makes it easy to create visually consistent and engaging WordPress websites tailored to any brand.",
  "While Elementor does not include built-in SEO tools, it integrates seamlessly with leading SEO plugins like Yoast SEO and Rank Math, helping you optimize meta data, schema, and overall search visibility.",
  "The Elementor development team regularly releases updates focused on performance, security, accessibility, and new features, ensuring the platform stays modern and reliable.",
  "At Eyrion, we use Elementor to build high-quality WordPress websites that are fast, scalable, and fully customized to business needs—whether you're starting from scratch or upgrading an existing site.",
];

const ICON_STROKE = "#DFFB85";
const ICON_BOX = "clamp(88px, 11vw, 120px)";
const ICON_SVG = 58;

function IconGlobe() {
  return (
    <svg width={ICON_SVG} height={ICON_SVG} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke={ICON_STROKE} strokeWidth="1.65" />
      <path
        d="M3 12h18M12 3c2.5 3.2 2.5 14.8 0 18M12 3c-2.5 3.2-2.5 14.8 0 18"
        stroke={ICON_STROKE}
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconWidgets() {
  return (
    <svg width={ICON_SVG} height={ICON_SVG} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1.2" stroke={ICON_STROKE} strokeWidth="1.65" />
      <rect x="14" y="3" width="7" height="7" rx="1.2" stroke={ICON_STROKE} strokeWidth="1.65" />
      <rect x="3" y="14" width="7" height="7" rx="1.2" stroke={ICON_STROKE} strokeWidth="1.65" />
      <rect x="14" y="14" width="7" height="7" rx="1.2" stroke={ICON_STROKE} strokeWidth="1.65" />
    </svg>
  );
}

function IconDragDrop() {
  return (
    <svg width={ICON_SVG} height={ICON_SVG} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="4" width="9" height="7" rx="1.2" stroke={ICON_STROKE} strokeWidth="1.65" />
      <rect x="11" y="13" width="9" height="7" rx="1.2" stroke={ICON_STROKE} strokeWidth="1.65" />
      <path d="M12 8v5M12 13l-2-2M12 13l2-2" stroke={ICON_STROKE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDesign() {
  return (
    <svg width={ICON_SVG} height={ICON_SVG} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 19V5a1 1 0 011-1h10l5 5v10a1 1 0 01-1 1H5a1 1 0 01-1-1z" stroke={ICON_STROKE} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 4v4h4M8 12h8M8 15h6" stroke={ICON_STROKE} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconSeo() {
  return (
    <svg width={ICON_SVG} height={ICON_SVG} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="6" stroke={ICON_STROKE} strokeWidth="1.65" />
      <path d="M15 15l5 5" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinecap="round" />
      <path d="M7 10h6M10 7v6" stroke={ICON_STROKE} strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function IconShieldUpdate() {
  return (
    <svg width={ICON_SVG} height={ICON_SVG} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z"
        stroke={ICON_STROKE}
        strokeWidth="1.65"
        strokeLinejoin="round"
      />
      <path d="M12 8v5l3 1.5" stroke={ICON_STROKE} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconBuild() {
  return (
    <svg width={ICON_SVG} height={ICON_SVG} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 21h16M6 21V10l6-4 6 4v11" stroke={ICON_STROKE} strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21v-6h6v6M9 13h6" stroke={ICON_STROKE} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

const PARAGRAPH_ICONS = [
  IconGlobe,
  IconWidgets,
  IconDragDrop,
  IconDesign,
  IconSeo,
  IconShieldUpdate,
  IconBuild,
];

function BodyParagraph({ text, index }) {
  const ref = useRef(null);
  const Icon = PARAGRAPH_ICONS[index];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
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
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "clamp(14px, 2vw, 22px)",
        marginBottom: index < PARAGRAPHS.length - 1 ? "clamp(20px, 2.4vw, 28px)" : 0,
        maxWidth: "740px",
        opacity: 0,
      }}
    >
      <span
        aria-hidden
        style={{
          flexShrink: 0,
          width: ICON_BOX,
          height: ICON_BOX,
          borderRadius: "clamp(18px, 2.2vw, 24px)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.18)",
        }}
      >
        {Icon ? <Icon /> : null}
      </span>
      <p
        style={{
          fontWeight: 400,
          fontSize: "clamp(1.18rem, 1.35vw, 1.3rem)",
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.75,
          margin: 0,
          width: "100%",
          minWidth: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default function BenefitsSection() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, x: -24 },
      {
        opacity: 1,
        x: 0,
        duration: 0.85,
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
      className="benefits-section" style={{
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
            Leading Team of Elementor Developer Experts
          </h2>
        </div>

        <div
          className="benefits-content"
          style={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            paddingBottom: "clamp(8px, 1vw, 16px)",
          }}
        >
          {PARAGRAPHS.map((text, i) => (
            <BodyParagraph key={i} text={text} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
