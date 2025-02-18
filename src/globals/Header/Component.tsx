import { HeaderClient } from './Component.client'
import { getCachedGlobal, getGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'
import { TypedLocale } from 'payload'

export async function Header({ locale }: { locale: TypedLocale }) {
  const headerData: Header = await getGlobal('header', 1, locale)

  return <HeaderClient data={headerData} />
}
