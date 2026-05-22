"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function BuildWithIcomatSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const rightRef   = useRef(null);
  const boldRef    = useRef(null);
  const para1Ref   = useRef(null);
  const para2Ref   = useRef(null);
  const btnRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Heading: word-by-word reveal ────────────────────────
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "lines,words" });
        gsap.set(split.words, { opacity: 0, y: 40 });
        gsap.to(split.words, {
          opacity: 1, y: 0,
          duration: 1.1, ease: "power3.out", stagger: 0.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ── Right col: stagger up ────────────────────────────────
      gsap.fromTo(
        [boldRef.current, para1Ref.current, para2Ref.current, btnRef.current],
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0,
          duration: 0.8, ease: "power3.out", stagger: 0.12,
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ── Button hover ─────────────────────────────────────────
      const btn = btnRef.current;
      if (btn) {
        const onEnter = () => gsap.to(btn, { scale: 1.03, duration: 0.3, ease: "power2.out" });
        const onLeave = () => gsap.to(btn, { scale: 1,    duration: 0.3, ease: "power2.inOut" });
        btn.addEventListener("mouseenter", onEnter);
        btn.addEventListener("mouseleave", onLeave);
        btn._cleanup = () => {
          btn.removeEventListener("mouseenter", onEnter);
          btn.removeEventListener("mouseleave", onLeave);
        };
      }

    }, sectionRef);

    return () => {
      btnRef.current?._cleanup?.();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        background: "#f7f7f5",
        padding: "clamp(64px, 10vw, 140px) clamp(24px, 6vw, 100px)",
      }}
    >
      {/* ── Two-col layout ────────────────────────────────────── */}
      <div
        className="build-with-icomat-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px, 6vw, 100px)",
          alignItems: "start",
        }}
      >

        {/* LEFT — main heading */}
        <div>
          <h2
            ref={headingRef}
            style={{
              color: "#0a0a0a",
              fontWeight: 600,           /* ← decreased from 800 */
              fontSize: "clamp(2.4rem, 3vw, 3.5rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Ready to launch your WordPress project?
          </h2>
        </div>

        {/* RIGHT — offset down so bold tagline aligns with heading */}
        <div
          ref={rightRef}
          className="build-with-icomat-right"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "460px",
            justifySelf: "end",
            marginTop: "clamp(20px, 12vw, 0px)",
          }}
        >

          {/* Bold tagline — sits in front of / across from the heading */}
          <p
            ref={boldRef}
            style={{
              color: "#0a0a0a",
              fontSize: "clamp(1.05rem, 1.4vw, 1.3rem)",   /* ← bigger */
              fontWeight: 700,
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            The strategic WordPress partner your brand deserves.
          </p>

          {/* Para 1 */}
          <p
            ref={para1Ref}
            style={{
              color: "rgba(0,0,0,0.42)",
              fontSize: "clamp(0.95rem, 1.15vw, 1.08rem)",  /* ← bigger */
              fontWeight: 400,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Eyrion is a premier WordPress development agency, delivering
            high-end website design, custom engineering, and dedicated retainer
            services. We specialize in scaling the WordPress CMS for clients
            who demand technical precision and seamless performance.
          </p>

          {/* Para 2 */}
          <p
            ref={para2Ref}
            style={{
              color: "rgba(0,0,0,0.42)",
              fontSize: "clamp(0.95rem, 1.15vw, 1.08rem)",  /* ← bigger */
              fontWeight: 400,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            We lead the industry with elite craftsmanship and unwavering
            reliability. Our team has successfully empowered over hundreds of
            global brands with sophisticated digital solutions since our
            inception.
          </p>

          {/* CTA Button */}
          <div style={{ marginTop: "12px" }}>
            <a
              ref={btnRef}
              className="build-with-icomat-cta"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event("open-quote-drawer"));
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                background: "#0a0a0a",
                color: "#fff",
                padding: "20px 36px",
                borderRadius: "18px",
                fontSize: "clamp(0.68rem, 0.8vw, 0.76rem)",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                cursor: "pointer",
                transformOrigin: "center",
                minWidth: "220px",
              }}
            >
              <svg
                width="13" height="13"
                viewBox="0 0 16 16" fill="none"
                style={{ opacity: 0.7 }}
              >
                <path
                  d="M3 3h10v10M3 13 13 3"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Get a quote
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .build-with-icomat-grid {
            grid-template-columns: 1fr !important;
            gap: clamp(28px, 5vw, 40px) !important;
          }
          .build-with-icomat-right {
            justify-self: stretch !important;
            max-width: 100% !important;
            margin-top: 0 !important;
          }
          .build-with-icomat-cta {
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }
        }
        @media (max-width: 480px) {
          .build-with-icomat-cta {
            padding: 16px 24px !important;
            min-width: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}