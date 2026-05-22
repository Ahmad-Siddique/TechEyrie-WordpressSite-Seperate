"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOME1_HOW_WE_OPERATE_IMAGES } from "../../lib/home1Images";

gsap.registerPlugin(SplitText, ScrollTrigger);

const OPERATE_IMAGES = HOME1_HOW_WE_OPERATE_IMAGES;

export default function HowWeOperateSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        const split = new SplitText(textRef.current, { type: "chars,words" });
        const chars = split.chars;

        gsap.set(chars, { color: "#555555" });

        gsap.to(chars, {
          color: "#ffffff",
          ease: "none",
          stagger: {
            each: 0.015,
            from: "start",
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 10%",
            scrub: 1,
          },
        });
      }

      gsap.fromTo(
        [img1Ref.current, img2Ref.current],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: img1Ref.current,
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
      className="w-full bg-[#162D24] pt-20 pb-24 px-6 sm:px-10 md:px-16 lg:px-20"
    >
      <div className="mb-10 md:mb-14 max-w-[95%]">
        <p
          ref={textRef}
          className="font-medium leading-[1.12] tracking-tight"
          style={{ fontSize: "clamp(1.2rem, 3.2vw, 3.2rem)" }}
        >
          We deliver high-quality WordPress web design and development tailored
          to your business needs. From custom WordPress website design and
          development to managed hosting, maintenance, support, and search
          engine optimization - we provide everything you need to build, grow,
          and maintain a powerful online presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {OPERATE_IMAGES.map((image, index) => (
          <div
            key={image.src}
            ref={index === 0 ? img1Ref : img2Ref}
            className="relative w-full overflow-hidden rounded-sm bg-[#1a1a1a]"
            style={{ aspectRatio: "16/10" }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
