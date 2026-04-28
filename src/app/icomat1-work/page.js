"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../../../components/icomat1/Header";
import FooterSection from "../../../components/icomat1/FooterSection";
import WorkSection from "../../../components/icomat1-work/FeaturedProjectsSection";
import CTASection from "../../../components/icomat1/CTASection";

gsap.registerPlugin(ScrollTrigger);

export default function Icomat1WorkPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    });

    const onTick = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", () => ScrollTrigger.update());
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(onTick);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <div
      data-theme="dark"
      className="icomat1-laygrotesk"
      style={{ width: "100%", minHeight: "100vh", background: "#f5f2ec" }}
    >
      <style jsx global>{`
        html, body {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <Header />
      <WorkSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}

