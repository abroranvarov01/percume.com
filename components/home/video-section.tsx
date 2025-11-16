export function VideoSection() {
  return (
    <section className="py-20 md:py-32 bg-paper watercolor-texture">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">
              Precision Meets Art
            </h2>
            <p className="text-lg text-ink-light max-w-2xl mx-auto text-pretty">
              Watch how professional-grade percussion therapy transforms muscle recovery
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-muted aspect-video">
            {/* Ink splash border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-jade/20 via-transparent to-coral/20 pointer-events-none" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
            
            <img 
              src="/massage-gun-in-action-professional-therapy.jpg" 
              alt="Massage gun demonstration"
              className="w-full h-full object-cover"
            />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
