"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

function GlassQuoteButton({ onClick, label = "Get a Quote" }) {
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
      <span ref={textRef} style={{ display: "block", lineHeight: 1, color: "#ffffff", whiteSpace: "nowrap" }}>
        {label}
      </span>
      <span
        ref={cloneRef}
        aria-hidden="true"
        style={{ display: "block", lineHeight: 1, color: "#101010", whiteSpace: "nowrap", position: "absolute" }}
      >
        {label}
      </span>
    </button>
  );
}

const FEATURES = [
  {
    title: "Dedicated project manager",
    desc: "You’ll gain a dedicated project manager who will manage your requests, timelines and priorities. Your web projects will stay on track and get completed efficiently",
  },
  {
    title: "Priority support team",
    desc: "You won’t need to write out a lengthy support request or wait in a ticket queue. Your project manager will see your requests immediately and assign the work out to our team.",
  },
  {
    title: "Custom workboard and workflows",
    desc: "You’ll be directly integrated into our system so you can work one-on-one with the people doing the work. We’ll also set up a custom workboard to help manage your requests.",
  },
  {
    title: "Reduced hourly rate",
    desc: "As a part of the Eyrion+ system all projects or initiatives will be billed at a discounted hourly rate.",
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
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none reverse" },
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
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" },
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
          scrollTrigger: { trigger: rightColRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        }
      );

      const featureEls = featuresRef.current.filter(Boolean);
      if (featureEls.length > 0) {
        gsap.fromTo(
          featureEls,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: { trigger: featureEls[0], start: "top 88%", toggleActions: "play none none reverse" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#162D24] py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:px-20">
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
        <div
          className="flex flex-col gap-4 md:gap-6"
          style={{ flex: "0 0 45%", position: "sticky", top: "8rem", alignSelf: "flex-start" }}
        >
          <p ref={labelRef} className="text-[13px] sm:text-[14px] font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.45)" }}>
            How it works
          </p>

          <h2 ref={headingRef} className="text-white font-bold leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", maxWidth: "26ch" }}>
            Don&apos;t spend time writing lengthy support tickets and waiting in the queue.
          </h2>

          <p className="text-[13px] sm:text-[18px] font-normal leading-relaxed max-w-[520px]" style={{ color: "rgba(255,255,255,0.92)" }}>
            With Eyrion+ you&apos;ll have direct access to our team, with a dedicated point of contact, 24 hour response time guaranteed, and priority support.
          </p>

          <GlassQuoteButton onClick={onQuoteClick} label="Get Eyrion+ support quote" />
        </div>

        <div className="mt-14 md:mt-0 w-full md:flex-1 flex justify-end">
          <div className="w-full max-w-[560px] flex flex-col gap-10">
            <div ref={rightColRef} className="flex flex-col gap-5">
              <p className="text-[13px] sm:text-[18px] font-semibold leading-relaxed" style={{ color: "rgba(255,255,255,0.92)" }}>
                Fast, direct, high-priority support handled by a dedicated project manager and expert delivery team.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div className="flex flex-col gap-8">
              {FEATURES.map((f, i) => (
                <div key={i} ref={(el) => (featuresRef.current[i] = el)} className="flex flex-col gap-1.5">
                  <p className="text-[13px] sm:text-[18px] font-semibold" style={{ color: "rgba(255,255,255,0.92)" }}>
                    {f.title}
                  </p>
                  <p className="text-[12px] sm:text-[18px] font-normal leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
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
