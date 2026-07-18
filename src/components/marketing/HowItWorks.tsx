import type { ReactElement } from 'react'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/Section'
import { RoutingIllustration } from './RoutingIllustration'
import { useLanguage } from '../../i18n/LanguageContext'

type Step = {
  number: number
  title: string
  description: string
  link?: { href: string; label: string }
}

const stepsByLanguage: Record<'sv' | 'en', Step[]> = {
  sv: [
    {
      number: 1,
      title: 'Betalterminaler med Multi Acquirer Routing',
      description:
        'Kunden använder betalterminaler som stödjer Multi Acquirer Routing (MAR) — till exempel Westpays betalterminaler — där flera olika inlösenavtal kan kopplas in samtidigt.',
      link: { href: 'https://www.westpay.se/terminals', label: 'Westpays betalterminaler' },
    },
    {
      number: 2,
      title: 'Analys per transaktion',
      description:
        'Varje betalning analyseras utifrån korttyp, kortnätverk, utgivningsland och beräknad kostnad.',
    },
    {
      number: 3,
      title: 'Automatisk routing',
      description:
        'Terminalen väljer automatiskt det mest kostnadseffektiva inlösenavtalet utifrån företagets konfiguration och regler.',
    },
  ],
  en: [
    {
      number: 1,
      title: 'Payment terminals with Multi Acquirer Routing',
      description:
        'The customer uses payment terminals that support Multi Acquirer Routing (MAR) — for example Westpay\u2019s payment terminals — where several different acquiring agreements can be connected at the same time.',
      link: { href: 'https://www.westpay.se/terminals', label: 'Westpay\u2019s payment terminals' },
    },
    {
      number: 2,
      title: 'Per-transaction analysis',
      description:
        'Every payment is analyzed based on card type, card network, issuing country, and calculated cost.',
    },
    {
      number: 3,
      title: 'Automatic routing',
      description:
        'The terminal automatically selects the most cost-effective acquiring agreement based on the company\u2019s configuration and rules.',
    },
  ],
}

type Benefit = {
  title: string
  description: string
  icon: (props: { className?: string }) => ReactElement
}

