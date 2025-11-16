import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navigation } from '@/components/navigation'
import { CookieBanner } from '@/components/cookie-banner'
import { Footer } from '@/components/footer'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PER•CU•MAX - Power. Flow. Recovery.',
  description: 'Experience the art of muscle relief with premium massage guns. Where precision meets recovery.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/icon-192.jpg',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/apple-icon.jpg',
      sizes: '180x180',
      type: 'image/png',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-paper text-ink">
        <Navigation />
        {children}
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
