import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { products } from '@/data/products'

const topProducts = products.slice(0, 3)

export function TopProducts() {
  return (
    <section className="py-20 md:py-32 bg-paper watercolor-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">
            Top Massage Guns
          </h2>
          <p className="text-lg text-ink-light max-w-2xl mx-auto text-pretty">
            Hand-selected devices that blend power, precision, and artistry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProducts.map((product, index) => (
            <Card 
              key={product.slug} 
              className="group overflow-hidden bg-milk border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Watercolor splash on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-jade/0 via-transparent to-coral/0 group-hover:from-jade/10 group-hover:to-coral/10 transition-all duration-500 pointer-events-none" />
              
              <div className="aspect-square relative overflow-hidden bg-muted">
                <img 
                  src={product.image || "/placeholder.svg"} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-jade bg-jade/10 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-coral text-coral" />
                    <span className="text-sm font-semibold text-ink">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-ink mb-2">
                  {product.name}
                </h3>
                
                <p className="text-sm text-ink-light mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link href={`/reviews/${product.slug}`}>
                    <Button className="bg-ink hover:bg-ink/90 text-milk">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/reviews">
            <Button size="lg" variant="outline" className="border-jade text-jade hover:bg-jade hover:text-milk">
              View All Reviews
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
