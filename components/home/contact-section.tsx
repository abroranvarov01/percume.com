'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Send } from 'lucide-react'

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    // Handle form submission
  }

  return (
    <section className="py-20 md:py-32 bg-paper watercolor-texture" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-jade/10 mb-6">
              <Mail className="w-8 h-8 text-jade" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">
              Reach Out
            </h2>
            <p className="text-lg text-ink-light text-pretty">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="bg-milk border-jade/20 focus:border-jade h-12"
                required
              />
            </div>

            <div className="relative">
              <Input
                type="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="bg-milk border-jade/20 focus:border-jade h-12"
                required
              />
            </div>

            <div className="relative">
              <Textarea
                placeholder="Your Message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="bg-milk border-jade/20 focus:border-jade min-h-[150px] resize-none"
                required
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-jade hover:bg-jade/90 text-milk group"
            >
              <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
