'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookieConsent')
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50">
      <div className="relative bg-milk/95 backdrop-blur-lg border border-jade/20 rounded-2xl p-6 shadow-xl">
        {/* Watercolor splash effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-jade/5 via-transparent to-coral/5 rounded-2xl pointer-events-none" />
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-8 w-8"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
        
        <div className="relative">
          <h3 className="font-serif text-lg font-bold text-ink mb-2">Cookie Notice</h3>
          <p className="text-sm text-ink-light leading-relaxed mb-4">
            This website uses cookies to improve your experience. By continuing to use our site, you accept our use of cookies.
          </p>
          <Button 
            onClick={handleAccept}
            className="w-full bg-jade hover:bg-jade/90 text-milk"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
