import LocaleSwitcher from '@/components/LanguageSwitcher'
import Link from 'next/link'
import { Search } from 'lucide-react'

const RightHeader = () => {
  return (
    <div className="flex items-center gap-2 ml-4">
      <Link href="/search">
        <span className="sr-only">Search</span>
        {/* <SearchIcon className="w-5 text-primary" /> */}
        <Search className="w-5 text-primary" />
      </Link>
      <LocaleSwitcher />
    </div>
  )
}

export default RightHeader
