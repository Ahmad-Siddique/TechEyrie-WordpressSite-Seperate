"use client";

const PLUGIN_FEATURES = [
  {
    id: "plugins",
    title: "Trusted WordPress Security Plugins and Tools",
    body: "At our WordPress agency, we only implement carefully vetted and trusted plugins for your website. Every plugin is thoroughly reviewed, tested, and approved to meet strict WordPress security standards before being added to your site. If it doesn't meet our criteria, it simply doesn't get installed.",
    icon: "plug",
  },
  {
    id: "audits",
    title: "Regular Security and Plugin Audits",
    body: "Security doesn't stop after installation. We perform ongoing WordPress security audits to ensure all plugins remain safe, updated, and free from vulnerabilities. Continuous monitoring and updates help protect your website from emerging threats and malicious activity.",
    icon: "shield",
  },
  {
    id: "beyond",
    title: "More Than a One-Time Security Check",
    body: "When you choose our WordPress security services, you get more than a basic audit or one-time fix. We take a proactive, long-term approach to WordPress website security—monitoring, maintaining, and protecting your site continuously, 24/7, from every possible angle. Your business website stays secure, stable, and fully protected at all times.",
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
            maxWidth: "28ch",
          }}
        >
          Only Safe and Secure WordPress Security Plugins
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
              One of the biggest advantages of WordPress is the vast ecosystem of plugins
              that allow you to extend and customize your website with ease. Whether
              it&apos;s contact forms, multilingual support, SEO tools, or marketing
              analytics, there&apos;s a plugin for almost every functionality—including
              WordPress security plugins.
            </p>

            <p
              style={{
                margin: "1rem 0 0",
                color: "rgba(16,40,30,0.92)",
                fontSize: "clamp(1rem, 1.08vw, 1.12rem)",
                lineHeight: 1.8,
                maxWidth: "74ch",
                fontWeight: 600,
              }}
            >
              However, flexibility comes with risk.
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
              Not every plugin is built with safety in mind. Some poorly maintained or
              malicious plugins can introduce serious vulnerabilities and become an
              entry point for hackers. Installing unverified tools can put your entire
              WordPress website—and your users&apos; data—at risk.
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
