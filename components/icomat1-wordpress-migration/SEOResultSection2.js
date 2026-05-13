"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BG = "#162D24";
const ICON_INK = "#162D24";
const HEADING = "rgba(255,255,255,0.96)";
const BODY = "rgba(255,255,255,0.78)";
const CARD_TEXT = "rgba(22, 45, 36, 0.88)";
const LIME_BOX = "#DFFB85";

const FEATURES = [
  {
    id: "post-types",
    title: "Post types",
    body: "Blog posts, pages, custom post types, and WooCommerce products",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="5" width="16" height="4" rx="1" stroke={ICON_INK} strokeWidth="1.75" />
        <rect x="4" y="10" width="16" height="4" rx="1" stroke={ICON_INK} strokeWidth="1.75" />
        <rect x="4" y="15" width="10" height="4" rx="1" stroke={ICON_INK} strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    id: "media",
    title: "Media library",
    body: "All images, videos, and uploaded media files",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke={ICON_INK} strokeWidth="1.75" />
        <path
          d="M3 16l5.5-5.5 4 4L21 8"
          stroke={ICON_INK}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 13l4 3v-6l-4 3z"
          fill={ICON_INK}
          stroke={ICON_INK}
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "content",
    title: "Content",
    body: "Page content, comments, links, and on-site data",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 8l7-4 7 4v9l-7 4-7-4V8z"
          stroke={ICON_INK}
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path d="M12 4v9M5 8l7 5 7-5" stroke={ICON_INK} strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    id: "users",
    title: "Users",
    body: "User accounts, roles, and login information",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="3.5" stroke={ICON_INK} strokeWidth="1.75" />
        <path
          d="M5 20v-1a4 4 0 014-4h6a4 4 0 014 4v1"
          stroke={ICON_INK}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function FeatureTile({ feature, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        delay: index * 0.08,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "clamp(14px, 2vw, 18px)",
        textAlign: "left",
      }}
    >
      <div
        style={{
          width: "clamp(76px, 7.5vw, 96px)",
          height: "clamp(76px, 7.5vw, 96px)",
          borderRadius: "16px",
          backgroundColor: LIME_BOX,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {feature.icon}
      </div>
      <h3
        style={{
          margin: 0,
          fontWeight: 700,
          fontSize: "clamp(1.12rem, 1.35vw, 1.28rem)",
          color: HEADING,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
        }}
      >
        {feature.title}
      </h3>
      <p
        style={{
          margin: 0,
          fontWeight: 400,
          fontSize: "clamp(0.98rem, 1.1vw, 1.08rem)",
          color: BODY,
          lineHeight: 1.65,
          maxWidth: "28ch",
        }}
      >
        {feature.body}
      </p>
    </div>
  );
}

export default function SEOResultSection2() {
  const introRef = useRef(null);

  useEffect(() => {
    const el = introRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 22 },
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
        backgroundColor: BG,
        boxSizing: "border-box",
        padding: "clamp(64px, 8vw, 112px) clamp(24px, 6vw, 100px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          ref={introRef}
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 5vw, 56px)",
            opacity: 0,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontWeight: 700,
              fontSize: "clamp(2rem, 3.8vw, 3.1rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: HEADING,
            }}
          >
            WordPress Migration Made Easy with Eyrion
          </h2>
          <p
            style={{
              margin: "clamp(16px, 2.2vw, 22px) auto 0",
              maxWidth: "72ch",
              color: BODY,
              fontSize: "clamp(1.02rem, 1.15vw, 1.12rem)",
              lineHeight: 1.75,
            }}
          >
            Moving your WordPress website to a new hosting environment can come with technical
            challenges, downtime risks, and complex configuration steps. From server setup to
            troubleshooting unexpected issues, the process can quickly become overwhelming.
          </p>
          <p
            style={{
              margin: "clamp(12px, 1.8vw, 16px) auto 0",
              maxWidth: "72ch",
              color: BODY,
              fontSize: "clamp(1.02rem, 1.15vw, 1.12rem)",
              lineHeight: 1.75,
            }}
          >
            That&apos;s why Eyrion handles the entire WordPress migration process for you—so you
            don&apos;t have to deal with the technical workload or potential errors.
          </p>
        </div>

        <div
          style={{
            marginBottom: "clamp(28px, 4vw, 40px)",
            textAlign: "center",
            maxWidth: "920px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h3
            style={{
              margin: "0 0 clamp(10px, 1.5vw, 14px)",
              fontWeight: 700,
              fontSize: "clamp(1.35rem, 2.2vw, 1.85rem)",
              color: HEADING,
              letterSpacing: "-0.02em",
            }}
          >
            How We Do It
          </h3>
          <p
            style={{
              margin: "0 auto",
              maxWidth: "72ch",
              color: BODY,
              fontSize: "clamp(1.02rem, 1.15vw, 1.12rem)",
              lineHeight: 1.72,
            }}
          >
            From full backups to secure data transfers, we migrate your entire WordPress website to
            your new hosting environment with precision and care, including:
          </p>
        </div>

        <div
          className="migration-easy-features"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "clamp(24px, 3vw, 40px)",
            marginBottom: "clamp(48px, 6vw, 72px)",
          }}
        >
          {FEATURES.map((f, i) => (
            <FeatureTile key={f.id} feature={f} index={i} />
          ))}
        </div>

        <div
          className="migration-easy-split"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "clamp(28px, 4vw, 48px)",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "clamp(20px, 2.2vw, 28px)",
              padding: "clamp(28px, 4vw, 40px) clamp(24px, 3vw, 36px)",
              boxShadow: "0 12px 48px rgba(0, 0, 0, 0.28)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <p
              style={{
                margin: 0,
                color: CARD_TEXT,
                fontSize: "clamp(1.02rem, 1.15vw, 1.12rem)",
                lineHeight: 1.78,
              }}
            >
              This ensures that no important data is lost during the migration process. When we
              move your WordPress website into a new environment, everything is transferred
              securely and fully intact.
            </p>
          </div>

          <div style={{ textAlign: "left", paddingTop: "clamp(4px, 1vw, 8px)" }}>
            <h3
              style={{
                margin: "0 0 clamp(14px, 2vw, 18px)",
                fontWeight: 700,
                fontSize: "clamp(1.2rem, 1.8vw, 1.45rem)",
                color: HEADING,
                letterSpacing: "-0.02em",
              }}
            >
              More Good News
            </h3>
            <p
              style={{
                margin: 0,
                color: BODY,
                fontSize: "clamp(1.02rem, 1.15vw, 1.12rem)",
                lineHeight: 1.78,
              }}
            >
              Your search engine rankings are protected during migration. Eyrion ensures SEO
              elements such as metadata, URL structures, and permalinks are properly preserved and
              optimized during the move.
            </p>
            <p
              style={{
                margin: "clamp(14px, 2vw, 18px) 0 0",
                color: BODY,
                fontSize: "clamp(1.02rem, 1.15vw, 1.12rem)",
                lineHeight: 1.78,
              }}
            >
              To provide complete peace of mind, we also create secure backups of your entire
              website before starting the migration process. This ensures your WordPress website
              remains safe, stable, and fully recoverable at every stage of the transition.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .migration-easy-features {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 900px) {
          .migration-easy-split {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .migration-easy-features {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
