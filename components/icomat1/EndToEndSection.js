"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const CARDS = [
  {
    num: "01",
    label: "HRCHITECT",
    sub: "Website migration, infrastructure review, and a comprehensive audit result in strategic planning for phase II redesign project.",
    href: "/portfolio/hrchitect",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=85&fit=crop",
    color: "#1a1a2e",
  },
  {
    num: "02",
    label: "TIGER",
    sub: "Five sister websites get fresh looks and added features",
    href: "/portfolio/tiger",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&q=85&fit=crop",
    color: "#16213e",
  },
  {
    num: "03",
    label: "AZELIS A&ES",
    sub: "Seamless merger of two ecommerce websites into one adds ease and efficiency.",
    href: "/portfolio/azelis-aes",
    img: "https://images.unsplash.com/photo-1581091215367-59ab6dcef2f8?w=1400&q=85&fit=crop",
    color: "#0f3460",
  },
  {
    num: "04",
    label: "ACERTUS",
    sub: "WordPress website migrated, optimized for long term expansion via Eyrion retained services.",
    href: "/portfolio/acertus",
    img: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=1400&q=85&fit=crop",
    color: "#1a1a2e",
  },
  {
    num: "05",
    label: "Seeding Action",
    sub: null,
    img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=1400&q=85&fit=crop",
    color: "#16213e",
  },
  {
    num: "06",
    label: "Grasshopper Gardens",
    sub: null,
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1400&q=85&fit=crop",
    color: "#0f3460",
  },
  {
    num: "07",
    label: "Paint Supply",
    sub: null,
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=85&fit=crop",
    color: "#1a1a2e",
  },
];

const CARD_W = 620;
const CARD_GAP = 24;

export default function EndToEndSection() {
  const wrapperRef = useRef(null);
  const headingRef = useRef(null);
  const trackRef   = useRef(null);
  const splitRef   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Heading: char-by-char color reveal on scroll ───────────────
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "chars,words" });
        splitRef.current = split;

        gsap.set(split.chars, { color: "#333333" });

        gsap.to(split.chars, {
          color: "#ffffff",
          ease: "none",
          stagger: {
            each: 0.03,
            from: "start",
          },
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        });
      }

      // ── Horizontal scroll ──────────────────────────────────────────
      const trackWidth   = CARDS.length * (CARD_W + CARD_GAP) - CARD_GAP;
      const viewportW    = window.innerWidth;
      const paddingX     = 80;
      const maxTranslate = -(trackWidth - viewportW + paddingX * 2);

      gsap.set(trackRef.current, { x: 0 });

      gsap.to(trackRef.current, {
        x: maxTranslate,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: () => `+=${Math.abs(maxTranslate)}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

    }, wrapperRef);

    return () => {
      // SplitText wraps DOM nodes; explicitly revert wrappers before unmount.
      splitRef.current?.revert();
      splitRef.current = null;
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="w-full bg-[#162D24] overflow-hidden pb-24"
      style={{ minHeight: "100vh" }}
    >
      {/* ── Heading ───────────────────────────────────────────────── */}
      <div className="flex items-center justify-center pt-28 pb-14 px-6">
        <h2
          ref={headingRef}
          className="font-semibold text-center leading-tight tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
        >
        Case Studies
        </h2>
      </div>

      {/* ── Track ─────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-visible px-20">
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ gap: `${CARD_GAP}px` }}
        >
          {CARDS.map((card, i) => {
            const actionPillClass =
              "inline-flex items-center justify-center rounded-full px-4 py-2 text-[11px] tracking-[0.12em] uppercase";
            const body = (
              <>
                {/* Number + dotted rule */}
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className="font-mono font-bold tracking-[0.18em] flex-shrink-0"
                    style={{
                      fontSize: "clamp(1rem, 1.4vw, 1.4rem)",
                      color: "rgba(255,255,255,0.35)",
                      fontFamily: "'Doto', monospace",
                      fontVariationSettings: "'wght' 700, 'ROND' 100",
                    }}
                  >
                    {card.num}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to right, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 4px, transparent 4px, transparent 10px)",
                    }}
                  />
                </div>

                {/* Image */}
                <div
                  className="relative w-full overflow-hidden rounded-xl bg-[#1a1a1a]"
                  style={{ aspectRatio: "4/3" }}
                >
                  <img
                    src={card.img}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Label */}
                <div className="mt-4 flex flex-col gap-1">
                  <p
                    className="text-[12px] tracking-[0.14em] uppercase leading-snug"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {card.sub ? card.sub : card.label}
                  </p>
                  {card.sub && (
                    <p
                      className="text-[11px] tracking-[0.1em] uppercase"
                      style={{ color: "rgba(255,255,255,0.25)" }}
                    >
                      {card.label}
                    </p>
                  )}
                </div>

                {/* Action (decorative when whole card is a link) */}
                <div className="mt-4">
                  {card.href ? (
                    <span
                      className={actionPillClass}
                      style={{
                        color: "#fff",
                        border: "1px solid rgba(255,255,255,0.28)",
                        background: "rgba(255,255,255,0.08)",
                      }}
                    >
                      View Project
                    </span>
                  ) : (
                    <span
                      className={actionPillClass}
                      style={{
                        color: "rgba(255,255,255,0.5)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        background: "rgba(255,255,255,0.03)",
                      }}
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col"
                style={{ width: `${CARD_W}px` }}
              >
                {card.href ? (
                  <Link
                    href={card.href}
                    aria-label={`${card.label} case study`}
                    className="flex flex-col text-left no-underline text-inherit cursor-pointer rounded-xl outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50"
                  >
                    {body}
                  </Link>
                ) : (
                  <div className="flex flex-col">{body}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <style jsx global>{`
        @font-face {
          font-family: 'Doto';
          src: url('/fonts/Doto-VariableFont_ROND,wght.ttf') format('truetype');
          font-display: swap;
        }
      `}</style>
    </section>
  );
}