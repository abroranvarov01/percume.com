'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden watercolor-texture">
      {/* Animated ink splashes in background */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-64 h-64 bg-jade/10 rounded-full blur-3xl ${isVisible ? 'animate-ink-flow' : 'opacity-0'}`} style={{ animationDelay: '0s' }} />
        <div className={`absolute bottom-20 right-10 w-80 h-80 bg-coral/10 rounded-full blur-3xl ${isVisible ? 'animate-ink-flow' : 'opacity-0'}`} style={{ animationDelay: '1s' }} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ink/5 rounded-full blur-3xl ${isVisible ? 'animate-ink-flow' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink mb-6 text-balance">
            Power. Flow. Recovery.
          </h1>
          <p className="text-xl md:text-2xl text-ink-light mb-8 leading-relaxed text-pretty">
            Experience the art of muscle relief with precision-engineered massage guns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reviews">
              <Button size="lg" className="bg-ink hover:bg-ink/90 text-milk px-8 group">
                Explore Devices
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-jade text-jade hover:bg-jade hover:text-milk px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
