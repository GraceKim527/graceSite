import { getRequestConfig } from 'next-intl/server'
import { hasLocale } from 'next-intl'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const resolvedLocale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale
  const messages = (await import(`@/messages/${resolvedLocale}.json`)).default

  return {
    locale: resolvedLocale,
    messages,
  }
})
