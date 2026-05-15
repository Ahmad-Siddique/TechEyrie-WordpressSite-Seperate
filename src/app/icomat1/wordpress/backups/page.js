"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montserrat } from "next/font/google";

import Header from "../../../../../components/icomat1/Header";
import FooterSection from "../../../../../components/icomat1/FooterSection";
import HeroSection from "../../../../../components/icomat1-wordpress-backups/HeroSection";
import OurAdvantageSection from "../../../../../components/icomat1-wordpress-backups/OurAdvantageSection";
import EndToEndSection from "../../../../../components/icomat1/EndToEndSection";
import CustomersSection from "../../../../../components/icomat1-wordpress-backups/CustomerSection";
import UnlockingSection from "../../../../../components/icomat1-wordpress-backups/UnlockingSection";
import CTASection from "../../../../../components/icomat1/CTASection";
import BenefitsSection from "../../../../../components/icomat1-wordpress-backups/BenefitsSection";
import FAQSection from "../../../../../components/icomat1-wordpress-backups/FAQSection";
import IcomatSolutionSection from "../../../../../components/icomat1/IcomatSolutionsSection";
import SEOResultsSection from "../../../../../components/icomat1-wordpress-backups/SEOResultSection";

gsap.registerPlugin(ScrollTrigger);
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function IcomatWordpressMaintainancePage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

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
      className={`icomat1-laygrotesk ${montserrat.variable}`}
      style={{ backgroundColor: "#162D24", minHeight: "100vh" }}
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
      <Header quoteOpen={quoteOpen} setQuoteOpen={setQuoteOpen} />
      <div className="homepage-font-scope icomat-wp-service-page">
        <HeroSection onQuoteClick={() => setQuoteOpen(true)} />
        <OurAdvantageSection onQuoteClick={() => setQuoteOpen(true)} />
        <BenefitsSection />
        {/* <EndToEndSection />
        
        <CustomersSection /> */}
        <SEOResultsSection />
        <FAQSection />
        <IcomatSolutionSection />
        <CTASection />
       
      
        <UnlockingSection />
    
          {/* <IcomatSolutionSection /> */}
      
        <FooterSection />
      </div>
    </div>
  );
}
