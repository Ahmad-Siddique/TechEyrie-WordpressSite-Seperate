"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GREEN = "#162D24";

/** Same as other WordPress service pages (e.g. hosting `OurAdvantageSection`). */
function GlassQuoteButton({ onClick, label = "Get a Quote" }) {
  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const cloneRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const text = textRef.current;
    const clone = cloneRef.current;
    if (!wrap || !text || !clone) return;

    const H = wrap.offsetHeight;
    gsap.set(clone, { y: H, opacity: 1 });
    gsap.set(text, { y: 0, opacity: 1 });

    const onEnter = () => {
      tlRef.current?.kill();
      gsap.to(wrap, {
        backgroundColor: "rgba(255,255,255,0.96)",
        borderColor: "rgba(255,255,255,1)",
        duration: 0.35,
        ease: "power2.out",
      });
      tlRef.current = gsap.timeline({
        defaults: { duration: 0.52, ease: "power3.inOut" },
      });
      tlRef.current.to(text, { y: -H }, 0).to(clone, { y: 0 }, 0);
    };

    const onLeave = () => {
      tlRef.current?.kill();
      gsap.to(wrap, {
        backgroundColor: "rgba(255,255,255,0.12)",
        borderColor: "rgba(255,255,255,0.34)",
        duration: 0.35,
        ease: "power2.out",
      });
      tlRef.current = gsap.timeline({
        defaults: { duration: 0.48, ease: "power3.inOut" },
      });
      tlRef.current.to(clone, { y: H }, 0).to(text, { y: 0 }, 0);
    };

    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mouseleave", onLeave);

    return () => {
      wrap.removeEventListener("mouseenter", onEnter);
      wrap.removeEventListener("mouseleave", onLeave);
      tlRef.current?.kill();
    };
  }, []);

  return (
    <button
      ref={wrapRef}
      type="button"
      onClick={onClick}
      className="inline-flex w-fit items-center justify-center rounded-[38px] px-12 py-6 text-[13px] sm:text-[14px] tracking-[0.09em] font-semibold uppercase"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.34)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.3)",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <span
        ref={textRef}
        style={{
          display: "block",
          lineHeight: 1,
          color: "#ffffff",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
      <span
        ref={cloneRef}
        aria-hidden="true"
        style={{
          display: "block",
          lineHeight: 1,
          color: "#101010",
          whiteSpace: "nowrap",
          position: "absolute",
        }}
      >
        {label}
      </span>
    </button>
  );
}

export default function BenefitsSection2({ onQuoteClick }) {
  const blockRef = useRef(null);

  useEffect(() => {
    const el = blockRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
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
        backgroundColor: GREEN,
        boxSizing: "border-box",
        padding: "clamp(72px, 9vw, 120px) clamp(24px, 6vw, 80px)",
      }}
    >
      <div
        ref={blockRef}
        style={{
          maxWidth: "min(1040px, 100%)",
          margin: "0 auto",
          textAlign: "center",
          opacity: 0,
        }}
      >
        <h2
          style={{
            margin: 0,
            maxWidth: "100%",
            color: "rgba(255,255,255,0.96)",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3.05rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
          }}
        >
          Sell Your Web Design Company
        </h2>

        <p
          style={{
            margin: "clamp(14px, 2vw, 20px) auto 0",
            maxWidth: "76ch",
            color: "rgba(255,255,255,0.9)",
            fontWeight: 600,
            fontSize: "clamp(1.15rem, 1.9vw, 1.45rem)",
            lineHeight: 1.35,
            letterSpacing: "-0.02em",
          }}
        >
          Selling a web design business is a major decision, and timing matters. Whether
          you&apos;re ready to move on or exploring new opportunities, Eyrion makes the process
          simple, structured, and low-stress.
        </p>

        <p
          style={{
            margin: "clamp(22px, 3vw, 32px) auto 0",
            maxWidth: "76ch",
            color: "rgba(255,255,255,0.78)",
            fontSize: "clamp(1.02rem, 1.12vw, 1.12rem)",
            lineHeight: 1.78,
          }}
        >
          We handle acquisitions with a focus on smooth transitions, ensuring your clients and
          operations continue without disruption while we manage the full process end to end.
        </p>

        <div
          style={{
            marginTop: "clamp(36px, 5vw, 52px)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <GlassQuoteButton onClick={onQuoteClick} label="Get a Quote" />
        </div>
      </div>
    </section>
  );
}
