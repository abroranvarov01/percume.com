'use client'

import { useEffect, useRef } from 'react'

export function InkFlowSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Array<{ x: number; y: number; vx: number; vy: number; life: number }> = []

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      for (let i = 0; i < 3; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
        })
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.fillStyle = 'rgba(249, 248, 247, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life -= 0.01

        if (particle.life <= 0) {
          particles.splice(index, 1)
          return
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(91, 165, 140, ${particle.life * 0.5})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="py-20 md:py-32 bg-ink relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-jade mb-6">
            Interactive Flow
          </h2>
          <p className="text-lg md:text-xl text-jade/70 leading-relaxed">
            Move your cursor to create flowing ink patterns. Like the gentle touch of a massage gun, 
            watch energy disperse and flow across the canvas.
          </p>
        </div>
      </div>
    </section>
  )
}
