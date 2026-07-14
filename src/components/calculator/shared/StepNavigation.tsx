import { Button } from '../../ui/Button'

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
  nextLabel = 'Nästa',
  nextDisabled = false,
  showBack = true,
}: StepNavigationProps) {
  return (
    <div className="mt-10 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
      {showBack && onBack ? (
        <Button variant="ghost" onClick={onBack} type="button">
          Tillbaka
        </Button>
      ) : (
        <div className="hidden sm:block" />
      )}
      {onNext && (
        <Button onClick={onNext} disabled={nextDisabled} type="button" className="sm:ml-auto">
          {nextLabel}
        </Button>
      )}
    </div>
  )
}
