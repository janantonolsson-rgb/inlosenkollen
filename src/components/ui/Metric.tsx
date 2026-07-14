import { cn } from '../../lib/cn'

interface MetricProps {
  label: string
  value: string
  hint?: string
  highlight?: boolean
  size?: 'default' | 'lg'
  className?: string
}

export function Metric({
  label,
  value,
  hint,
  highlight = false,
  size = 'default',
  className,
}: MetricProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <p className="text-sm text-muted">{label}</p>
      <p
        className={cn(
          'mt-1 font-semibold tracking-tight',
          highlight ? 'text-success' : 'text-primary',
          size === 'default' && 'text-2xl',
          size === 'lg' && 'text-3xl sm:text-4xl',
        )}
      >
        {value}
      </p>
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  )
}

interface MetricGridProps {
  children: React.ReactNode
  columns?: 2 | 3
}

export function MetricGrid({ children, columns = 3 }: MetricGridProps) {
  return (
    <div
      className={cn(
        'grid gap-6',
        columns === 2 && 'sm:grid-cols-2',
        columns === 3 && 'sm:grid-cols-2 lg:grid-cols-3',
      )}
    >
      {children}
    </div>
  )
}
