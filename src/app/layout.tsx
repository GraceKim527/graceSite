import type { Metadata } from 'next'
import '../styles/globals.css'
import GoogleAnalytics from '@/features/googleAnalytics/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Grace Kim - Frontend Developer',
  description:
    'Portfolio of Grace Kim, Frontend Developer specializing in React, Next.js, and modern web technologies',
  icons: {
    icon: '/image/favicon.ico',
    shortcut: '/image/favicon.ico',
    apple: '/image/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="overflow-x-hidden antialiased">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
