export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16 bg-paper">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto watercolor-texture rounded-3xl bg-milk p-8 md:p-16 shadow-xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-ink mb-8 text-balance">
            Where Flow Meets Focus
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-ink-light leading-relaxed">
            <p className="text-xl text-ink font-semibold">
              PercuMax was born from a simple belief: recovery should be as beautiful as it is effective.
            </p>

            <p>
              Inspired by the fluid grace of Japanese calligraphy, we've created a platform that celebrates 
              the intersection of art and science. Like ink flowing through water, energy flows through your 
              body—and our mission is to help you harness that flow for optimal recovery.
            </p>

            <p>
              Each massage gun we review is tested with the same precision a master uses to create a brush stroke—
              deliberate, thoughtful, and with deep respect for the craft. We believe in tools that don't just work, 
              but tools that inspire.
            </p>

            <h2 className="font-serif text-3xl font-bold text-ink mt-12 mb-6">Our Philosophy</h2>

            <p>
              <strong className="text-ink">Power.</strong> We seek devices that deliver genuine therapeutic benefit, 
              with motors strong enough to reach deep tissue but controlled enough for sensitive areas.
            </p>

            <p>
              <strong className="text-ink">Flow.</strong> Design matters. We favor tools that feel natural in the hand, 
              that move with you rather than against you, that integrate seamlessly into your recovery ritual.
            </p>

            <p>
              <strong className="text-ink">Recovery.</strong> At the end of the day, results are what matter. 
              We test extensively, consult with professionals, and listen to real user experiences to ensure 
              our recommendations truly help people feel better.
            </p>

            <h2 className="font-serif text-3xl font-bold text-ink mt-12 mb-6">Our Promise</h2>

            <p>
              Every review is written with integrity. As Amazon Associates, we earn from qualifying purchases, 
              but this never influences our honest assessments. We recommend only products we genuinely believe 
              in—products we'd use ourselves and recommend to family and friends.
            </p>

            <p className="text-xl text-ink font-semibold border-l-4 border-jade pl-6 italic">
              "Like the gentle touch of a massage gun dispersing tension, we aim to disperse the confusion 
              in the crowded recovery tools market—helping you find exactly what you need."
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
