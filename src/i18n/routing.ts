import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import localization from './localization'

export const routingResult = async () => {
  return defineRouting({
    locales: localization.locales.map((locale) => locale.code),
    defaultLocale: localization.defaultLocale,
    localeDetection: localization.localeDetection,
  })
}

// export type Pathnames = keyof typeof routing.pathnames
export const routing = await routingResult()
export type Locale = (typeof routing.locales)[number]
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(
  await routingResult(),
)
