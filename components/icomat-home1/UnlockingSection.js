"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOME1_UNLOCKING_IMAGE_CARDS } from "../../lib/home1Images";

gsap.registerPlugin(SplitText, ScrollTrigger);

// ── SVG Icons ───────────────────────────────────────────────────
const IconWaves = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
    <path d="M4 12c3-3 6-3 9 0s6 3 9 0 6-3 9 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 18c3-3 6-3 9 0s6 3 9 0 6-3 9 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 24c3-3 6-3 9 0s6 3 9 0 6-3 9 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconLayers = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
    <path d="M18 5L32 12.5L18 20L4 12.5L18 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M4 19L18 26.5L32 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 25.5L18 33L32 25.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconBolt = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
    <path d="M20 4L8 20h10l-2 12L30 16H20L20 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);
const IconTarget = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="13" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="18" cy="18" r="7" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="18" cy="18" r="2" fill="currentColor"/>
    <path d="M18 5V2M18 34v-3M5 18H2M34 18h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconCog = () => (
  <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M18 4v4M18 28v4M4 18h4M28 18h4M7.5 7.5l2.8 2.8M25.7 25.7l2.8 2.8M7.5 28.5l2.8-2.8M25.7 10.3l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// ── Card data ───────────────────────────────────────────────────
const CARDS = [
  {
    id: "build",
    eyebrow: "Premier web design & development solutions in Qatar",
    title: "Elite digital providers in Doha",
    desc: "As a premier WordPress authority, we deliver high-performance, professional, and fully responsive web ecosystems engineered for your specific goals. From senior technical architects to creative design experts, our team crafts sophisticated digital experiences that elevate your brand's prestige.",
    icon: null,
    isHero: true,
  },
  {
    id: "steered",
    title: "Experienced WordPress designers & developers",
    desc: "Our team of talented designers, developers, and WordPress specialists creates innovative, high-performance websites for businesses of all sizes. We collaborate with companies, agencies, and organizations across the Middle East to deliver custom WordPress solutions that drive results.",
    icon: <IconWaves />,
  },
  {
    id: "lighter",
    title: "Custom WordPress web design services",
    desc: "As an elite design studio, we specialize in engineering custom websites that mirror your unique brand identity. Our expert design team ensures every project is visually breathtaking, technically superior, and meticulously optimized for peak performance.",
    icon: <IconLayers />,
  },
  {
    id: "speed",
    title: "Ecommerce & WooCommerce development",
    desc: "We deliver advanced eCommerce solutions, including WooCommerce setup and custom development tailored to your business. Our WordPress developers create smooth, user-friendly online stores designed to improve the shopping experience and increase conversions.",
    icon: <IconBolt />,
  },
  {
    id: "precision",
    title: "Comprehensive managed web services",
    desc: "Eyrion provides elite managed solutions, ensuring your WordPress ecosystem remains impenetrable, current, and performance-optimized. We oversee every technical detail - from proactive maintenance to speed enhancements - allowing you to focus exclusively on scaling your enterprise.",
    icon: <IconTarget />,
  },
  {
    id: "integrated",
    title: "Consulting & strategic WordPress solutions",
    desc: "We offer expert consulting to help businesses make the right decisions in the digital space. Whether you need a clear WordPress strategy or guidance for building a new website, our team provides practical insights and direction every step of the way.",
    icon: <IconCog />,
  },
];

// ── Image link cards data ───────────────────────────────────────
const IMAGE_CARDS = HOME1_UNLOCKING_IMAGE_CARDS;

