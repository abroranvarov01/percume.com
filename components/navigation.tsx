'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-milk/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-ink tracking-tight">
              PER<span className="text-jade">•</span>CU<span className="text-coral">•</span>MAX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-ink hover:text-jade transition-colors">
              Home
            </Link>
            <Link href="/reviews" className="text-sm font-medium text-ink hover:text-jade transition-colors">
              Reviews
            </Link>
            <Link href="/about" className="text-sm font-medium text-ink hover:text-jade transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-ink hover:text-jade transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-sm font-medium text-ink hover:text-jade transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/reviews" 
                className="text-sm font-medium text-ink hover:text-jade transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                href="/about" 
                className="text-sm font-medium text-ink hover:text-jade transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-sm font-medium text-ink hover:text-jade transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
