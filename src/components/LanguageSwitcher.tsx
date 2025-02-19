import { useLocale, useTranslations } from 'next-intl'
import LocaleSwitcherSelect from './LocaleSwitcherSelect'

// import { useLocale } from 'next-intl'
// import { useParams, usePathname } from 'next/navigation'
// import { useRouter } from 'next/router'
// import { TypedLocale } from 'payload'
// import { useTransition } from 'react'

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: 'en',
          label: t('en'),
        },
        {
          value: 'id',
          label: t('id'),
        },
      ]}
      label={t('label')}
    />
  )
}

// export function LocaleSwitcher() {
//   // inspired by https://github.com/amannn/next-intl/blob/main/examples/example-app-router/src/components/LocaleSwitcherSelect.tsx
//   const locale = useLocale()
//   const router = useRouter()
//   const [, startTransition] = useTransition()
//   const pathname = usePathname()
//   const params = useParams()

//   function onSelectChange(value: TypedLocale) {
//     startTransition(() => {
//       router.replace(
//         // @ts-expect-error -- TypeScript will validate that only known `params`
//         // are used in combination with a given `pathname`. Since the two will
//         // always match for the current route, we can skip runtime checks.
//         { pathname, params },
//         { locale: value },
//       )
//     })
//   }

//   return (
//     <Select onValueChange={onSelectChange} value={locale}>
//       <SelectTrigger className="w-auto text-sm bg-transparent gap-2 pl-0 md:pl-3 border-none">
//         <SelectValue placeholder="Theme" />
//       </SelectTrigger>
//       <SelectContent>
//         {localization.locales
//           .sort((a, b) => a.label.localeCompare(b.label)) // Ordenar por label
//           .map((locale) => (
//             <SelectItem value={locale.code} key={locale.code}>
//               {locale.label}
//             </SelectItem>
//           ))}
//       </SelectContent>
//     </Select>
//   )
// }
