import type { AcquirerPricing, PricingCategory } from '../../types/calculator'
import { PRICING_CATEGORY_LABELS } from '../../types/calculator'
import { useLanguage } from '../../i18n/LanguageContext'
import { cn } from '../../lib/cn'
import { CurrencyInput } from './shared/CurrencyInput'
import { PercentInput } from './shared/PercentInput'

const PRICING_CATEGORIES: PricingCategory[] = [
  'swedishDebit',
  'swedishCredit',
  'corporate',
  'euEes',
  'international',
  'amex',
]

interface AcquirerCardProps {
  id: string
  name: string
  pricing: AcquirerPricing
  canRemove: boolean
  showPricing: boolean
  onNameChange: (name: string) => void
  onRemove: () => void
  onPricingChange: (
    category: PricingCategory,
    field: 'percent' | 'fixed',
    value: number,
  ) => void
}

export function AcquirerCard({
  name,
  pricing,
  canRemove,
  showPricing,
  onNameChange,
  onRemove,
  onPricingChange,
}: AcquirerCardProps) {
  const { t } = useLanguage()
  const avgPercent =
    PRICING_CATEGORIES.reduce((sum, c) => sum + pricing[c].percent, 0) / PRICING_CATEGORIES.length

  return (
    <div className="rounded-xl border border-border bg-surface-elevated">
      <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className={cn(
            'flex-1 bg-transparent text-base font-semibold text-primary',
            'border-0 p-0 focus:outline-none focus:ring-0',
          )}
          aria-label="Inlösarens namn"
        />
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="shrink-0 text-sm font-medium text-muted transition-colors hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {t.catalog.removeButton}
          </button>
        )}
      </div>

      {!showPricing && (
        <p className="px-5 py-3 text-xs text-muted">
          {t.misc.avgFeePrefix} {avgPercent.toFixed(2).replace('.', ',')} %
        </p>
      )}

      {showPricing && (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs text-muted">
                <th className="px-5 py-3 font-medium">{t.misc.cardTypeColumn}</th>
                <th className="px-5 py-3 font-medium">{t.misc.percentColumn}</th>
                <th className="px-5 py-3 font-medium">{t.misc.fixedFeeColumn}</th>
              </tr>
            </thead>
            <tbody>
              {PRICING_CATEGORIES.map((category) => (
                <tr key={category} className="border-b border-border-subtle last:border-0">
                  <td className="px-5 py-3 font-medium text-primary">
                    {PRICING_CATEGORY_LABELS[category]}
                  </td>
                  <td className="px-5 py-2">
                    <PercentInput
                      id={`${name}-${category}-percent`}
                      label={PRICING_CATEGORY_LABELS[category]}
                      hideLabel
                      inputSize="sm"
                      value={pricing[category].percent}
                      onChange={(v) => onPricingChange(category, 'percent', v)}
                    />
                  </td>
                  <td className="px-5 py-2">
                    <CurrencyInput
                      id={`${name}-${category}-fixed`}
                      label={PRICING_CATEGORY_LABELS[category]}
                      hideLabel
                      inputSize="sm"
                      value={pricing[category].fixed}
                      onChange={(v) => onPricingChange(category, 'fixed', v)}
                      decimals
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
