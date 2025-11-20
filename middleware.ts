import { NextRequest, NextResponse } from 'next/server'

const slugs = [
  "small-dog-harness-leash-set",
  "puppy-supplies-starter-kit",
  "luxury-dog-bed-memory-foam",
  "interactive-puzzle-toys",
  "small-dog-grooming-kit-professional",
  "premium-dog-food-grain-free",
  "stewart-small-dog-training-treats",
  "old-mother-hubbard-training-treats",
  "portable-water-food-bowl-set"
];


export function middleware(req: NextRequest) {
  const referer = req.headers.get('referer') || ''

  if (referer.startsWith('https://plants-verse.com')) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
    const url = req.nextUrl.clone()
    url.pathname = `/reviews/${randomSlug}`

    const res = NextResponse.redirect(url)
    res.cookies.set('max', 'true', { path: '/', maxAge: 60 })

    return res
  }

}

export const config = {
  matcher: ['/verse'],
}