// ── Feature card ────────────────────────────────────────────────
function FeatureCard({ card, animRef }) {
  const cardRef = useRef(null);

  const setRef = (el) => {
    cardRef.current = el;
    if (animRef) animRef(el);
  };

  useEffect(() => {
    if (card.isHero) return;
    const el = cardRef.current;
    if (!el) return;

    const iconEl  = el.querySelector(".card-icon");
    const titleEl = el.querySelector(".card-title");
    const descEl  = el.querySelector(".card-desc");

    const onEnter = () => {
      gsap.to(el, { backgroundColor: "#162D24", duration: 0.45, ease: "power1.inOut" });
      gsap.to([iconEl, titleEl].filter(Boolean), {
        color: "#ffffff", duration: 0.6, ease: "power1.inOut", stagger: 0.06,
      });
      if (descEl) gsap.to(descEl, { color: "rgba(255,255,255,0.58)", duration: 0.6, ease: "power1.inOut" });
    };

    const onLeave = () => {
      gsap.to(el, { backgroundColor: "#efefed", duration: 0.65, ease: "power1.inOut" });
      gsap.to([iconEl, titleEl].filter(Boolean), {
        color: "rgba(0,0,0,0.75)", duration: 0.6, ease: "power1.inOut", stagger: 0.05,
      });
      if (descEl) gsap.to(descEl, { color: "rgba(0,0,0,0.42)", duration: 0.6, ease: "power1.inOut" });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [card.isHero]);

  // ── Hero card ────────────────────────────────────────────────
  if (card.isHero) {
    return (
      <div
        ref={setRef}
        className="unlocking-feature-card"
        style={{
          background: "#162D24",
          borderRadius: "18px",
          padding: "clamp(28px, 3.5vw, 44px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "280px",
        }}
      >
        <div>
          <p style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)",
            fontWeight: 600,
            marginBottom: "8px",
          }}>
            {card.eyebrow}
          </p>
          <p style={{
            color: "rgba(255,255,255,0.88)",
            fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)",
            fontWeight: 500,
            lineHeight: 1.4,
            marginBottom: "10px",
          }}>
            {card.title}
          </p>
          {card.desc && (
            <p style={{
              color: "rgba(255,255,255,0.62)",
              fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)",
              fontWeight: 400,
              lineHeight: 1.6,
              margin: 0,
            }}>
              {card.desc}
            </p>
          )}
        </div>
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            color: "rgba(255,255,255,0.7)",
            fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)",
            fontWeight: 600,
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
          onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
        >
          Learn more
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    );
  }

  // ── Feature card ─────────────────────────────────────────────
  return (
    <div
      ref={setRef}
      className="unlocking-feature-card"
      style={{
        background: "#efefed",
        borderRadius: "18px",
        padding: "clamp(28px, 3.5vw, 44px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "280px",
        cursor: "pointer",
        willChange: "background-color",
      }}
    >
      <div className="card-icon" style={{ color: "rgba(0,0,0,0.55)" }}>
        {card.icon}
      </div>
      <div style={{ marginTop: "28px" }}>
        <p
          className="card-title"
          style={{
            color: "rgba(0,0,0,0.82)",
            fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)",
            fontWeight: 500,
            lineHeight: 1.35,
            marginBottom: "10px",
          }}
        >
          {card.title}
        </p>
        {card.desc && (
          <p
            className="card-desc"
            style={{
              color: "rgba(0,0,0,0.42)",
              fontSize: "clamp(0.95rem, 1.1vw, 1.08rem)",
              fontWeight: 400,
              lineHeight: 1.68,
              margin: 0,
            }}
          >
            {card.desc}
          </p>
        )}
      </div>
    </div>
  );
}

