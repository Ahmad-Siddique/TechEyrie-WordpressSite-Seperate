"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Dot-matrix digit map (5 wide × 7 tall) ───────────────────
const DOT_MAP = {
  "0": [
    [0,1,1,1,0],[1,0,0,0,1],[1,0,0,1,1],
    [1,0,1,0,1],[1,1,0,0,1],[1,0,0,0,1],[0,1,1,1,0],
  ],
  "1": [
    [0,0,1,0,0],[0,1,1,0,0],[0,0,1,0,0],
    [0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,1,1,0],
  ],
  "2": [
    [0,1,1,1,0],[1,0,0,0,1],[0,0,0,0,1],
    [0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,1,1,1,1],
  ],
  "3": [
    [1,1,1,1,0],[0,0,0,0,1],[0,0,0,0,1],
    [0,1,1,1,0],[0,0,0,0,1],[0,0,0,0,1],[1,1,1,1,0],
  ],
  "4": [
    [0,0,0,1,0],[0,0,1,1,0],[0,1,0,1,0],
    [1,0,0,1,0],[1,1,1,1,1],[0,0,0,1,0],[0,0,0,1,0],
  ],
  "5": [
    [1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],
    [1,1,1,1,0],[0,0,0,0,1],[0,0,0,0,1],[1,1,1,1,0],
  ],
  "6": [
    [0,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],
    [1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0],
  ],
  "7": [
    [1,1,1,1,1],[0,0,0,0,1],[0,0,0,1,0],
    [0,0,1,0,0],[0,1,0,0,0],[0,1,0,0,0],[0,1,0,0,0],
  ],
  "8": [
    [0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],
    [0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0],
  ],
  "9": [
    [0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],
    [0,1,1,1,1],[0,0,0,0,1],[0,0,0,0,1],[0,1,1,1,0],
  ],
  "X": [
    [1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],
    [0,0,1,0,0],[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1],
  ],
  "K": [
    [1,0,0,1,0],[1,0,1,0,0],[1,1,0,0,0],
    [1,0,1,0,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,0,1],
  ],
  "+": [
    [0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],
    [1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],
  ],
  "W": [
    [1,0,0,0,1],[1,0,0,0,1],[1,0,1,0,1],
    [1,0,1,0,1],[1,0,1,0,1],[1,1,0,1,1],[1,0,0,0,1],
  ],
  "P": [
    [1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],
    [1,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],
  ],
};

function DotChar({ char, dotSize = 6, gap = 3, color = "rgba(0,0,0,0.15)" }) {
  const grid = DOT_MAP[char.toUpperCase()];
  if (!grid) return null;
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", gap: `${gap}px`, flexShrink: 0 }}>
      {grid.map((row, ri) => (
        <div key={ri} style={{ display: "flex", gap: `${gap}px` }}>
          {row.map((cell, ci) => (
            <div key={ci} style={{
              width: `${dotSize}px`, height: `${dotSize}px`,
              borderRadius: "50%",
              background: cell ? color : "transparent",
              flexShrink: 0,
            }} />
          ))}
        </div>
      ))}
    </div>
  );
}

function DotMatrix({ value, dotSize = 7, gap = 3.5, charGap = 10, color = "rgba(0,0,0,0.18)" }) {
  const chars = value.toUpperCase().split("").filter((c) => DOT_MAP[c]);
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: `${charGap}px`, userSelect: "none" }}>
      {chars.map((c, i) => (
        <DotChar key={i} char={c} dotSize={dotSize} gap={gap} color={color} />
      ))}
    </div>
  );
}

