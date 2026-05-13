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
        Book a Free Consultation
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
        Book a Free Consultation
      </span>
    </button>
  );
}

const FEATURES = [
  {
    title: "Real-time cloud backups",
    desc: "Reliable WordPress security starts with consistent backups. We perform automated, redundant backups stored securely in the cloud, ensuring your website can be quickly restored in case of any issue or data loss.",
  },
  {
    title: "Custom login page for enhanced protection",
    desc: "Strengthen your WordPress website security by hiding your default login page with a custom URL. This simple but effective layer helps reduce unauthorized access attempts and keeps your admin area more secure.",
  },
  {
    title: "Continuous malware scanning for threat prevention",
    desc: "Malware can compromise both your website and your users' data. Our proactive WordPress security system includes frequent malware scans designed to detect and prevent threats before they cause harm.",
  },
  {
    title: "24/7 website monitoring",
    desc: "Security issues can happen at any time, which is why we provide continuous monitoring and automated scans. This ensures your WordPress website stays protected, stable, and available whenever your users need it.",
  },
  {
    title: "SSL certificate management",
    desc: "SSL is essential for modern WordPress website security. We ensure proper SSL implementation to encrypt data, protect communication between users and your server, and build trust with your visitors.",
  },
  {
    title: "Secure database protection",
    desc: "We implement advanced database security practices including encryption, secure architecture, and authentication controls to protect both your business data and customer information.",
  },
  {
    title: "Plugin and theme security auditing",
    desc: "Poor-quality plugins and themes can create serious vulnerabilities. We review and audit all installed components, ensuring they are safe, updated, and optimized for strong WordPress security. Optional managed updates keep everything current and secure.",
  },
  {
    title: "Additional advanced security layers",
    desc: "Beyond core protection, we offer additional WordPress security enhancements such as spam protection, CDN integration, load balancing, automatic failover systems, two-factor authentication, and more—depending on your website needs.",
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
            WordPress Website Protection
          </p>

          <h2
            ref={headingRef}
            className="text-white font-bold leading-[1.0] tracking-tight"
            style={{ fontSize: "54px", maxWidth: "28ch" }}
          >
            Advanced WordPress Security Features
          </h2>

          <p
            className="text-[13px] sm:text-[18px] font-normal leading-relaxed max-w-[520px]"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            Your website and its users deserve top-tier protection from experienced
            WordPress security professionals. Discover safe, reliable, and fully
            managed security solutions for your WordPress website with a trusted
            WordPress agency focused on performance and protection.
          </p>

          <p
            className="text-[13px] sm:text-[18px] font-normal leading-relaxed max-w-[520px]"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            Our WordPress website security services include comprehensive security
            audits, automated backups, malware scanning, and continuous monitoring—giving
            you everything needed to keep your site protected around the clock.
          </p>

          <p
            className="text-[13px] sm:text-[18px] font-normal leading-relaxed max-w-[520px]"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            Reduce security risks and protect your business with confidence. Our
            expert-led WordPress security solutions are built on years of experience
            and trusted by thousands of businesses to keep their websites secure,
            stable, and resilient.
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
            Book a Free Consultation
          </button>
        </div>

        <div className="hidden md:block" />

        <div className="mt-14 md:mt-0 flex justify-end">
          <div className="w-full max-w-[500px] flex flex-col gap-10">
            <div ref={rightColRef} className="flex flex-col gap-5" />

            <div className="w-full h-px bg-white/10" />

            <div className="flex flex-col gap-8">
              {FEATURES.map((f, i) => (
                <div
                  key={f.title}
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
