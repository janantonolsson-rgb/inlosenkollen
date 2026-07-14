import { cn } from '../../lib/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  variant?: 'default' | 'elevated'
}

export function Card({
  children,
  className,
  padding = 'md',
  variant = 'default',
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-card',
        variant === 'default' && 'shadow-subtle',
        variant === 'elevated' && 'shadow-card',
        padding === 'none' && 'p-0',
        padding === 'sm' && 'p-4',
        padding === 'md' && 'p-6',
        padding === 'lg' && 'p-8',
        className,
      )}
    >
      {children}
    </div>
  )
}
