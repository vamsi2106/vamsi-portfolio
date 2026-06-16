import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Download, Menu, X } from 'lucide-react'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'
import { ButtonLink } from './ui/Button'
import { navItems, sectionIds } from '@/content/nav'
import { profile } from '@/content/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

export function Navbar() {
  const location = useLocation()
  const onHome = location.pathname === '/'
  const activeSection = useActiveSection(onHome ? sectionIds : [])
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [location])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors',
        scrolled
          ? 'border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80'
          : 'border-transparent bg-transparent',
      )}
    >
      <Container as="nav" className="flex h-16 items-center justify-between gap-4">
        <Link
          to="/"
          className="rounded text-base font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Vamsi<span className="text-navy-600 dark:text-navy-300">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = onHome && activeSection === item.id
            return (
              <li key={item.id}>
                <Link
                  to={`/#${item.id}`}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-navy-600 dark:text-navy-300'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
                  )}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink
            href={profile.resumeUrl}
            download
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Download size={16} aria-hidden="true" />
            Résumé
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-300"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden dark:border-slate-800 dark:bg-slate-950">
          <Container className="py-3">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`/#${item.id}`}
                    className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <ButtonLink href={profile.resumeUrl} download size="md" className="w-full">
                  <Download size={16} aria-hidden="true" />
                  Download Résumé
                </ButtonLink>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  )
}
