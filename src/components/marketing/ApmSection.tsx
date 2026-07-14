import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/Section'

const methods = [
  {
    name: 'Swish',
    description: 'Populärt i Sverige med fast eller procentuell avgift. Jämförs separat från kortinlösen.',
  },
  {
    name: 'Klarna',
    description: 'Buy now, pay later och direktbetalningar med egna avgiftsmodeller per produkt.',
  },
  {
    name: 'MobilePay',
    description: 'Vanligt i Danmark och Finland. Ofta med annan prissättning än kortbetalningar.',
  },
  {
    name: 'Lokala betalningsmetoder',
    description: 'Trustly, Vipps, BankAxept m.fl. bör utvärderas separat utifrån volym och avtal.',
  },
]

export function ApmSection() {
  return (
    <section className="mt-24">
      <SectionHeader
        eyebrow="Övriga betalmetoder"
        title="Alternativa betalningsmetoder"
        description="Swish, Klarna, MobilePay och andra lokala betalningsmetoder ingår inte automatiskt i kalkylatorn. Dessa metoder har ofta olika prismodeller och bör jämföras separat utifrån er faktiska volym och avtal."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {methods.map((method) => (
          <Card key={method.name} padding="sm" variant="elevated">
            <h3 className="text-sm font-semibold text-primary">{method.name}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{method.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
