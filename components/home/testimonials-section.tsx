import { Card } from '@/components/ui/card'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Lina Zhou',
    role: 'Marathon Runner',
    image: '/asian-woman-athlete-portrait.jpg',
    quote: 'This changed my recovery routine completely. The precision is unmatched.',
  },
  {
    name: 'David Harper',
    role: 'Physical Therapist',
    image: '/male-physical-therapist-portrait.jpg',
    quote: 'I recommend these to all my clients. Professional-grade quality.',
  },
  {
    name: 'Naomi Castillo',
    role: 'Yoga Instructor',
    image: '/latina-woman-yoga-instructor-portrait.jpg',
    quote: 'The perfect balance between power and gentleness. Absolutely love it.',
  },
  {
    name: 'Yusuf Rahman',
    role: 'CrossFit Athlete',
    image: '/middle-eastern-man-athlete-portrait.jpg',
    quote: 'Best investment for my training. Helps me recover faster between workouts.',
  },
  {
    name: 'Kira Novak',
    role: 'Dance Instructor',
    image: '/woman-dancer-portrait.jpg',
    quote: 'I use it before and after every class. My muscles have never felt better.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-paper watercolor-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">
            Human Stories
          </h2>
          <p className="text-lg text-ink-light max-w-2xl mx-auto text-pretty">
            Real people, real results, real recovery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 bg-milk border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Ink wave effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-jade/0 to-coral/0 group-hover:from-jade/5 group-hover:to-coral/5 transition-all duration-500" />
              
              <div className="relative">
                <Quote className="w-8 h-8 text-jade/30 mb-4" />
                
                <p className="text-ink-light leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-jade/20">
                    <img 
                      src={testimonial.image || "/placeholder.svg"} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-sm text-ink-light">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional testimonials on larger screens */}
        <div className="hidden lg:grid grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
          {testimonials.slice(3).map((testimonial, index) => (
            <Card 
              key={index + 3} 
              className="p-6 bg-milk border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-jade/0 to-coral/0 group-hover:from-jade/5 group-hover:to-coral/5 transition-all duration-500" />
              
              <div className="relative">
                <Quote className="w-8 h-8 text-jade/30 mb-4" />
                
                <p className="text-ink-light leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-jade/20">
                    <img 
                      src={testimonial.image || "/placeholder.svg"} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{testimonial.name}</p>
                    <p className="text-sm text-ink-light">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
