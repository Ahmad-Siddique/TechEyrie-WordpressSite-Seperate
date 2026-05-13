"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montserrat } from "next/font/google";

import Header from "../../../../../components/icomat1/Header";
import FooterSection from "../../../../../components/icomat1/FooterSection";
import HeroSection from "../../../../../components/icomat1-wordpress-compliance/HeroSection";
import ComplianceComparisonSection from "../../../../../components/icomat1-wordpress-compliance/ComplianceComparisonSection";
import ComplianceServicesSection from "../../../../../components/icomat1-wordpress-compliance/ComplianceServicesSection";
import OurAdvantageSection from "../../../../../components/icomat1-wordpress-compliance/OurAdvantageSection";
import SupportHighlightSection from "../../../../../components/icomat1-wordpress-compliance/SupportHighlightSection";
import EndToEndSection from "../../../../../components/icomat1/EndToEndSection";
import CustomersSection from "../../../../../components/icomat1-wordpress-compliance/CustomerSection";
import UnlockingSection from "../../../../../components/icomat1-wordpress-compliance/UnlockingSection";
import CTASection from "../../../../../components/icomat1/CTASection";
import BenefitsSection from "../../../../../components/icomat1-wordpress-compliance/BenefitsSection";
import BenefitsSection2 from "../../../../../components/icomat1-wordpress-compliance/BenefitsSection2";
import FAQSection from "../../../../../components/icomat1-wordpress-compliance/FAQSection";
import IcomatSolutionSection from "../../../../../components/icomat1/IcomatSolutionsSection";
import SEOResultsSection from "../../../../../components/icomat1-wordpress-compliance/SEOResultSection";
import ConversionCtaSection from "../../../../../components/icomat1-wordpress-compliance/ConversionCtaSection";
import WhySEOResultsSection from "../../../../../components/icomat1-wordpress-compliance/WhySEOResults";


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
      <div className="homepage-font-scope">
        <HeroSection onQuoteClick={() => setQuoteOpen(true)} />
        <ComplianceComparisonSection />
        <ComplianceServicesSection onLearnMore={() => setQuoteOpen(true)} />
        {/* <OurAdvantageSection onQuoteClick={() => setQuoteOpen(true)} />
        <SupportHighlightSection />
        <BenefitsSection /> */}
        <EndToEndSection />
        
       {/*  <CustomersSection /> */}
        {/* <SEOResultsSection />
        <BenefitsSection2 /> */}
        {/* <WhySEOResultsSection /> */}
        {/* <ConversionCtaSection /> */}
          {/* <FAQSection /> */}
        {/* <IcomatSolutionSection /> */}
        {/* <FAQSection /> */}
        <CTASection />
       
      
        <UnlockingSection />
    
          {/* <IcomatSolutionSection /> */}
      
        <FooterSection />
      </div>
    </div>
  );
}
