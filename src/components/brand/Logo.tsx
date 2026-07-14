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
        viewBox="0 0 48 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(iconSize, 'shrink-0')}
        aria-hidden="true"
      >
        <path
          fill="#863bff"
          d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
        />
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
          Westpay
        </span>
      )}
    </span>
  )
}
