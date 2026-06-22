"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pageKeyFromPathname } from "../../lib/pageKeys";
import { getCustomerSectionVideos } from "../../lib/pageVideos";
import {
  CUSTOMER_SECTION_HEADING,
  CUSTOMER_TESTIMONIALS,
} from "../../lib/customerTestimonials";

gsap.registerPlugin(ScrollTrigger);

const CLIENTS = CUSTOMER_TESTIMONIALS;

function ClientLogo({ client, dark = false }) {
  const color = dark ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.75)";
  if (client.id === "joby") {
    return (
      <div className="flex items-center gap-2" style={{ color }}>
        <svg width="26" height="20" viewBox="0 0 28 22" fill="none">
          <path d="M14 2C8 2 3 8 2 14C6 11 10 10 14 10C18 10 22 11 26 14C25 8 20 2 14 2Z" fill="currentColor" opacity="0.9" />
          <path d="M2 14C4 18 8 20 14 20C20 20 24 18 26 14C22 11 18 10 14 10C10 10 6 11 2 14Z" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    );
  }
  if (client.id === "pall") {
    return (
      <div className="flex items-center gap-2" style={{ color }}>
        <div className="rounded-full border border-current px-2 py-0.5 text-[9px] font-bold tracking-widest">PALL</div>
        <span className="text-[13px] font-medium">{client.logo}</span>
      </div>
    );
  }
  if (client.id === "niar") {
    return <span className="font-black tracking-wide italic" style={{ fontSize: "clamp(1rem,1.5vw,1.4rem)", color }}>NIAR</span>;
  }
  return <span className="font-black tracking-[0.06em] uppercase" style={{ fontSize: "clamp(0.8rem,1vw,1rem)", color }}>{client.logo}</span>;
}

