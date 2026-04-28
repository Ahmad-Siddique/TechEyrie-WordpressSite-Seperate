"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const FEATURES = [
  {
    title: "Crawlability",
    desc: "We optimize your site architecture so it's easy for search engines to explore (or \"crawl\") the content. As a reliable SEO company, we ensure our SEO solutions are integrated seamlessly from the ground up.",
  },
  {
    title: "Mobility",
    desc: "Our websites are 100% mobile friendly. Search engines not only notice that - they expect it. Your users will appreciate the improved user interface and experience too!",
  },
  {
    title: "Speed",
    desc: "No surprise here. Faster sites = higher rankings. Our sites are designed to be quick and responsive. We ensure speed optimization and loading times are part of the improvement strategy.",
  },
];

export default function OurAdvantageSection() {
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
            Foundation first: SEO basics
          </p>

          <h2 ref={headingRef} className="text-white font-bold leading-[1.0] tracking-tight" style={{ fontSize: "clamp(2.8rem, 4vw, 4rem)", maxWidth: "26ch" }}>
            Foundation first: SEO basics
          </h2>

          <p className="text-[13px] sm:text-[18px] font-normal leading-relaxed max-w-[700px]" style={{ color: "rgba(255,255,255,0.92)" }}>
            These elements are foundational, as all other SEO tasks depend on them. As a professional WordPress SEO services provider, we build SEO into the DNA of ALL our websites. Here's what that means:
          </p>
        </div>

        <div className="mt-14 md:mt-0 w-full md:flex-1 flex justify-end">
          <div className="w-full max-w-[560px] flex flex-col gap-10">
            <div ref={rightColRef} className="flex flex-col gap-5">
              <p className="text-[13px] sm:text-[18px] font-semibold leading-relaxed" style={{ color: "rgba(255,255,255,0.92)" }}>
                Strong technical SEO fundamentals create the base for rankings, visibility, and sustained long-term growth.
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
