import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { chartAxis, chartColors, chartTooltipStyle } from '../../lib/chartTheme'
import { formatPercent } from '../../lib/formatters'
import { useLanguage } from '../../i18n/LanguageContext'
import { Card } from '../ui/Card'

interface VolumeDistributionChartProps {
  data: { acquirerName: string; volume: number; percentage: number }[]
}

export function VolumeDistributionChart({ data }: VolumeDistributionChartProps) {
  const { t, formatMoney } = useLanguage()

  if (data.length === 0) return null

  return (
    <Card padding="lg">
      <h3 className="text-base font-semibold text-primary">{t.results.volumeDistributionTitle}</h3>
      <p className="mt-1 text-sm text-muted">
        {t.results.volumeDistributionSubtitle}
      </p>
      <div className="mt-8 h-64" aria-label={t.results.volumeDistributionTitle}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <CartesianGrid {...chartAxis.grid} horizontal={false} />
            <XAxis
              type="number"
              tick={chartAxis.tick}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${(v / 1_000_000).toFixed(1)}M`}
            />
            <YAxis
              type="category"
              dataKey="acquirerName"
              tick={chartAxis.tick}
              axisLine={false}
              tickLine={false}
              width={100}
            />
            <Tooltip
              formatter={(value, _name, props) => {
                const item = props.payload as { percentage: number }
                return [
                  `${formatMoney(Number(value))} (${formatPercent(item.percentage)})`,
                  t.results.volumeLabel,
                ]
              }}
              contentStyle={chartTooltipStyle}
            />
            <Bar dataKey="volume" radius={[0, 6, 6, 0]} maxBarSize={28}>
              {data.map((_, index) => (
                <Cell key={index} fill={chartColors.palette[index % chartColors.palette.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
