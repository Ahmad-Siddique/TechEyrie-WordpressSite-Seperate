"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SYNTAXSTUDIOS_CASE_STUDY as CS } from "../../../lib/caseStudies/syntaxstudiosData";

gsap.registerPlugin(ScrollTrigger);

function StoryBlock({ title, items }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px, 1.6vw, 18px)" }}>
      <h3
        style={{
          margin: 0,
          color: "#ffffff",
          fontSize: "clamp(1.2rem, 1.6vw, 1.45rem)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h3>
      <ul
        style={{
          margin: 0,
          paddingLeft: "1.15rem",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(10px, 1.2vw, 14px)",
          color: "rgba(255,255,255,0.78)",
          fontSize: "clamp(0.98rem, 1.08vw, 1.06rem)",
          lineHeight: 1.72,
        }}
      >
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function CaseStudyStorySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".syntax-story-block").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.05,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const { story } = CS;

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        backgroundColor: "#162D24",
        padding: "clamp(80px, 10vw, 120px) clamp(24px, 6vw, 96px)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="syntax-story-block" style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(197, 233, 56, 0.85)",
            }}
          >
            About the client
          </p>
          <h2
            style={{
              margin: "0 0 clamp(18px, 2vw, 24px)",
              color: "#ffffff",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              maxWidth: "18ch",
            }}
          >
            Engineering trust at startup speed
          </h2>
          <p
            style={{
              margin: 0,
              maxWidth: "72ch",
              color: "rgba(255,255,255,0.78)",
              fontSize: "clamp(1.02rem, 1.15vw, 1.12rem)",
              lineHeight: 1.8,
            }}
          >
            {story.clientOverview}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(28px, 4vw, 48px)",
          }}
          className="syntax-story-grid"
        >
          <div className="syntax-story-block">
            <StoryBlock title="The challenge" items={story.challenge} />
          </div>
          <div className="syntax-story-block">
            <StoryBlock title="Our approach" items={story.approach} />
          </div>
          <div className="syntax-story-block">
            <StoryBlock title="What we delivered" items={story.outcomes} />
          </div>
        </div>

        <blockquote
          className="syntax-story-block"
          style={{
            margin: "clamp(56px, 7vw, 80px) 0 0",
            padding: "clamp(28px, 3.2vw, 40px)",
            borderRadius: "clamp(18px, 2vw, 24px)",
            backgroundColor: "#1F4638",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.9)",
              fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
              lineHeight: 1.75,
              fontStyle: "italic",
            }}
          >
            {story.quote}
          </p>
          <footer
            style={{
              marginTop: "clamp(16px, 2vw, 20px)",
              color: "rgba(197, 233, 56, 0.9)",
              fontSize: "0.88rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {story.quoteAuthor}
          </footer>
        </blockquote>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .syntax-story-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
