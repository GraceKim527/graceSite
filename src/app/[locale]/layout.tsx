// src/app/[locale]/layout.tsx

import type { Metadata } from 'next'
import '@/styles/globals.css'
import GoogleAnalytics from '@/features/googleAnalytics/GoogleAnalytics'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export const metadata: Metadata = {
  title: '프론트엔드 개발자 Grace | 사용자 경험을 설계합니다',
  description:
    '안녕하세요, 끊임없이 성장하는 프론트엔드 개발자 Grace입니다. JavaScript, TypeScript, React, Next.js 등을 사용하여 사용자 중심의 인터랙티브한 웹 애플리케이션을 개발합니다. 저의 프로젝트들을 둘러보고 함께 성장할 기회를 만들어가고 싶습니다.',
  icons: {
    icon: '/image/favicon.ico',
    shortcut: '/image/favicon.ico',
    apple: '/image/apple-touch-icon.png',
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  let messages
  try {
    messages = await getMessages({ locale })
  } catch (error) {
    console.error(error)
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="overflow-x-hidden antialiased">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <GoogleAnalytics />
      </body>
    </html>
  )
}
