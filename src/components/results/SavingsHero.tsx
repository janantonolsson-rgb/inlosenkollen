import { useLanguage } from '../../i18n/LanguageContext'
import { Card } from '../ui/Card'

interface SavingsHeroProps {
  annualSavings: number
  canRoute: boolean
  isSimplifiedMode: boolean
}

export function SavingsHero({ annualSavings, canRoute, isSimplifiedMode }: SavingsHeroProps) {
  const { t, formatMoney } = useLanguage()

  if (isSimplifiedMode) {
    return (
      <Card padding="lg" variant="elevated">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          {t.results.simplifiedModeLabel}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
          {t.results.simplifiedModeTitle}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
          {t.results.simplifiedModeBody}
        </p>
      </Card>
    )
  }

  if (!canRoute) {
    return (
      <Card padding="lg" variant="elevated" className="text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          {t.results.noRoutingLabel}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
          {t.results.noRoutingTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
          {t.results.noRoutingBody}
        </p>
      </Card>
    )
  }

  return (
    <Card padding="lg" variant="elevated">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
        {t.results.estimatedSavingsLabel}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-success sm:text-4xl lg:text-5xl">
        {t.results.potentialAnnualSavingsPrefix} {formatMoney(annualSavings)}
      </h2>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
        {t.results.savingsDisclaimer}
      </p>
    </Card>
  )
}
