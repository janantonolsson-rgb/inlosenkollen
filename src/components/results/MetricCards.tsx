import { formatPercent } from '../../lib/formatters'
import { useLanguage } from '../../i18n/LanguageContext'
import { Card } from '../ui/Card'
import { Metric, MetricGrid } from '../ui/Metric'

interface MetricCardsProps {
  currentAnnualCost: number
  routedAnnualCost: number
  annualSavings: number
  percentSavings: number
  threeYearSavings: number
  tenYearSavings: number
}

export function MetricCards({
  currentAnnualCost,
  routedAnnualCost,
  annualSavings,
  percentSavings,
  threeYearSavings,
  tenYearSavings,
}: MetricCardsProps) {
  const { t, formatMoney } = useLanguage()

  const metrics: { label: string; value: string; highlight?: boolean }[] = [
    { label: t.metrics.currentCost, value: formatMoney(currentAnnualCost) },
    { label: t.metrics.routedCost, value: formatMoney(routedAnnualCost) },
    { label: t.metrics.annualSavings, value: formatMoney(annualSavings), highlight: true },
    { label: t.metrics.percentSavings, value: formatPercent(percentSavings), highlight: true },
    { label: t.metrics.threeYearSavings, value: formatMoney(threeYearSavings), highlight: true },
    { label: t.metrics.tenYearSavings, value: formatMoney(tenYearSavings), highlight: true },
  ]

  return (
    <MetricGrid columns={3}>
      {metrics.map((metric) => (
        <Card key={metric.label} padding="sm">
          <Metric label={metric.label} value={metric.value} highlight={metric.highlight} />
        </Card>
      ))}
    </MetricGrid>
  )
}