const icons = {
  cost: (p: { className?: string }) => (
    <svg className={p.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path strokeLinecap="round" d="M12 8v8M9.5 10c0-1.1 1.1-2 2.5-2s2.5.9 2.5 2-1.1 1.5-2.5 1.5-2.5.5-2.5 1.6 1.1 1.9 2.5 1.9 2.5-.6 2.5-1.9" />
    </svg>
  ),
  shield: (p: { className?: string }) => (
    <svg className={p.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <path strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12l1.8 1.8 3.2-3.6" />
    </svg>
  ),
  redundancy: (p: { className?: string }) => (
    <svg className={p.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <rect x="4" y="4" width="16" height="6" rx="1.2" />
      <rect x="4" y="14" width="16" height="6" rx="1.2" />
      <circle cx="8" cy="7" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="8" cy="17" r="0.8" fill="currentColor" stroke="none" />
      <path strokeLinecap="round" d="M12 10v4" />
    </svg>
  ),
  smart: (p: { className?: string }) => (
    <svg className={p.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5a3 3 0 0 0-3 3c0 .7.2 1.3.5 1.8A3 3 0 0 0 5 12a3 3 0 0 0 1.5 2.6 3 3 0 0 0 2.7 4.4H12" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 4.5a3 3 0 0 1 3 3c0 .7-.2 1.3-.5 1.8A3 3 0 0 1 19 12a3 3 0 0 1-1.5 2.6 3 3 0 0 1-2.7 4.4H12" />
      <path strokeLinecap="round" d="M12 4.5v15" />
    </svg>
  ),
  flexibility: (p: { className?: string }) => (
    <svg className={p.className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.5 1.5M7.1 16.9l-1.5 1.5M18.4 18.4l-1.5-1.5M7.1 7.1 5.6 5.6" />
    </svg>
  ),
}

const benefitsByLanguage: Record<'sv' | 'en', Benefit[]> = {
  sv: [
    {
      title: 'Lägre kostnad',
      description: 'Varje transaktion routas till det avtal som ger bäst pris för just den korttypen.',
      icon: icons.cost,
    },
    {
      title: 'Högre driftsäkerhet',
      description: 'Flera parallella inlösenavtal minskar risken att en enskild driftstörning stoppar betalningar helt.',
      icon: icons.shield,
    },
    {
      title: 'Redundans vid driftstopp',
      description: 'Ligger en inlösare nere kan trafiken automatiskt styras om till en annan, utan manuellt ingrepp.',
      icon: icons.redundancy,
    },
    {
      title: 'Smart styrning av transaktioner',
      description: 'Regler kan anpassas efter korttyp, belopp eller andra kriterier — inte bara lägsta pris.',
      icon: icons.smart,
    },
    {
      title: 'Flexibilitet över tid',
      description: 'Nya inlösare kan läggas till eller viktas om i takt med att verksamheten och avtalen förändras.',
      icon: icons.flexibility,
    },
  ],
  en: [
    {
      title: 'Lower cost',
      description: 'Every transaction is routed to the agreement that gives the best price for that specific card type.',
      icon: icons.cost,
    },
    {
      title: 'Higher reliability',
      description: 'Several parallel acquiring agreements reduce the risk that a single outage stops payments entirely.',
      icon: icons.shield,
    },
    {
      title: 'Redundancy during downtime',
      description: 'If one acquirer is down, traffic can automatically be redirected to another, with no manual intervention.',
      icon: icons.redundancy,
    },
    {
      title: 'Smart transaction steering',
      description: 'Rules can be adapted by card type, amount, or other criteria — not just lowest price.',
      icon: icons.smart,
    },
    {
      title: 'Flexibility over time',
      description: 'New acquirers can be added or reweighted as the business and its agreements evolve.',
      icon: icons.flexibility,
    },
  ],
}

export function HowItWorks() {
  const { language, t } = useLanguage()
  const steps = stepsByLanguage[language]
  const benefits = benefitsByLanguage[language]
  return (
    <section id="hur-det-fungerar" className="scroll-mt-20">
      <SectionHeader
        eyebrow={t.howItWorks.eyebrow}
        title={t.howItWorks.title}
        description={t.howItWorks.description}
      />

      <p className="-mt-6 mb-10 max-w-3xl text-sm leading-relaxed text-muted">
        {t.howItWorks.intro}
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.number} padding="lg" className="flex flex-col">
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm font-semibold text-primary">
              {step.number}
            </div>
            <h3 className="text-base font-semibold text-primary">{step.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {step.link ? (
                <>
                  {step.description.split(step.link.label)[0]}
                  <a
                    href={step.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent hover:underline"
                  >
                    {step.link.label}
                  </a>
                  {step.description.split(step.link.label)[1]}
                </>
              ) : (
                step.description
              )}
            </p>
          </Card>
        ))}
      </div>

      <Card className="mt-8" padding="lg">
        <div className="text-center">
          <h3 className="text-base font-semibold text-primary">
            {t.howItWorks.diagramTitle}
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
            {t.howItWorks.diagramSubtitle}
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <RoutingIllustration />
        </div>
      </Card>

      <Card className="mt-8" padding="lg">
        <h3 className="text-base font-semibold text-primary">{t.howItWorks.valueTitle}</h3>
        <p className="mt-2 text-sm text-muted">
          {t.howItWorks.valueSubtitle}
        </p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface text-primary">
                <benefit.icon className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-sm font-medium text-primary">{benefit.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-muted">
          {t.howItWorks.valueFootnote}
        </p>
      </Card>

      <div className="mt-10 flex justify-center">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => document.getElementById('kalkylator')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t.howItWorks.ctaButton}
        </Button>
      </div>
    </section>
  )
}
