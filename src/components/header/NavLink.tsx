'use client'

import Link from 'next/link'
import { usePathname } from "next/navigation"

interface INavLink {
  href: string
  children: React.ReactNode
}

const NavLink = ({
  href,
  children,
}: INavLink) => {

  const path = usePathname()

  const defaultClassName = 'no-underline text-[#ddd6cb] font-bold py-2 px-4 rounded-lg hover:bg-linear-to-r hover:from-[#ff8a05] hover:to-[#f9b331] hover:text-transparent hover:bg-clip-text hover:text-shadow-[0_0_18px_rgba(248_190_42_/_0.8)] active:bg-linear-to-r active:from-[#ff8a05] active:to-[#f9b331] active:text-transparent active:bg-clip-text active:text-shadow-[0_0_18px_rgba(248_190_42_/_0.8)]'
  const activeClassName = 'bg-linear-to-r from-[#ff8a05] to-[#f9b331] text-transparent bg-clip-text'
  const linkClassName = `${defaultClassName} ${path.startsWith(href) ? activeClassName : ''}`

  return(
    <Link
      href={href}
      className={linkClassName}
    >
      {children}
    </Link>
  )
}

export default NavLink