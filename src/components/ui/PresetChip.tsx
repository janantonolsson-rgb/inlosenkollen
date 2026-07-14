import { cn } from '../../lib/cn'

interface PresetChipProps {
  label: string
  selected?: boolean
  onClick: () => void
}

export function PresetChip({ label, selected, onClick }: PresetChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'min-h-[36px] rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        selected
          ? 'border-accent bg-accent-muted text-accent'
          : 'border-border bg-surface-elevated text-primary hover:border-accent/40',
      )}
    >
      {label}
    </button>
  )
}

interface PresetChipGroupProps {
  children: React.ReactNode
  label?: string
}

export function PresetChipGroup({ children, label }: PresetChipGroupProps) {
  return (
    <div>
      {label && <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted">{label}</p>}
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}
