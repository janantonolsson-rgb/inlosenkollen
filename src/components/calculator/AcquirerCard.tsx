import type { AcquirerPricing, PricingCategory } from '../../types/calculator'
import { PRICING_CATEGORY_LABELS } from '../../types/calculator'
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
  showFixedFee?: boolean
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
  showFixedFee = false,
  onNameChange,
  onRemove,
  onPricingChange,
}: AcquirerCardProps) {
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
            className="text-sm text-muted transition-colors hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Ta bort
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-muted">
              <th className="px-5 py-3 font-medium">Korttyp</th>
              <th className="px-5 py-3 font-medium">Procent</th>
              {showFixedFee && (
                <th className="px-5 py-3 font-medium text-muted-light">Fast avgift</th>
              )}
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
                {showFixedFee && (
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
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
