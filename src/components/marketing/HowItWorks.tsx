import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/Section'

const steps = [
  {
    number: 1,
    title: 'Flera inlösenavtal',
    description:
      'Kunden har avtal med flera inlösare och kan ta emot betalningar via olika kanaler.',
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
      'Transaktionen skickas automatiskt till det mest fördelaktiga avtalet baserat på era regler och priser.',
  },
]

const benefits = [
  'Lägre transaktionskostnader genom optimerad prissättning',
  'Bättre redundans vid driftstörning hos en enskild inlösare',
  'Minskat beroende av en enskild leverantör',
  'Möjlighet att optimera olika korttyper separat',
]

export function HowItWorks() {
  return (
    <section id="hur-det-fungerar" className="scroll-mt-20">
      <SectionHeader
        eyebrow="Så fungerar det"
        title="Intelligent routing i tre steg"
        description="Intelligent routing analyserar varje transaktion och väljer det inlösenavtal som ger bäst ekonomiskt utfall — baserat på era avtal och konfiguration."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.number} padding="lg" className="flex flex-col">
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-border text-sm font-semibold text-primary">
              {step.number}
            </div>
            <h3 className="text-base font-semibold text-primary">{step.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{step.description}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-8" padding="lg">
        <h3 className="text-base font-semibold text-primary">Routing kan bidra till</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5 text-sm text-muted">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {benefit}
            </li>
          ))}
        </ul>
        <p className="mt-6 rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-muted">
          Möjligheterna beror på kundens avtal, tekniska uppsättning, marknad och vilka
          betalningsmetoder som stöds. Alla transaktioner kan inte alltid routas till valfri
          inlösare.
        </p>
      </Card>

      <div className="mt-10 flex justify-center">
        <Button
          variant="secondary"
          size="lg"
          onClick={() => document.getElementById('kalkylator')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Prova kalkylatorn
        </Button>
      </div>
    </section>
  )
}
