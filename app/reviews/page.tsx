'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { products } from '@/data/products'

const categories = ['All', 'Professional', 'Premium', 'Compact', 'Therapy Tools']

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <main className="min-h-screen pt-16 bg-paper watercolor-texture">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-ink mb-4">
            Expert Reviews
          </h1>
          <p className="text-lg md:text-xl text-ink-light max-w-2xl mx-auto text-pretty">
            Comprehensive analysis of the finest massage guns, tested with precision and care
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? 'bg-jade hover:bg-jade/90 text-milk'
                  : 'border-jade/30 text-ink hover:bg-jade/10'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.slug}
              className="group overflow-hidden bg-milk border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
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
                    <span className="text-xs text-ink-light">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-bold text-ink mb-4">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <Link href={`/reviews/${product.slug}`}>
                    <Button className="bg-ink hover:bg-ink/90 text-milk">
                      Read Review
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
