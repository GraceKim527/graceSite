import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Grace Kim - Frontend Developer',
  description:
    'Portfolio of Grace Kim, Frontend Developer specializing in React, Next.js, and modern web technologies',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="overflow-x-hidden antialiased">{children}</body>
    </html>
  )
}
