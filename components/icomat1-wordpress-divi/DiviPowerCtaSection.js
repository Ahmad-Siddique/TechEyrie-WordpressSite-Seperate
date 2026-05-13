"use client";

const GREEN = "#155E46";
const LIME = "#C4E84A";
const SECTION_BG = "#ffffff";
const BODY = "rgba(22, 35, 30, 0.82)";

export default function DiviPowerCtaSection({ onQuoteClick }) {
  return (
    <section
      className="divi-power-cta-section"
      style={{
        width: "100%",
        backgroundColor: SECTION_BG,
        boxSizing: "border-box",
        padding: "clamp(72px, 9vw, 120px) clamp(24px, 5vw, 72px)",
      }}
    >
      <div
        style={{
          maxWidth: "min(820px, 100%)",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: GREEN,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            fontSize: "clamp(2rem, 4vw, 3.15rem)",
          }}
        >
          The full power of WordPress Divi at your fingertips
        </h2>

        <h3
          style={{
            margin: "clamp(16px, 2.2vw, 24px) auto 0",
            maxWidth: "52ch",
            color: GREEN,
            fontWeight: 600,
            fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
            lineHeight: 1.45,
            letterSpacing: "-0.015em",
          }}
        >
          Our US-based in-house team of Divi theme experts at Eyrion can help you apply its
          amazing potential to your WordPress site.
        </h3>

        <p
          style={{
            margin: "clamp(22px, 3vw, 32px) auto 0",
            maxWidth: "68ch",
            color: BODY,
            fontSize: "clamp(1rem, 1.12vw, 1.125rem)",
            lineHeight: 1.78,
            textAlign: "center",
          }}
        >
          Whether you&apos;re looking to transition your existing website or start a new one, we
          simply cannot recommend Divi enough. Eyrion is the best development team to build and
          host your WordPress Divi website. Our team includes seasoned Divi WordPress developers
          who bring your vision to life with precision and creativity. We&apos;ve explored some of
          the theme&apos;s most appealing features. Between Divi&apos;s formidable capabilities and
          Eyrion&apos;s years of experience, we can help you create the site of your dreams by
          utilizing the power of the Divi theme for WordPress.
        </p>

        <div style={{ marginTop: "clamp(32px, 4vw, 44px)" }}>
          <button
            type="button"
            onClick={onQuoteClick}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0,
              padding: "6px 6px 6px clamp(22px, 3vw, 28px)",
              borderRadius: "9999px",
              border: "none",
              cursor: onQuoteClick ? "pointer" : "default",
              backgroundColor: GREEN,
              boxShadow: "0 8px 28px rgba(21, 94, 70, 0.22)",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "clamp(1rem, 1.15vw, 1.1rem)",
                letterSpacing: "0.01em",
                paddingRight: "clamp(14px, 2vw, 20px)",
              }}
            >
              Get a Quote
            </span>
            <span
              aria-hidden="true"
              style={{
                width: "clamp(44px, 5vw, 50px)",
                height: "clamp(44px, 5vw, 50px)",
                borderRadius: "50%",
                backgroundColor: LIME,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke={GREEN}
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <style>{`
        .divi-power-cta-section h2 {
          font-weight: 700 !important;
        }
        .divi-power-cta-section h3 {
          font-weight: 600 !important;
        }
        .divi-power-cta-section button:focus-visible {
          outline: 2px solid ${GREEN};
          outline-offset: 3px;
        }
        .divi-power-cta-section button:hover {
          filter: brightness(1.05);
        }
      `}</style>
    </section>
  );
}
