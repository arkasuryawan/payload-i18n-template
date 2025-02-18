'use client'

import React from 'react'

import type { Header as HeaderType, Page, Post } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Dropdown } from '@/components/Dropdown'

interface HeaderNavProps extends HeaderType {
  subItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null
          newTab?: boolean | null
          reference?:
            | ({
                relationTo: 'pages'
                value: string | Page
              } | null)
            | ({
                relationTo: 'posts'
                value: string | Post
              } | null)
          url?: string | null
          label: string
        }
        id?: string | null
      }[]
    | null
}

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    // <pre>{JSON.stringify(navItems, null, 2)}</pre>
    <nav className="flex gap-3 items-center px-4 ">
      {navItems.map(({ link, subItems }, i) => {
        // return <pre key={i}>{JSON.stringify(subItems, null, 2)}</pre>
        return subItems && subItems.length > 0 ? (
          <Dropdown
            key={i}
            {...link}
            subItems={subItems}
            // subItems={subItems ?? []}
            appearance="link"
            className="px-2 items-center flex gap-1"
          />
        ) : (
          <CMSLink key={i} {...link} appearance="link" className="px-2 items-center flex gap-1" />
        )
      })}
    </nav>
  )
}
