"use client";

/**
 * General guidance matrix — not legal advice.
 * Visual pattern: green check = yes / required, red X = no or not applicable.
 */

const GREEN = "#155E46";
const RED = "#C53030";
const SECTION_BG = "#ffffff";
const TEXT = "rgba(22, 35, 30, 0.92)";
const MUTED = "rgba(22, 35, 30, 0.62)";

function CheckIcon() {
  return (
    <span
      aria-label="Yes"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "clamp(26px, 3vw, 32px)",
        height: "clamp(26px, 3vw, 32px)",
        borderRadius: "50%",
        backgroundColor: GREEN,
        flexShrink: 0,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M2.5 7L5.5 10L11.5 3.5"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function XIcon() {
  return (
    <span
      aria-label="No"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "clamp(26px, 3vw, 32px)",
        height: "clamp(26px, 3vw, 32px)",
        borderRadius: "50%",
        backgroundColor: RED,
        flexShrink: 0,
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2 2L10 10M10 2L2 10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function Cell({ variant, note }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: note ? "6px" : 0,
        textAlign: "center",
        minHeight: "56px",
        padding: "8px 6px",
      }}
    >
      {variant === "yes" && <CheckIcon />}
      {variant === "no" && <XIcon />}
      {variant === "not_required" && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "clamp(0.72rem, 1.5vw, 0.8rem)", fontWeight: 600, color: MUTED }}>
            Not required
          </span>
          <XIcon />
        </div>
      )}
      {note ? (
        <span
          style={{
            fontSize: "clamp(0.65rem, 1.2vw, 0.75rem)",
            lineHeight: 1.35,
            color: MUTED,
            fontStyle: "italic",
            maxWidth: "180px",
          }}
        >
          {note}
        </span>
      ) : null}
    </div>
  );
}

const ROWS = [
  {
    activity: "Any site with public-facing content",
    activityNote: null,
    ada: "yes",
    gdpr: { variant: "no", note: "unless targeting EU users" },
    ccpa: { variant: "no", note: "unless targeting CA users" },
    pci: "no",
  },
  {
    activity: "Site targeting or collecting data from EU users",
    activityNote: "E.g., EU language, currency, shipping, or analytics tracking",
    ada: "yes",
    gdpr: { variant: "yes", note: null },
    ccpa: "no",
    pci: "no",
  },
  {
    activity: "Site targeting or collecting data from California users",
    activityNote: "E.g., CA shipping, advertising, pricing, or content",
    ada: "yes",
    gdpr: "no",
    ccpa: { variant: "yes", note: null },
    pci: "no",
  },
  {
    activity: "Ecommerce site accepting credit cards",
    activityNote: null,
    ada: "yes",
    gdpr: { variant: "yes", note: "if EU targeting applies" },
    ccpa: { variant: "yes", note: "if CA targeting applies" },
    pci: "yes",
  },
  {
    activity: "Site collecting personal data",
    activityNote: "E.g., contact forms, emails, tracking",
    ada: "yes",
    gdpr: { variant: "yes", note: "if EU targeting applies" },
    ccpa: { variant: "yes", note: "if CA targeting applies" },
    pci: "no",
  },
  {
    activity: "Nonprofit, school, or government org",
    activityNote: null,
    ada: "yes",
    gdpr: { variant: "yes", note: "if EU targeting applies" },
    ccpa: { variant: "yes", note: "if CA targeting applies" },
    pci: "no",
  },
  {
    activity: "Internal/intranet-only site",
    activityNote: null,
    ada: "not_required",
    gdpr: "not_required",
    ccpa: "not_required",
    pci: "no",
  },
];

function normalizeComplianceCell(val) {
  if (val === "yes" || val === "no" || val === "not_required") {
    return { variant: val, note: null };
  }
  return val;
}

