'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Mail, Send, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    // Handle form submission
  }

  return (
    <main className="min-h-screen pt-16 bg-paper watercolor-texture">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-jade/10 mb-6">
              <Mail className="w-10 h-10 text-jade" />
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-ink mb-4">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-ink-light max-w-2xl mx-auto text-pretty">
              Have questions about our reviews? Want to suggest a product? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-milk border-0 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-jade/10 mb-4">
                <Mail className="w-6 h-6 text-jade" />
              </div>
              <h3 className="font-semibold text-ink mb-2">Email Us</h3>
              <p className="text-sm text-ink-light">hello@percumax.com</p>
            </Card>

            <Card className="p-6 bg-milk border-0 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-coral/10 mb-4">
                <MessageCircle className="w-6 h-6 text-coral" />
              </div>
              <h3 className="font-semibold text-ink mb-2">Response Time</h3>
              <p className="text-sm text-ink-light">Within 24-48 hours</p>
            </Card>

            <Card className="p-6 bg-milk border-0 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ink/10 mb-4">
                <Send className="w-6 h-6 text-ink" />
              </div>
              <h3 className="font-semibold text-ink mb-2">Quick Reply</h3>
              <p className="text-sm text-ink-light">We read every message</p>
            </Card>
          </div>

          <Card className="p-8 md:p-12 bg-milk border-0 shadow-xl watercolor-texture">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="bg-paper border-jade/20 focus:border-jade h-12"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="bg-paper border-jade/20 focus:border-jade h-12"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  placeholder="What's this about?"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="bg-paper border-jade/20 focus:border-jade h-12"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-ink mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us what's on your mind..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="bg-paper border-jade/20 focus:border-jade min-h-[200px] resize-none"
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
          </Card>
        </div>
      </div>
    </main>
  )
}
