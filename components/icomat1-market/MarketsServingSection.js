"use client";

import { MapPin } from "lucide-react";
import { EXTENDED_MARKETS, PRIMARY_MARKETS } from "./marketsData";
import { BODY, GREEN, MUTED, cellStyle, headingStyle, introStyle, sectionPadding } from "./marketTheme";

function MarketCell({ name, primary = false }) {
  return (
    <div
      className={`markets-serving-cell${primary ? " markets-serving-cell--primary" : ""}`}
      style={cellStyle}
    >
      <MapPin
        size={14}
        strokeWidth={1.5}
        color={primary ? GREEN : MUTED}
        aria-hidden
        style={{ flexShrink: 0 }}
      />
      <span className="markets-serving-label">{name}</span>
    </div>
  );
}

export default function MarketsServingSection() {
  return (
    <section className="markets-serving-section" style={sectionPadding}>
      <div className="markets-section-inner" style={{ textAlign: "center" }}>
        <p
          style={{
            margin: "0 0 clamp(12px, 1.5vw, 16px)",
            fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          Based in Qatar
        </p>
        <h2 style={headingStyle}>Markets we serve</h2>
        <p style={introStyle}>
          Eyrion is headquartered in Qatar. We partner with businesses across Doha, Lusail, and
          nationwide — and support clients throughout the Gulf and wider region with WordPress design,
          development, hosting, and ongoing care.
        </p>
      </div>

      <div
        className="markets-section-inner"
        style={{ marginTop: "clamp(40px, 5vw, 56px)" }}
      >
        <h3
          className="markets-serving-subhead"
          style={{
            margin: "0 0 clamp(20px, 2.5vw, 28px)",
            textAlign: "center",
            fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: GREEN,
          }}
        >
          Our home base
        </h3>
        <div className="markets-serving-grid markets-serving-grid--primary">
          {PRIMARY_MARKETS.map((name) => (
            <MarketCell key={name} name={name} primary />
          ))}
        </div>

        <h3
          className="markets-serving-subhead"
          style={{
            margin: "clamp(40px, 5vw, 52px) 0 clamp(20px, 2.5vw, 28px)",
            textAlign: "center",
            fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: GREEN,
          }}
        >
          Across the Gulf and region
        </h3>
        <p
          style={{
            margin: "0 auto clamp(24px, 3vw, 32px)",
            maxWidth: "min(62ch, 100%)",
            textAlign: "center",
            fontSize: "clamp(0.98rem, 1.1vw, 1.08rem)",
            lineHeight: 1.65,
            color: BODY,
          }}
        >
          Need coverage beyond Qatar? We also work with teams in the UAE, Oman, Bahrain, Saudi Arabia,
          Turkey, Pakistan, Spain, and the United States.
        </p>
        <div className="markets-serving-grid markets-serving-grid--extended">
          {EXTENDED_MARKETS.map((name) => (
            <MarketCell key={name} name={name} />
          ))}
        </div>
      </div>

    </section>
  );
}
