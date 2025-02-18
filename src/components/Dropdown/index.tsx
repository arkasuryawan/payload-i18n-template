import React from 'react'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { CMSLinkType } from '../Link'

export const Dropdown: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = 'inline',
    children,
    className,
    label,
    newTab,
    reference,
    url,
    subItems,
  } = props

  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!href) return null

  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  if (appearance === 'inline') {
    return (
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    )
  }
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className={className}>
        {label && label}
        {children && children}
        {subItems && subItems.length > 0 && <ChevronDown size={15} />}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-auto p-2 shadow"
      >
        {subItems?.map(({ link }, i) => (
          <li key={i} className="text-nowrap">
            <a href={link.url || ''} className="text-nowrap">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
