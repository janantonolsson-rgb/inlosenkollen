import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { chartAxis, chartColors, chartTooltipStyle } from '../../lib/chartTheme'
import { useLanguage } from '../../i18n/LanguageContext'
import { Card } from '../ui/Card'

interface SavingsOverTimeChartProps {
  data: { years: number; savings: number }[]
}

export function SavingsOverTimeChart({ data }: SavingsOverTimeChartProps) {
  const { t, formatMoney } = useLanguage()

  const chartData = data.map((d) => ({
    label: `${t.results.yearPrefix} ${d.years}`,
    besparing: d.savings,
  }))

  return (
    <Card padding="lg">
      <h3 className="text-base font-semibold text-primary">{t.results.savingsOverTimeTitle}</h3>
      <p className="mt-1 text-sm text-muted">
        {t.results.savingsOverTimeSubtitle}
      </p>
      <div className="mt-8 h-64" aria-label={t.results.savingsOverTimeTitle}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid {...chartAxis.grid} vertical={false} />
            <XAxis dataKey="label" tick={chartAxis.tick} axisLine={false} tickLine={false} />
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
            <Line
              type="monotone"
              dataKey="besparing"
              name={t.results.accumulatedSavingsSeries}
              stroke={chartColors.savings}
              strokeWidth={2}
              dot={{ fill: chartColors.savings, r: 4, strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
