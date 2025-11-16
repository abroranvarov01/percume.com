import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative bg-ink text-milk py-12">
      {/* Ink flow decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-jade via-coral to-jade opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">
              PER<span className="text-jade">•</span>CU<span className="text-coral">•</span>MAX
            </h3>
            <p className="text-sm text-milk/80 leading-relaxed">
              Where precision meets recovery. Experience the art of muscle relief.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-milk/80 hover:text-jade transition-colors">
                Home
              </Link>
              <Link href="/reviews" className="text-sm text-milk/80 hover:text-jade transition-colors">
                Reviews
              </Link>
              <Link href="/about" className="text-sm text-milk/80 hover:text-jade transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-milk/80 hover:text-jade transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-milk/80 hover:text-jade transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-milk/80 hover:text-jade transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-milk/20 pt-8 text-center text-sm text-milk/70">
          <p className="mb-2">© 2025 PercuMax.com. All rights reserved.</p>
          <p className="mb-1">Amazon Associate Partner</p>
          <p className="text-xs">
            🛒 As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
