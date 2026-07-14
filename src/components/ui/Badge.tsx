import { cn } from '../../lib/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'success' | 'muted'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium',
        variant === 'default' && 'bg-surface text-primary',
        variant === 'accent' && 'bg-accent-muted text-accent',
        variant === 'success' && 'bg-success-light text-success',
        variant === 'muted' && 'bg-border-subtle text-muted',
        className,
      )}
    >
      {children}
    </span>
  )
}
