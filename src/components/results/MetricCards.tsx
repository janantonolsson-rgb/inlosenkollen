import { formatPercent, formatSEK } from '../../lib/formatters'
import { Card } from '../ui/Card'
import { Metric, MetricGrid } from '../ui/Metric'

interface MetricCardsProps {
  currentAnnualCost: number
  routedAnnualCost: number
  annualSavings: number
  percentSavings: number
  threeYearSavings: number
}

export function MetricCards({
  currentAnnualCost,
  routedAnnualCost,
  annualSavings,
  percentSavings,
  threeYearSavings,
}: MetricCardsProps) {
  const metrics: { label: string; value: string; highlight?: boolean }[] = [
    { label: 'Nuvarande kostnad per år', value: formatSEK(currentAnnualCost) },
    { label: 'Kostnad med intelligent routing', value: formatSEK(routedAnnualCost) },
    { label: 'Besparing per år', value: formatSEK(annualSavings), highlight: true },
    { label: 'Procentuell kostnadsminskning', value: formatPercent(percentSavings), highlight: true },
    { label: 'Beräknad besparing över tre år', value: formatSEK(threeYearSavings), highlight: true },
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
