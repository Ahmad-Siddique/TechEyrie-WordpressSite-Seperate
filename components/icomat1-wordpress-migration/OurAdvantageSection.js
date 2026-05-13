"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const FEATURES = [
  {
    title: "WordPress Support Agency",
    desc: "At Eyrion, we take customer service seriously and focus on delivering a smooth, stress-free WordPress support experience. Our team of skilled WordPress designers and developers is always ready to resolve technical issues quickly and effectively. As a professional WordPress support company, we provide structured technical support packages designed to keep your website running reliably, securely, and without interruptions.",
  },
  {
    title: "Expert WordPress Support Team",
    desc: "With years of experience managing, migrating, and maintaining WordPress websites of all sizes and complexity, our specialists ensure your site stays updated, optimized, and fully functional at all times. Our WordPress support experts are equipped to handle everything from minor fixes to complex technical challenges across both WordPress and WooCommerce environments.",
  },
  {
    title: "Ongoing WordPress Support Packages",
    desc: "We offer flexible, ongoing WordPress support plans tailored to your website's specific needs. Our maintenance and support services remove technical burden so you can focus on growing your business. With Eyrion's managed WordPress support solutions, your website stays updated, secure, and consistently operational.",
  },
  {
    title: "Dedicated Support Retainers",
    desc: "For businesses needing continuous, hands-on assistance, we provide dedicated WordPress support retainers. We integrate directly into your workflow and project management systems to create a seamless long-term support partnership. Eyrion's WordPress support services are built to deliver consistent, scalable, and proactive assistance that evolves with your business.",
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
            Eyrion WordPress Support
          </p>

          <h2 ref={headingRef} className="text-white font-bold leading-[1.0] tracking-tight" style={{ fontSize: "54px", maxWidth: "22ch" }}>
            WordPress support that fits how you work
          </h2>

          <p className="text-[13px] sm:text-[18px] font-normal leading-relaxed max-w-[700px]" style={{ color: "rgba(255,255,255,0.92)" }}>
            Whether you need fast help desk responses, structured ongoing maintenance, or
            a dedicated support retainer, our WordPress support model is designed like a
            product—clear ownership, consistent communication, and experienced engineers who
            can seamlessly move between WooCommerce stores and content-driven marketing
            websites without missing momentum.
          </p>

          <p className="text-[13px] sm:text-[18px] font-normal leading-relaxed max-w-[700px]" style={{ color: "rgba(255,255,255,0.92)" }}>
            From the first support request to long-term partnership retainers, Eyrion
            delivers reliable WordPress and WooCommerce support built to keep your website
            stable, secure, and performing at its peak.
          </p>
        </div>

        <div className="mt-14 md:mt-0 w-full md:flex-1 flex justify-end">
          <div className="w-full max-w-[560px] flex flex-col gap-10">
            <div ref={rightColRef} className="flex flex-col gap-5">
              <p className="text-[13px] sm:text-[18px] font-semibold leading-relaxed" style={{ color: "rgba(255,255,255,0.92)" }}>
                From help desk through retainers, here is how Eyrion delivers WordPress and
                WooCommerce support you can count on.
              </p>
            </div>

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
