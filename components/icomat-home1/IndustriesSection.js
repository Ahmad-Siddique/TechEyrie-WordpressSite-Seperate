"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOME1_INDUSTRIES } from "../../lib/home1Images";

gsap.registerPlugin(ScrollTrigger);

const INDUSTRIES = HOME1_INDUSTRIES;

const AUTO_TAB_INTERVAL_MS = 6000;
const MOBILE_MQ = "(max-width: 768px)";

function isMobileViewport() {
  if (typeof window === "undefined") return false;
  return window.matchMedia(MOBILE_MQ).matches;
}

export default function IndustriesSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const picInnerRef = useRef(null);
  const contentRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const learnRef = useRef(null);
  const imgLayersRef = useRef([]);

  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const isAnimating = useRef(false);

  const animateSlideText = useCallback((idx) => {
    const heading = headingRef.current;
    const sub = subRef.current;
    const learn = learnRef.current;
    if (!heading || !sub) return;

    gsap
      .timeline()
      .to([heading, sub, learn], {
        opacity: 0,
        y: -10,
        duration: 0.22,
        ease: "power2.in",
        stagger: 0.04,
      })
      .call(() => {
        heading.textContent = INDUSTRIES[idx].heading;
        sub.textContent = INDUSTRIES[idx].subheading;
      })
      .to([heading, sub, learn], {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: "power3.out",
        stagger: 0.06,
      });
  }, []);

  const animateSlideImage = useCallback((oldIdx, idx, onComplete) => {
    const newImg = imgLayersRef.current[idx];
    const oldImg = imgLayersRef.current[oldIdx];
    if (!newImg || !oldImg) {
      onComplete?.();
      return;
    }

    gsap.killTweensOf([newImg, oldImg]);

    gsap.set(newImg, {
      zIndex: 2,
      opacity: 1,
      clipPath: "inset(0% 0% 100% 0%)",
    });
    gsap.set(oldImg, { zIndex: 1, opacity: 1 });

    gsap.to(newImg, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0.95,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(oldImg, {
          zIndex: 0,
          opacity: 0,
          clipPath: "inset(0% 0% 100% 0%)",
        });
        gsap.set(newImg, { zIndex: 1, opacity: 1 });
        onComplete?.();
      },
    });
  }, []);

  const initSlideLayers = useCallback((idx) => {
    imgLayersRef.current.forEach((img, i) => {
      if (!img) return;
      const visible = i === idx;
      gsap.set(img, {
        zIndex: visible ? 1 : 0,
        opacity: visible ? 1 : 0,
        clipPath: visible ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
      });
    });
    if (headingRef.current) headingRef.current.textContent = INDUSTRIES[idx].heading;
    if (subRef.current) subRef.current.textContent = INDUSTRIES[idx].subheading;
    if (contentRef.current) {
      contentRef.current.style.opacity = "1";
      contentRef.current.style.transform = "translateY(0px)";
      contentRef.current.style.visibility = "visible";
    }
  }, []);

  useEffect(() => {
    const els = [
      containerRef.current,
      contentRef.current,
      picInnerRef.current,
      ...imgLayersRef.current.filter(Boolean),
    ];
    ScrollTrigger.saveStyles(els);
    initSlideLayers(0);
  }, [initSlideLayers]);

  // Desktop: small → large full-screen; Mobile: simple block
  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const container = containerRef.current;
      const content = contentRef.current;
      const picInner = picInnerRef.current;
      if (!section || !container || !content || !picInner) return;

      const mm = gsap.matchMedia();

      // Mobile layout (no pin)
      mm.add(MOBILE_MQ, () => {
        gsap.set(container, {
          clearProps: "all",
          width: "100%",
          maxWidth: "100%",
          height: "clamp(320px, 78vw, 460px)",
          borderRadius: "12px",
          x: 0,
          xPercent: 0,
        });
        gsap.set(content, {
          clearProps: "all",
          opacity: 1,
          y: 0,
          visibility: "visible",
        });
        gsap.set(picInner, {
          clearProps: "all",
          scale: 1,
          borderRadius: "12px",
        });
        initSlideLayers(activeRef.current);
      });

      // Desktop layout + scroll behavior
      mm.add("(min-width: 769px)", () => {
        // Start smaller, centered
        gsap.set(container, {
          width: "40vw",
          height: "56vh",
          borderRadius: "20px",
          x: "50%",
          xPercent: -50,
        });
        gsap.set(content, {
          opacity: 0,
          y: 18,
          visibility: "visible",
        });
        gsap.set(picInner, {
          scale: 1,
          borderRadius: "0px",
          transformOrigin: "50% 50%",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=120%", // pin duration
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Phase 1: grow to full 100% width + 100vh & reveal text
        tl.to(
          container,
          {
            width: "100%",
            height: "100vh",
            x: 0,
            xPercent: 0,
            borderRadius: "0px",
            ease: "power2.inOut",
            duration: 0.6,
          },
          0
        ).fromTo(
          content,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, ease: "power3.out", duration: 0.35 },
          0.2
        );

        // No ending animation – stays full view until unpinned
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, [initSlideLayers]);

  const switchTo = useCallback(
    (idx) => {
      if (idx === activeRef.current || isAnimating.current) return;

      isAnimating.current = true;
      const oldIdx = activeRef.current;
      activeRef.current = idx;
      setActive(idx);

      animateSlideImage(oldIdx, idx, () => {
        isAnimating.current = false;
      });
      animateSlideText(idx);
    },
    [animateSlideImage, animateSlideText]
  );

  useEffect(() => {
    const id = setInterval(() => {
      if (isAnimating.current) return;
      const next = (activeRef.current + 1) % INDUSTRIES.length;
      switchTo(next);
    }, AUTO_TAB_INTERVAL_MS);

    return () => clearInterval(id);
  }, [switchTo]);

  return (
    <section
      ref={sectionRef}
      className="industries-section"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        background: "#162D24",
        overflow: "hidden",
      }}
    >
      <div className="industries-sticky-wrap">
        <div
          ref={containerRef}
          className="industries-visual"
          style={{
            position: "relative",
            overflow: "hidden",
            background: "#111",
          }}
        >
          <div
            ref={picInnerRef}
            className="industries-pic-inner"
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            {INDUSTRIES.map((ind, i) => (
              <img
                key={ind.id}
                ref={(el) => (imgLayersRef.current[i] = el)}
                src={ind.src}
                alt={ind.alt}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className="industries-slide-img"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: i === 0 ? 1 : 0,
                  opacity: i === 0 ? 1 : 0,
                  clipPath:
                    i === 0 ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
                }}
              />
            ))}

            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 3,
                pointerEvents: "none",
                background: `
                  linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 45%, transparent 70%),
                  linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 35%)
                `,
              }}
            />
          </div>

          <div
            ref={contentRef}
            className="industries-content"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 4,
              opacity: 0,
              visibility: "visible",
            }}
          >
            <div className="industries-content-copy">
              <h2
                ref={headingRef}
                style={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "clamp(1.9rem, 3.8vw, 4rem)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                  whiteSpace: "pre-line",
                }}
              >
                {INDUSTRIES[0].heading}
              </h2>

              <p
                ref={subRef}
                style={{
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "clamp(0.88rem, 1.1vw, 1rem)",
                  lineHeight: 1.65,
                  maxWidth: "420px",
                  marginBottom: "24px",
                  fontWeight: 400,
                }}
              >
                {INDUSTRIES[0].subheading}
              </p>

              <a
                ref={learnRef}
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "clamp(0.8rem, 0.95vw, 0.9rem)",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  paddingBottom: "2px",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                }}
              >
                Learn more
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div className="industries-tabs">
              {INDUSTRIES.map((ind, i) => (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => switchTo(i)}
                  style={{
                    position: "relative",
                    padding: 0,
                    paddingBottom: "6px",
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontSize: "clamp(0.7rem, 0.82vw, 0.78rem)",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color:
                      active === i
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(255,255,255,0.38)",
                    transition: "color 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (active !== i)
                      e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                  }}
                  onMouseLeave={(e) => {
                    if (active !== i)
                      e.currentTarget.style.color = "rgba(255,255,255,0.38)";
                  }}
                >
                  {ind.label}
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: active === i ? "100%" : "0%",
                      height: "1.5px",
                      background: "rgba(255,255,255,0.9)",
                      borderRadius: "2px",
                      transition: "width 0.3s ease",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .industries-section {
          /* ScrollTrigger pin creates the extra space; no fixed 200vh. */
        }

        .industries-sticky-wrap {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .industries-visual {
          will-change: width, height, border-radius;
        }

        .industries-slide-img {
          will-change: clip-path, opacity;
        }

        .industries-content-copy {
          position: absolute;
          top: clamp(28px, 5vw, 64px);
          left: clamp(28px, 5vw, 64px);
          max-width: 520px;
        }

        .industries-tabs {
          position: absolute;
          bottom: clamp(28px, 4vw, 56px);
          left: clamp(28px, 5vw, 64px);
          right: clamp(28px, 5vw, 64px);
          display: flex;
          align-items: center;
          gap: clamp(16px, 2.5vw, 28px);
          flex-wrap: wrap;
          z-index: 6;
        }

        @media (max-width: 768px) {
          .industries-section {
            padding: 40px 0 48px;
          }

          .industries-sticky-wrap {
            position: relative !important;
            top: auto !important;
            height: auto !important;
            min-height: 0 !important;
            padding: 0 20px;
            overflow: visible !important;
          }

          .industries-visual {
            width: 100% !important;
            max-width: 100% !important;
            height: clamp(320px, 78vw, 460px) !important;
            border-radius: 12px !important;
            transform: none !important;
            will-change: auto !important;
          }

          .industries-pic-inner {
            border-radius: 12px !important;
            transform: none !important;
          }

          .industries-content {
            opacity: 1 !important;
            visibility: visible !important;
          }

          .industries-content-copy {
            top: 20px !important;
            left: 16px !important;
            right: 16px !important;
            max-width: none !important;
          }

          .industries-content-copy h2 {
            font-size: clamp(1.5rem, 6.5vw, 2rem) !important;
            margin-bottom: 12px !important;
          }

          .industries-content-copy p {
            font-size: 0.9rem !important;
            margin-bottom: 16px !important;
            max-width: 100% !important;
          }

          .industries-tabs {
            position: absolute !important;
            bottom: 14px !important;
            left: 12px !important;
            right: 12px !important;
            gap: 12px 20px !important;
            z-index: 10 !important;
          }

          .industries-tabs button {
            font-size: 0.65rem !important;
          }

          .industries-slide-img {
            will-change: clip-path, opacity;
          }
        }
      `}</style>
    </section>
  );
}