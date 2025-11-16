import { HeroSection } from '@/components/home/hero-section'
import { ArtOfRelief } from '@/components/home/art-of-relief'
import { TopProducts } from '@/components/home/top-products'
import { InkFlowSection } from '@/components/home/ink-flow-section'
import { VideoSection } from '@/components/home/video-section'
import { TechnologySection } from '@/components/home/technology-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { AboutSection } from '@/components/home/about-section'
import { ContactSection } from '@/components/home/contact-section'

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <HeroSection />
      <ArtOfRelief />
      <TopProducts />
      <InkFlowSection />
      <VideoSection />
      <TechnologySection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
