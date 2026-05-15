'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import FooterSection from '../../../components/icomat1/FooterSection'
import Header from '../../../components/icomat1/Header'
import ReviewsHeroSection from '../../../components/icomat1-reviews/ReviewsHeroSection'
import ReviewsServingSection from '../../../components/icomat1-reviews/ReviewsServingSection'

import CTASection from '../../../components/icomat1/CTASection'

gsap.registerPlugin(ScrollTrigger)

export default function IcomatPage() {
  const [theme] = useState('dark')

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
    <div data-theme="dark" className="icomat1-laygrotesk" style={{ backgroundColor: '#1A1A1A', minHeight: '100vh' }}>
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
      <ReviewsHeroSection />
      <ReviewsServingSection />
      <CTASection />
      <FooterSection />
    </div>
  )
}