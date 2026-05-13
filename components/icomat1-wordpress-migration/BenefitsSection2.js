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
      style={{
        width: "100%",
        backgroundColor: GREEN,
        boxSizing: "border-box",
        padding: "clamp(72px, 9vw, 120px) clamp(24px, 6vw, 80px)",
      }}
    >
      <div
        ref={blockRef}
        style={{
          maxWidth: "min(820px, 100%)",
          margin: "0 auto",
          textAlign: "center",
          opacity: 0,
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "rgba(255,255,255,0.96)",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3.05rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
          }}
        >
          Are You Ready to Start Your WordPress Migration?
        </h2>

        <p
          style={{
            margin: "clamp(14px, 2vw, 20px) 0 0",
            color: "rgba(255,255,255,0.9)",
            fontWeight: 600,
            fontSize: "clamp(1.15rem, 1.9vw, 1.45rem)",
            lineHeight: 1.35,
            letterSpacing: "-0.02em",
          }}
        >
          Let&apos;s Get Started
        </p>

        <p
          style={{
            margin: "clamp(22px, 3vw, 32px) auto 0",
            maxWidth: "68ch",
            color: "rgba(255,255,255,0.78)",
            fontSize: "clamp(1.02rem, 1.12vw, 1.12rem)",
            lineHeight: 1.78,
          }}
        >
          Moving to a more capable WordPress hosting environment unlocks better speed, improved
          reliability, and the flexibility to scale your website as your business grows. Whether
          you&apos;re leaving shared hosting or consolidating multiple systems, Eyrion plans your
          migration around your traffic patterns, plugins, and operational needs—so your new setup
          actually fits how your business runs.
        </p>

        <p
          style={{
            margin: "clamp(16px, 2.2vw, 22px) auto 0",
            maxWidth: "68ch",
            color: "rgba(255,255,255,0.78)",
            fontSize: "clamp(1.02rem, 1.12vw, 1.12rem)",
            lineHeight: 1.78,
          }}
        >
          Website migration can feel high-risk, but you don&apos;t have to manage DNS updates,
          database transfers, or file handling on your own. Our WordPress specialists take care of
          the entire technical process, verify the new environment before launch, and support you
          through go-live to ensure everything runs smoothly.
        </p>

        <p
          style={{
            margin: "clamp(16px, 2.2vw, 22px) auto 0",
            maxWidth: "68ch",
            color: "rgba(255,255,255,0.78)",
            fontSize: "clamp(1.02rem, 1.12vw, 1.12rem)",
            lineHeight: 1.78,
          }}
        >
          With Eyrion handling your WordPress migration, you can stay focused on your business
          while we make sure your website moves safely, securely, and without disruption.
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
