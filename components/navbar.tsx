'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/work-with-me', label: 'Work With Me' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/">
          Wisdom Ifeanyi
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? 'active' : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
