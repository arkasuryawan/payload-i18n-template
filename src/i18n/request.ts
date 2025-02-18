import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

import en from './messages/en.json'

type Messages = typeof en

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  const routingResult = routing

  if (!locale || !routingResult.locales.includes(locale as any)) {
    locale = routingResult.defaultLocale
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
