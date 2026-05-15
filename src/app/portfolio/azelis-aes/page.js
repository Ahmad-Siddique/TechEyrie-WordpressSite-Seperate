 "use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTASection from "../../../../components/icomat1/CTASection";
import EndToEndSection from "../../../../components/icomat1/EndToEndSection";
import FooterSection from "../../../../components/icomat1/FooterSection";
import Header from "../../../../components/icomat1/Header";
import CustomerSection from "../../../../components/portfolio/azelis-aes/CustomerSection";
import CustomersSection1 from "../../../../components/portfolio/azelis-aes/CustomerSection1";
import PortfolioHeroSection from "../../../../components/portfolio/azelis-aes/HeroSection";
import PortfolioLayeredShowcase from "../../../../components/portfolio/azelis-aes/PortfolioLayeredShowcase";
import PortfolioShowcaseSection from "../../../../components/portfolio/azelis-aes/PortfolioShowcaseSection";

gsap.registerPlugin(ScrollTrigger);

export default function AzelisAesPortfolioPage() {
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
    <div className="icomat1-laygrotesk">
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
      <PortfolioHeroSection />
      <PortfolioShowcaseSection />
      <CustomerSection />
      <PortfolioLayeredShowcase />
      <CustomersSection1 />
      <EndToEndSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
