"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudyDeviceGallerySection({ caseStudy }) {
  const sectionRef = useRef(null);
  const galleryTitle =
    caseStudy.showcase?.galleryTitle ?? `${caseStudy.name} across devices`;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".cs-gallery-item").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 24, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            delay: (i % 4) * 0.06,
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          },
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const featured = caseStudy.gallery.filter((item) => item.featured);
  const rest = caseStudy.gallery.filter((item) => !item.featured);

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        backgroundColor: "#0f241d",
        padding: "clamp(72px, 9vw, 120px) clamp(24px, 6vw, 96px)",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(36px, 4.5vw, 56px)", textAlign: "center" }}>
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(197, 233, 56, 0.85)",
            }}
          >
            Project gallery
          </p>
          <h2
            style={{
              margin: 0,
              color: "#ffffff",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            {galleryTitle}
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "clamp(18px, 2.2vw, 28px)",
            marginBottom: "clamp(18px, 2.2vw, 28px)",
          }}
          className="cs-gallery-featured"
        >
          {featured.map((item) => (
            <figure
              key={item.src}
              className="cs-gallery-item"
              style={{
                margin: 0,
                padding: "clamp(16px, 2vw, 24px)",
                borderRadius: "clamp(18px, 2vw, 24px)",
                backgroundColor: "#1A3329",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </figure>
          ))}
        </div>

        <div
          className="cs-gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "clamp(14px, 1.6vw, 20px)",
          }}
        >
          {rest.map((item) => (
            <figure
              key={item.src}
              className="cs-gallery-item"
              style={{
                margin: 0,
                padding: "clamp(12px, 1.4vw, 18px)",
                borderRadius: "clamp(14px, 1.6vw, 18px)",
                backgroundColor: "#162D24",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cs-gallery-featured { grid-template-columns: 1fr !important; }
          .cs-gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .cs-gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
