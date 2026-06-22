"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getPageSectionPics } from "../../lib/pageImages";

gsap.registerPlugin(SplitText, ScrollTrigger);

const CARD_META = [
  {
    num: "01",
    label: "SYNTAX STUDIOS",
    sub: "Custom WordPress marketing site for a US software agency — responsive across desktop, tablet, and mobile with ongoing partnership.",
    href: "/case-studies/syntaxstudios",
    img: "/case-studies/syntaxstudios/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "02",
    label: "FUELED",
    sub: "Enterprise marketing site for a digital product agency—AI, mobile, web, and WordPress VIP expertise showcased across every device.",
    href: "/case-studies/fueled",
    img: "/case-studies/fueled/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "03",
    label: "NECTAFY",
    sub: "WordPress marketing site for a human content agency—Content Credibility and HumanContent offerings, built for authenticity across every device.",
    href: "/case-studies/nectafy",
    img: "/case-studies/nectafy/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "04",
    label: "FADNA",
    sub: "E-commerce site for a Sri Lankan wellness brand—functional herbal teas and life-science products, responsive across every device.",
    href: "/case-studies/fadna",
    img: "/case-studies/fadna/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "05",
    label: "ECHT SOCIAL",
    sub: "Marketing site for a boutique Sri Lankan digital agency—social, design, SEO, and content services, responsive across every device.",
    href: "/case-studies/echtsocial",
    img: "/case-studies/echtsocial/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "06",
    label: "CLE INDY",
    sub: "Marketing site for a leadership and career consultancy—coaching, outplacement, and culture programs, responsive across every device.",
    href: "/case-studies/cleindy",
    img: "/case-studies/cleindy/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "07",
    label: "BRINC",
    sub: "Marketing site for a public safety drone company—hardware, software, and agency programs, responsive across every device.",
    href: "/case-studies/brincdrones",
    img: "/case-studies/brincdrones/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "08",
    label: "UFOMAMMOOT",
    sub: "Marketing site for a Berlin digital agency—interactive portfolio, AR/VR work, and creative technology, responsive across every device.",
    href: "/case-studies/ufomammoot",
    img: "/case-studies/ufomammoot/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "09",
    label: "HRCHITECT",
    sub: "Website migration, infrastructure review, and a comprehensive audit result in strategic planning for phase II redesign project.",
    href: "/portfolio/hrchitect",
  },
  {
    num: "10",
    label: "TIGER",
    sub: "Five sister websites get fresh looks and added features",
    href: "/portfolio/tiger",
  },
  {
    num: "11",
    label: "AZELIS A&ES",
    sub: "Seamless merger of two ecommerce websites into one adds ease and efficiency.",
    href: "/portfolio/azelis-aes",
  },
  {
    num: "12",
    label: "ACERTUS",
    sub: "WordPress website migrated, optimized for long term expansion via Eyrion retained services.",
    href: "/portfolio/acertus",
  },
];

function buildCards(pageKey) {
  const pics = getPageSectionPics(pageKey, "endToEnd");
  return CARD_META.map((card, i) => ({
    ...card,
    img: card.img ?? pics[i] ?? pics[0],
  }));
}

