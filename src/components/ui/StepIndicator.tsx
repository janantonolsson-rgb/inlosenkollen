import clsx from 'clsx'

interface Step {
  number: number
  label: string
}

interface StepIndicatorProps {
  steps: Step[]
  currentStep: number
  onStepClick?: (stepNumber: number) => void
}

export function StepIndicator({ steps, currentStep, onStepClick }: StepIndicatorProps) {
  const maxReachableStep = currentStep === 4 ? steps.length : currentStep

  const handleStepClick = (stepNumber: number) => {
    if (stepNumber > maxReachableStep || !onStepClick) return
    onStepClick(stepNumber)
  }

  return (
    <nav aria-label="Kalkylatorsteg" className="mb-10">
      <ol className="flex items-center justify-center">
        {steps.map((step, index) => {
          const isComplete = currentStep > step.number || (currentStep === 4 && step.number <= steps.length)
          const isActive = currentStep === step.number
          const isReachable = step.number <= maxReachableStep
          const stepId = `wizard-step-${step.number}`

          return (
            <li key={step.number} className="flex items-center">
              <div className="flex flex-col items-center gap-2">
                {isReachable ? (
                  <button
                    type="button"
                    id={stepId}
                    onClick={() => handleStepClick(step.number)}
                    aria-current={isActive ? 'step' : undefined}
                    aria-label={`${step.label}${isComplete && !isActive ? ', klart' : isActive ? ', aktuellt steg' : ''}`}
                    className={clsx(
                      'flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-colors',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
                      isReachable && 'cursor-pointer hover:opacity-90',
                      isComplete && 'bg-accent text-white',
                      isActive && 'bg-accent text-white ring-4 ring-accent/15',
                      !isComplete && !isActive && 'border border-border bg-surface-elevated text-muted',
                    )}
                  >
                    {isComplete && !isActive ? (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </button>
                ) : (
                  <div
                    aria-disabled="true"
                    className={clsx(
                      'flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface-elevated text-xs font-semibold text-muted',
                    )}
                  >
                    {step.number}
                  </div>
                )}
                {isReachable ? (
                  <button
                    type="button"
                    onClick={() => handleStepClick(step.number)}
                    aria-labelledby={stepId}
                    className={clsx(
                      'hidden rounded-sm text-xs font-medium sm:block',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
                      isReachable && 'cursor-pointer hover:text-accent',
                      isActive || isComplete ? 'text-primary' : 'text-muted',
                    )}
                  >
                    {step.label}
                  </button>
                ) : (
                  <span
                    className={clsx(
                      'hidden text-xs font-medium sm:block',
                      'text-muted',
                    )}
                  >
                    {step.label}
                  </span>
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={clsx(
                    'mx-4 h-px w-10 sm:mx-6 sm:w-16',
                    currentStep > step.number || currentStep === 4 ? 'bg-accent' : 'bg-border',
                  )}
                  aria-hidden="true"
                />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
