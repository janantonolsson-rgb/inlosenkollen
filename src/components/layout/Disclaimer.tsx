import { cn } from '../../lib/cn'
import { useLanguage } from '../../i18n/LanguageContext'

interface DisclaimerProps {
  compact?: boolean
  variant?: 'default' | 'inverse'
}

export function Disclaimer({ compact = false, variant = 'default' }: DisclaimerProps) {
  const { t } = useLanguage()

  return (
    <p
      className={cn(
        'leading-relaxed',
        compact || variant === 'inverse' ? 'text-xs' : 'text-sm',
        variant === 'default' && 'text-muted',
        variant === 'inverse' && 'text-white/70',
      )}
    >
      {t.disclaimer}
    </p>
  )
}