export default function EndToEndSection({ theme = "dark", pageKey = "homepage" }) {
  const cards = useMemo(() => buildCards(pageKey), [pageKey]);
  const wrapperRef = useRef(null);
  const headingRef = useRef(null);
  const trackOuterRef = useRef(null);
  const trackRef = useRef(null);
  const splitRef = useRef(null);

  const isLight = theme === "light";

  const colors = {
    sectionBg: isLight ? "#F7F7F5" : "#162D24",
    headingStart: isLight ? "#b8b8b8" : "#335248",
    headingEnd: isLight ? "#101010" : "#ffffff",
    number: isLight ? "rgba(0,0,0,0.35)" : "rgba(255,255,255,0.35)",
    dottedLine: isLight
      ? "repeating-linear-gradient(to right, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 4px, transparent 4px, transparent 10px)"
      : "repeating-linear-gradient(to right, rgba(255,255,255,0.18) 0px, rgba(255,255,255,0.18) 4px, transparent 4px, transparent 10px)",
    cardBg: isLight ? "#ECECE8" : "#203a31",
    subText: isLight ? "rgba(0,0,0,0.62)" : "rgba(255,255,255,0.64)",
    labelText: isLight ? "rgba(0,0,0,0.34)" : "rgba(255,255,255,0.28)",
    actionText: isLight ? "#111111" : "#ffffff",
    actionBorder: isLight ? "1px solid rgba(0,0,0,0.20)" : "1px solid rgba(255,255,255,0.26)",
    actionBg: isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.08)",
    soonText: isLight ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.48)",
    soonBorder: isLight ? "1px solid rgba(0,0,0,0.14)" : "1px solid rgba(255,255,255,0.14)",
    soonBg: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.03)",
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        splitRef.current?.revert();
        splitRef.current = new SplitText(headingRef.current, { type: "chars,words" });

        gsap.set(splitRef.current.chars, { color: colors.headingStart });

        gsap.to(splitRef.current.chars, {
          color: colors.headingEnd,
          ease: "none",
          stagger: 0.03,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 82%",
            end: "top 30%",
            scrub: 1,
          },
        });
      }

      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        const cards = gsap.utils.toArray(".case-study-card");

        gsap.fromTo(
          cards,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: trackOuterRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current;
        const outer = trackOuterRef.current;
        const wrapper = wrapperRef.current;

        if (!track || !outer || !wrapper) return;

        const getMaxTranslate = () => {
          const trackWidth = track.scrollWidth;
          const outerWidth = outer.clientWidth;
          return Math.max(0, trackWidth - outerWidth);
        };

        gsap.set(track, { x: 0 });

        gsap.to(track, {
          x: () => -getMaxTranslate(),
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: () => `+=${getMaxTranslate()}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => mm.revert();
    }, wrapperRef);

    return () => {
      splitRef.current?.revert();
      splitRef.current = null;
      ctx.revert();
    };
  }, [colors.headingEnd, colors.headingStart]);

  return (
    <section
      ref={wrapperRef}
      className="w-full overflow-hidden pb-16 sm:pb-20 md:pb-24"
      style={{
        minHeight: "100vh",
        backgroundColor: colors.sectionBg,
      }}
    >
      <div className="flex items-center justify-center pt-16 sm:pt-20 md:pt-28 pb-10 sm:pb-12 md:pb-14 px-4 sm:px-6">
        <h2
          ref={headingRef}
          className="font-semibold text-center leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
        >
          Case Studies
        </h2>
      </div>

      <div
        ref={trackOuterRef}
        className="relative w-full overflow-visible px-4 sm:px-6 md:px-10 lg:px-20"
      >
        <div
          ref={trackRef}
          className="flex flex-col gap-10 md:flex-row md:gap-6 will-change-transform"
        >
          {cards.map((card, i) => {
            const actionPillClass =
              "inline-flex items-center justify-center rounded-full px-4 py-2 text-[11px] tracking-[0.12em] uppercase";

            const body = (
              <>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <span
                    className="font-mono font-bold tracking-[0.18em] flex-shrink-0"
                    style={{
                      fontSize: "clamp(1rem, 1.4vw, 1.35rem)",
                      color: colors.number,
                    }}
                  >
                    {card.num}
                  </span>

                  <div
                    className="flex-1 h-px"
                    style={{
                      backgroundImage: colors.dottedLine,
                    }}
                  />
                </div>

                <div
                  className="relative w-full overflow-hidden rounded-xl"
                  style={{
                    aspectRatio: "4 / 3",
                    backgroundColor: colors.cardBg,
                  }}
                >
                  <img
                    src={card.img}
                    alt={card.label}
                    className={`absolute inset-0 w-full h-full ${card.imgFit === "contain" ? "object-contain p-4" : "object-cover"}`}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="mt-4 flex flex-col gap-1">
                  <p
                    className="text-[12px] tracking-[0.14em] uppercase leading-snug"
                    style={{ color: colors.subText }}
                  >
                    {card.sub ? card.sub : card.label}
                  </p>

                  {card.sub && (
                    <p
                      className="text-[11px] tracking-[0.1em] uppercase"
                      style={{ color: colors.labelText }}
                    >
                      {card.label}
                    </p>
                  )}
                </div>

                <div className="mt-4">
                  {card.href ? (
                    <span
                      className={actionPillClass}
                      style={{
                        color: colors.actionText,
                        border: colors.actionBorder,
                        background: colors.actionBg,
                      }}
                    >
                      View Project
                    </span>
                  ) : (
                    <span
                      className={actionPillClass}
                      style={{
                        color: colors.soonText,
                        border: colors.soonBorder,
                        background: colors.soonBg,
                      }}
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
              </>
            );

            return (
              <div
                key={i}
                className="case-study-card flex-shrink-0 flex flex-col w-full md:w-[75vw] md:max-w-[620px]"
              >
                {card.href ? (
                  <Link
                    href={card.href}
                    aria-label={`${card.label} case study`}
                    className="group flex flex-col text-left no-underline text-inherit cursor-pointer rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    {body}
                  </Link>
                ) : (
                  <div className="flex flex-col">{body}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}