"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LIME = "#DFFB85";

const INTRO =
  "Your website is unique, which means standard WordPress speed optimization solutions may not always deliver the best results. That's why we apply rigorous testing after every change to ensure performance improvements are accurate and stable.";

const STEPS = [
  {
    num: "1",
    text: "This helps us ensure that our services are fully tailored to your website's needs. We run multiple speed tests, analyze every performance metric, and continuously refine improvements for better results.",
  },
  {
    num: "2",
    text: "We also apply this optimization approach to hosting performance. With a high-performance provider like Pressable, we enhance speed further by combining it with advanced optimization techniques.",
  },
  {
    num: "3",
    text: "A CDN (Content Delivery Network) is a system of distributed servers located in different geographic regions. Since distance affects load times, a CDN improves speed by serving content from the closest server to the user.",
  },
  {
    num: "4",
    text: "By implementing a CDN, we ensure that visitors receive your website content from the nearest available location, resulting in faster load times and a smoother user experience.",
  },
];

const TILE = "clamp(88px, 11vw, 120px)";

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

function IntroBlock() {
  const ref = useRef(null);
  useReveal(ref);
  return (
    <p
      ref={ref}
      style={{
        fontWeight: 400,
        fontSize: "clamp(1.18rem, 1.35vw, 1.3rem)",
        color: "rgba(255,255,255,0.72)",
        lineHeight: 1.75,
        margin: "0 0 clamp(24px, 3vw, 36px)",
        maxWidth: "740px",
        opacity: 0,
      }}
    >
      {INTRO}
    </p>
  );
}

function NumberedStep({ num, text, index }) {
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
        marginBottom: index < STEPS.length - 1 ? "clamp(20px, 2.4vw, 28px)" : 0,
        maxWidth: "740px",
        opacity: 0,
      }}
    >
      <span
        aria-hidden
        style={{
          flexShrink: 0,
          width: TILE,
          height: TILE,
          borderRadius: "clamp(18px, 2.2vw, 24px)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.18)",
          fontWeight: 700,
          fontSize: "clamp(1.75rem, 2.4vw, 2.25rem)",
          color: LIME,
          lineHeight: 1,
        }}
      >
        {num}
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
            Testing and Development of WordPress Speed Service
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
          <IntroBlock />
          {STEPS.map((step, i) => (
            <NumberedStep key={step.num} num={step.num} text={step.text} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
