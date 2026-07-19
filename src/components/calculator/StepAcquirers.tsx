import { useState } from 'react'
import { useCalculator } from '../../context/CalculatorContext'
import { useLanguage } from '../../i18n/LanguageContext'
import { Card } from '../ui/Card'
import { AcquirerCard } from './AcquirerCard'
import { AcquirerCatalogPicker } from './AcquirerCatalogPicker'
import { PricingModeToggle } from './PricingModeToggle'
import { StepNavigation } from './shared/StepNavigation'

export function StepAcquirers() {
  const { state, dispatch } = useCalculator()
  const { t } = useLanguage()
  const isSimplified = state.pricingMode === 'simplified'
  const hasAcquirers = state.acquirers.length > 0
  const canCalculate = true
  const [showFixedFee, setShowFixedFee] = useState(false)
  const [openAcquirerId, setOpenAcquirerId] = useState<string | null>(null)

  const handleCalculate = () => {
    dispatch({ type: 'SHOW_RESULTS', payload: true })
    dispatch({ type: 'SET_STEP', payload: 4 })
    setTimeout(() => {
      document.getElementById('resultat')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <Card padding="lg">
      <h2 className="text-lg font-semibold text-primary">{t.calculator.step3Title}</h2>
      <p className="mt-2 text-sm text-muted">
        {t.calculator.step3Description}
      </p>

      <div className="mt-8">
        <PricingModeToggle
          mode={state.pricingMode}
          onChange={(mode) => dispatch({ type: 'SET_PRICING_MODE', payload: mode })}
        />
      </div>

      {isSimplified && (
        <p className="mt-6 rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-muted">
          {t.misc.simplifiedModeNotice}
        </p>
      )}

      {state.pricingMode === 'catalog' && (
        <div className="mt-8">
          <AcquirerCatalogPicker
            acquirers={state.acquirers}
            onImport={(catalogId) =>
              dispatch({ type: 'IMPORT_CATALOG_ACQUIRER', payload: catalogId })
            }
          />
        </div>
      )}

      {!isSimplified && hasAcquirers && (
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-sm font-semibold text-primary">
              {state.pricingMode === 'catalog'
                ? t.misc.importedAcquirersHeading
                : t.misc.yourAcquirersHeading}
            </h3>
            <button
              type="button"
              onClick={() => setShowFixedFee((v) => !v)}
              className="text-xs font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {showFixedFee ? t.calculator.hideFixedFees : t.calculator.showFixedFees}
            </button>
          </div>
          {state.acquirers.map((acquirer) => (
            <AcquirerCard
              key={acquirer.id}
              id={acquirer.id}
              name={acquirer.name}
              pricing={acquirer.pricing}
              showFixedFee={showFixedFee}
              isOpen={openAcquirerId === acquirer.id}
              onToggle={() =>
                setOpenAcquirerId((current) => (current === acquirer.id ? null : acquirer.id))
              }
              canRemove={state.acquirers.length > 1}
              onNameChange={(name) =>
                dispatch({
                  type: 'UPDATE_ACQUIRER_NAME',
                  payload: { id: acquirer.id, name },
                })
              }
              onRemove={() =>
                dispatch({ type: 'REMOVE_ACQUIRER', payload: acquirer.id })
              }
              onPricingChange={(category, field, value) =>
                dispatch({
                  type: 'UPDATE_ACQUIRER_PRICING',
                  payload: { id: acquirer.id, category, field, value },
                })
              }
            />
          ))}
        </div>
      )}

      {state.pricingMode === 'manual' && (
        <button
          type="button"
          onClick={() => dispatch({ type: 'ADD_ACQUIRER' })}
          className="mt-6 flex w-full items-center justify-center rounded-lg border border-dashed border-border px-4 py-3 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {t.misc.addAcquirerButton}
        </button>
      )}

      {!isSimplified && !hasAcquirers && (
        <p className="mt-6 rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-muted">
          {t.misc.noAcquirerNotice}
        </p>
      )}

      <StepNavigation
        onBack={() => dispatch({ type: 'SET_STEP', payload: 2 })}
        onNext={handleCalculate}
        nextLabel={t.calculator.ctaCalculate}
        nextDisabled={!canCalculate}
      />
    </Card>
  )
}
