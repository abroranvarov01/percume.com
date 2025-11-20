import { NextRequest, NextResponse } from 'next/server'

export const slugs = [
	'hypervolt-2-pro',
	'theragun-prime',
	'ekrin-athletics-kestrel',
	'theragun-mini',
	'hypervolt-go-2',
	'bob-and-brad-d6-pro',
	'theragun-pro',
	'renpho-heavy-duty',
	'eetao-charger-reathlete-deep4s',
]

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