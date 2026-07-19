import { useLanguage } from '../../i18n/LanguageContext'
import type { CategoryRoutingResult } from '../../types/calculator'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'

interface RoutingTableProps {
  categories: CategoryRoutingResult[]
  canRoute: boolean
}

function RoutingRow({ row }: { row: CategoryRoutingResult }) {
  const { t, formatMoney } = useLanguage()

  return (
    <div className="rounded-lg border border-border p-4 sm:hidden">
      <p className="font-medium text-primary">{row.label}</p>
      <dl className="mt-3 space-y-2 text-sm">
        <div className="flex justify-between">
          <dt className="text-muted">{t.results.annualVolumeColumn}</dt>
          <dd className="tabular-nums text-primary">{formatMoney(row.annualVolume)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted">{t.results.currentCostColumn}</dt>
          <dd className="tabular-nums text-primary">{formatMoney(row.currentCost)}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted">{t.results.acquirerColumn}</dt>
          <dd>
            <Badge variant="accent">
              {row.label} → {row.recommendedAcquirerName}
            </Badge>
          </dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted">{t.results.newCostColumn}</dt>
          <dd className="tabular-nums text-primary">{formatMoney(row.routedCost)}</dd>
        </div>
        <div className="flex justify-between border-t border-border-subtle pt-2">
          <dt className="font-medium text-primary">{t.results.annualSavingsColumn}</dt>
          <dd className="font-semibold tabular-nums text-success">{formatMoney(row.annualSavings)}</dd>
        </div>
      </dl>
    </div>
  )
}

export function RoutingTable({ categories, canRoute }: RoutingTableProps) {
  const { t, formatMoney } = useLanguage()

  if (!canRoute) return null

  return (
    <Card padding="none" variant="elevated" className="overflow-hidden">
      <div className="border-b border-border px-6 py-5">
        <h3 className="text-base font-semibold text-primary">{t.results.routingTableTitle}</h3>
        <p className="mt-1 text-sm text-muted">
          {t.results.routingTableSubtitle}
        </p>
      </div>

      <div className="space-y-3 p-4 sm:hidden">
        {categories.map((row) => (
          <RoutingRow key={row.mixCategory} row={row} />
        ))}
      </div>

      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full text-left text-sm">
          <thead className="sticky top-0 bg-surface-elevated">
            <tr className="border-b border-border text-xs text-muted">
              <th className="px-6 py-3 font-medium">{t.results.transactionTypeColumn}</th>
              <th className="px-6 py-3 font-medium">{t.results.annualVolumeColumn}</th>
              <th className="px-6 py-3 font-medium">{t.results.currentCostColumn}</th>
              <th className="px-6 py-3 font-medium">{t.results.acquirerColumn}</th>
              <th className="px-6 py-3 font-medium">{t.results.newCostColumn}</th>
              <th className="px-6 py-3 font-medium">{t.results.annualSavingsColumn}</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((row) => (
              <tr
                key={row.mixCategory}
                className="border-b border-border-subtle transition-colors last:border-0 hover:bg-surface"
              >
                <td className="px-6 py-4 font-medium text-primary">{row.label}</td>
                <td className="px-6 py-4 tabular-nums">{formatMoney(row.annualVolume)}</td>
                <td className="px-6 py-4 tabular-nums">{formatMoney(row.currentCost)}</td>
                <td className="px-6 py-4">
                  <Badge variant="accent">
                    {row.label} → {row.recommendedAcquirerName}
                  </Badge>
                </td>
                <td className="px-6 py-4 tabular-nums">{formatMoney(row.routedCost)}</td>
                <td className="px-6 py-4 font-semibold tabular-nums text-success">
                  {formatMoney(row.annualSavings)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
