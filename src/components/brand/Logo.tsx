import { cn } from '../../lib/cn'

interface LogoProps {
  className?: string
  showWordmark?: boolean
  size?: 'sm' | 'md'
  variant?: 'default' | 'inverse'
}

export function Logo({ className, showWordmark = true, size = 'md', variant = 'default' }: LogoProps) {
  const iconSize = size === 'sm' ? 'h-7 w-7' : 'h-8 w-8'

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(iconSize, 'shrink-0')}
        aria-hidden="true"
      >
        {/* Neutral routing-ikon: noder som skickar till varandra */}
        <circle cx="5" cy="6" r="2.4" fill="#863bff" />
        <circle cx="5" cy="18" r="2.4" fill="#863bff" fillOpacity="0.55" />
        <circle cx="19" cy="12" r="2.6" fill="#863bff" />
        <path d="M7.2 7 16.8 11.2M7.2 17 16.8 12.8" stroke="#863bff" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      </svg>
      {showWordmark && (
        <span
          className={cn(
            'font-semibold tracking-tight',
            variant === 'default' && 'text-primary',
            variant === 'inverse' && 'text-white',
            size === 'sm' ? 'text-base' : 'text-lg',
          )}
        >
          Routingkalkylatorn
        </span>
      )}
    </span>
  )
}
