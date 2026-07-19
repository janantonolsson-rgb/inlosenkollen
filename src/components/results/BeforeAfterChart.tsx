import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { chartAxis, chartColors, chartTooltipStyle } from '../../lib/chartTheme'
import { useLanguage } from '../../i18n/LanguageContext'
import { Card } from '../ui/Card'

interface BeforeAfterChartProps {
  currentAnnualCost: number
  routedAnnualCost: number
}

export function BeforeAfterChart({
  currentAnnualCost,
  routedAnnualCost,
}: BeforeAfterChartProps) {
  const { t, formatMoney } = useLanguage()

  const data = [
    {
      name: t.metrics.currentCost,
      nuvarande: currentAnnualCost,
      medRouting: routedAnnualCost,
    },
  ]

  return (
    <Card padding="lg">
      <h3 className="text-base font-semibold text-primary">{t.results.beforeAfterTitle}</h3>
      <p className="mt-1 text-sm text-muted">
        {t.results.beforeAfterSubtitle}
      </p>
      <div className="mt-8 h-64" aria-label={t.results.beforeAfterTitle}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={12}>
            <CartesianGrid {...chartAxis.grid} vertical={false} />
            <XAxis dataKey="name" tick={chartAxis.tick} axisLine={false} tickLine={false} />
            <YAxis
              tick={chartAxis.tick}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip
              formatter={(value) => formatMoney(Number(value))}
              contentStyle={chartTooltipStyle}
            />
            <Legend wrapperStyle={{ fontSize: 13, paddingTop: 16 }} />
            <Bar
              dataKey="nuvarande"
              name={t.results.currentCostSeries}
              fill={chartColors.current}
              radius={[6, 6, 0, 0]}
              maxBarSize={64}
            />
            <Bar
              dataKey="medRouting"
              name={t.results.routedCostSeries}
              fill={chartColors.routed}
              radius={[6, 6, 0, 0]}
              maxBarSize={64}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
