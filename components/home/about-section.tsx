export function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-milk via-paper to-milk relative overflow-hidden">
      {/* Breathing watercolor background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-jade rounded-full blur-3xl animate-ink-flow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coral rounded-full blur-3xl animate-ink-flow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6">
            Where Flow Meets Focus
          </h2>
          <div className="space-y-6 text-lg text-ink-light leading-relaxed">
            <p className="text-pretty">
              PercuMax was born from a simple belief: recovery should be as beautiful as it is effective. 
              Inspired by the fluid grace of Japanese calligraphy, we've created a platform that celebrates 
              the intersection of art and science.
            </p>
            <p className="text-pretty">
              Each massage gun we review is tested with the same precision a master uses to create a brush stroke—
              deliberate, thoughtful, and with deep respect for the craft. We believe in tools that don't just work, 
              but tools that inspire.
            </p>
            <p className="text-pretty font-semibold text-ink">
              Power. Flow. Recovery. This is our mantra, and our promise to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
