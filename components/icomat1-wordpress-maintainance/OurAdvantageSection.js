"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

function GlassQuoteButton({ onClick }) {
  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const cloneRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const text = textRef.current;
    const clone = cloneRef.current;
    if (!wrap || !text || !clone) return;

    const H = wrap.offsetHeight;
    gsap.set(clone, { y: H, opacity: 1 });
    gsap.set(text, { y: 0, opacity: 1 });

    const onEnter = () => {
      tlRef.current?.kill();
      gsap.to(wrap, {
        backgroundColor: "rgba(255,255,255,0.96)",
        borderColor: "rgba(255,255,255,1)",
        duration: 0.35,
        ease: "power2.out",
      });
      tlRef.current = gsap.timeline({
        defaults: { duration: 0.52, ease: "power3.inOut" },
      });
      tlRef.current.to(text, { y: -H }, 0).to(clone, { y: 0 }, 0);
    };

    const onLeave = () => {
      tlRef.current?.kill();
      gsap.to(wrap, {
        backgroundColor: "rgba(255,255,255,0.12)",
        borderColor: "rgba(255,255,255,0.34)",
        duration: 0.35,
        ease: "power2.out",
      });
      tlRef.current = gsap.timeline({
        defaults: { duration: 0.48, ease: "power3.inOut" },
      });
      tlRef.current.to(clone, { y: H }, 0).to(text, { y: 0 }, 0);
    };

    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mouseleave", onLeave);

    return () => {
      wrap.removeEventListener("mouseenter", onEnter);
      wrap.removeEventListener("mouseleave", onLeave);
      tlRef.current?.kill();
    };
  }, []);

  return (
    <button
      ref={wrapRef}
      type="button"
      onClick={onClick}
      className="mt-2 inline-flex w-fit items-center justify-center rounded-[38px] px-12 py-6 text-[13px] sm:text-[14px] tracking-[0.09em] font-semibold uppercase"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.34)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.3)",
        cursor: "pointer",
      }}
    >
      <span
        ref={textRef}
        style={{
          display: "block",
          lineHeight: 1,
          color: "#ffffff",
          whiteSpace: "nowrap",
        }}
      >
        Get a Quote
      </span>
      <span
        ref={cloneRef}
        aria-hidden="true"
        style={{
          display: "block",
          lineHeight: 1,
          color: "#101010",
          whiteSpace: "nowrap",
          position: "absolute",
        }}
      >
        Get a Quote
      </span>
    </button>
  );
}

const FEATURES = [
  {
    title: "WordPress plugin & theme updates",
    desc: "As part of our WordPress website maintenance services, we perform routine development updates for theme files, plugins, and extensions. Our WordPress maintenance and support experts ensure your site remains fully up-to-date, functional, secure, and reliable at all times.",
  },
  {
    title: "Malware cleanup & removal",
    desc: "Malware incidents can occur unexpectedly. Eyrion’s professional WordPress maintenance services include quick malware repair and cleanup performed by expert developers. As your trusted WordPress service provider, we swiftly restore your website, minimizing downtime for your business or agency.",
  },
  {
    title: "Backup, security, & vulnerability protection",
    desc: "Our premium WordPress maintenance plans provide round-the-clock security protection, regular vulnerability assessments, and comprehensive backups. Trust the best website maintenance services in the USA to safeguard your company’s data and your customers’ information.",
  },
  {
    title: "Managed by real people, not machines",
    desc: "Our WordPress management services are delivered by real professional human developers and designers, not just automated tools. Eyrion’s team of experts offers ongoing, comprehensive WordPress maintenance support, delivering a personalized touch unmatched by standard agencies or companies.",
  },
];

export default function OurAdvantageSection({
  onQuoteClick = () => window.dispatchEvent(new Event("open-quote-drawer")),
}) {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const rightColRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        labelRef.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (headingRef.current) {
        const split = new SplitText(headingRef.current, { type: "lines,words" });
        gsap.set(split.words, { opacity: 0, y: 40 });
        gsap.to(split.words, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightColRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const featureEls = featuresRef.current.filter(Boolean);
      gsap.fromTo(
        featureEls,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: featureEls[0],
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#162D24] py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-[45%_10%_45%] items-start">
        <div className="flex flex-col gap-4 md:gap-6">
          <p
            ref={labelRef}
            className="text-[13px] sm:text-[14px] font-medium tracking-wide"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            How we tackle your website maintenance
          </p>

          <h2
            ref={headingRef}
            className="text-white font-bold leading-[1.0] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", maxWidth: "26ch" }}
          >
            Our WordPress maintenance team will keep your site secure,
            up-to-date, and running at its very best.
          </h2>

          <p
            className="text-[13px] sm:text-[18px] font-normal leading-relaxed max-w-[520px]"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            Choose Eyrion’s professional WordPress website maintenance packages
            to maximize your website’s performance, security, and ongoing
            reliability.
          </p>

          <button
            type="button"
            onClick={onQuoteClick}
            className="mt-2 inline-flex w-fit items-center justify-center rounded-[38px] px-12 py-6 text-[13px] sm:text-[14px] tracking-[0.09em] font-semibold"
            style={{
              position: "relative",
              overflow: "hidden",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.34)",
              color: "#ffffff",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 24px rgba(0,0,0,0.3)",
              cursor: "pointer",
            }}
          >
            Get your WordPress maintenance plan quote
          </button>
        </div>

        <div className="hidden md:block" />

        <div className="mt-14 md:mt-0 flex justify-end">
          <div className="w-full max-w-[500px] flex flex-col gap-10">
            <div ref={rightColRef} className="flex flex-col gap-5">
              <p
                className="text-[13px] sm:text-[18px] font-semibold leading-relaxed"
                style={{ color: "rgba(255,255,255,0.92)" }}
              >
                WordPress maintenance that keeps your website secure, updated,
                reliable, and high-performing.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div className="flex flex-col gap-8">
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  ref={(el) => (featuresRef.current[i] = el)}
                  className="flex flex-col gap-1.5"
                >
                  <p
                    className="text-[13px] sm:text-[18px] font-semibold"
                    style={{ color: "rgba(255,255,255,0.92)" }}
                  >
                    {f.title}
                  </p>
                  <p
                    className="text-[12px] sm:text-[18px] font-normal leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
