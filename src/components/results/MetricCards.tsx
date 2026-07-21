import { formatPercent } from '../../lib/formatters'
import { useLanguage } from '../../i18n/LanguageContext'
import { Card } from '../ui/Card'
import { Metric } from '../ui/Metric'

interface MetricCardsProps {
  currentAnnualCost: number
  routedAnnualCost: number
  annualSavings: number
  percentSavings: number
  threeYearSavings: number
  tenYearSavings: number
}

export function MetricCards({
  annualSavings,
  percentSavings,
  threeYearSavings,
  tenYearSavings,
}: MetricCardsProps) {
  const { t, formatMoney } = useLanguage()

  return (
    <div className="space-y-4">
      {/* Rad 1: procentuell förbättring och ekonomisk effekt per år */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card padding="sm">
          <Metric label={t.metrics.percentSavings} value={formatPercent(percentSavings)} highlight />
        </Card>
        <Card padding="sm">
          <Metric label={t.metrics.annualSavings} value={formatMoney(annualSavings)} highlight />
        </Card>
      </div>

      {/* Rad 2: långsiktig påverkan över tid */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card padding="sm">
          <Metric label={t.metrics.oneYearSavings} value={formatMoney(annualSavings)} />
        </Card>
        <Card padding="sm">
          <Metric label={t.metrics.threeYearSavings} value={formatMoney(threeYearSavings)} />
        </Card>
        <Card padding="sm">
          <Metric label={t.metrics.tenYearSavings} value={formatMoney(tenYearSavings)} />
        </Card>
      </div>
    </div>
  )
}
