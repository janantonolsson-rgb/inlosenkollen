import { Logo } from '../brand/Logo'
import { Disclaimer } from './Disclaimer'

const footerLinks = [
  { href: '#kalkylator', label: 'Kalkylator' },
  { href: '#hur-det-fungerar', label: 'Så fungerar det' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Logo showWordmark variant="inverse" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Intelligent betalningsrouting för nordiska handlare och retailföretag.
            </p>
          </div>
          <nav className="flex flex-col gap-2.5" aria-label="Sidfotsnavigation">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 rounded-lg border border-white/10 bg-white/5 p-5">
          <Disclaimer variant="inverse" />
        </div>

        <p className="mt-8 text-xs text-white/50">
          © {new Date().getFullYear()} Westpay. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  )
}
