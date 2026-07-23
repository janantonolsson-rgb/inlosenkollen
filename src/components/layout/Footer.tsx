import { Logo } from '../brand/Logo'
import { Disclaimer } from './Disclaimer'
import { useLanguage } from '../../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  const columns = [
    {
      title: 'Kunskap',
      links: [
        { href: '/kunskap/vad-ar-kortinlosen', label: 'Vad är kortinlösen?' },
        { href: '/kunskap/vad-ar-en-inlosare', label: 'Vad är en inlösare?' },
        { href: '/kunskap/intelligent-routing', label: 'Intelligent routing' },
      ],
    },
    {
      title: 'Företag',
      links: [
        { href: '/foretag/retail', label: 'Kortinlösen för retail' },
        { href: '/foretag/kedjor', label: 'Kortinlösen för kedjor' },
        { href: '/foretag/hog-omsattning', label: 'Kortinlösen för hög omsättning' },
      ],
    },
    {
      title: 'Juridik',
      links: [
        { href: '/juridik/integritetspolicy', label: 'Integritetspolicy' },
        { href: '/juridik/cookies', label: 'Cookies' },
        { href: '/juridik/villkor', label: 'Villkor' },
      ],
    },
  ]

  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Logo showWordmark variant="inverse" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {t.footer.description}
            </p>
            <nav className="mt-6 flex flex-col gap-2.5" aria-label="Sidfotsnavigation">
              <a href="#kalkylator" className="text-sm text-white/70 hover:text-white">{t.nav.calculator}</a>
              <a href="#hur-det-fungerar" className="text-sm text-white/70 hover:text-white">{t.nav.howItWorks}</a>
              <a href="#kontakt" className="text-sm text-white/70 hover:text-white">{t.nav.contact}</a>
            </nav>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">{col.title}</p>
                <nav className="mt-3 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <a key={link.href} href={link.href} className="text-sm text-white/70 hover:text-white">
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-lg border border-white/10 bg-white/5 p-5">
          <Disclaimer variant="inverse" />
        </div>

        <p className="mt-8 text-xs text-white/50">
          © {new Date().getFullYear()} {t.footer.rights} {t.footer.developedBy}
        </p>
      </div>
    </footer>
  )
}
