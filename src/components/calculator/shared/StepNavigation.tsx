import { Button } from '../../ui/Button'
import { useLanguage } from '../../../i18n/LanguageContext'

interface StepNavigationProps {
  onBack?: () => void
  onNext?: () => void
  nextLabel?: string
  nextDisabled?: boolean
  showBack?: boolean
}

export function StepNavigation({
  onBack,
  onNext,
  nextLabel,
  nextDisabled = false,
  showBack = true,
}: StepNavigationProps) {
  const { t } = useLanguage()

  return (
    <div className="sticky bottom-0 z-10 -mx-8 -mb-8 mt-10 rounded-b-xl border-t border-border bg-surface-elevated/95 px-8 py-4 backdrop-blur-sm">
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        {showBack && onBack ? (
          <Button variant="ghost" onClick={onBack} type="button">
            {t.misc.backButton}
          </Button>
        ) : (
          <div className="hidden sm:block" />
        )}
        {onNext && (
          <Button onClick={onNext} disabled={nextDisabled} type="button" className="sm:ml-auto">
            {nextLabel ?? t.misc.nextButton}
          </Button>
        )}
      </div>
    </div>
  )
}
