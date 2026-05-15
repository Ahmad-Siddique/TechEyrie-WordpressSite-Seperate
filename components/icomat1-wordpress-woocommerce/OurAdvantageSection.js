"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const FEATURES = [
  {
    title: "Five-star WordPress support company",
    desc: "If you need dependable WordPress help, Eyrion delivers consistent, high-quality support backed by strong client satisfaction and years of experience. Our approach focuses on clear communication and practical results, giving you stability and confidence from real WordPress experts.",
  },
  {
    title: "Fast and efficient WordPress support",
    desc: "We follow structured workflows and best practices to resolve issues quickly and keep updates on track. Our focus is on performance, reliability, and responsive support so your website stays healthy after launch and beyond.",
  },
  {
    title: "Dedicated project coordination",
    desc: "Every engagement includes a dedicated project manager who acts as your main point of contact. They coordinate tasks, translate technical requirements, and ensure smooth communication between you and our WordPress development team.",
  },
  {
    title: "One expert team behind your website",
    desc: "Our designers, developers, and support engineers work together to maintain and improve your WordPress site. From fixes and updates to proactive recommendations, you have a complete team supporting your website at all times.",
  },
  {
    title: "Mobile-first responsive support",
    desc: "We ensure your WordPress website performs smoothly across all devices. From responsive layouts to mobile performance optimization, we help your site stay fast, functional, and aligned with your brand experience.",
  },
  {
    title: "Seamless WordPress migration",
    desc: "If you're moving from another platform, Eyrion handles full WordPress migrations with minimal disruption. We safely transfer content, structure, and functionality while ensuring everything works correctly post-migration.",
  },
  {
    title: "Experienced WordPress developers",
    desc: "With years of WordPress experience and thousands of projects delivered, our team understands how to build, maintain, and scale websites effectively. Whether it's technical fixes, plugin optimization, or long-term growth planning, we've got you covered.",
  },
  {
    title: "Reliable long-term WordPress support",
    desc: "We don't just fix issues—we prevent them. Our ongoing support includes monitoring, maintenance, backups, and security alignment to keep your site stable, fast, and protected with maximum uptime.",
  },
  {
    title: "SEO and ongoing account support",
    desc: "When needed, we also support SEO improvements to help your WordPress website grow in organic visibility. Our team focuses on clear communication, actionable guidance, and results-driven support aligned with your business goals.",
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
            WordPress Support &amp; Care
          </p>

          <h2 ref={headingRef} className="text-white font-bold leading-[1.0] tracking-tight" style={{ fontSize: "54px", maxWidth: "28ch" }}>
            Leading WordPress Support Agency
          </h2>

          <p className="text-[13px] sm:text-[18px] font-normal leading-relaxed max-w-[700px]" style={{ color: "rgba(255,255,255,0.92)" }}>
            Eyrion is a professional WordPress support company focused on keeping your website
            stable, secure, and continuously improving. From troubleshooting and updates to
            long-term maintenance, we ensure your WordPress site remains reliable and easy to
            manage—so it works for your business, not against it.
          </p>
        </div>

        <div className="mt-14 md:mt-0 w-full md:flex-1 flex justify-end">
          <div ref={rightColRef} className="w-full max-w-[560px] flex flex-col gap-10">
            <p className="text-[13px] sm:text-[18px] font-semibold leading-relaxed" style={{ color: "rgba(255,255,255,0.92)" }}>
              Trusted results, fast execution, and a full expert team behind your website—so
              WordPress becomes an asset, not a burden.
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
          </div>
        </div>
      </div>
    </section>
  );
}
