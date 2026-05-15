"use client";

import { useCallback, useState } from "react";

const GREEN = "#162D24";
const LIME = "#DFFB85";
const BORDER = "rgba(22, 45, 36, 0.18)";
const LABEL = "#162D24";
const PLACEHOLDER = "rgba(22, 45, 36, 0.45)";

/** Match `SEOResultSection` on icomat1 WordPress service pages */
const FONT_H2 = "clamp(2.1rem, 3.8vw, 3.375rem)";
const FONT_BODY = "clamp(1.02rem, 1.2vw, 1.2rem)";

const US_STATES = [
  { value: "", label: "Choose state..." },
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District of Columbia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

const fieldBase = {
  width: "100%",
  boxSizing: "border-box",
  minHeight: "52px",
  padding: "14px 16px",
  fontSize: "16px",
  lineHeight: 1.35,
  color: LABEL,
  backgroundColor: "#ffffff",
  border: `1px solid ${BORDER}`,
  borderRadius: "10px",
  outline: "none",
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontSize: "clamp(0.85rem, 0.95vw, 0.95rem)",
  fontWeight: 600,
  color: LABEL,
  letterSpacing: "0.01em",
};

function LimeSliceDecor({ style }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      style={{
        position: "absolute",
        pointerEvents: "none",
        opacity: 0.14,
        ...style,
      }}
    >
      <circle cx="100" cy="100" r="88" fill="none" stroke={LIME} strokeWidth="10" />
      <path
        d="M100 100 L100 12 A88 88 0 0 1 188 100 Z"
        fill={LIME}
        opacity="0.35"
      />
      <path d="M100 100 L188 100" stroke={GREEN} strokeWidth="2" opacity="0.5" />
      <path d="M100 100 L156 44" stroke={GREEN} strokeWidth="1.5" opacity="0.4" />
      <path d="M100 100 L44 44" stroke={GREEN} strokeWidth="1.5" opacity="0.4" />
      <path d="M100 100 L12 100" stroke={GREEN} strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

function FieldGroup({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gap: "clamp(18px, 2.2vw, 26px)",
      }}
      className="sell-hero-form-row"
    >
      {children}
    </div>
  );
}

