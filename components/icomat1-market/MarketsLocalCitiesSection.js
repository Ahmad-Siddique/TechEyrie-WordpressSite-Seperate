"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { LOCAL_AREAS_BY_MARKET } from "./marketsData";
import { GREEN, cellStyle, headingStyle, introStyle, sectionPadding } from "./marketTheme";

function cityName(city) {
  return typeof city === "string" ? city : city.name;
}

function cityHref(city) {
  return typeof city === "string" ? null : city.href ?? null;
}

export default function MarketsLocalCitiesSection() {
  return (
    <section
      className="markets-local-cities-section"
      style={{
        ...sectionPadding,
        borderTop: "1px solid rgba(22, 45, 36, 0.08)",
      }}
    >
      <div className="markets-section-inner" style={{ textAlign: "center" }}>
        <h2 style={headingStyle}>Local cities and areas we cover</h2>
        <p style={introStyle}>
          From districts in Doha and Lusail to major hubs across the Gulf, Turkey, Pakistan, Spain, and
          the United States — we deliver WordPress design, development, and support where your business
          operates.
        </p>
      </div>

      <div
        className="markets-section-inner"
        style={{
          marginTop: "clamp(40px, 5vw, 56px)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(40px, 5vw, 56px)",
        }}
      >
        {LOCAL_AREAS_BY_MARKET.map(({ market, cities }) => (
          <article key={market} className="markets-local-group">
            <h3
              style={{
                margin: "0 0 clamp(18px, 2.5vw, 24px)",
                paddingBottom: "clamp(10px, 1.2vw, 14px)",
                borderBottom: "2px solid rgba(22, 45, 36, 0.12)",
                fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: GREEN,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <MapPin size={14} strokeWidth={1.5} color={GREEN} aria-hidden style={{ flexShrink: 0 }} />
              {market}
            </h3>
            <div className="markets-local-cities-grid">
              {cities.map((city) => {
                const name = cityName(city);
                const href = cityHref(city);
                const key = `${market}-${name}`;

                if (href) {
                  return (
                    <Link
                      key={key}
                      href={href}
                      className="markets-local-cities-cell markets-local-cities-cell--link"
                      style={cellStyle}
                    >
                      <MapPin
                        size={14}
                        strokeWidth={1.5}
                        color={GREEN}
                        aria-hidden
                        style={{ flexShrink: 0 }}
                      />
                      <span className="markets-local-cities-label">{name}</span>
                    </Link>
                  );
                }

                return (
                  <div
                    key={key}
                    className="markets-local-cities-cell markets-local-cities-cell--plain"
                    style={cellStyle}
                  >
                    <span className="markets-local-cities-label">{name}</span>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
