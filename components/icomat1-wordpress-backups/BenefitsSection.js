"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  {
    number: "1",
    title: "Reliable, up-to-date WordPress backups",
    body: "We perform database WordPress backups hourly to ensure that you never lose any of your hard work. File system backups are performed daily, for even greater security.",
  },
  {
    number: "2",
    title: "A schedule to suit you",
    body: "We understand that you're busy! Simply tell us when you want to back up your site, and our team of experts will handle the rest.",
  },
  {
    number: "3",
    title: "A consistent user experience",
    body: "Our WordPress backups run quietly in the background and are guaranteed not to negatively impact your site's performance. Your customers won't have a clue that a backup is taking place!",
  },
  {
    number: "4",
    title: "Off-site and offline WordPress backups",
    body: "We've hand-picked all of our backup sources to provide the highest level of reliability and availability. However, at Eyrion we're always prepared for the edge cases and worst-case scenarios. That's why we create multiple WordPress backups of your site across multiple sources. This includes Amazon S3 Cloud and a physical hard drive. In the extremely unlikely event that one backup source is unavailable, we can restore your site from a second source (or a third, or a fourth...).",
  },
  {
    number: "5",
    title: "Lightning-fast site recovery",
    body: "Our specialist support team is always on hand to restore your website. Just give us a date and a time, and we'll roll back the clock for you.",
  },
  {
    number: "6",
    title: "Ultimate peace of mind",
    body: "Do you need us to make some changes to your site? Our experienced support team understands the importance of regular WordPress backups. That's why they always take the time to create a complete, up-to-the-minute backup, before commencing any work on your website. Don't sweat it. We've got your back(up).",
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
            Your professional WordPress backup solution
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
            When you partner with Eyrion, we promise to be at your side every
            step of the way with reliable service.
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
            This includes initial research and development, right through to
            helping you win the Search Engine Optimization (SEO) game - as well
            as creating regular WordPress backups. Losing content is something
            no website owner wants to think about. With Eyrion in your corner,
            this worry will become a thing of the past. Our team of WordPress
            backup experts can manage the entire backup process for you. This
            leaves you more time to focus on what really matters - running a
            world-class website!
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