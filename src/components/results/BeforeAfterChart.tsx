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
import { formatSEK } from '../../lib/formatters'
import { Card } from '../ui/Card'

interface BeforeAfterChartProps {
  currentMonthlyCost: number
  routedMonthlyCost: number
}

export function BeforeAfterChart({
  currentMonthlyCost,
  routedMonthlyCost,
}: BeforeAfterChartProps) {
  const data = [
    {
      name: 'Månadskostnad',
      nuvarande: currentMonthlyCost,
      medRouting: routedMonthlyCost,
    },
  ]

  return (
    <Card padding="lg">
      <h3 className="text-base font-semibold text-primary">Före och efter</h3>
      <p className="mt-1 text-sm text-muted">
        Jämförelse av nuvarande inlösenkostnad och kostnad efter intelligent routing
      </p>
      <div className="mt-8 h-64" aria-label="Stapeldiagram: före och efter routing">
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
              formatter={(value) => formatSEK(Number(value))}
              contentStyle={chartTooltipStyle}
            />
            <Legend wrapperStyle={{ fontSize: 13, paddingTop: 16 }} />
            <Bar
              dataKey="nuvarande"
              name="Nuvarande inlösenkostnad"
              fill={chartColors.current}
              radius={[6, 6, 0, 0]}
              maxBarSize={64}
            />
            <Bar
              dataKey="medRouting"
              name="Kostnad efter routing"
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
