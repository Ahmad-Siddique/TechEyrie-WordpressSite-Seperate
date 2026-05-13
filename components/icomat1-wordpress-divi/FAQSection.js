"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ACCORDION_FAQS = [
  {
    id: 1,
    question: "All of the Divi Theme Benefits, None of the Logistics",
    answer:
      "Get the power of Divi without dealing with technical complexity. We handle setup, customization, and maintenance so you can focus on your business.",
  },
  {
    id: 2,
    question: "Tried-and-True Success with the WordPress Divi Theme",
    answer:
      "We've built and supported numerous Divi websites, helping businesses get reliable design, performance, and long-term stability.",
  },
  {
    id: 3,
    question: "The Best Theme Keeps Getting Better",
    answer:
      "Divi is regularly updated with new features, performance improvements, and security enhancements, keeping your site future-ready.",
  },
  {
    id: 4,
    question: "WordPress Hosting for Divi Websites",
    answer:
      "We provide optimized hosting environments designed specifically for Divi to ensure speed, stability, and smooth performance.",
  },
  {
    id: 5,
    question: "What is Divi in WordPress?",
    answer:
      "Divi is a premium WordPress theme and visual builder that lets you design websites using drag-and-drop tools without coding.",
  },
  {
    id: 6,
    question: "What is the Divi Theme Builder?",
    answer:
      "It's a feature that allows you to create custom layouts for headers, footers, and entire page structures across your website.",
  },
  {
    id: 7,
    question: "What are the system requirements for running Divi?",
    answer:
      "Divi requires a modern WordPress setup with updated PHP, sufficient server resources, and a stable hosting environment for best performance.",
  },
  {
    id: 8,
    question: "Where can I find Divi documentation?",
    answer:
      "Official documentation is available from Elegant Themes, covering setup guides, features, and troubleshooting resources.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  const answerRef = useRef(null);
  const arrowRef = useRef(null);
  const itemRef = useRef(null);
  const isOpenRef = useRef(false);

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
  }, [index]);

  useEffect(() => {
    const el = answerRef.current;
    const arrow = arrowRef.current;
    if (!el) return;

    if (isOpen && !isOpenRef.current) {
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
      gsap.to(el, { height: 0, opacity: 0, duration: 0.38, ease: "power3.inOut" });
      gsap.to(arrow, { rotation: 0, duration: 0.38, ease: "power2.inOut" });
      isOpenRef.current = false;
    }
  }, [isOpen]);

  return (
    <div ref={itemRef} style={{ opacity: 0 }}>
      <button
        type="button"
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

        <div
          style={{
            flexShrink: 0,
            width: "clamp(36px, 3vw, 46px)",
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
            aria-hidden
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

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

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
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 5vw, 64px)",
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
            We&apos;re the WordPress Divi Theme Experts
          </h2>
          <div ref={subtitleRef} style={{ opacity: 0 }}>
            <p
              style={{
                fontWeight: 400,
                fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              If you prefer a more hands-off approach, Eyrion can handle all updates, tweaks, and
              improvements for your Divi website. Our experience with both WordPress and Divi allows
              us to make changes quickly and with minimal disruption to your site.
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.72,
                margin: "clamp(14px, 2vw, 18px) 0 0",
              }}
            >
              Whether you want full control or complete management, we adapt to your workflow. From
              small adjustments to full redesigns, our Divi experts keep your website modern, fast,
              and easy to maintain.
            </p>
          </div>
        </div>

        <div style={{ width: "100%", marginBottom: "clamp(8px, 2vw, 16px)" }}>
          <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.14)" }} />
          {ACCORDION_FAQS.map((faq, i) => (
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
