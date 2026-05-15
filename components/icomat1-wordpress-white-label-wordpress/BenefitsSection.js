"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LIME = "#DFFB85";

const ICON_BOX = "clamp(104px, 13vw, 140px)";
const ICON_SVG = "clamp(56px, 7.5vw, 80px)";

const BENEFITS = [
  {
    id: "no-code",
    icon: "layers",
    title: "No-code solutions",
    text: "Our white label WordPress services require no technical expertise from your side. We handle all development and technical execution so you can focus on growing your sales and client relationships.",
  },
  {
    id: "team",
    icon: "users",
    title: "Free up your internal team",
    text: "Our dedicated white label team of designers, developers, project managers, and support specialists manages the entire production process, reducing workload on your in-house staff.",
  },
  {
    id: "branded",
    icon: "badge",
    title: "Fully branded for your company",
    text: "All dashboards, reports, and documentation are fully white-labeled with your branding, ensuring your clients only see your company\u2014not the team behind the scenes.",
  },
  {
    id: "advantage",
    icon: "trending",
    title: "Gain a competitive advantage",
    text: "White label WordPress services give you a fast, scalable, and cost-effective way to expand your offerings and grow your business without increasing overhead.",
  },
];

function BenefitIcon({ name }) {
  const dim = { width: ICON_SVG, height: ICON_SVG, display: "block" };
  const common = {
    fill: "none",
    stroke: LIME,
    strokeWidth: 1.65,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "layers":
      return (
        <svg viewBox="0 0 24 24" style={dim} aria-hidden>
          <path d="M12 2l10 5-10 5L2 7l10-5z" {...common} />
          <path d="M2 12l10 5 10-5" {...common} />
          <path d="M2 17l10 5 10-5" {...common} />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" style={dim} aria-hidden>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" {...common} />
          <circle cx="9" cy="7" r="4" {...common} />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" {...common} />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" {...common} />
        </svg>
      );
    case "badge":
      return (
        <svg viewBox="0 0 24 24" style={dim} aria-hidden>
          <path
            d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
            {...common}
          />
          <path d="m9 12 2 2 4-4" {...common} />
        </svg>
      );
    case "trending":
      return (
        <svg viewBox="0 0 24 24" style={dim} aria-hidden>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" {...common} />
          <polyline points="17 6 23 6 23 12" {...common} />
        </svg>
      );
    default:
      return null;
  }
}

function useReveal(ref) {
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
}

function IconBenefit({ icon, title, text, index }) {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "clamp(14px, 2vw, 22px)",
        marginBottom: index < BENEFITS.length - 1 ? "clamp(20px, 2.4vw, 28px)" : 0,
        maxWidth: "740px",
        opacity: 0,
      }}
    >
      <div
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
        <BenefitIcon name={icon} />
      </div>
      <h3
        style={{
          fontWeight: 600,
          fontSize: "clamp(1.2rem, 1.45vw, 1.35rem)",
          color: "rgba(255,255,255,0.95)",
          lineHeight: 1.25,
          margin: 0,
          letterSpacing: "-0.02em",
          width: "100%",
          minWidth: 0,
        }}
      >
        {title}
      </h3>
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
            Save your team the time, effort, &amp; overhead — let us do the work.
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
          {BENEFITS.map((item, i) => (
            <IconBenefit
              key={item.id}
              icon={item.icon}
              title={item.title}
              text={item.text}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
