import { useState } from 'react'
import { Logo } from '../brand/Logo'
import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'
import { useLanguage } from '../../i18n/LanguageContext'
import type { Language } from '../../i18n/translations'

const scrollTo = (id: string) => {
  document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
}

const LANGUAGE_ORDER: Language[] = ['sv', 'en', 'no', 'da', 'fi']
const LANGUAGE_SHORT_LABEL: Record<Language, string> = {
  sv: 'SV',
  en: 'EN',
  no: 'NO',
  da: 'DA',
  fi: 'FI',
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
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
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => setLangMenuOpen((open) => !open)}
              className="inline-flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
              aria-haspopup="listbox"
              aria-expanded={langMenuOpen}
              aria-label="Byt språk / Switch language"
            >
              {LANGUAGE_SHORT_LABEL[language]}
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langMenuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangMenuOpen(false)} aria-hidden="true" />
                <div
                  role="listbox"
                  className="absolute right-0 z-20 mt-1.5 w-36 rounded-lg border border-border bg-card py-1 shadow-lg"
                >
                  {LANGUAGE_ORDER.map((lng) => (
                    <button
                      key={lng}
                      type="button"
                      role="option"
                      aria-selected={language === lng}
                      onClick={() => {
                        setLanguage(lng)
                        setLangMenuOpen(false)
                      }}
                      className={cn(
                        'flex w-full items-center px-3 py-2 text-left text-sm hover:bg-surface',
                        language === lng ? 'font-semibold text-accent' : 'text-primary',
                      )}
                    >
                      {t.languageNames[lng]}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

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

          <div className="mt-2 flex flex-wrap gap-1.5 px-3">
            {LANGUAGE_ORDER.map((lng) => (
              <button
                key={lng}
                type="button"
                onClick={() => setLanguage(lng)}
                className={cn(
                  'min-h-[36px] rounded-lg border px-3 text-sm font-medium',
                  language === lng
                    ? 'border-accent bg-accent-muted/30 text-accent'
                    : 'border-border text-muted hover:bg-surface',
                )}
              >
                {LANGUAGE_SHORT_LABEL[lng]}
              </button>
            ))}
          </div>

          <Button className="mt-2 w-full" onClick={() => handleNavClick('#kontakt')}>
            {t.leadForm.submit}
          </Button>
        </nav>
      </div>
    </header>
  )
}