// ── Full-screen video modal ──────────────────────────────────────────────
function VideoModal({ src, onClose }) {
  const overlayRef = useRef(null);
  const modalRef   = useRef(null);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Animate in
    gsap.fromTo(overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: "power2.out" }
    );
    gsap.fromTo(modalRef.current,
      { scale: 0.88, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.45, ease: "power3.out", delay: 0.05 }
    );

    // ESC to close
    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in", onComplete: onClose });
    gsap.to(modalRef.current,   { scale: 0.9, opacity: 0, duration: 0.25, ease: "power2.in" });
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.88)",
        display: "flex", alignItems: "center", justifyContent: "center",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      {/* Modal box */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "min(90vw, 1100px)",
          aspectRatio: "16/9",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
          background: "#000",
        }}
      >
        <video
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          src={src}
          autoPlay
          controls
          playsInline
        />

        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute", top: "14px", right: "14px",
            width: "36px", height: "36px",
            borderRadius: "50%",
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", zIndex: 10,
            backdropFilter: "blur(4px)",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function CustomersSection({
  pageKey: pageKeyProp,
  showVideoSection: showVideoSectionProp,
}) {
  const pathname = usePathname();
  const pageKey = pageKeyProp ?? pageKeyFromPathname(pathname) ?? "homepage";
  const showVideoSection =
    showVideoSectionProp ??
    (pageKey !== "homepage" && !String(pageKey).startsWith("wp-"));
  const { background: sectionBackgroundVideo, modal: modalVideo } =
    getCustomerSectionVideos(pageKey);
  const outerRef        = useRef(null);
  const bgGradientRef   = useRef(null);
  const wrapperRef      = useRef(null);
  const progressFillRef = useRef(null);
  const headingRef      = useRef(null);
  const cardRefs        = useRef([]);
  const videoSectionRef = useRef(null);
  const videoWrapRef    = useRef(null);
  const miniCardRef     = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const MODAL_SRC = modalVideo;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalCards = CLIENTS.length;
      const SCROLL_PX_PER_CARD = 1750;
      const TOTAL_PIN_SCROLL = totalCards * SCROLL_PX_PER_CARD;
      const COLLAPSED_H = 52;
      const EXPANDED_H = 460;

      const mm = gsap.matchMedia();

      // ── Mobile: no pin, scroll-scrub, or accordion — static stacked cards ──
      mm.add("(max-width: 768px)", () => {
        cardRefs.current.forEach((el) => {
          if (!el) return;
          const collapsed = el.querySelector(".card-collapsed");
          const expanded = el.querySelector(".card-expanded");
          gsap.set(el, { clearProps: "all" });
          el.style.height = "auto";
          el.style.background = "linear-gradient(135deg,#e8eaed 0%,#d0d4da 100%)";
          el.style.border = "1px solid rgba(255,255,255,0.2)";
          if (collapsed) gsap.set(collapsed, { display: "none" });
          if (expanded) gsap.set(expanded, { display: "flex", opacity: 1 });
        });

        const videoWrap = videoWrapRef.current;
        const miniCard = miniCardRef.current;
        if (showVideoSection && videoWrap) {
          gsap.set(videoWrap, {
            clearProps: "all",
            position: "relative",
            top: "auto",
            left: "auto",
            x: 0,
            y: 0,
            transform: "none",
            width: "100%",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px",
          });
        }
        if (showVideoSection && miniCard) {
          gsap.set(miniCard, { clearProps: "all", opacity: 1, y: 0, scale: 1 });
        }
        if (headingRef.current) {
          gsap.set(headingRef.current, { opacity: 1, y: 0, clearProps: "all" });
        }
      });

      // ── Desktop: pinned accordion + scroll-driven transitions ──
      mm.add("(min-width: 769px)", () => {
      // ── Initial card states ──────────────────────────────────
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const collapsed = el.querySelector(".card-collapsed");
        const expanded  = el.querySelector(".card-expanded");
        if (i === 0) {
          gsap.set(el, { height: EXPANDED_H });
          gsap.set(collapsed, { opacity: 0, display: "none" });
          gsap.set(expanded,  { opacity: 1, display: "flex" });
          el.style.background = "linear-gradient(135deg,#e8eaed 0%,#d0d4da 100%)";
          el.style.border     = "1px solid rgba(255,255,255,0.2)";
        } else {
          gsap.set(el, { height: COLLAPSED_H });
          gsap.set(collapsed, { opacity: 1, display: "flex" });
          gsap.set(expanded,  { opacity: 0, display: "none" });
          el.style.background = "rgba(255,255,255,0.07)";
          el.style.border     = "1px solid rgba(255,255,255,0.1)";
        }
      });

      // ── Card transition ──────────────────────────────────────
      let currentActive = 0;
      const transitionToCard = (newIdx) => {
        if (newIdx === currentActive) return;
        const oldIdx = currentActive;
        currentActive = newIdx;
        const oldEl = cardRefs.current[oldIdx];
        const newEl = cardRefs.current[newIdx];
        if (!oldEl || !newEl) return;
        const oldExp = oldEl.querySelector(".card-expanded");
        const oldCol = oldEl.querySelector(".card-collapsed");
        const newExp = newEl.querySelector(".card-expanded");
        const newCol = newEl.querySelector(".card-collapsed");

        gsap.to(oldEl, {
          height: COLLAPSED_H, duration: 1.05, ease: "power3.inOut",
          onStart: () => {
            oldEl.style.background = "rgba(255,255,255,0.07)";
            oldEl.style.border = "1px solid rgba(255,255,255,0.1)";
          },
        });
        gsap.to(oldExp, {
          opacity: 0, duration: 0.4, ease: "power2.in",
          onComplete: () => {
            gsap.set(oldExp, { display: "none" });
            gsap.set(oldCol, { display: "flex", opacity: 0 });
            gsap.to(oldCol, { opacity: 1, duration: 0.45, ease: "power2.out" });
          },
        });
        gsap.to(newEl, {
          height: EXPANDED_H, duration: 1.1, ease: "power3.inOut", delay: 0.12,
          onStart: () => {
            newEl.style.background = "linear-gradient(135deg,#e8eaed 0%,#d0d4da 100%)";
            newEl.style.border = "1px solid rgba(255,255,255,0.2)";
          },
        });
        gsap.to(newCol, {
          opacity: 0, duration: 0.35, ease: "power2.in",
          onComplete: () => {
            gsap.set(newCol, { display: "none" });
            gsap.set(newExp, { display: "flex", opacity: 0 });
            gsap.to(newExp, { opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.22 });
          },
        });
      };

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: `+=${TOTAL_PIN_SCROLL}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: `+=${TOTAL_PIN_SCROLL}`,
        scrub: 10,
        snap: {
          snapTo: gsap.utils.snap(1 / totalCards),
          duration: { min: 0.85, max: 1.75 },
          delay: 0.12,
          ease: "power3.inOut",
        },
        onUpdate: (self) => {
          const p = self.progress;

          if (progressFillRef.current)
            gsap.set(progressFillRef.current, { scaleX: p, transformOrigin: "left center" });

          transitionToCard(Math.min(Math.floor(p * totalCards), totalCards - 1));

          if (bgGradientRef.current) {
            const bW = 55 + p * 126;
            const bH = bW * 0.62;
            const op1 = 0.45 + p * 0.5;
            const op2 = op1 * 0.5;
            bgGradientRef.current.style.background = `
              radial-gradient(ellipse 60% 45% at 50% 50%,
                rgba(67, 87, 44, ${0.2 + p * 0.35}) 0%,
                rgba(67, 87, 44, ${0.1 + p * 0.2}) 45%,
                transparent 70%
              ),
              radial-gradient(ellipse ${bW}% ${bH}% at 50% 110%,
                rgba(67, 87, 44, ${op1}) 0%,
                rgba(67, 87, 44, ${op2}) 40%,
                transparent 68%
              )
            `;
          }
        },
      });

      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      const videoWrap = videoWrapRef.current;
      const miniCard = miniCardRef.current;
      const videoSection = videoSectionRef.current;

      if (showVideoSection && videoWrap && miniCard && videoSection) {
        gsap.set(videoWrap, { width: "32vw", height: "20vw", borderRadius: "20px" });
        gsap.set(miniCard, { opacity: 0, y: 24, scale: 0.88 });

        gsap.timeline({
          scrollTrigger: {
            trigger: videoSection,
            start: "top bottom",
            end: "top top",
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        })
          .to(
            videoWrap,
            {
              width: "100%",
              height: "100vh",
              borderRadius: "0px",
              ease: "power2.inOut",
              duration: 1,
            },
            0,
          )
          .to(
            miniCard,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              ease: "power3.out",
              duration: 0.5,
            },
            0.65,
          );
      }

      }); // end desktop matchMedia

    }, outerRef);

    return () => ctx.revert();
  }, [showVideoSection]);

  return (
    <>
      {showVideoSection && modalOpen && (
        <VideoModal
          src={MODAL_SRC}
          onClose={() => setModalOpen(false)}
        />
      )}

      <div
        ref={outerRef}
        style={{ background: "#162D24", position: "relative", overflowX: "clip", maxWidth: "100%" }}
      >
        {/* Animated gradient */}
        <div
          ref={bgGradientRef}
          style={{
            position: "absolute", inset: 0,
            pointerEvents: "none", zIndex: 0,
            background: `
              radial-gradient(ellipse 55% 40% at 50% 50%,
                rgba(67, 87, 44, 0.24) 0%,
                rgba(67, 87, 44, 0.12) 45%,
                transparent 70%
              ),
              radial-gradient(ellipse 55% 28% at 50% 110%,
                rgba(67, 87, 44, 0.45) 0%,
                rgba(67, 87, 44, 0.22) 40%,
                transparent 68%
              )
            `,
          }}
        />

        {/* Noise */}
        <div style={{
          position: "absolute", inset: 0,
          pointerEvents: "none", zIndex: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat", backgroundSize: "256px 256px", mixBlendMode: "overlay",
        }} />

        {/* ══════════════════════════════════════
            PART 1 — Pinned cards
        ══════════════════════════════════════ */}
        <section
          ref={wrapperRef}
          className="customers-cards-section"
          style={{
            position: "relative",
            width: "100%",
            background: "transparent",
            overflow: "hidden",
          }}
        >
          {/* Progress bar — desktop only */}
          <div
            className="customers-progress-bar hidden md:block"
            style={{
              position: "absolute",
              top: "14px",
              left: 0,
              right: 0,
              height: "1px",
              background: "rgba(255,255,255,0.12)",
              zIndex: 30,
            }}
          >
            <div ref={progressFillRef} style={{
              width: "100%", height: "100%",
              background: "rgba(255,255,255,0.7)",
              transform: "scaleX(0)", transformOrigin: "left center",
            }} />
          </div>

          <div className="relative z-10 flex items-center px-5 py-14 sm:px-10 md:h-screen md:px-16 md:py-0 lg:px-20">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* LEFT */}
              <div ref={headingRef}>
                <h2 className="text-white font-bold leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(2.2rem,4vw,4.2rem)" }}>
                  {CUSTOMER_SECTION_HEADING.title}
                </h2>
                <p
                  className="font-medium"
                  style={{
                    marginTop: "clamp(12px, 1.4vw, 16px)",
                    fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {CUSTOMER_SECTION_HEADING.subtitle}
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col">
                <p className="text-[12px] font-medium mb-4 hidden md:block" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Eyrion testimonial highlights ↓
                </p>
                <div className="flex flex-col gap-3 md:gap-2">
                  {CLIENTS.map((client, i) => (
                    <div
                      key={client.id}
                      ref={(el) => (cardRefs.current[i] = el)}
                      className="customers-card relative overflow-hidden rounded-2xl md:will-change-[height,background]"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      <div className="card-collapsed hidden h-[52px] items-center px-5 md:flex">
                        <ClientLogo client={client} dark={false} />
                      </div>
                      <div className="card-expanded flex flex-col gap-5 p-5 sm:gap-6 sm:p-7">
                        <ClientLogo client={client} dark={true} />
                        <div className="h-2" />
                        <p className="font-semibold leading-relaxed"
                          style={{ fontSize: "clamp(0.95rem,1.15vw,1.15rem)", color: "rgba(0,0,0,0.82)" }}>
                          {client.quote}
                        </p>
                        <p className="font-semibold tracking-[0.13em] uppercase"
                          style={{ fontSize: "clamp(0.65rem,0.75vw,0.75rem)", color: "rgba(0,0,0,0.4)" }}>
                          {client.author}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {showVideoSection && (
        <section
          ref={videoSectionRef}
          className="customers-video-section"
          style={{
            position: "relative",
            width: "100%",
            background: "transparent",
            overflow: "hidden",
          }}
        >
          <div
            ref={videoWrapRef}
            className="customers-video-wrap"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {/* Main background video */}
            <video
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              src={sectionBackgroundVideo}
              autoPlay muted loop playsInline preload="auto"
            />

            {/* Edge vignette */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.3) 100%)",
            }} />

            {/* ── Mini video card — bigger + clickable ── */}
            <div
              ref={miniCardRef}
              onClick={() => setModalOpen(true)}
              className="customers-mini-card mini-card-hover"
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                background: "#000",
                boxShadow: "0 12px 48px rgba(0,0,0,0.55)",
                cursor: "pointer",
              }}
            >
              {/* Preview thumbnail / video */}
              <video
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
                src={MODAL_SRC}
                muted loop playsInline preload="metadata"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
              />

              {/* Dark gradient at bottom for label */}
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
              }} />

              {/* Center play button */}
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                pointerEvents: "none",
              }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.9)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#111">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Bottom label */}
              <div style={{
                position: "absolute", bottom: "10px", left: "12px", right: "12px",
                pointerEvents: "none",
              }}>
                <p style={{
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>
                  Watch video
                </p>
              </div>
            </div>

          </div>
        </section>
        )}

      </div>

      <style>{`
        /* Mobile: static layout — no pin / scroll / expand animations */
        @media (max-width: 768px) {
          .customers-cards-section {
            min-height: 0 !important;
          }
          .customers-card {
            height: auto !important;
            background: linear-gradient(135deg, #e8eaed 0%, #d0d4da 100%) !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
          }
          .customers-card .card-collapsed {
            display: none !important;
          }
          .customers-card .card-expanded {
            display: flex !important;
            opacity: 1 !important;
          }
          .customers-video-section {
            height: auto !important;
            min-height: 0 !important;
            padding: 40px 20px 48px;
            display: block !important;
          }
          .customers-video-wrap {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            transform: none !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            aspect-ratio: 16 / 9;
          }
          .customers-mini-card {
            position: relative !important;
            bottom: auto !important;
            right: auto !important;
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            aspect-ratio: 16 / 10;
            margin-top: 12px;
          }
        }

        /* Desktop: video + mini card positioning */
        @media (min-width: 769px) {
          .customers-cards-section {
            min-height: 100vh;
          }
          .customers-video-section {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .customers-video-wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 32vw;
            height: 20vw;
          }
          .customers-mini-card {
            position: absolute;
            bottom: 24px;
            right: 24px;
            width: 280px;
            height: 175px;
          }
        }

        .mini-card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        @media (min-width: 769px) {
          .mini-card-hover:hover {
            transform: scale(1.03);
            box-shadow: 0 16px 56px rgba(0,0,0,0.65) !important;
          }
        }
      `}</style>
    </>
  );
}