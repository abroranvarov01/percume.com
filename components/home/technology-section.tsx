import { Activity, Zap, Settings } from 'lucide-react'

export function TechnologySection() {
  return (
    <section className="py-20 md:py-32 bg-milk relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">
              Technology in Every Stroke
            </h2>
            <p className="text-lg text-ink-light max-w-2xl mx-auto text-pretty">
              Precision engineering meets therapeutic artistry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: 'Precision Percussion',
                description: 'Up to 3200 percussions per minute with adjustable amplitude for targeted relief',
              },
              {
                icon: Zap,
                title: 'Powerful Motors',
                description: 'Brushless motors delivering consistent power without overheating or noise',
              },
              {
                icon: Settings,
                title: 'Smart Features',
                description: 'Intelligent pressure sensors and customizable speed settings for optimal therapy',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-jade to-jade/70 text-milk mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-ink-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
