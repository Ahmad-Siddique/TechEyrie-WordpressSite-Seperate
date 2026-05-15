"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    number: "1",
    title: "Keyword research",
    body: "Work together with our WordPress SEO consulting agency to understand target market, target keywords, goals and objectives for WordPress SEO optimization. Our top SEO professionals conduct in-depth analyses to develop effective strategies.",
  },
  {
    number: "2",
    title: "Configuration",
    body: "Our expert WordPress SEO consultants implements best practices for each website. We configure meta titles, alt tags, robots.txt, sitemap.xml, and more - to ensure your site benefits from professional WordPress SEO services. Our WordPress SEO firm also provides ongoing WordPress SEO support to maintain optimal performance.",
  },
  {
    number: "3",
    title: "Structure optimization",
    body: "As the best WordPress SEO agency, we always build and optimize our WordPress and WooCommerce websites for a proper URL and permalink structure so content is properly organized by topics and categories. Redirects can be added to maintain SEO value from a previous website. Our WordPress SEO company specializes in optimizing WordPress for SEO, ensuring a seamless user experience.",
  },
  {
    number: "4",
    title: "Social optimization",
    body: "Fundamental social optimization is implemented so your website looks great across all platforms when links are shared, ensuring the proper meta information is attributed, a key component of effective SEO services. As part of our WordPress SEO specialist services, we enhance your site's social presence to complement our SEO solutions.",
  },
  {
    number: "5",
    title: "Analytics & tracking",
    body: "We set up Google Analytics and tracking as part of our SEO support services, allowing you to see every visitor, every metric, every conversion, and make better-informed decisions about your website, marketing, and business or organization. Our WordPress SEO monthly packages include detailed reporting to keep you informed.",
  },
];

// ─── Number Badge ─────────────────────────────────────────────────────────────
function NumberBadge({ number }) {
  return (
    <div
            style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "clamp(58px, 5.5vw, 76px)",
        height: "clamp(58px, 5.5vw, 76px)",
        borderRadius: "16px",
        backgroundColor: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.28)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontWeight: 600,
          fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
          color: "#ffffff",
          lineHeight: 1,
        }}
      >
        {number}
      </span>
    </div>
  );
}

// ─── Benefit Item ─────────────────────────────────────────────────────────────
function BenefitItem({ item, index }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(16px, 2vw, 24px)",
        paddingBottom: index < ITEMS.length - 1 ? "clamp(52px, 7vw, 96px)" : 0,
        borderBottom:
          index < ITEMS.length - 1
            ? "1px solid rgba(255,255,255,0.14)"
            : "none",
        marginBottom: index < ITEMS.length - 1 ? "clamp(52px, 7vw, 96px)" : 0,
        // Start invisible — GSAP animates to opacity:1
        opacity: 0,
      }}
    >
      <NumberBadge number={item.number} />

      <h3
        style={{
          fontWeight: 600,
          fontSize: "clamp(1.82rem, 2.6vw, 2.4rem)",
          color: "rgba(255,255,255,0.95)",
          margin: 0,
          lineHeight: 1.18,
          letterSpacing: "-0.01em",
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          fontWeight: 400,
          fontSize: "clamp(1.18rem, 1.35vw, 1.3rem)",
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.75,
          margin: 0,
          maxWidth: "740px",
        }}
      >
        {item.body}
      </p>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function BenefitsSection() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Title entrance animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -24 },
      {
        opacity: 1,
        x: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
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
        backgroundColor: "#162D24",
        boxSizing: "border-box",
        padding: "clamp(48px, 10vw, 120px) clamp(16px, 4vw, 24px)",
      }}
    >
      <div
        className="benefits-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          // ✅ REQUIRED: align-items flex-start so sticky works in flex container
          alignItems: "flex-start",
          gap: "clamp(48px, 7vw, 112px)",
        }}
      >

        {/* ── LEFT COLUMN — sticky ── */}
        <div
          className="benefits-sidebar"
          style={{
            flex: "0 0 clamp(240px, 34%, 420px)",
            // ✅ THE FIX: CSS sticky instead of GSAP y-scrub
            // Adjust `top` to your navbar height so it doesn't hide behind it
            // ✅ REQUIRED: collapses item to content height so sticky activates
            alignSelf: "flex-start",
          }}
        >
          <h2
            ref={titleRef}
            className="benefits-title"
            style={{
              fontWeight: 600,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              margin: 0,
              // Start invisible — GSAP animates to opacity:1
              opacity: 0,
            }}
          >
            SEO optimization for WordPress
          </h2>
          <p
            style={{
              margin: "18px 0 0",
              fontWeight: 400,
              fontSize: "clamp(1.02rem, 1.2vw, 1.15rem)",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.7,
            }}
          >
            All websites undergo a WordPress SEO optimization service audit by
            our WordPress SEO experts to ensure you are fully optimized for
            Google search. Our WordPress SEO specialist services include
            comprehensive assessments to enhance your site's performance.
          </p>
        </div>

        {/* ── RIGHT COLUMN — scrolls normally ── */}
        <div
          className="benefits-content"
          style={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {ITEMS.map((item, i) => (
            <BenefitItem key={item.number} item={item} index={i} />
          ))}
        </div>

      </div>

      {/* Responsive: stack columns on small screens */}
    </section>
  );
}