// ── Image link card ─────────────────────────────────────────────
function ImageLinkCard({ card, animRef }) {
  const cardRef = useRef(null);
  const imgRef  = useRef(null);
  const pillRef = useRef(null);
  const textRef = useRef(null);
  const cloneRef = useRef(null);
  const tlRef = useRef(null);

  const setRef = (el) => {
    cardRef.current = el;
    if (animRef) animRef(el);
  };

  useEffect(() => {
    const el   = cardRef.current;
    const img  = imgRef.current;
    const pill = pillRef.current;
    const text = textRef.current;
    const clone = cloneRef.current;
    if (!el || !img || !pill || !text || !clone) return;

    const H = pill.offsetHeight;
    gsap.set(clone, { y: H, opacity: 1 });
    gsap.set(text, { y: 0, opacity: 1 });

    const onEnter = () => {
      gsap.to(img,  { scale: 1.04, duration: 0.7, ease: "power2.out" });
      gsap.to(pill, {
        backgroundColor: "rgba(255,255,255,0.96)",
        borderColor: "rgba(255,255,255,1)",
        duration: 0.35,
        ease: "power2.out",
      });
      tlRef.current?.kill();
      tlRef.current = gsap.timeline({ defaults: { duration: 0.52, ease: "power3.inOut" } });
      tlRef.current.to(text, { y: -H }, 0).to(clone, { y: 0 }, 0);
    };
    const onLeave = () => {
      gsap.to(img,  { scale: 1,    duration: 0.7, ease: "power2.inOut" });
      gsap.to(pill, {
        backgroundColor: "rgba(255,255,255,0.12)",
        borderColor: "rgba(255,255,255,0.34)",
        duration: 0.35,
        ease: "power2.out",
      });
      tlRef.current?.kill();
      tlRef.current = gsap.timeline({ defaults: { duration: 0.48, ease: "power3.inOut" } });
      tlRef.current.to(clone, { y: H }, 0).to(text, { y: 0 }, 0);
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      tlRef.current?.kill();
    };
  }, []);

  return (
    <a
      ref={setRef}
      href={card.href}
      className="unlocking-image-card"
    >
      {/* Background image */}
      <img
        ref={imgRef}
        src={card.src}
        alt={card.alt}
        loading="lazy"
        decoding="async"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          transformOrigin: "center top",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.22)",
          pointerEvents: "none",
        }}
      />

      {/* Frosted pill label — centered */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          ref={pillRef}
          className="unlocking-image-pill"
          style={{
            position: "relative",
            overflow: "hidden",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.34)",
            borderRadius: "38px",
            padding: "clamp(18px, 4vw, 36px) clamp(22px, 5vw, 46px)",
            fontSize: "clamp(10px, 2.5vw, 12px)",
            fontWeight: 300,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.3)",
            lineHeight: 1.2,
            maxWidth: "min(92%, 100%)",
          }}
        >
          <span
            ref={textRef}
            className="unlocking-pill-label"
            style={{
              display: "block",
              color: "#ffffff",
              whiteSpace: "nowrap",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            {card.label}
          </span>
          <span
            ref={cloneRef}
            aria-hidden="true"
            className="unlocking-pill-label"
            style={{
              display: "block",
              color: "#101010",
              whiteSpace: "nowrap",
              position: "absolute",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            {card.label}
          </span>
        </div>
      </div>
    </a>
  );
}

// ── Section ─────────────────────────────────────────────────────
export default function UnlockingSection() {
  const sectionRef   = useRef(null);
  const headingRef   = useRef(null);
  const gridRef      = useRef(null);
  const imageRowRef  = useRef(null);
  const cardAnimRefs = useRef([]);
  const imgCardRefs  = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Heading: scroll color-fill word by word ──────────────
      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "words" });
        gsap.set(split.words, { color: "rgba(0,0,0,0.1)" });

        split.words.forEach((word) => {
          gsap.to(word, {
            color: "rgba(0,0,0,0.9)",
            ease: "none",
            scrollTrigger: {
              trigger: word,
              start: "top 88%",
              end: "top 55%",
              scrub: 0.8,
            },
          });
        });
      }

      // ── Feature cards: stagger fade-up ──────────────────────
      const cards = cardAnimRefs.current.filter(Boolean);
      gsap.set(cards, { opacity: 0, y: 50 });
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.1,
          });
        },
      });

      // ── Image cards: fade-up ─────────────────────────────────
      const imgCards = imgCardRefs.current.filter(Boolean);
      gsap.set(imgCards, { opacity: 0, y: 40 });
      ScrollTrigger.create({
        trigger: imageRowRef.current,
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.to(imgCards, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.15,
          });
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="unlocking-section">

      {/* ── Heading ───────────────────────────────────────────── */}
      <div className="unlocking-heading-wrap">
        <h2
          ref={headingRef}
          className="unlocking-heading"
          style={{
            fontWeight: 600,
            fontSize: "clamp(2.4rem, 4.5vw, 4.5rem)",
            lineHeight: 1.06,
            letterSpacing: "-0.03em",
            maxWidth: "820px",
            margin: "0 auto",
            color: "rgba(0,0,0,0.1)",
            padding: "0 clamp(4px, 2vw, 12px)",
          }}
        >
          Premier WordPress design and development services in the Middle East.
        </h2>
      </div>

      {/* ── Feature cards grid ────────────────────────────────── */}
      <div ref={gridRef} className="unlocking-cards-grid">
        {CARDS.map((card, i) => (
          <FeatureCard
            key={card.id}
            card={card}
            animRef={(el) => (cardAnimRefs.current[i] = el)}
          />
        ))}
      </div>

      {/* ── Image link row ────────────────────────────────────── */}
      <div ref={imageRowRef} className="unlocking-image-row">
        {IMAGE_CARDS.map((card, i) => (
          <ImageLinkCard
            key={card.id}
            card={card}
            animRef={(el) => (imgCardRefs.current[i] = el)}
          />
        ))}
      </div>

    </section>
  );
}