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
    title: "Highest-level security",
    desc: "We optimize your site architecture so it's easy for search engines to explore (or 'crawl') the content.",
  },
  {
    title: "Ultra-fast speeds",
    desc: "Servers built for WordPress and a fully redundant architecture provide fast and reliable speed you can count on, with zero downtime.",
  },
  {
    title: "Fully managed updates",
    desc: "Ongoing fully managed updates ensure your site is secure, up to date, and performing at its best.",
  },
  {
    title: "Managed WordPress hosting",
    desc: "When you host with Eyrion you have a robust and experienced team of WordPress hosting experts to back you up. Our support team is on-hand to resolve any unexpected problems or issues that might come your way.",
  },
  {
    title: "WordPress backups, done right",
    desc: "At Eyrion, we take WordPress backups seriously — that's why we take full nightly snapshots of your WordPress install at the file set and database level and store them with double redundancy for 90 days. Don't worry, we got you covered.",
  },
  {
    title: "WordPress security experts",
    desc: "Security is vital when it comes to your hosting. The best WordPress hosting is safe, secure, and protected from unscrupulous hackers — ensuring your website is clean and reliably accessible to your customers. Our support team makes sure your site stays this way, and is on-hand to resolve any unexpected problems or issues that might come your way.",
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
            Fully managed WordPress hosting from Eyrion
          </p>

          <h2
            ref={headingRef}
            className="text-white font-bold leading-[1.0] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", maxWidth: "26ch" }}
          >
            100% Uptime guaranteed. Industry-leading infrastructure, hardware,
            &amp; toolsets.
          </h2>

          <p
            className="text-[13px] sm:text-[18px] font-normal leading-relaxed max-w-[520px]"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            Fully managed by our team of WordPress experts.
          </p>

          {/* Use the animated GlassQuoteButton here */}
          <GlassQuoteButton
            onClick={onQuoteClick}
            label="Get your WordPress hosting quote"
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
                High-performance managed hosting with proactive support,
                security, and ongoing maintenance from real WordPress experts.
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