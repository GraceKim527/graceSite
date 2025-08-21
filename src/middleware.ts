import { NextRequest, NextResponse } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'

const locales = ['en', 'ko']
const defaultLocale = 'ko'

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
})

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const acceptLanguage = request.headers.get('accept-language') || ''
  const preferredLocale = acceptLanguage.split(',')[0]?.split('-')[0] || defaultLocale

  const matchedLocale = locales.includes(preferredLocale) ? preferredLocale : defaultLocale

  if (request.method === 'GET' && pathname === '/') {
    return NextResponse.redirect(new URL(`/${matchedLocale}`, request.url))
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/'],
}
