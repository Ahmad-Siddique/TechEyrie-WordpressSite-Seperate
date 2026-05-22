"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pageKeyFromPathname } from "../../lib/pageKeys";
import {
  getRtsCombinedCardPics,
  getRtsCombinedPanelPic,
} from "../../lib/pageImages";
import CardImage from "./CardImage";

gsap.registerPlugin(ScrollTrigger);

const BADGES = [
  { label: "AT SCALE",     top: "28%", left: "20%" },
  { label: "ZERO DEFECTS", top: "62%", left: "30%" },
  { label: "10x FASTER",   top: "55%", left: "72%" },
];

const GRID_DOTS = [
  { top: "18%", left: "25%" }, { top: "18%", left: "50%" }, { top: "18%", left: "75%" },
  { top: "57%", left: "9%"  }, { top: "57%", left: "25%" }, { top: "57%", left: "50%" },
  { top: "57%", left: "75%" }, { top: "57%", left: "91%" },
  { top: "88%", left: "9%"  }, { top: "88%", left: "25%" }, { top: "88%", left: "50%" },
  { top: "88%", left: "75%" }, { top: "88%", left: "91%" },
];

const CARD_META = [
  {
    badge: "Design + Dev",
    footer: (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
        WordPress website design
        <br />
        <span className="font-normal text-[#666] block min-h-[2.4em]">Beautiful websites made by top WordPress designers</span>
      </p>
    ),
  },
  {
    badge: "Managed Services",
    footer: (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
        WordPress development
        <br />
        <span className="font-normal text-[#666] block min-h-[2.4em]">A dedicated WordPress development team with strong technical expertise</span>
      </p>
    ),
  },
  {
    badge: "Maintenance",
    footer: (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
        WordPress maintenance
        <br />
        <span className="font-normal text-[#666] block min-h-[2.4em]">Always secure, always available, always updated</span>
      </p>
    ),
  },
  {
    badge: "Hosting",
    footer: (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
        WordPress managed hosting
        <br />
        <span className="font-normal text-[#666] block min-h-[2.4em]">Optimized for top-tier security and performance</span>
      </p>
    ),
  },
  {
    badge: "Support",
    footer: (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
        Premium support
        <br />
        <span className="font-normal text-[#666] block min-h-[2.4em]">A dedicated contact with fast, priority assistance whenever you need it</span>
      </p>
    ),
  },
  {
    badge: "SEO",
    footer: (
      <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-[#111] leading-snug m-0">
        Search engine optimization
        <br />
        <span className="font-normal text-[#666] block min-h-[2.4em]">Position your website for sustainable, long-term growth</span>
      </p>
    ),
  },
];

function CrosshairDot({ top, left }) {
  return (
    <div className="absolute pointer-events-none" style={{ top, left, transform: "translate(-50%,-50%)" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-px bg-white/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-4 bg-white/20" />
      <div className="w-1 h-1 rounded-full bg-white/30 relative z-10" />
    </div>
  );
}

export default function RTSCombinedSection({ pageKey: pageKeyProp }) {
  const pathname = usePathname();
  const pageKey = pageKeyProp ?? pageKeyFromPathname(pathname) ?? "home1";
  const cardPics = getRtsCombinedCardPics(pageKey);
  const cardItems = useMemo(
    () =>
      CARD_META.map((card, i) => ({
        ...card,
        src: cardPics[i] ?? cardPics[0],
        alt: `${card.badge} — Eyrion WordPress services`,
      })),
    [pageKey, cardPics],
  );
  const panelImage = getRtsCombinedPanelPic(pageKey);

  const wrapperRef = useRef(null);
  const panelARef = useRef(null);
  const headerRef = useRef(null);
  const midColRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const panelBRef = useRef(null);
  const badgesRef = useRef(null);
  const gridRef = useRef(null);

  const isMobile = () => window.innerWidth < 768;

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Mobile: completely skip pin/overlap animations ────────
      if (isMobile()) {
        // Simple fade-up for header and cards on mobile
        gsap.fromTo(headerRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: headerRef.current, start: "top 90%", toggleActions: "play none none reverse" },
          }
        );

        const mobileCards = cardsWrapperRef.current?.querySelectorAll(".rts-card-item");
        if (mobileCards?.length) {
          gsap.fromTo(mobileCards,
            { opacity: 0, y: 24 },
            {
              opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.08,
              scrollTrigger: { trigger: cardsWrapperRef.current, start: "top 88%", toggleActions: "play none none reverse" },
            }
          );
        }

        gsap.fromTo(midColRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
            scrollTrigger: { trigger: midColRef.current, start: "top 92%", toggleActions: "play none none reverse" },
          }
        );

        // Panel B: simple fade in on mobile (no pin, no slide-up)
        gsap.set(panelBRef.current, { y: 0 }); // reset to natural flow
        gsap.fromTo([badgesRef.current, gridRef.current],
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: panelBRef.current, start: "top 80%", toggleActions: "play none none reverse" },
          }
        );
        return;
      }

      // ── DESKTOP ANIMATIONS (≥768px) ───────────────────────────

      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(midColRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: midColRef.current,
            start: "top 92%",
            toggleActions: "play none none reverse",
          },
        }
      );

      let cardsTrigger = null;
      const setupCards = () => {
        const cards = cardsWrapperRef.current?.querySelectorAll(".rts-card-item");
        if (!cards || cards.length === 0) return;

        if (isMobile()) {
          cardsTrigger?.kill();
          cardsTrigger = null;
          gsap.set(cards, { clearProps: "all" });
          return;
        }

        cardsTrigger?.kill();
        gsap.set(cards, { opacity: 0.55, scale: 0.96 });
        const cardWidth = cards[0].getBoundingClientRect().width;
        const overlapStep = cardWidth * 0.9;
        cards.forEach((card, i) => {
          const col = i % 3;
          const startX = -(col * overlapStep);
          gsap.set(card, { x: startX, y: 0, zIndex: 10 + col });
        });

        cardsTrigger = ScrollTrigger.create({
          trigger: cardsWrapperRef.current,
          start: "top 75%",
          end: "top 20%",
          scrub: 1.4,
          onUpdate: (self) => {
            const p = self.progress;
            cards.forEach((card, i) => {
              const col = i % 3;
              const startX = -(col * overlapStep);
              gsap.set(card, {
                x: startX * (1 - p),
                y: 0,
                opacity: 0.55 + 0.45 * p,
                scale: 0.96 + 0.04 * p,
              });
            });
          },
          onLeaveBack: () => {
            cards.forEach((card, i) => {
              const col = i % 3;
              const startX = -(col * overlapStep);
              gsap.to(card, {
                x: startX, y: 0, opacity: 0.55, scale: 0.96,
                duration: 0.45, ease: "power2.inOut", overwrite: true,
              });
            });
          },
          onLeave: () => gsap.set(cards, { x: 0, y: 0, opacity: 1, scale: 1 }),
        });
      };

      setupCards();

      gsap.set(panelBRef.current, { y: "100vh" });
      gsap.set([badgesRef.current, gridRef.current], { opacity: 0, y: 12 });

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1.2,
        },
      });

      masterTl.to(panelBRef.current,
        { y: "0vh", ease: "power2.inOut", duration: 2 }, 0
      );
      masterTl.to(panelARef.current,
        { scale: 0.88, borderRadius: "20px", opacity: 0.8, ease: "power2.inOut", duration: 2 }, 0
      );
      masterTl.to([badgesRef.current, gridRef.current],
        { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: "power2.out" }
      );
      masterTl.to({}, { duration: 1 });

      const onResize = () => {
        setupCards();
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", onResize);
      return () => {
        cardsTrigger?.kill();
        window.removeEventListener("resize", onResize);
      };

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    /*
      On mobile: wrapperRef renders as a normal flow block (no pin).
      On desktop: GSAP pinSpacing adds the scroll room automatically.
    */
    <div
      ref={wrapperRef}
      className="relative w-full"
      style={{ minHeight: "100vh", overflowX: "clip", maxWidth: "100%" }}
    >

      {/* ── PANEL A ──────────────────────────────────────────────── */}
      <div
        ref={panelARef}
        className="
          w-full bg-[#f5f5f5] pt-6 pb-0 will-change-transform
          md:absolute md:inset-0
        "
        style={{
          /* On mobile: natural height, no absolute positioning */
          height: "auto",
          overflow: "clip",
          transformOrigin: "center center",
          zIndex: 1,
        }}
      >
        {/* On desktop we need the panel to fill 100vh */}
        <style>{`
          @media (min-width: 768px) {
            .panel-a-inner { height: 100vh; }
          }
        `}</style>
        <div className="panel-a-inner flex flex-col">
          <div
            ref={headerRef}
            className="px-4 sm:px-8 md:px-16 lg:px-20 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10"
          >
            <div className="flex items-start">
              <p className="text-[15px] sm:text-[17px] md:text-[20px] font-semibold text-[#111] tracking-tight leading-snug">
                Core WordPress Services
              </p>
            </div>
            <div className="max-w-lg">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#111] leading-snug mb-3">
                WordPress website design, WordPress development, WordPress managed
                hosting, WordPress maintenance, WordPress support, and search
                engine optimization.
              </p>
              <a
                href="#"
                className="text-[13px] sm:text-[15px] font-semibold text-[#111] underline underline-offset-4 hover:opacity-50 transition-opacity duration-200 inline-flex items-center gap-1"
              >
                Meet the WP team →
              </a>
            </div>
          </div>

          <div ref={cardsWrapperRef} className="px-4 sm:px-8 md:px-16 lg:px-20 overflow-hidden flex-1">
            {/* Mobile: 1-col scroll; Tablet: 2-col; Desktop: 3-col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {cardItems.map((card, idx) => (
                <div key={idx} className="rts-card-item will-change-transform">
                  <CardImage
                    src={card.src}
                    alt={card.alt}
                    badge={card.badge}
                    footerContent={card.footer}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            ref={midColRef}
            className="mt-2 mx-4 sm:mx-8 md:mx-16 lg:mx-20 border border-[#ddd] py-1.5 px-4 mb-3"
          >
            <p className="text-[10px] sm:text-[11px] font-medium text-[#aaa] tracking-[0.16em] uppercase">
              Eyrion / WordPress Service Platform
            </p>
          </div>
        </div>
      </div>

      {/* ── PANEL B ──────────────────────────────────────────────── */}
      <div
        ref={panelBRef}
        className="
          w-full bg-[#162D24] overflow-hidden will-change-transform
          md:absolute md:inset-0
        "
        style={{
          /* Mobile: natural height 100vw aspect, no absolute */
          height: "auto",
          minHeight: "min(100vw, 100%)", /* square-ish on mobile, capped to viewport */
          zIndex: 2,
        }}
      >
        {/* Desktop: force 100vh */}
        <style>{`
          @media (min-width: 768px) {
            .panel-b-inner { height: 100vh; }
          }
          .panel-b-inner { min-height: 56vw; position: relative; }
        `}</style>
        <div className="panel-b-inner">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={panelImage}
            alt="Eyrion WordPress platform showcase"
            loading="lazy"
            decoding="async"
            style={{ opacity: 0.9 }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)" }}
          />

          {/* Grid dots — hidden on very small screens */}
          <div ref={gridRef} className="absolute inset-0 hidden sm:block">
            {GRID_DOTS.map((d, i) => <CrosshairDot key={i} top={d.top} left={d.left} />)}
            <div className="absolute inset-0 pointer-events-none">
              {["18%", "57%", "88%"].map((top, i) => (
                <div key={i} className="absolute left-0 right-0 border-t border-white/[0.06]" style={{ top }} />
              ))}
              {["9%", "25%", "50%", "75%", "91%"].map((left, i) => (
                <div key={i} className="absolute top-0 bottom-0 border-l border-white/[0.06]" style={{ left }} />
              ))}
            </div>
          </div>

          {/*
            Badges:
            - Desktop: absolute-positioned as before
            - Mobile: flex row wrapping centered at bottom of panel
          */}
          <div ref={badgesRef} className="absolute inset-0">
            {/* Desktop badges */}
            <div className="hidden md:block">
              {BADGES.map((b, i) => (
                <div key={i} className="absolute pointer-events-none" style={{ top: b.top, left: b.left }}>
                  <div className="bg-[#1c1c1c]/90 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2 whitespace-nowrap">
                    <span className="text-white/80 text-[11px] font-semibold tracking-[0.14em] uppercase">{b.label}</span>
                    <span className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center text-white/70 text-[10px] flex-shrink-0">+</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile / tablet badges — bottom row */}
            <div className="md:hidden absolute bottom-5 left-0 right-0 flex flex-wrap justify-center gap-2 px-4">
              {BADGES.map((b, i) => (
                <div key={i} className="bg-[#1c1c1c]/90 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-1.5">
                  <span className="text-white/80 text-[10px] font-semibold tracking-[0.12em] uppercase">{b.label}</span>
                  <span className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center text-white/70 text-[9px] flex-shrink-0">+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}