// ── Stat cell ─────────────────────────────────────────────────
function StatCell({ label, sublabel, value, isLeftCol }) {
  const cellRef = useRef(null);
  const lineRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cell = cellRef.current;
    const line = lineRef.current;
    if (!cell || !line) return;

    gsap.set(line, { scaleX: 0, transformOrigin: "left center" });

    ScrollTrigger.create({
      trigger: cell,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(line, { scaleX: 1, duration: 0.75, ease: "power2.inOut" });
        gsap.fromTo(cell,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.1 }
        );
        setVisible(true);
      },
    });
  }, []);

  return (
    <div
      ref={cellRef}
      className={`factory-stat-cell ${isLeftCol ? "factory-stat-cell--left" : "factory-stat-cell--right"}`}
      style={{ opacity: 0 }}
    >
      <div ref={lineRef} className="factory-stat-line" />

      <p className="factory-stat-label">
        {label}{sublabel ? `\n${sublabel}` : ""}
      </p>

      <div className="factory-dot-wrap">
        {visible ? (
          <DotMatrix value={value} dotSize={6} gap={3} charGap={8} />
        ) : (
          <span style={{ visibility: "hidden" }} aria-hidden>
            <DotMatrix value={value} dotSize={6} gap={3} charGap={8} />
          </span>
        )}
      </div>
    </div>
  );
}

// ── Stats data ────────────────────────────────────────────────
const STATS = [
  { id: "team",      label: "EXPERIENCED TEAM",      sublabel: "MEMBERS",              value: "50+",  col: 0 },
  { id: "wordpress", label: "WORDPRESS",             sublabel: "EXPERTS",              value: "WP",   col: 1 },
  { id: "reviews",   label: "5-STAR GOOGLE",         sublabel: "REVIEWS",              value: "370+", col: 0 },
  { id: "projects",  label: "PROJECTS",              sublabel: "COMPLETED",            value: "2K+",  col: 1 },
];

