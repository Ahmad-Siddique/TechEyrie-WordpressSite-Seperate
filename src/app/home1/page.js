'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Montserrat } from 'next/font/google'


import HeroSection from '../../../components/icomat-home1/HeroSection'
import RTSSection from '../../../components/icomat-home1/RTSSection'
import RTSRevolutionSection from '../../../components/icomat-home1/RTSRevolutionSection'
import CompositeShowcaseSection from '../../../components/icomat-home1/CompositeShowcaseSection'
import RTSCombinedSection from '../../../components/icomat-home1/RTSCombinedSection'
import HowWeOperateSection from '../../../components/icomat-home1/HowWeOperateSection'
import OurAdvantageSection from '../../../components/icomat-home1/OurAdvantageSection'
import EndToEndSection from '../../../components/icomat-home1/EndToEndSection'
import CustomersSection from '../../../components/icomat-home1/CustomerSection'
import BusinessModelSection from '../../../components/icomat-home1/BusinessModelSection'
import IcomatSolutionSection from '../../../components/icomat-home1/IcomatSolutionsSection'
import IndustriesSection from '../../../components/icomat-home1/IndustriesSection'
import BuildWithIcomatSection from '../../../components/icomat-home1/BuildWithIcomatSection'
import UnlockingSection from '../../../components/icomat-home1/UnlockingSection'
import FooterSection from '../../../components/icomat-home1/FooterSection'
import Header from '../../../components/icomat-home1/Header'
import CTASection from '../../../components/icomat-home1/CTASection'

gsap.registerPlugin(ScrollTrigger)
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function IcomatPage() {
  const [theme] = useState('dark')
  const [quoteOpen, setQuoteOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    // ── Lenis setup ────────────────────────────────────────────────
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false, // keep false — smoothTouch causes mobile sticking
      touchMultiplier: 1.5,
      infinite: false,
    })

    // ── Critical: drive Lenis through gsap.ticker, NOT rAF manually ─
    // This keeps Lenis and ScrollTrigger on the exact same clock tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Zero lag smoothing so ticker fires every frame without throttle
    gsap.ticker.lagSmoothing(0)

    // Sync ScrollTrigger scroll position to Lenis
    lenis.on('scroll', () => ScrollTrigger.update())

    // Refresh ScrollTrigger AFTER first paint so all DOM heights are known
    ScrollTrigger.refresh()

    return () => {
      // Full cleanup on unmount
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
      ScrollTrigger.getAll().forEach((t) => t.kill())
      lenis.destroy()
    }
  }, [])

  return (
    <div
      data-theme="dark"
      className={`icomat-home1-laygrotesk homepage-root ${montserrat.variable}`}
      style={{
        backgroundColor: '#162D24',
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        overflowX: 'clip',
      }}
    >
      <style jsx global>{`
        html, body {
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow-x: clip;
          max-width: 100%;
          width: 100%;
        }
        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          display: none;
        }
        .homepage-root,
        .homepage-font-scope {
          overflow-x: clip;
          max-width: 100%;
          width: 100%;
        }
      `}</style>

      <Header quoteOpen={quoteOpen} setQuoteOpen={setQuoteOpen} />
      <div className="homepage-font-scope">
        <HeroSection onQuoteClick={() => setQuoteOpen(true)} />
        <RTSSection />
        {/* <RTSRevolutionSection />
        <CompositeShowcaseSection /> */}
        <RTSCombinedSection pageKey="home1" />
        <HowWeOperateSection />
        <OurAdvantageSection />
        <EndToEndSection pageKey="home1" />
        <CustomersSection pageKey="home1" />
        {/* <BusinessModelSection /> */}
        <IcomatSolutionSection pageKey="home1" />
        <IndustriesSection />
        <BuildWithIcomatSection />
        <UnlockingSection />
        {/* <CTASection /> */}
        <FooterSection />
      </div>
      {/* <Footer theme="dark" /> */}
    </div>
  )
}