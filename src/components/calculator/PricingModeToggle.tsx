import clsx from 'clsx'
import type { PricingMode } from '../../types/calculator'

interface PricingModeToggleProps {
  mode: PricingMode
  onChange: (mode: PricingMode) => void
}

const options: { value: PricingMode; label: string; description: string }[] = [
  {
    value: 'manual',
    label: 'Detaljerade priser',
    description: 'Ange priser per korttyp hos flera inlösare',
  },
  {
    value: 'simplified',
    label: 'Genomsnittspris',
    description: 'Jag känner bara till mitt genomsnittliga pris',
  },
  {
    value: 'catalog',
    label: 'Importera inlösare',
    description: 'Välj etablerade aktörer med publicerade avgifter',
  },
]

export function PricingModeToggle({ mode, onChange }: PricingModeToggleProps) {
  return (
    <div
      className="grid gap-2 sm:grid-cols-3"
      role="radiogroup"
      aria-label="Prisläge"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={mode === option.value}
          onClick={() => onChange(option.value)}
          className={clsx(
            'min-h-[44px] rounded-lg border px-4 py-3 text-left transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
            mode === option.value
              ? 'border-accent bg-accent-muted/50 text-primary shadow-subtle'
              : 'border-border bg-surface-elevated text-muted hover:border-accent/40 hover:text-primary',
          )}
        >
          <span className="block text-sm font-medium">{option.label}</span>
          <span className="mt-0.5 block text-xs leading-relaxed opacity-80">{option.description}</span>
        </button>
      ))}
    </div>
  )
}
