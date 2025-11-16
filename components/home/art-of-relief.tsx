'use client'

export function ArtOfRelief() {
  return (
    <section className="py-20 md:py-32 bg-milk relative overflow-hidden">
      {/* Ink brush strokes background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,500 Q250,300 500,500 T1000,500" fill="none" stroke="currentColor" strokeWidth="100" className="text-ink" />
          <path d="M0,700 Q250,600 500,700 T1000,700" fill="none" stroke="currentColor" strokeWidth="80" className="text-jade" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6 text-balance">
            The Art of Relief
          </h2>
          <p className="text-lg md:text-xl text-ink-light leading-relaxed text-pretty">
            Like ink flowing through water, energy flows through your body. Our massage guns channel that energy, 
            dissolving tension and restoring balance with every precise percussion. This is where ancient wisdom 
            meets modern technology—where recovery becomes an art form.
          </p>
        </div>
      </div>
    </section>
  )
}
