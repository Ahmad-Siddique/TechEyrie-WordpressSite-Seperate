"use client";

const PLUGIN_FEATURES = [
  {
    id: "plugins",
    title: "Trusted WordPress security plugins and tools",
    body: "At Eyrion, we only ever use selected trusted plugins for your WordPress website. We conduct rigorous checks on any potential plugins to ensure they meet our high standards of security for your WordPress site. If they're anything less than perfect, we won't use them for your site.",
    icon: "plug",
  },
  {
    id: "audits",
    title: "Regular safety audits",
    body: "We also conduct regular WordPress security audits to ensure all your plugins are safe and uncompromised. Our regular updates also keep your plugins secure and protected from any malicious hackers.",
    icon: "shield",
  },
  {
    id: "beyond",
    title: "Beyond a typical one-time WordPress security check",
    body: "When you choose Eyrion for your WordPress security, you can rest easy knowing we go above and beyond to protect your business' website from every angle, with a proactive approach, and an ongoing basis — 24/7.",
    icon: "check",
  },
];

function FeatureIcon({ name }) {
  const stroke = "#155E46";
  const size = 44;
  const sw = 1.65;
  if (name === "plug") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 22v-4M9 8V2M15 8V2M18 8v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8h12Z"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "shield") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinejoin="round"
        />
        <path
          d="m9 12 2.5 2.5L15 10"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth={sw} />
      <path
        d="m9 12 2.5 2.5L16 10"
        stroke={stroke}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ConversionCtaSection() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#F2EEE8",
        padding: "clamp(72px, 8vw, 116px) clamp(24px, 6vw, 88px)",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#155E46",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            fontSize: "clamp(2rem, 3.6vw, 3.4rem)",
            maxWidth: "22ch",
          }}
        >
          Only safe and secure WordPress security plugins
        </h2>

        <div
          className="security-conversion-cta-grid"
          style={{
            marginTop: "clamp(28px, 3.5vw, 44px)",
            display: "grid",
            gridTemplateColumns: "1fr minmax(280px, 420px)",
            gap: "clamp(24px, 4vw, 56px)",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: "rgba(16,40,30,0.86)",
                fontSize: "clamp(1rem, 1.08vw, 1.12rem)",
                lineHeight: 1.8,
                maxWidth: "74ch",
              }}
            >
              One of the best features of WordPress is the variety of plugins
              available to customize your website.
            </p>

            <p
              style={{
                margin: "1rem 0 0",
                color: "rgba(16,40,30,0.86)",
                fontSize: "clamp(1rem, 1.08vw, 1.12rem)",
                lineHeight: 1.8,
                maxWidth: "74ch",
              }}
            >
              From contact forms and language features to marketing analytics and
              SEO functions, there is a plugin for virtually everything you need.
              There are even plugins for WordPress security.
            </p>

            <p
              style={{
                margin: "1rem 0 0",
                color: "rgba(16,40,30,0.86)",
                fontSize: "clamp(1rem, 1.08vw, 1.12rem)",
                lineHeight: 1.8,
                maxWidth: "74ch",
              }}
            >
              But while plugins are great for customizing your site, they should
              be approached with caution.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(21,94,70,0.12)",
              borderRadius: "18px",
              padding: "clamp(20px, 2.2vw, 28px)",
              boxShadow: "0 16px 36px rgba(21, 94, 70, 0.08)",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "rgba(16,40,30,0.9)",
                fontSize: "clamp(1rem, 1.08vw, 1.12rem)",
                lineHeight: 1.8,
                fontWeight: 500,
              }}
            >
              Not all plugins are reliable, and some unscrupulous people often use
              them to hack into your site and threaten your WordPress security. If
              you install an unsafe plugin, you could put your and your
              customers&apos; data and security at serious risk.
            </p>
          </div>
        </div>

        <div
          className="security-plugin-feature-rows"
          style={{
            marginTop: "clamp(56px, 7vw, 88px)",
            paddingTop: "clamp(40px, 5vw, 56px)",
            borderTop: "1px solid rgba(21, 94, 70, 0.12)",
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "clamp(28px, 4vw, 40px) clamp(20px, 3vw, 32px)",
          }}
        >
          {PLUGIN_FEATURES.map((f) => (
            <div
              key={f.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "clamp(16px, 2.2vw, 20px)",
              }}
            >
              <div
                style={{
                  width: "clamp(80px, 9vw, 96px)",
                  height: "clamp(80px, 9vw, 96px)",
                  borderRadius: "18px",
                  backgroundColor: "rgba(21, 94, 70, 0.1)",
                  border: "1px solid rgba(21, 94, 70, 0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FeatureIcon name={f.icon} />
              </div>
              <h3
                style={{
                  margin: 0,
                  color: "#155E46",
                  fontWeight: 700,
                  fontSize: "clamp(1.1rem, 1.35vw, 1.35rem)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  maxWidth: "min(100%, 22ch)",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "rgba(16,40,30,0.82)",
                  fontSize: "clamp(0.95rem, 1.05vw, 1.05rem)",
                  lineHeight: 1.75,
                  maxWidth: "min(100%, 48ch)",
                }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .security-conversion-cta-grid {
            grid-template-columns: 1fr !important;
          }
          .security-plugin-feature-rows {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
