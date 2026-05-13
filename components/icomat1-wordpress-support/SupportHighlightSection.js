"use client";

import Image from "next/image";

/** Remote image — swap for `/wordpress/support/your-photo.jpg` in /public when ready. */
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=960&h=1200&q=85&auto=format&fit=crop";

export default function SupportHighlightSection({ imageSrc = DEFAULT_IMAGE }) {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#F4F1EA",
        boxSizing: "border-box",
        padding: "clamp(56px, 7vw, 96px) clamp(24px, 5vw, 72px)",
      }}
    >
      <div
        className="support-highlight-inner"
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.05fr)",
          alignItems: "center",
          gap: "clamp(32px, 5vw, 64px)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            borderRadius: "clamp(16px, 2vw, 24px)",
            overflow: "hidden",
            aspectRatio: "4 / 5",
            maxHeight: "min(520px, 70vh)",
            boxShadow: "0 24px 48px rgba(22, 45, 36, 0.12)",
          }}
        >
          <Image
            src={imageSrc}
            alt="WordPress support specialist working at a computer"
            fill
            sizes="(max-width: 900px) 100vw, 480px"
            style={{ objectFit: "cover" }}
            priority={false}
          />
        </div>

        <div style={{ minWidth: 0 }}>
          <h2
            style={{
              margin: 0,
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3.2vw, 2.65rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#155E46",
              maxWidth: "min(52ch, 100%)",
            }}
          >
            Top-Notch WordPress Support Services with Industry-Leading Response Times
          </h2>
          <p
            style={{
              margin: "clamp(16px, 2vw, 24px) 0 0",
              fontSize: "clamp(1rem, 1.15vw, 1.125rem)",
              lineHeight: 1.75,
              color: "rgba(22, 35, 30, 0.88)",
              maxWidth: "52ch",
            }}
          >
            We deliver high-quality WordPress support services with fast, reliable
            response times, no matter the size or complexity of your website. Whether you
            run a small business site or a large-scale platform, Eyrion provides dependable
            website support tailored to your needs.
          </p>
          <p
            style={{
              margin: "clamp(12px, 1.5vw, 18px) 0 0",
              fontSize: "clamp(1rem, 1.15vw, 1.125rem)",
              lineHeight: 1.75,
              color: "rgba(22, 35, 30, 0.88)",
              maxWidth: "52ch",
            }}
          >
            Our experienced WordPress support team brings years of expertise in web design,
            development, and troubleshooting, allowing us to handle even the most complex
            website challenges with confidence and precision.
          </p>
          <p
            style={{
              margin: "clamp(12px, 1.5vw, 18px) 0 0",
              fontSize: "clamp(1rem, 1.15vw, 1.125rem)",
              lineHeight: 1.75,
              color: "rgba(22, 35, 30, 0.88)",
              maxWidth: "52ch",
            }}
          >
            With a dedicated WordPress team behind you, your site receives professional,
            timely support whenever you need it—ensuring smooth performance, quick issue
            resolution, and long-term stability.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .support-highlight-inner {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
