"use client";

import Link from "next/link";

const PLATFORM_LINKS = [
  "Adobe Business Catalyst to WordPress",
  "Drupal to WordPress",
  "Joomla! to WordPress",
  "Shopify to WordPress",
  "Squarespace to WordPress",
  "Webflow to WordPress",
  "Weebly to WordPress",
  "Wix to WordPress",
];

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
            maxWidth: "26ch",
          }}
        >
          Are you ready to switch to WordPress?
        </h2>

        <p
          style={{
            margin: "clamp(14px, 1.6vw, 18px) 0 0",
            color: "rgba(21,94,70,0.9)",
            fontSize: "clamp(1rem, 1.2vw, 1.18rem)",
            lineHeight: 1.7,
          }}
        >
          Let&apos;s start your website conversion to WordPress.
        </p>

        <div
          className="convert-ready-grid"
          style={{
            marginTop: "clamp(34px, 4vw, 52px)",
            display: "grid",
            gridTemplateColumns: "1fr minmax(320px, 460px)",
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
              Being the owner of a WordPress site offers a lot of opportunities.
              Thanks to the platform&apos;s broad range of tools and features, you
              should be able to turn your existing site into a profitable
              business. Whether you want to grow your blog, sell products online,
              or offer professional services, switching to WordPress is a smart
              move.
              <br />
              <br />
              At Eyrion, we completely re-create sites built on other CMS
              platforms or HTML sites and convert to WordPress.
              <br />
              <br />
              We can even tweak your content and re-design your pages, to convert
              your website to a WordPress theme that looks professional and
              enhances the user experience.
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
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {PLATFORM_LINKS.map((label) => (
                <Link
                  key={label}
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#1A5B46",
                    textDecoration: "underline",
                    fontSize: "clamp(0.92rem, 0.95vw, 1rem)",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      border: "1px solid rgba(21,94,70,0.55)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .convert-ready-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
