import { useCalculator } from '../../context/CalculatorContext'
import { StepIndicator } from '../ui'
import { StepAcquirers } from './StepAcquirers'
import { StepMix } from './StepMix'
import { StepVolume } from './StepVolume'

const STEPS = [
  { number: 1, label: 'Volym' },
  { number: 2, label: 'Transaktionsmix' },
  { number: 3, label: 'Inlösare' },
]

export function CalculatorWizard() {
  const { state, dispatch } = useCalculator()

  const handleStepClick = (stepNumber: number) => {
    dispatch({ type: 'SET_STEP', payload: stepNumber })
  }

  return (
    <div>
      <StepIndicator
        steps={STEPS}
        currentStep={state.currentStep}
        onStepClick={handleStepClick}
      />

      {state.currentStep === 1 && <StepVolume />}
      {state.currentStep === 2 && <StepMix />}
      {state.currentStep === 3 && <StepAcquirers />}
      {state.currentStep === 4 && state.showResults && (
        <div className="rounded-xl border border-border bg-surface-elevated p-6 text-center">
          <p className="text-sm text-muted">Er beräkning är klar. Se resultatet nedan.</p>
          <button
            type="button"
            onClick={() => dispatch({ type: 'SET_STEP', payload: 3 })}
            className="mt-3 text-sm font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Redigera inlösare
          </button>
        </div>
      )}
    </div>
  )
}
