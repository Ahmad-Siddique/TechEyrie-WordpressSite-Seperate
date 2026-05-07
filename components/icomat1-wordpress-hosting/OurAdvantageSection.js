"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

// ─── Glass Quote Button ───────────────────────────────────────────────────────
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
      className="mt-2 inline-flex w-fit items-center justify-center rounded-[38px] px-12 py-6 text-[13px] sm:text-[14px] tracking-[0.09em] font-semibold uppercase"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.34)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.3)",
        cursor: "pointer",
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

// ─── Features Data ────────────────────────────────────────────────────────────
const FEATURES = [
  {
    title: "Impenetrable security & SEO optimization",
    desc: "We harden your site architecture against threats while simultaneously optimizing it for maximum search engine crawlability and index efficiency.",
  },
  {
    title: "High-velocity performance",
    desc: "Utilizing servers engineered exclusively for WordPress and a fully redundant infrastructure, we deliver lightning-fast load times and consistent reliability with a zero-downtime guarantee.",
  },
  {
    title: "Comprehensive update management",
    desc: "Our team handles every technical update with precision, ensuring your platform remains secure, compatible, and operating at peak performance levels.",
  },
  {
    title: "Expert-backed infrastructure",
    desc: "Hosting with Eyrion means having an elite team of technical architects standing behind your platform. Our specialists are available to preemptively resolve complexities and ensure seamless continuity.",
  },
  {
    title: "Redundant, fail-safe backups",
    desc: "We treat data integrity with the highest priority, capturing full nightly snapshots at both the file and database levels. These are stored with double redundancy for 90 days, providing an absolute safety net for your digital assets.",
  },
  {
    title: "Advanced threat protection",
    desc: "Superior hosting must be inherently secure. We maintain a clean, protected environment that shields your business from malicious actors, while our security experts provide ongoing monitoring to ensure your site remains reliably accessible to your clientele.",
  },
];

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function OurAdvantageSection({
  onQuoteClick = () => window.dispatchEvent(new Event("open-quote-drawer")),
}) {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const rightColRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Label fade-in ──
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ── Heading SplitText ──
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "lines,words" });
        gsap.set(split.words, { opacity: 0, y: 40 });
        gsap.to(split.words, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ── Right column fade-in ──
      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ── Features stagger ──
      const featureEls = featuresRef.current.filter(Boolean);
      if (featureEls.length > 0) {
        gsap.fromTo(
          featureEls,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: featureEls[0],
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#162D24] py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20"
    >
      {/*
        KEY: `items-start` on the flex row is REQUIRED for `position: sticky`
        to work inside a flex container. Without it, the flex child stretches
        to full height and has no room to scroll within.
      */}
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">

        {/* ── LEFT COLUMN — sticky, travels with the right column ── */}
        <div
          ref={leftColRef}
          className="flex flex-col gap-4 md:gap-6"
          style={{
            flex: "0 0 45%",
            /*
              `position: sticky` pins the left column to the top of the
              viewport while the right column scrolls past it.
              `top` = distance from the top of the viewport.
              Adjust this to match your navbar height.
            */
            position: "sticky",
            top: "8rem",
            /*
              `alignSelf: flex-start` is the second required piece — it
              collapses the sticky item to its natural content height so the
              browser knows it has room to stick.
            */
            alignSelf: "flex-start",
          }}
        >
          <p
            ref={labelRef}
            className="text-[13px] sm:text-[14px] font-medium tracking-wide"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Fully managed WordPress hosting by Eyrion
          </p>

          <h2
            ref={headingRef}
            className="text-white font-bold leading-[1.0] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", maxWidth: "26ch" }}
          >
            Guaranteed 100% uptime. Powered by industry-leading infrastructure, hardware, and advanced tools.
          </h2>

          <p
            className="text-[13px] sm:text-[18px] font-normal leading-relaxed max-w-[520px]"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            Managed end-to-end by our team of experienced WordPress experts.
          </p>

          {/* Use the animated GlassQuoteButton here */}
          <GlassQuoteButton
            onClick={onQuoteClick}
            label="Book a Free Consultation"
          />
        </div>

        {/* ── RIGHT COLUMN — scrolls normally ── */}
        <div className="mt-14 md:mt-0 w-full md:flex-1 flex justify-end">
          <div className="w-full max-w-[560px] flex flex-col gap-10">

            <div ref={rightColRef} className="flex flex-col gap-5">
              <p
                className="text-[13px] sm:text-[18px] font-semibold leading-relaxed"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                Elite managed hosting with proactive architectural support
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div className="flex flex-col gap-8">
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  ref={(el) => (featuresRef.current[i] = el)}
                  className="flex flex-col gap-1.5"
                >
                  <p
                    className="text-[13px] sm:text-[18px] font-semibold"
                    style={{ color: "rgba(255,255,255,0.92)" }}
                  >
                    {f.title}
                  </p>
                  <p
                    className="text-[12px] sm:text-[18px] font-normal leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}