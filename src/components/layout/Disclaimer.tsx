import { cn } from '../../lib/cn'

interface DisclaimerProps {
  compact?: boolean
  variant?: 'default' | 'inverse'
}

export function Disclaimer({ compact = false, variant = 'default' }: DisclaimerProps) {
  return (
    <p
      className={cn(
        'leading-relaxed',
        compact || variant === 'inverse' ? 'text-xs' : 'text-sm',
        variant === 'default' && 'text-muted',
        variant === 'inverse' && 'text-white/70',
      )}
    >
      Beräkningen är en uppskattning och baseras helt på den information som anges.
      Faktiska kostnader och besparingar påverkas bland annat av kortmix, interchange,
      scheme fees, inlösenavtal, valutaväxling, minimikostnader, teknisk uppsättning och
      övriga avtalsvillkor. Vi garanterar inte ett visst pris eller en viss besparing.
    </p>
  )
}
