import { formatSEK } from '../../lib/formatters'
import { Card } from '../ui/Card'

interface SavingsHeroProps {
  annualSavings: number
  canRoute: boolean
  isSimplifiedMode: boolean
}

export function SavingsHero({ annualSavings, canRoute, isSimplifiedMode }: SavingsHeroProps) {
  if (isSimplifiedMode) {
    return (
      <Card padding="lg" variant="elevated">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          Förenklat läge
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
          Välj detaljerade priser för att se potentiell besparing
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
          I förenklat läge visas er nuvarande beräknade kostnad baserat på genomsnittspriset
          i steg 1. Lägg till priser per korttyp hos flera inlösare för en fullständig
          routing-analys.
        </p>
      </Card>
    )
  }

  if (!canRoute) {
    return (
      <Card padding="lg" variant="elevated" className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          Ingen routing-data
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
          Lägg till inlösare för att se potentiell besparing
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
          Importera etablerade kortinlösare eller ange priser manuellt i steg 3 för en
          fullständig routing-analys.
        </p>
      </Card>
    )
  }

  return (
    <Card padding="lg" variant="elevated">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
        Uppskattad besparing
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-success sm:text-4xl lg:text-5xl">
        Potentiell årlig besparing: {formatSEK(annualSavings)}
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        Baserat på de priser och volymer du angivit. Faktisk besparing kan variera och är
        inte garanterad.
      </p>
    </Card>
  )
}
