"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const FEATURES = [
  {
    title: "Visual builder & modules",
    desc: "Divi's popularity comes from its powerful customization capabilities and user-friendly visual builder. With dozens of built-in modules and flexible layout controls, businesses can create everything from simple portfolios and landing pages to advanced forms and dynamic website sections—often without writing a single line of code.",
  },
  {
    title: "Custom CSS & scalable development",
    desc: "At the same time, Divi also offers full custom CSS support for businesses that need deeper customization and unique design functionality. This combination of visual editing and advanced developer flexibility makes Divi a strong choice for scalable WordPress website development.",
  },
  {
    title: "Styling & responsive controls",
    desc: "The platform also includes detailed styling controls for fonts, spacing, borders, shadows, colors, and responsive layouts, giving you complete control over the appearance and user experience of your website.",
  },
  {
    title: "Performance & SEO",
    desc: "Beyond design flexibility, Divi is built with performance and SEO in mind. Its structure supports modern search engine optimization best practices, helping your WordPress website remain accessible, fast, and optimized for visibility in search results.",
  },
  {
    title: "Elegant Themes updates & long-term support",
    desc: "Divi also benefits from continuous updates and long-term development support from the Elegant Themes team, including improvements to security, speed, compatibility, and editing performance. This ongoing evolution helps ensure your website stays modern, secure, and reliable over time.",
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
          className="our-advantage-sidebar flex flex-col gap-4 md:gap-6"
          style={{ flex: "0 0 45%" }}
        >
          <p ref={labelRef} className="text-[13px] sm:text-[14px] font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.45)" }}>
            Eyrion Divi experts
          </p>

          <h2 ref={headingRef} className="text-white font-bold leading-[1.0] tracking-tight" style={{ fontSize: "54px", maxWidth: "min(36ch, 100%)" }}>
            Leading Team of Divi Developer Experts
          </h2>

          <p className="text-[13px] sm:text-[18px] font-normal leading-relaxed max-w-[700px]" style={{ color: "rgba(255,255,255,0.92)" }}>
            As a trusted Divi development agency, Eyrion specializes in delivering professional Divi
            website design and WordPress development services tailored to your business goals. If
            you&apos;re familiar with the WordPress ecosystem, you&apos;ve likely come across the Divi
            theme—one of the most widely used and flexible WordPress themes available today, powering
            millions of websites worldwide.
          </p>
        </div>

        <div className="mt-14 md:mt-0 w-full md:flex-1 flex justify-end">
          <div ref={rightColRef} className="w-full max-w-[560px] flex flex-col gap-10">
            <p className="text-[13px] sm:text-[18px] font-semibold leading-relaxed" style={{ color: "rgba(255,255,255,0.92)" }}>
              From the visual builder to performance, SEO, and long-term platform updates—here is
              what Divi brings to serious WordPress projects.
            </p>

            <div className="w-full h-px bg-white/10" />

            <div className="flex flex-col gap-8">
              {FEATURES.map((f, i) => (
                <div key={f.title} ref={(el) => (featuresRef.current[i] = el)} className="flex flex-col gap-1.5">
                  <p className="text-[13px] sm:text-[18px] font-semibold" style={{ color: "rgba(255,255,255,0.92)" }}>
                    {f.title}
                  </p>
                  <p className="text-[12px] sm:text-[18px] font-normal leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[13px] sm:text-[18px] font-normal leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
              Whether you&apos;re redesigning an existing WordPress website or building a completely
              new one, Eyrion helps you unlock the full potential of the Divi theme with expert
              guidance, custom development, and long-term support tailored to your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