export default function ComplianceComparisonSection() {
  return (
    <section
      className="compliance-comparison-section"
      aria-labelledby="compliance-chart-heading"
      style={{
        width: "100%",
        backgroundColor: SECTION_BG,
        boxSizing: "border-box",
        padding: "clamp(56px, 7vw, 96px) clamp(24px, 5vw, 100px)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "min(1600px, 100%)", margin: "0 auto", width: "100%" }}>
        <h2
          id="compliance-chart-heading"
          style={{
            margin: 0,
            textAlign: "center",
            fontWeight: 700,
            fontSize: "clamp(1.65rem, 3.2vw, 2.5rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: GREEN,
          }}
        >
          WordPress website compliance made simple
        </h2>
        <p
          style={{
            margin: "clamp(12px, 2vw, 18px) auto 0",
            textAlign: "center",
            fontSize: "clamp(1rem, 1.15vw, 1.125rem)",
            color: TEXT,
            maxWidth: "52ch",
          }}
        >
          What type of compliance does your website need?
        </p>

        <div
          className="compliance-table-scroll"
          style={{
            marginTop: "clamp(32px, 4vw, 48px)",
            width: "100%",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            backgroundColor: "transparent",
          }}
        >
          <table
            style={{
              width: "100%",
              minWidth: "1000px",
              borderCollapse: "collapse",
              fontSize: "clamp(0.9rem, 1.15vw, 1.05rem)",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(22, 45, 36, 0.12)" }}>
                <th
                  scope="col"
                  style={{
                    textAlign: "left",
                    padding: "clamp(18px, 2.4vw, 26px) clamp(16px, 2.2vw, 28px)",
                    fontWeight: 700,
                    color: GREEN,
                    width: "32%",
                  }}
                >
                  Website type / activity
                </th>
                <th
                  scope="col"
                  style={{
                    padding: "clamp(18px, 2.4vw, 26px) clamp(10px, 1.5vw, 16px)",
                    fontWeight: 700,
                    color: GREEN,
                    textAlign: "center",
                    width: "17%",
                  }}
                >
                  ADA compliance
                </th>
                <th
                  scope="col"
                  style={{
                    padding: "clamp(18px, 2.4vw, 26px) clamp(10px, 1.5vw, 16px)",
                    fontWeight: 700,
                    color: GREEN,
                    textAlign: "center",
                    width: "17%",
                  }}
                >
                  GDPR compliance
                </th>
                <th
                  scope="col"
                  style={{
                    padding: "clamp(18px, 2.4vw, 26px) clamp(10px, 1.5vw, 16px)",
                    fontWeight: 700,
                    color: GREEN,
                    textAlign: "center",
                    width: "17%",
                  }}
                >
                  CCPA compliance
                </th>
                <th
                  scope="col"
                  style={{
                    padding: "clamp(18px, 2.4vw, 26px) clamp(10px, 1.5vw, 16px)",
                    fontWeight: 700,
                    color: GREEN,
                    textAlign: "center",
                    width: "17%",
                  }}
                >
                  PCI compliance
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.activity}
                  style={{
                    borderBottom:
                      i < ROWS.length - 1 ? "1px solid rgba(22, 45, 36, 0.08)" : "none",
                  }}
                >
                  <td
                    style={{
                      verticalAlign: "top",
                      padding: "clamp(18px, 2.4vw, 26px) clamp(16px, 2.2vw, 28px)",
                      color: TEXT,
                      lineHeight: 1.45,
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{row.activity}</span>
                    {row.activityNote ? (
                      <div
                        style={{
                          marginTop: "6px",
                          fontSize: "clamp(0.78rem, 1vw, 0.88rem)",
                          color: MUTED,
                          fontStyle: "italic",
                        }}
                      >
                        {row.activityNote}
                      </div>
                    ) : null}
                  </td>
                  <td style={{ verticalAlign: "middle", padding: "clamp(16px, 2.2vw, 24px) clamp(10px, 1.8vw, 18px)" }}>
                    <Cell {...normalizeComplianceCell(row.ada)} />
                  </td>
                  <td style={{ verticalAlign: "middle", padding: "clamp(16px, 2.2vw, 24px) clamp(10px, 1.8vw, 18px)" }}>
                    <Cell {...normalizeComplianceCell(row.gdpr)} />
                  </td>
                  <td style={{ verticalAlign: "middle", padding: "clamp(16px, 2.2vw, 24px) clamp(10px, 1.8vw, 18px)" }}>
                    <Cell {...normalizeComplianceCell(row.ccpa)} />
                  </td>
                  <td style={{ verticalAlign: "middle", padding: "clamp(16px, 2.2vw, 24px) clamp(10px, 1.8vw, 18px)" }}>
                    <Cell {...normalizeComplianceCell(row.pci)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p
          style={{
            margin: "clamp(20px, 3vw, 28px) auto 0",
            textAlign: "center",
            fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
            fontStyle: "italic",
            color: MUTED,
            lineHeight: 1.6,
            maxWidth: "70ch",
          }}
        >
          *This chart is intended for general guidance only and should not be considered legal
          advice.*
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .compliance-comparison-section .compliance-a11y-badge {
            display: none;
          }
        }
        /* .homepage-font-scope forces h2 to 500; restore chart title weight */
        .compliance-comparison-section h2 {
          font-weight: 700 !important;
        }
      `}</style>

      <div
        className="compliance-a11y-badge"
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "clamp(16px, 3vw, 32px)",
          bottom: "clamp(16px, 3vw, 28px)",
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: "#2563EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontSize: "18px",
          lineHeight: 1,
          boxShadow: "0 2px 8px rgba(37, 99, 235, 0.35)",
        }}
      >
        ♿
      </div>
    </section>
  );
}
