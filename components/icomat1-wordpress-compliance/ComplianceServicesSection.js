"use client";

const GREEN = "#155E46";
const SECTION_BG = "#ffffff";
const CARD_BG = "#EEF6E8";
const BUTTON_BG = "#C4E84A";
const BUTTON_TEXT = "#14291a";
const BADGE_KNOCKOUT = "#ffffff";
const BODY = "rgba(22, 35, 30, 0.82)";
const SUBTITLE = "rgba(22, 35, 30, 0.68)";

const iconWrap = {
  width: "52px",
  height: "52px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "clamp(16px, 2vw, 22px)",
  color: GREEN,
};

function IconAda() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M12 10h24a2 2 0 012 2v26a2 2 0 01-2 2H12a2 2 0 01-2-2V12a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M16 16h16M16 21h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="30" r="2.75" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M24 32.75v5M20.5 35.25h7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconGdpr() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect
        x="14"
        y="20"
        width="20"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M18 20v-3a6 6 0 0112 0v3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="31" cy="15" r="6" fill={BADGE_KNOCKOUT} stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M29 15l1.5 1.5L34 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPci() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect
        x="10"
        y="16"
        width="28"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M10 22h28" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="26" width="10" height="3" rx="1" fill="currentColor" opacity="0.35" />
      <circle cx="34" cy="12" r="6" fill={BADGE_KNOCKOUT} stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M32 12l1.5 1.5L37 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SERVICES = [
  {
    key: "ada",
    title: "ADA compliance",
    description:
      "We run accessibility audits and implement third-party ADA infrastructure to help you ensure WordPress ADA compliance.",
    Icon: IconAda,
  },
  {
    key: "gdpr",
    title: "GDPR compliance",
    description:
      "Work with an expert team to get WordPress GDPR explained — with the what, why, and how.",
    Icon: IconGdpr,
  },
  {
    key: "pci",
    title: "PCI compliance",
    description:
      "Partner with seasoned professionals to understand and implement PCI DSS for your WordPress site—covering the essentials of what, why, and how.",
    Icon: IconPci,
  },
];

export default function ComplianceServicesSection({ onLearnMore }) {
  return (
    <section
      className="compliance-services-section"
      aria-labelledby="compliance-services-heading"
      style={{
        width: "100%",
        backgroundColor: SECTION_BG,
        boxSizing: "border-box",
        padding: "clamp(64px, 8vw, 112px) clamp(24px, 5vw, 100px)",
      }}
    >
      <div style={{ maxWidth: "min(1240px, 100%)", margin: "0 auto" }}>
        <h2
          id="compliance-services-heading"
          style={{
            margin: 0,
            textAlign: "center",
            fontWeight: 700,
            fontSize: "clamp(1.75rem, 3.2vw, 2.65rem)",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            color: GREEN,
          }}
        >
          Explore our WordPress compliance services
        </h2>
        <p
          style={{
            margin: "clamp(12px, 2vw, 18px) auto 0",
            textAlign: "center",
            fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
            color: SUBTITLE,
            maxWidth: "42ch",
          }}
        >
          This is WordPress at its best.
        </p>

        <div
          className="compliance-services-grid"
          style={{
            marginTop: "clamp(40px, 5vw, 56px)",
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "clamp(20px, 3vw, 32px)",
          }}
        >
          {SERVICES.map(({ key, title, description, Icon }) => (
            <article
              key={key}
              style={{
                backgroundColor: CARD_BG,
                borderRadius: "clamp(18px, 2.2vw, 24px)",
                padding: "clamp(24px, 3.2vw, 36px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                minHeight: "100%",
                boxSizing: "border-box",
              }}
            >
              <div style={iconWrap}>
                <Icon />
              </div>
              <h3
                style={{
                  margin: 0,
                  fontWeight: 700,
                  fontSize: "clamp(1.2rem, 1.8vw, 1.45rem)",
                  color: GREEN,
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  margin: "clamp(12px, 1.8vw, 16px) 0 0",
                  flex: 1,
                  fontSize: "clamp(0.95rem, 1.12vw, 1.08rem)",
                  lineHeight: 1.65,
                  color: BODY,
                }}
              >
                {description}
              </p>
              <button
                type="button"
                onClick={onLearnMore}
                style={{
                  marginTop: "clamp(22px, 3vw, 28px)",
                  padding: "12px 26px",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: onLearnMore ? "pointer" : "default",
                  backgroundColor: BUTTON_BG,
                  color: BUTTON_TEXT,
                  fontWeight: 600,
                  fontSize: "clamp(0.9rem, 1.05vw, 1rem)",
                  boxShadow: "0 1px 0 rgba(255,255,255,0.35) inset",
                }}
              >
                Learn more
              </button>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .compliance-services-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .compliance-services-grid button:focus-visible {
          outline: 2px solid ${GREEN};
          outline-offset: 3px;
        }
        .compliance-services-grid button:hover {
          filter: brightness(0.97);
        }
        .compliance-services-section h2,
        .compliance-services-section h3 {
          font-weight: 700 !important;
        }
        .compliance-services-section .compliance-services-grid button {
          font-weight: 600 !important;
        }
      `}</style>
    </section>
  );
}
