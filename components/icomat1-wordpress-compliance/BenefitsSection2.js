"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    number: "1",
    title: "Small business WordPress support plans",
    paragraphs: [
      "We understand that small businesses often don't have the time or resources to consistently manage their website updates, security, and performance. That's why Eyrion offers affordable WordPress support packages designed specifically for small businesses that want to maintain a strong and reliable online presence.",
      "Our small business plans include secure hosting, regular backups, security audits, and routine updates to keep your WordPress website running smoothly and safely. We handle the technical side so you can focus on growing your business.",
    ],
  },
  {
    number: "2",
    title: "Enterprise WordPress support plans",
    paragraphs: [
      "For high-traffic websites and growing businesses, Eyrion provides fully managed enterprise WordPress support solutions. These plans go beyond standard maintenance and include hosting, backups, continuous security monitoring, malware removal, and advanced performance optimization.",
      "Enterprise support is built for scale, ensuring your WordPress or WooCommerce website stays fast, secure, and stable—even under heavy traffic. With proactive monitoring and dedicated support time, we help your business operate without disruption.",
    ],
  },
  {
    number: "3",
    title: "Custom WordPress support plans",
    paragraphs: [
      "Every WordPress website has different requirements, which is why Eyrion offers fully customizable support packages tailored to your exact needs. These plans combine essential services like backups, security, updates, and bandwidth management with flexible expert support time.",
      "Without proper maintenance, WordPress websites can become slow, unstable, or vulnerable to security threats. Eyrion ensures your site is continuously maintained, protected, and optimized so it performs reliably in every situation.",
    ],
  },
];

function NumberBadge({ number }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width:  "clamp(58px, 5.5vw, 76px)",
        height: "clamp(58px, 5.5vw, 76px)",
        borderRadius: "16px",
        backgroundColor: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.28)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontWeight: 600,
          fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
          color: "#ffffff",
          lineHeight: 1,
        }}
      >
        {number}
      </span>
    </div>
  );
}

function BenefitItem({ item, index }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(16px, 2vw, 24px)",
        paddingBottom: "clamp(52px, 7vw, 96px)",
        borderBottom:
          index < ITEMS.length - 1
            ? "1px solid rgba(255,255,255,0.14)"
            : "none",
        marginBottom:
          index < ITEMS.length - 1 ? "clamp(52px, 7vw, 96px)" : 0,
        opacity: 0,
      }}
    >
      <NumberBadge number={item.number} />

      {/* ── Fix 2 + 3: item title — bigger, semi-bold ── */}
      <h3
        style={{
          fontWeight: 600,
          fontSize: "clamp(1.82rem, 2.6vw, 2.4rem)",
          color: "rgba(255,255,255,0.95)",
          margin: 0,
          lineHeight: 1.18,
          letterSpacing: "-0.01em",
        }}
      >
        {item.title}
      </h3>

      {item.paragraphs.map((text, i) => (
        <p
          key={i}
          style={{
            fontWeight: 400,
            fontSize: "clamp(1.18rem, 1.35vw, 1.3rem)",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.75,
            margin: i === 0 ? 0 : "clamp(14px, 1.8vw, 20px) 0 0",
            maxWidth: "740px",
          }}
        >
          {text}
        </p>
      ))}
    </div>
  );
}

export default function BenefitsSection2() {
  const sectionRef = useRef(null);
  const titleRef   = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -24 },
      {
        opacity: 1,
        x: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 88%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100%",
        backgroundColor: "#162D24",
        boxSizing: "border-box",
        padding: "clamp(72px, 9vw, 120px) clamp(80px, 12vw, 200px)",
      }}
    >
      <div
        className="benefits-inner"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "clamp(48px, 7vw, 112px)",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: "clamp(80px, 10vw, 120px)",
            flex: "0 0 clamp(300px, 44%, 560px)",
            alignSelf: "flex-start",
          }}
        >
          <h2
            ref={titleRef}
            style={{
              fontWeight: 600,
              fontSize: "54px",
              lineHeight: 1.07,
              letterSpacing: "-0.025em",
              color: "#ffffff",
              margin: 0,
              opacity: 0,
            }}
          >
            WordPress Support Packages
          </h2>
          <p
            style={{
              margin: "16px 0 0",
              color: "rgba(255,255,255,0.78)",
              fontSize: "clamp(1rem, 1.1vw, 1.2rem)",
              lineHeight: 1.7,
              maxWidth: "52ch",
            }}
          >
            From streamlined plans for small teams to enterprise-level coverage and fully
            customized retainers, Eyrion aligns hosting, backups, security, and expert
            support time with the real-world needs of your WordPress or WooCommerce website.
          </p>
          <p
            style={{
              margin: "clamp(20px, 3vw, 28px) 0 0",
              color: "rgba(255,255,255,0.9)",
              fontSize: "clamp(1rem, 1.12vw, 1.18rem)",
              lineHeight: 1.65,
              maxWidth: "52ch",
              fontWeight: 500,
            }}
          >
            Not sure which plan fits your requirements? Speak with one of our WordPress
            experts today.
          </p>
        </div>

        <div
          style={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {ITEMS.map((item, i) => (
            <BenefitItem key={item.number} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .benefits-inner {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}