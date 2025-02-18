'use client'

import { Locale } from '@/i18n/routing'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { Flag } from './icons'
import { Localei18N } from '@/libs'

type Props = {
  defaultValue: string
  items: Array<{ value: string; label: string }>
  label: string
}

export default function LocaleSwitcherSelect({ defaultValue, items, label }: Props) {
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  // const pathname = usePathname()
  const params = useParams()
  const router = useRouter()

  function onChange(value: string) {
    startTransition(() => {
      router.replace(`/${value}/${params.slug}`)
      setOpen(false)
    })
  }

  return (
    <div className="relative">
      <div className="dropdown dropdown-end ">
        <div
          onClick={() => setOpen(!open)}
          tabIndex={0}
          role="button"
          className="btn m-1 btn-ghost flex flex-nowrap"
        >
          <span> {label}</span>
          {defaultValue === 'en' ? (
            <Flag locale={Localei18N.EN} size={18} />
          ) : (
            <Flag locale={Localei18N.ID} size={18} />
          )}
        </div>
        {open && (
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-lg z-[1]  p-2 shadow"
          >
            {items.map((item) => (
              <li key={item.value}>
                <a
                  className={`
              rounded-sm p-2 transition-colors hover:bg-slate-200
              ${isPending && 'pointer-events-none opacity-60'}
            `}
                  onClick={() => onChange(item.value)}
                >
                  <Flag locale={item.value as Localei18N} size={18} />
                  {item.label}{' '}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
