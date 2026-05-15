'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import FooterSection from '../../../components/icomat1/FooterSection'
import Header from '../../../components/icomat1/Header'
import ResourcesHeroSection from '../../../components/resources/ResourcesHeroSection'
import ResourcesArticlesGridSection from '../../../components/resources/ResourcesArticlesGridSection'
import CTASection from '../../../components/icomat1/CTASection'

gsap.registerPlugin(ScrollTrigger)

export default function ResourcesPage() {
  const [theme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    })

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    lenis.on('scroll', () => ScrollTrigger.update())

    ScrollTrigger.refresh()

    return () => {
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
      <ResourcesHeroSection />
      <ResourcesArticlesGridSection />
      <CTASection />
      <FooterSection />
    </div>
  )
}
