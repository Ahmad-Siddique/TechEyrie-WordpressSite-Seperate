"use client";

/** Matches `src/app/icomat1/wordpress/divi/page.js` root background — site primary. */
const SITE_PRIMARY = "#162D24";

export default function DiviTransformBannerSection() {
  return (
    <section
      className="divi-transform-banner-section"
      style={{
        width: "100%",
        backgroundColor: SITE_PRIMARY,
        boxSizing: "border-box",
        padding: "clamp(72px, 10vw, 120px) clamp(24px, 5vw, 48px)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "min(920px, 100%)", margin: "0 auto" }}>
        <h2
          style={{
            margin: 0,
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4.2vw, 3.25rem)",
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
          }}
        >
          Transform your WordPress site with expert Divi development
        </h2>
        <p
          style={{
            margin: "clamp(20px, 3vw, 28px) 0 0",
            color: "rgba(255,255,255,0.92)",
            fontSize: "clamp(1.05rem, 1.2vw, 1.18rem)",
            lineHeight: 1.78,
          }}
        >
          Divi isn&apos;t just another WordPress theme—it&apos;s a powerhouse website builder packed
          with premium features like responsive editing and hundreds of customizable templates.
          Whether you&apos;re a seasoned developer or new to Divi, its advanced capabilities can feel
          like a maze. Understanding what is Divi in WordPress and what is Divi theme builder is
          crucial, and our experts are here to guide you through every step. That&apos;s why smart
          businesses turn to top-rated Divi experts for seamless Divi WordPress development, ensuring
          every design option is optimized without the hassle of DIY headaches.
        </p>
        <p
          style={{
            margin: "clamp(18px, 2.5vw, 24px) 0 0",
            color: "rgba(255,255,255,0.92)",
            fontSize: "clamp(1.05rem, 1.2vw, 1.18rem)",
            lineHeight: 1.78,
          }}
        >
          At Eyrion, we&apos;ve mastered the art of Divi theme development, handling everything from
          custom coding and third-party integrations to troubleshooting Divi-specific quirks. Our
          team of Divi experts transforms your vision into a professionally crafted website, complete
          with tailored hosting, SEO, and maintenance services. So, why wrestle with Divi alone
          when you can partner with the Divi dream team?
        </p>
      </div>

      <style>{`
        .divi-transform-banner-section h2 {
          font-weight: 700 !important;
        }
      `}</style>
    </section>
  );
}
