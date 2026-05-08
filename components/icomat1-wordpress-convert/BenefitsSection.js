"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    number: "1",
    title: "Freedom",
    body: "As a free and open-source platform, WordPress gives you total control over your site. You own your content, and there are no restrictions. Other website building solutions may not offer the same degree of freedom and control. If your site is powered by software that is developed and maintained by your hosting company, then you risk losing all of your work if something goes wrong on their end. Thus, the sooner you convert to WordPress the better, since you own the entire site (not just the content).",
  },
  {
    number: "2",
    title: "Flexibility",
    body: "With a WordPress site, you have the ability to back up your content to your computer or a more secure location. You can also easily migrate your WordPress site from one hosting company to another. By doing a WordPress conversion, you'll have access to a broad database of free plugins that can amplify your site's functionality. These include page builders, contact forms, email marketing software, social media tools, and much more. You can even add custom code to your site if you like - something that other platforms don't let you easily do.",
  },
  {
    number: "3",
    title: "Cost",
    body: "Running a WordPress site is very cost effective. You can download the platform for free, and build a basic yet functional site without breaking the bank. Switching to WordPress will also save you a lot of money in the long run. You're not restricted to a fixed monthly or annual fee, as is normally the case with other website builders. After converting your site to WordPress you will need to pay a fee for WordPress hosting. However, down the road, you could switch to a cheaper solution if your current one becomes unaffordable - though weighing the benefits of your provider should be considered before choosing the cheapest option.",
  },
  {
    number: "4",
    title: "Unlimited options and features",
    body: "The sky's the limit once you've become a WordPress convert. There are thousands of themes and templates available, many of which are free. You can also customize these themes to your needs, or use page builders to design your content from scratch. There's also a wealth of tools you can use to enhance your site. Whatever feature you might want, there's likely a plugin that fits your needs. Since WordPress is an open-source platform, there's a large pool of WordPress developers who are constantly creating new tools for site owners.",
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
            Reasons to convert to WordPress
          </h2>
          <p
            style={{
              margin: "16px 0 0",
              color: "rgba(255,255,255,0.78)",
              fontSize: "clamp(1rem, 1.1vw, 1.2rem)",
              lineHeight: 1.7,
              maxWidth: "46ch",
            }}
          >
            Let's take a closer look at why you might want to convert a static
            site to WordPress.
          </p>
          <p
            style={{
              margin: "14px 0 0",
              color: "rgba(255,255,255,0.62)",
              fontSize: "clamp(0.95rem, 1.05vw, 1.15rem)",
              lineHeight: 1.75,
              maxWidth: "52ch",
            }}
          >
            While there's no "convert" button to facilitate the switch to
            WordPress, our expert team of web developers can make the process
            easy. In fact, you won't have to know how to convert a website to
            WordPress - we'll handle the entire procedure of converting your
            existing website to WordPress - from start to finish.
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