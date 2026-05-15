'use client'

import { useEffect } from 'react'
import FooterSection from '../../../components/icomat1/FooterSection'
import Header from '../../../components/icomat1/Header'
import PrivacyPolicySection from '../../../components/legal/PrivacyPolicySection'
import CTASection from '../../../components/icomat1/CTASection'

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light')
    return () => {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  return (
    <div className="icomat1-laygrotesk" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Header />
      <PrivacyPolicySection />
      <CTASection />
      <FooterSection />
    </div>
  )
}