export default function HeroSection() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    setSubmitted(true);
    const fd = new FormData(e.currentTarget);
    if (typeof window !== "undefined" && window.console) {
      console.info("Sell my design company lead", Object.fromEntries(fd.entries()));
    }
  }, []);

  return (
    <section
      className="icomat-wp-service-hero"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: GREEN,
        boxSizing: "border-box",
        paddingTop: "clamp(120px, 14vw, 200px)",
        paddingBottom: "clamp(56px, 7vw, 96px)",
        paddingLeft: "clamp(20px, 4vw, 72px)",
        paddingRight: "clamp(20px, 4vw, 72px)",
        minHeight: "clamp(720px, 92vh, 1100px)",
      }}
    >
      <LimeSliceDecor
        style={{
          width: "min(72vw, 520px)",
          height: "min(72vw, 520px)",
          bottom: "-18%",
          left: "-12%",
          transform: "rotate(-18deg)",
        }}
      />
      <LimeSliceDecor
        style={{
          width: "min(58vw, 420px)",
          height: "min(58vw, 420px)",
          top: "-8%",
          right: "-10%",
          transform: "rotate(140deg)",
        }}
      />

      <div
        className="sell-hero-grid"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1320px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.12fr)",
          gap: "clamp(40px, 5vw, 72px)",
          alignItems: "start",
        }}
      >
        <div style={{ paddingTop: "clamp(8px, 1vw, 16px)" }}>
          <h1
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.96)",
              fontWeight: 700,
              fontSize: FONT_H2,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              maxWidth: "min(22ch, 100%)",
            }}
          >
            We Buy WordPress Businesses &amp; Agencies
          </h1>
          <p
            style={{
              margin: "clamp(18px, 2.2vw, 26px) 0 0",
              maxWidth: "52ch",
              color: "rgba(255,255,255,0.76)",
              fontSize: FONT_BODY,
              lineHeight: 1.75,
              fontWeight: 400,
            }}
          >
            Looking to sell your business? Eyrion works with established WordPress agencies and
            service providers through structured acquisitions designed to be smooth, efficient, and
            low-disruption for both you and your clients.
          </p>
          <p
            style={{
              margin: "clamp(14px, 1.6vw, 20px) 0 0",
              maxWidth: "52ch",
              color: "rgba(255,255,255,0.76)",
              fontSize: FONT_BODY,
              lineHeight: 1.75,
              fontWeight: 400,
            }}
          >
            With a strong track record in mergers and acquisitions and a dedicated transition team,
            we ensure a seamless handover process while maintaining continuity and service quality
            throughout.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "clamp(18px, 2vw, 24px)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.28), 0 4px 16px rgba(0,0,0,0.12)",
            padding: "clamp(28px, 3.5vw, 44px) clamp(24px, 3vw, 40px)",
            border: "1px solid rgba(22, 45, 36, 0.06)",
          }}
        >
          <h2
            style={{
              margin: "0 0 clamp(22px, 2.8vw, 32px)",
              fontSize: "clamp(1.35rem, 2vw, 1.65rem)",
              fontWeight: 700,
              color: GREEN,
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s discuss selling your website business
          </h2>

          <form className="sell-hero-form" onSubmit={onSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(18px, 2.2vw, 24px)",
              }}
            >
              <FieldGroup>
                <div>
                  <label htmlFor="sell-name" style={labelStyle}>
                    Name *
                  </label>
                  <input
                    id="sell-name"
                    name="name"
                    required
                    placeholder="Your full name *"
                    style={fieldBase}
                  />
                </div>
                <div>
                  <label htmlFor="sell-email" style={labelStyle}>
                    Email *
                  </label>
                  <input
                    id="sell-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email address *"
                    style={fieldBase}
                  />
                </div>
              </FieldGroup>

              <FieldGroup>
                <div>
                  <label htmlFor="sell-phone" style={labelStyle}>
                    Phone *
                  </label>
                  <input
                    id="sell-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Your phone number *"
                    style={fieldBase}
                  />
                </div>
                <div>
                  <label htmlFor="sell-company" style={labelStyle}>
                    Company *
                  </label>
                  <input
                    id="sell-company"
                    name="company"
                    required
                    placeholder="Your company name *"
                    style={fieldBase}
                  />
                </div>
              </FieldGroup>

              <FieldGroup>
                <div>
                  <label htmlFor="sell-location" style={labelStyle}>
                    Location
                  </label>
                  <input
                    id="sell-location"
                    name="location"
                    placeholder="City"
                    style={fieldBase}
                  />
                </div>
                <div>
                  <label htmlFor="sell-state" style={labelStyle}>
                    State
                  </label>
                  <select id="sell-state" name="state" defaultValue="" style={{ ...fieldBase, cursor: "pointer" }}>
                    {US_STATES.map((s) => (
                      <option key={s.value || "placeholder"} value={s.value} disabled={s.value === ""}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
              </FieldGroup>

              <FieldGroup>
                <div>
                  <label htmlFor="sell-years" style={labelStyle}>
                    Years in business
                  </label>
                  <input id="sell-years" name="yearsInBusiness" inputMode="numeric" placeholder="#" style={fieldBase} />
                </div>
                <div>
                  <label htmlFor="sell-clients" style={labelStyle}>
                    Number of clients
                  </label>
                  <input id="sell-clients" name="clientCount" inputMode="numeric" placeholder="#" style={fieldBase} />
                </div>
              </FieldGroup>

              <div>
                <label htmlFor="sell-revenue" style={labelStyle}>
                  Gross annual revenue
                </label>
                <input id="sell-revenue" name="grossAnnualRevenue" placeholder="$" style={fieldBase} />
              </div>

              <div>
                <label htmlFor="sell-description" style={labelStyle}>
                  Company description &amp; details *
                </label>
                <textarea
                  id="sell-description"
                  name="description"
                  required
                  rows={5}
                  placeholder="Tell us about your company and acquisition thoughts *"
                  style={{
                    ...fieldBase,
                    minHeight: "140px",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              <div style={{ marginTop: "clamp(4px, 0.5vw, 8px)" }}>
                <button
                  type="submit"
                  className="sell-mdc-solid-submit inline-flex w-fit items-center justify-center rounded-[38px] px-12 py-6 text-[14px] sm:text-[15px] tracking-[0.09em] font-semibold uppercase"
                  style={{
                    lineHeight: 1,
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.12)",
                    cursor: "pointer",
                    boxShadow: "0 8px 28px rgba(22, 45, 36, 0.22)",
                  }}
                >
                  Send
                </button>
                {submitted ? (
                  <p
                    style={{
                      margin: "14px 0 0",
                      fontSize: "14px",
                      color: "rgba(22,45,36,0.65)",
                    }}
                  >
                    Thanks — we received your message. Our team will follow up shortly.
                  </p>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>

      <button
        type="button"
        aria-label="Accessibility options"
        style={{
          position: "absolute",
          bottom: "clamp(16px, 3vw, 28px)",
          right: "clamp(16px, 3vw, 28px)",
          zIndex: 2,
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.35)",
          backgroundColor: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(8px)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="7" r="3.5" stroke="rgba(255,255,255,0.95)" strokeWidth="1.6" />
          <path
            d="M6 21c0-4 2.5-6 6-6s6 2 6 6"
            stroke="rgba(255,255,255,0.95)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <style>{`
        .sell-mdc-solid-submit {
          background-color: ${GREEN};
          transition: background-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
        }
        .sell-mdc-solid-submit:hover {
          background-color: #1a3a2f;
          box-shadow: 0 10px 32px rgba(22, 45, 36, 0.28);
        }
        .sell-mdc-solid-submit:active {
          transform: scale(0.98);
        }
        .sell-hero-form input::placeholder,
        .sell-hero-form textarea::placeholder {
          color: ${PLACEHOLDER};
        }
        @media (max-width: 1024px) {
          .sell-hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .sell-hero-form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