// ── Main Section ──────────────────────────────────────────────
export default function FactorySection({
  heading      = "We're driven by delivering real value through service",
  description1 = "At Eyrion, we view ourselves as your digital architects and strategic guides. Our focus is centered on solving complex challenges to streamline your operations and amplify your professional impact. Every workflow we refine, every system we deploy, and every specialist we onboard is dedicated to a single mission: making your success inevitable.",
  description2 = "",
  stats        = STATS,
}) {
  const headingRef = useRef(null);
  const rightRef   = useRef(null);
  const numbersRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headingRef.current,
      { opacity: 0, x: -32 },
      {
        opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 88%", once: true },
      }
    );
    gsap.fromTo(rightRef.current,
      { opacity: 0, y: 28 },
      {
        opacity: 1, y: 0, duration: 0.85, ease: "power3.out", delay: 0.12,
        scrollTrigger: { trigger: rightRef.current, start: "top 88%", once: true },
      }
    );
    gsap.fromTo(numbersRef.current,
      { opacity: 0 },
      {
        opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.2,
        scrollTrigger: { trigger: numbersRef.current, start: "top 90%", once: true },
      }
    );
  }, []);

  return (
    <>
      <section
        className="factory-section"
        style={{
          width: "100%",
          background: "#f5f4f0",
          padding: "clamp(72px, 9vw, 130px) 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="factory-inner">
          <div className="factory-left">
            <h2
              ref={headingRef}
              className="factory-heading font-semibold leading-[1.05] tracking-tight"
              style={{ opacity: 0 }}
            >
              {heading}
            </h2>
          </div>

          <div ref={rightRef} className="factory-right" style={{ opacity: 0 }}>
            <div className="factory-copy">
              <p className="factory-description">{description1}</p>
              {description2 ? (
                <p className="factory-description">{description2}</p>
              ) : null}
            </div>

            <div className="factory-numbers-block">
              <p ref={numbersRef} className="factory-numbers-label" style={{ opacity: 0 }}>
                The Numbers
              </p>

              <div className="factory-stats-grid">
                {stats.map((stat) => (
                  <StatCell
                    key={stat.id}
                    label={stat.label}
                    sublabel={stat.sublabel}
                    value={stat.value}
                    isLeftCol={stat.col === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .factory-inner {
          width: min(94%, calc(100% - 32px));
          max-width: 1680px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(80px, 9vw, 180px);
          align-items: start;
        }

        .factory-left {
          padding-right: clamp(24px, 4vw, 64px);
          min-width: 0;
        }

        .factory-heading {
          font-size: clamp(2rem, 3.4vw, 3.8rem);
          color: #0a0a09;
          margin: 0;
          text-align: left;
        }

        .factory-right {
          padding-left: clamp(24px, 4vw, 64px);
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 5vw, 60px);
          align-items: flex-start;
          min-width: 0;
          width: 100%;
        }

        .factory-copy {
          display: flex;
          flex-direction: column;
          gap: 22px;
          width: 100%;
        }

        .factory-description {
          font-family: inherit;
          font-size: clamp(1rem, 1.15vw, 1.15rem);
          font-weight: 400;
          line-height: 1.72;
          color: #0a0a09;
          margin: 0;
        }

        .factory-numbers-block {
          width: 100%;
          min-width: 0;
        }

        .factory-numbers-label {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: clamp(1rem, 1.15vw, 1.15rem);
          font-weight: 400;
          color: #0a0a09;
          margin: 0 0 clamp(20px, 2.5vw, 32px);
        }

        .factory-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          min-width: 0;
        }

        .factory-stat-cell {
          position: relative;
          min-width: 0;
          padding-top: 24px;
          padding-bottom: 40px;
        }

        .factory-stat-cell--left {
          padding-right: clamp(20px, 3vw, 40px);
          border-right: 1px solid rgba(0, 0, 0, 0.12);
        }

        .factory-stat-cell--right {
          padding-left: clamp(20px, 3vw, 40px);
        }

        .factory-stat-line {
          position: absolute;
          top: 0;
          height: 1px;
          background: rgba(0, 0, 0, 0.18);
        }

        .factory-stat-cell--left .factory-stat-line {
          left: 0;
          right: clamp(20px, 3vw, 40px);
        }

        .factory-stat-cell--right .factory-stat-line {
          left: clamp(20px, 3vw, 40px);
          right: 0;
        }

        .factory-stat-label {
          font-family: 'Courier New', Courier, monospace;
          font-size: clamp(0.56rem, 1.6vw, 0.62rem);
          font-weight: 400;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.4);
          margin: 0 0 20px;
          line-height: 1.6;
          white-space: pre-line;
        }

        .factory-dot-wrap {
          min-height: 40px;
          max-width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .factory-dot-wrap::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 900px) {
          .factory-inner {
            grid-template-columns: 1fr;
            gap: clamp(36px, 6vw, 52px);
            width: min(92%, calc(100% - 40px));
          }

          .factory-left,
          .factory-right {
            padding-left: 0;
            padding-right: 0;
          }
        }

        @media (max-width: 640px) {
          .factory-section {
            padding: clamp(56px, 10vw, 80px) 0;
          }

          .factory-right {
            gap: clamp(32px, 7vw, 44px);
          }

          .factory-stat-cell {
            padding-top: 18px;
            padding-bottom: 28px;
          }

          .factory-stat-cell--left {
            padding-right: clamp(12px, 4vw, 20px);
          }

          .factory-stat-cell--right {
            padding-left: clamp(12px, 4vw, 20px);
          }

          .factory-stat-cell--left .factory-stat-line {
            right: clamp(12px, 4vw, 20px);
          }

          .factory-stat-cell--right .factory-stat-line {
            left: clamp(12px, 4vw, 20px);
          }
        }

        @media (max-width: 480px) {
          .factory-inner {
            width: min(92%, calc(100% - 28px));
          }

          .factory-stats-grid {
            grid-template-columns: 1fr;
          }

          .factory-stat-cell--left,
          .factory-stat-cell--right {
            padding-left: 0;
            padding-right: 0;
            border-right: none;
          }

          .factory-stat-cell--left .factory-stat-line,
          .factory-stat-cell--right .factory-stat-line {
            left: 0;
            right: 0;
          }
        }
      `}</style>
    </>
  );
}