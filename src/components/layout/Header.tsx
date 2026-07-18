import { useState } from 'react'
import { Logo } from '../brand/Logo'
import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'
import { useLanguage } from '../../i18n/LanguageContext'

const scrollTo = (id: string) => {
  document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { href: '#kalkylator', label: t.nav.calculator },
    { href: '#hur-det-fungerar', label: t.nav.howItWorks },
    { href: '#kontakt', label: t.nav.contact },
  ]

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    scrollTo(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface-elevated/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          aria-label="Till startsidan"
        >
          <Logo size="sm" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Huvudnavigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLanguage(language === 'sv' ? 'en' : 'sv')}
            className="hidden rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent sm:inline-flex"
            aria-label="Byt språk / Switch language"
          >
            {language === 'sv' ? 'EN' : 'SV'}
          </button>

          <Button
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => scrollTo('kontakt')}
          >
            {t.leadForm.submit}
          </Button>

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-border md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Stäng meny' : 'Öppna meny'}
          >
            {mobileOpen ? (
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'border-t border-border bg-surface-elevated md:hidden',
          mobileOpen ? 'block' : 'hidden',
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6" aria-label="Mobilnavigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="min-h-[44px] rounded-lg px-3 text-left text-sm font-medium text-primary hover:bg-surface"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setLanguage(language === 'sv' ? 'en' : 'sv')}
            className="mt-2 min-h-[44px] rounded-lg px-3 text-left text-sm font-medium text-muted hover:bg-surface"
          >
            {language === 'sv' ? 'Switch to English' : 'Byt till svenska'}
          </button>
          <Button className="mt-2 w-full" onClick={() => handleNavClick('#kontakt')}>
            {t.leadForm.submit}
          </Button>
        </nav>
      </div>
    </header>
  )
}
