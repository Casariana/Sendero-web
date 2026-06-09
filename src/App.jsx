import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PaymentSection from './components/PaymentSection'
import InfoCarousel from './components/InfoCarousel'
import NewsSection from './components/NewsSection'
import DocumentsSection from './components/DocumentsSection'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import { shouldShowSplash } from './utils/splashStorage'

const SPLASH_CHECK_INTERVAL_MS = 60 * 1000

export default function App() {
  const [showSplash, setShowSplash] = useState(() => shouldShowSplash())
  const [ready, setReady] = useState(() => !shouldShowSplash())

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false)
    setReady(true)
  }, [])

  useEffect(() => {
    const checkSplash = () => {
      if (shouldShowSplash()) {
        setShowSplash(true)
        setReady(false)
      }
    }

    const interval = setInterval(checkSplash, SPLASH_CHECK_INTERVAL_MS)

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkSplash()
      }
    }

    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      clearInterval(interval)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  return (
    <>
      {showSplash && <LoadingScreen onComplete={handleSplashComplete} />}
      {ready && (
        <>
          <Header />
          <main>
            <Hero />
            <InfoCarousel />
            <PaymentSection />
            <NewsSection />
            <DocumentsSection />
          </main>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  )
}
