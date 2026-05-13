"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    number: "1",
    title: "Outdated software",
    body: "Failing to regularly update WordPress core files, themes, or plugins can leave security gaps that cybercriminals may exploit to launch attacks on your website.",
  },
  {
    number: "2",
    title: "Vulnerable plugins and themes",
    body: "Unmaintained or outdated plugins and themes can create entry points for hackers, potentially leading to malware infections and exposure of sensitive user or customer data.",
  },
  {
    number: "3",
    title: "Denial-of-Service (DoS) attacks",
    body: "DoS attacks target your hosting server by overwhelming it with traffic, which can slow down your site or make it completely inaccessible to users and even to you.",
  },
  {
    number: "4",
    title: "Phishing attacks",
    body: "Phishing involves attackers using malicious links or fake pages to steal user information. Websites with weak security or outdated components are often more vulnerable to these types of attacks.",
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

      {/* ── Fix 2: body text — bigger ── */}
      <p
        style={{
          fontWeight: 400,
          fontSize: "clamp(1.18rem, 1.35vw, 1.3rem)",
          color: "rgba(255,255,255,0.72)",
          lineHeight: 1.75,
          margin: 0,
          maxWidth: "740px",
        }}
      >
        {item.body}
      </p>
    </div>
  );
}

export default function BenefitsSection() {
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
            What Are the Risks of a WordPress Website?
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
            Every website faces certain security challenges, and a WordPress website is
            no exception. Without proper maintenance and protection, these risks can impact
            performance, data safety, and overall reliability.
          </p>
          <p
            style={{
              margin: "14px 0 0",
              color: "rgba(255,255,255,0.78)",
              fontSize: "clamp(1rem, 1.1vw, 1.2rem)",
              lineHeight: 1.7,
              maxWidth: "52ch",
            }}
          >
            At Eyrion, we take WordPress support and security seriously. With our
            dedicated team managing your website, we help ensure your business stays
            protected against common threats and vulnerabilities.
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

          <p
            style={{
              margin: "clamp(32px, 4vw, 48px) 0 0",
              fontWeight: 400,
              fontSize: "clamp(1.18rem, 1.35vw, 1.3rem)",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.75,
              maxWidth: "740px",
            }}
          >
            With proper WordPress support, continuous monitoring, and proactive maintenance,
            these risks can be significantly reduced, helping keep your website secure,
            stable, and fully operational.
          </p>
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