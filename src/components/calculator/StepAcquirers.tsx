import { useState } from 'react'
import { useCalculator } from '../../context/CalculatorContext'
import { useLanguage } from '../../i18n/LanguageContext'
import { Card } from '../ui/Card'
import { AcquirerCard } from './AcquirerCard'
import { AcquirerCatalogPicker } from './AcquirerCatalogPicker'
import { StepNavigation } from './shared/StepNavigation'

export function StepAcquirers() {
  const { state, dispatch } = useCalculator()
  const { t } = useLanguage()
  const hasAcquirers = state.acquirers.length > 0
  const [showDetailedPricing, setShowDetailedPricing] = useState(false)

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
        <AcquirerCatalogPicker
          acquirers={state.acquirers}
          onImport={(catalogId) =>
            dispatch({ type: 'IMPORT_CATALOG_ACQUIRER', payload: catalogId })
          }
        />
      </div>

      {hasAcquirers && (
        <div className="mt-8 space-y-6">
          <h3 className="text-sm font-semibold text-primary">
            {t.misc.importedAcquirersHeading}
          </h3>
          {state.acquirers.map((acquirer) => (
            <AcquirerCard
              key={acquirer.id}
              id={acquirer.id}
              name={acquirer.name}
              pricing={acquirer.pricing}
              showPricing={showDetailedPricing}
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

          <div className="flex flex-col items-start justify-between gap-3 rounded-lg border border-border-subtle bg-surface px-5 py-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium text-primary">{t.misc.gotOwnQuotesTitle}</p>
              <p className="mt-0.5 text-sm text-muted">{t.misc.gotOwnQuotesBody}</p>
            </div>
            <button
              type="button"
              onClick={() => setShowDetailedPricing((v) => !v)}
              className="shrink-0 rounded-lg border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {showDetailedPricing ? t.misc.hideDetailedPricesButton : t.misc.enterDetailedPricesButton}
            </button>
          </div>
        </div>
      )}

      {!hasAcquirers && (
        <p className="mt-6 rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-muted">
          {t.misc.noAcquirerNotice}
        </p>
      )}

      <StepNavigation
        onBack={() => dispatch({ type: 'SET_STEP', payload: 2 })}
        onNext={handleCalculate}
        nextLabel={t.calculator.ctaCalculate}
      />
    </Card>
  )
}
