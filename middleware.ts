// src/middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (PUBLIC_FILE.test(pathname) || pathname.startsWith('/_next')) return

  if (pathname.startsWith('/en') || pathname.startsWith('/ko')) return

  const locale = request.headers.get('accept-language')?.startsWith('ko') ? 'ko' : 'en'
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  matcher: ['/', '/((?!_next|favicon.ico|assets).*)'],
}
